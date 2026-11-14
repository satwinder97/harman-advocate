import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adv. Harmanjeet Singh Saini | High Court & District Courts Advocate | Mohali & Chandigarh",
  description: "Adv. Harmanjeet Singh Saini - Advocate | Corporate & Civil | Criminal & Divorce Lawyer | Member of Punjab and Haryana Bar. Practicing at Punjab & Haryana High Court, District & Sessions Court, Mohali & Chandigarh.",
  keywords: [
    "Adv. Harmanjeet Singh Saini",
    "Advocate Harmanjeet Singh Saini",
    "High Court Advocate Chandigarh",
    "Lawyer Mohali",
    "Stay Matters Advocate",
    "Cheque Bounce Lawyer Mohali",
    "Anticipatory Bail Advocate High Court",
    "Divorce Lawyer Chandigarh",
    "Corporate & Civil Lawyer Mohali",
    "Contract Drafting Advocate",
    "Arbitration Lawyer Chandigarh"
  ],
  authors: [{ name: "Adv. Harmanjeet Singh Saini" }],
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
