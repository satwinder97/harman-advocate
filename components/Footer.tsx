"use client";

import React from "react";
import { FIRM_INFO } from "@/data/content";

interface FooterProps {
  onOpenDisclaimer: () => void;
  onOpenAppointment: () => void;
}

export default function Footer({ onOpenDisclaimer, onOpenAppointment }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 text-xs">
      {/* Upper Footer Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center border border-amber-500/30">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-8 4v2a4 4 0 004 4h0a4 4 0 004-4V7m0-4l8 4v2a4 4 0 01-4 4h0a4 4 0 01-4-4V7M4 21h16" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold tracking-tight text-white">
                  ADV. HARMANJEET SINGH <span className="text-amber-400">SAINI</span>
                </h3>
                <p className="text-[10px] text-amber-300 uppercase tracking-widest font-semibold">
                  Member of Punjab and Haryana Bar
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Advocate & Legal Consultant practicing before Punjab & Haryana High Court, District & Sessions Court, Mohali & Chandigarh. Specializing in Corporate & Civil litigation, Criminal defense, Arbitration, and Contract Drafting.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenAppointment}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs transition-colors"
              >
                Book Appointment
              </button>
              <button
                onClick={onOpenDisclaimer}
                className="text-slate-400 hover:text-white underline underline-offset-4 text-xs"
              >
                BCI Disclaimer
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">QUICK LINKS</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#practice-areas" className="hover:text-amber-400 transition-colors">
                  Practice Areas (14 Specializations)
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-amber-400 transition-colors">
                  Lawyer&apos;s Blog & Precedents
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Office Locations & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Chamber Address */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">OFFICE ADDRESSES</h4>
            <div className="text-slate-300 space-y-2 text-xs">
              <div className="border-b border-slate-900 pb-2">
                <p className="font-semibold text-white">1. Chamber Office (Wave Estate):</p>
                <p>{FIRM_INFO.office1.line1}, {FIRM_INFO.office1.line2}, {FIRM_INFO.office1.city} ({FIRM_INFO.office1.pin})</p>
              </div>

              <div>
                <p className="font-semibold text-white">2. Office-cum-Residence (Kharar):</p>
                <p>{FIRM_INFO.office2.line1}, {FIRM_INFO.office2.line2}, {FIRM_INFO.office2.city} ({FIRM_INFO.office2.pin})</p>
              </div>

              <div className="pt-1 text-slate-400 space-y-0.5">
                <p>Contact: <span className="text-white font-medium">{FIRM_INFO.phoneDisplay}</span></p>
                <p>Email: <span className="text-white font-medium">{FIRM_INFO.email}</span></p>
              </div>
            </div>
          </div>

        </div>

        {/* Bar Council Compliance Box */}
        <div className="mt-10 pt-6 border-t border-slate-900 text-[11px] text-slate-400 leading-relaxed text-justify">
          <p>{FIRM_INFO.disclaimer}</p>
        </div>

        {/* Bottom Copyright & Back To Top Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 tracking-wider">
            {FIRM_INFO.copyright}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-xs font-medium"
          >
            <span>Back to Top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
