#!/usr/bin/env node

/**
 * Autonomous Security & Safety Check Script
 * -------------------------------------------------------------
 * Performs automated security checks on the codebase:
 * 1. Checks .gitignore rules for sensitive environment files
 * 2. Scans source code for dangerous patterns & potential backdoors (eval, exec, etc.)
 * 3. Scans source code for potential hardcoded secrets/credentials
 * 4. Runs npm security audit for dependency vulnerabilities
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT_DIR = path.resolve(__dirname, "..");
const DIRS_TO_SCAN = ["app", "components", "data", "public"];
const IGNORED_EXTENSIONS = [".ico", ".png", ".jpg", ".jpeg", ".woff", ".woff2", ".svg"];

let errorCount = 0;
let warnCount = 0;

console.log("\n=======================================================");
console.log(" 🛡️  PROJECT SECURITY & SAFETY VERIFICATION");
console.log("=======================================================\n");

// 1. Check Gitignore for sensitive secrets
console.log("[1/4] Checking .gitignore and environment safety...");
const gitignorePath = path.join(ROOT_DIR, ".gitignore");
if (fs.existsSync(gitignorePath)) {
  const gitignoreContent = fs.readFileSync(gitignorePath, "utf8");
  const envPatterns = [".env*", ".env"];
  const coversEnv = envPatterns.some((pat) => gitignoreContent.includes(pat));
  if (!coversEnv) {
    console.warn("  ⚠️  Warning: Missing .gitignore patterns for environment secrets (.env*)");
    warnCount++;
  } else {
    console.log("  ✅ .gitignore properly configured for .env files.");
  }
} else {
  console.error("  ❌ Missing .gitignore file!");
  errorCount++;
}

// 2. Scan source code recursively for dangerous functions / malware signatures
console.log("\n[2/4] Scanning codebase for dangerous functions and backdoors...");

const DANGEROUS_PATTERNS = [
  { name: "Arbitrary code execution (eval)", regex: /\beval\s*\(/ },
  { name: "Dynamic Function constructor", regex: /\bFunction\s*\([^)]*\)\s*\(/ },
  { name: "Child process execution", regex: /\b(child_process|execSync|spawnSync)\b/ },
  { name: "Dangerous HTML injection", regex: /dangerouslySetInnerHTML/ },
];

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dirPath, file.name);
    if (file.isDirectory()) {
      if (file.name !== "node_modules" && file.name !== ".next" && file.name !== ".git") {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      const ext = path.extname(file.name).toLowerCase();
      if (!IGNORED_EXTENSIONS.includes(ext)) {
        arrayOfFiles.push(fullPath);
      }
    }
  }
  return arrayOfFiles;
}

let sourceFiles = [];
for (const dir of DIRS_TO_SCAN) {
  sourceFiles = sourceFiles.concat(getAllFiles(path.join(ROOT_DIR, dir)));
}

let patternIssues = 0;
for (const filePath of sourceFiles) {
  const content = fs.readFileSync(filePath, "utf8");
  const relPath = path.relative(ROOT_DIR, filePath);

  for (const item of DANGEROUS_PATTERNS) {
    if (item.regex.test(content)) {
      console.warn(`  ⚠️  [${item.name}] found in ${relPath}`);
      warnCount++;
      patternIssues++;
    }
  }
}

if (patternIssues === 0) {
  console.log(`  ✅ Clean! No dangerous execution patterns found across ${sourceFiles.length} source files.`);
}

// 3. Scan for leaked credentials / private keys
console.log("\n[3/4] Scanning for potential leaked credentials and private keys...");

const SECRET_PATTERNS = [
  { name: "Private Key Header", regex: /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { name: "Hardcoded AWS Access Key", regex: /AKIA[0-9A-Z]{16}/ },
  { name: "Hardcoded Database URI with credentials", regex: /mongodb(\+srv)?:\/\/[^:]+:[^@]+@/i },
  { name: "GitHub Personal Access Token", regex: /ghp_[0-9a-zA-Z]{36}/ },
];

let secretIssues = 0;
for (const filePath of sourceFiles) {
  const content = fs.readFileSync(filePath, "utf8");
  const relPath = path.relative(ROOT_DIR, filePath);

  for (const item of SECRET_PATTERNS) {
    if (item.regex.test(content)) {
      console.error(`  ❌ [${item.name}] detected in ${relPath}!`);
      errorCount++;
      secretIssues++;
    }
  }
}

if (secretIssues === 0) {
  console.log("  ✅ Clean! No hardcoded keys, tokens, or private secrets detected.");
}

// 4. Dependency Vulnerability Audit
console.log("\n[4/4] Auditing npm dependencies for known CVEs...");
try {
  const auditOutput = execSync("npm audit --json", { cwd: ROOT_DIR, encoding: "utf8" });
  const auditJson = JSON.parse(auditOutput);
  const vulns = auditJson.metadata ? auditJson.metadata.vulnerabilities : {};
  const total = (vulns.critical || 0) + (vulns.high || 0) + (vulns.moderate || 0) + (vulns.low || 0);

  if (total === 0) {
    console.log("  ✅ Clean! 0 npm vulnerabilities found.");
  } else {
    console.warn(`  ⚠️  Found ${total} vulnerability/vulnerabilities:`);
    console.warn(`     Critical: ${vulns.critical || 0}, High: ${vulns.high || 0}, Moderate: ${vulns.moderate || 0}, Low: ${vulns.low || 0}`);
    if ((vulns.critical || 0) > 0 || (vulns.high || 0) > 0) {
      errorCount += (vulns.critical || 0) + (vulns.high || 0);
    } else {
      warnCount += total;
    }
  }
} catch (err) {
  // If npm audit returns non-zero exit code, stdout still contains the json
  if (err.stdout) {
    try {
      const auditJson = JSON.parse(err.stdout);
      const vulns = auditJson.metadata ? auditJson.metadata.vulnerabilities : {};
      const total = (vulns.critical || 0) + (vulns.high || 0) + (vulns.moderate || 0) + (vulns.low || 0);
      console.warn(`  ⚠️  Found ${total} vulnerabilities: Critical: ${vulns.critical || 0}, High: ${vulns.high || 0}`);
      if ((vulns.critical || 0) > 0 || (vulns.high || 0) > 0) {
        errorCount += (vulns.critical || 0) + (vulns.high || 0);
      }
    } catch (e) {
      console.error("  ❌ Failed to parse npm audit output.");
      errorCount++;
    }
  } else {
    console.error("  ❌ Error executing npm audit:", err.message);
    errorCount++;
  }
}

// Summary
console.log("\n=======================================================");
if (errorCount === 0) {
  console.log(` ✅ SECURITY CHECK PASSED (${warnCount} warnings, 0 critical errors)`);
  console.log("=======================================================\n");
  process.exit(0);
} else {
  console.error(` ❌ SECURITY CHECK FAILED (${errorCount} errors, ${warnCount} warnings)`);
  console.log("=======================================================\n");
  process.exit(1);
}
