import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL, ADVOCATE_NAME, ADVOCATE_IMAGE } from "@/lib/site";
import { jsonLd } from "@/lib/jsonld";

const TITLE = "Adv. Harmanjeet Singh Saini | High Court & District Courts Advocate | Mohali & Chandigarh";
const DESCRIPTION =
  "Adv. Harmanjeet Singh Saini - Advocate | Corporate & Civil | Criminal & Divorce Lawyer | Member of Punjab and Haryana Bar. Offices: SCO 14-D, Sector 85, Wave Estate, Mohali & Silver Enclave, Sector 125, Kharar. Practicing at Punjab & Haryana High Court, District & Sessions Court, Mohali & Chandigarh.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Adv. Harmanjeet Singh Saini" },
  description: DESCRIPTION,
  applicationName: ADVOCATE_NAME,
  alternates: { canonical: "/" },
  keywords: [
    "Adv. Harmanjeet Singh Saini",
    "Advocate Harmanjeet Singh Saini",
    "Harmanjeet Singh Saini advocate Mohali",
    "Harmanjeet Singh Saini lawyer",
    "HS Saini advocate",
    "High Court Advocate Chandigarh",
    "Lawyer in Mohali",
    "Advocate in Mohali",
    "Lawyer in Kharar",
    "Advocate in Wave Estate Mohali",
    "Lawyer SCO 14-D Sector 85 Mohali",
    "Advocate office Sector 85 Mohali",
    "Advocate Silver Enclave Kharar",
    "Stay Matters Advocate",
    "Cheque Bounce Lawyer Mohali",
    "Anticipatory Bail Advocate High Court",
    "Divorce Lawyer Chandigarh",
    "Divorce Lawyer Mohali",
    "Criminal Lawyer Mohali",
    "Corporate & Civil Lawyer Mohali",
    "Contract Drafting Advocate",
    "Arbitration Lawyer Chandigarh",
    "Punjab and Haryana High Court Lawyer",
  ],
  authors: [{ name: ADVOCATE_NAME, url: SITE_URL }],
  creator: ADVOCATE_NAME,
  publisher: ADVOCATE_NAME,
  category: "Legal Services",
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: ADVOCATE_NAME,
    locale: "en_IN",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: ADVOCATE_IMAGE, alt: `${ADVOCATE_NAME} - Advocate, Mohali & Chandigarh` }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [ADVOCATE_IMAGE] },
  icons: { icon: "/favicon.ico" },
  // Google Search Console verification: paste the token here if using the HTML-tag method
  // verification: { google: "YOUR_TOKEN" },
  other: {
    "geo.region": "IN-PB",
    "geo.placename": "Mohali",
    "geo.position": "30.6672;76.7273",
    ICBM: "30.6672, 76.7273",
  },
};

export const viewport: Viewport = { themeColor: "#020617", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
