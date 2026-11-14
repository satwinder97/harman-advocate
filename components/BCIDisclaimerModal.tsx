"use client";

import React from "react";
import { FIRM_INFO } from "@/data/content";

interface BCIDisclaimerModalProps {
  isOpen: boolean;
  onAccept: () => void;
}

export default function BCIDisclaimerModal({ isOpen, onAccept }: BCIDisclaimerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-5 text-slate-300">
        
        {/* Emblem Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-0.5 shadow-lg mx-auto flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <svg className="w-7 h-7 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-8 4v2a4 4 0 004 4h0a4 4 0 004-4V7m0-4l8 4v2a4 4 0 01-4 4h0a4 4 0 01-4-4V7M4 21h16" />
              </svg>
            </div>
          </div>

          <h3 className="text-xl font-serif font-bold text-white tracking-tight">
            BAR COUNCIL OF INDIA <span className="text-amber-400">DISCLAIMER</span>
          </h3>
          <p className="text-[11px] text-amber-300 uppercase tracking-widest font-semibold">
            Adv. Harmanjeet Singh Saini | Member of Punjab &amp; Haryana Bar
          </p>
        </div>

        {/* BCI Disclaimer Text */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 leading-relaxed text-justify max-h-56 overflow-y-auto">
          {FIRM_INFO.disclaimer}
        </div>

        {/* Acceptance Action */}
        <div className="pt-2">
          <button
            onClick={onAccept}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.01]"
          >
            I Agree & Acknowledge
          </button>
        </div>

      </div>
    </div>
  );
}
