"use client";

import React, { useState } from "react";
import { FIRM_INFO } from "@/data/content";
import { OFFICES, ADVOCATE_IMAGE, ADVOCATE_NAME, WHATSAPP_MESSAGE } from "@/lib/site";

interface HeroSectionProps {
  onOpenAppointment: () => void;
  onOpenECard: () => void;
}

export default function HeroSection({ onOpenAppointment, onOpenECard }: HeroSectionProps) {
  const [photoFailed, setPhotoFailed] = useState(false);
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b border-amber-600/20">
      {/* Subtle Background Pattern & Light Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-95"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Member of Punjab and Haryana Bar
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
                ADV. HARMANJEET SINGH <span className="text-amber-400">SAINI</span>
              </h1>
              <p className="mt-2 text-base sm:text-lg font-medium text-amber-200/90 font-serif">
                Advocate | Corporate & Civil | Criminal & Divorce Lawyer
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
                Practicing at Punjab & Haryana High Court, District & Sessions Court, MOHALI & CHANDIGARH
              </p>
            </div>

            {/* Main Descriptive Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light text-justify">
              <strong className="text-amber-300 font-semibold">Adv. Harmanjeet Singh Saini</strong> brings extensive legal experience across Punjab & Haryana High Court and the District & Sessions Courts in Mohali and Chandigarh. Specializing in high-stakes civil and criminal litigation, the chamber provides strategic representation in <span className="text-white font-normal">stay matters, cheque bounce (138 NI Act), regular & anticipatory bails, criminal trials, revision & appeals, divorce cases, maintenance & domestic violence, dowry matters, FIR quashing, suspension and remission of sentences, and direction petitions</span>. In addition, the practice provides specialized counsel for <span className="text-amber-300 font-medium">Contract Drafting & Corporate Meetings as well as Arbitration</span>, dedicated to protecting clients&apos; rights with utmost integrity and legal acumen.
            </p>

            {/* Key Highlights Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-lg flex items-center gap-2.5">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Experience of Years</p>
                  <p className="text-[11px] text-slate-400">Proven Legal Practice</p>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-lg flex items-center gap-2.5">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Arbitration & Corporate</p>
                  <p className="text-[11px] text-slate-400">Contract & Meetings</p>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-lg flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">High Court & Sessions</p>
                  <p className="text-[11px] text-slate-400">Mohali & Chandigarh</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenAppointment}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-amber-500/20 transition-all hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book An Appointment</span>
              </button>

              <button
                onClick={onOpenECard}
                className="bg-slate-900 hover:bg-slate-800 text-amber-400 font-semibold px-6 py-3.5 rounded-xl border border-amber-500/40 hover:border-amber-400 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Click here for e-card</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Chamber Emblem Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-amber-500/30 shadow-2xl space-y-6 text-center">
              {/* Advocate photo (public/images/advocate.jpg); falls back to the emblem if the file is missing */}
              {photoFailed ? (
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/10 rounded-full flex items-center justify-center border-2 border-amber-500/50 shadow-inner">
                  <svg className="w-12 h-12 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18m0-18l-8 4v2a4 4 0 004 4h0a4 4 0 004-4V7m0-4l8 4v2a4 4 0 01-4 4h0a4 4 0 01-4-4V7M4 21h16" />
                  </svg>
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={ADVOCATE_IMAGE}
                  alt={`${ADVOCATE_NAME} - Advocate, Punjab & Haryana High Court, Mohali & Chandigarh`}
                  width={320}
                  height={320}
                  fetchPriority="high"
                  onError={() => setPhotoFailed(true)}
                  className="mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover object-top border-4 border-amber-500/60 shadow-xl shadow-amber-500/10"
                />
              )}

              <div>
                <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                  {FIRM_INFO.advocateName}
                </h3>
                <p className="text-sm text-amber-400 font-medium mt-1">
                  Advocate | Corporate, Civil, Criminal & Divorce
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Member of Punjab and Haryana Bar
                </p>
              </div>

              <div className="border-t border-slate-800 pt-5 space-y-3 text-left">
                {/* Office 1 */}
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white block">Office 1:</span>
                    <span>{OFFICES.office1.line1}, {OFFICES.office1.line2}, {OFFICES.office1.city} ({OFFICES.office1.pin})</span>
                  </div>
                </div>

                {/* Office 2 */}
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white block">Office-cum-Residence:</span>
                    <span>{OFFICES.office2.line1}, {OFFICES.office2.line2}, {OFFICES.office2.city} ({OFFICES.office2.pin})</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300 pt-1">
                  <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${FIRM_INFO.phone}`} className="hover:text-amber-400 transition-colors font-medium">
                    {FIRM_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-amber-400 transition-colors truncate">
                    {FIRM_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${FIRM_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
