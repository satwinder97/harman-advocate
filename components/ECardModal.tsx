"use client";

import React, { useState } from "react";
import { FIRM_INFO } from "@/data/content";

interface ECardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ECardModal({ isOpen, onClose }: ECardModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const downloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Adv. Harmanjeet Singh Saini
ORG:Adv. Harmanjeet Singh Saini Law Chamber
TITLE:Advocate | Member of Punjab & Haryana Bar
TEL;TYPE=CELL:${FIRM_INFO.phone}
EMAIL:${FIRM_INFO.email}
ADR;TYPE=WORK:;;KLC, SCO 14, 2nd Floor, Sector - 85, Wave Estate;Mohali;Punjab;140308;India
ADR;TYPE=HOME:;;#529, Silver Enclave, Sector 125;Kharar;Punjab;140301;India
NOTE:Corporate & Civil | Criminal & Divorce Lawyer | Punjab & Haryana High Court
END:VCARD`;

    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Adv_Harmanjeet_Singh_Saini.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 space-y-6 text-center text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Digital Card Emblem */}
        <div className="pt-2">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-0.5 shadow-xl flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex flex-col items-center justify-center p-2">
              <svg className="w-10 h-10 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-8 4v2a4 4 0 004 4h0a4 4 0 004-4V7m0-4l8 4v2a4 4 0 01-4 4h0a4 4 0 01-4-4V7M4 21h16" />
              </svg>
            </div>
          </div>

          <div className="mt-3">
            <h3 className="text-xl font-serif font-bold tracking-tight text-white">
              ADV. HARMANJEET SINGH <span className="text-amber-400">SAINI</span>
            </h3>
            <p className="text-[11px] text-amber-300 uppercase tracking-widest font-medium mt-0.5">
              Member of Punjab & Haryana Bar
            </p>
          </div>
        </div>

        {/* Legal Practitioner Details */}
        <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2 text-left text-xs">
          <div className="border-b border-slate-800 pb-2">
            <p className="font-bold text-sm text-white font-serif">Adv. Harmanjeet Singh Saini</p>
            <p className="text-slate-400 text-[11px]">Advocate | Corporate & Civil | Criminal & Divorce Lawyer</p>
            <p className="text-amber-400 text-[10px] mt-0.5 font-medium">
              Punjab & Haryana High Court, District & Sessions Court, Mohali & Chandigarh
            </p>
          </div>

          <div className="space-y-2 pt-1 text-slate-300 text-[11px]">
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{FIRM_INFO.phoneDisplay}</span>
            </p>

            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate">{FIRM_INFO.email}</span>
            </p>

            <div className="space-y-1 pt-1">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span><strong>Office 1:</strong> {FIRM_INFO.office1.line1}, {FIRM_INFO.office1.line2}, {FIRM_INFO.office1.city} ({FIRM_INFO.office1.pin})</span>
              </p>

              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span><strong>Office 2:</strong> {FIRM_INFO.office2.line1}, {FIRM_INFO.office2.line2}, {FIRM_INFO.office2.city} ({FIRM_INFO.office2.pin})</span>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Action Grid */}
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${FIRM_INFO.phone}`}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>

          <button
            onClick={downloadVCard}
            className="bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold py-2.5 rounded-xl text-xs border border-amber-500/30 flex items-center justify-center gap-1.5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Save Contact
          </button>
        </div>

        <button
          onClick={handleShare}
          className="w-full bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white py-2 rounded-xl text-xs border border-slate-800 transition-colors flex items-center justify-center gap-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span>{copied ? "Link Copied!" : "Share Digital e-Card"}</span>
        </button>

      </div>
    </div>
  );
}
