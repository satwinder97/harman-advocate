"use client";

import React from "react";
import { PracticeArea } from "@/data/content";

interface PracticeDetailModalProps {
  area: PracticeArea | null;
  onClose: () => void;
  onBookAppointment: () => void;
}

export default function PracticeDetailModal({ area, onClose, onBookAppointment }: PracticeDetailModalProps) {
  if (!area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="relative h-44 bg-slate-950 overflow-hidden">
          <img src={area.image} alt={area.title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-800 text-slate-300 p-2 rounded-full border border-slate-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
              Specialized Legal Representation
            </span>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              {area.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Overview & Procedure</h4>
            <p className="leading-relaxed text-slate-200">{area.fullDesc}</p>
          </div>

          {/* Applicable Statutory Sections */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Governing Legal Framework</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {area.sections.map((sec, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{sec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Legal Provisions & Case Strategies */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Defense Strategy & Key Reliefs</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {area.keyProvisions.map((prov, idx) => (
                <div key={idx} className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50 flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs text-slate-200">{prov}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs text-slate-400 hover:text-white font-medium transition-colors"
          >
            Close
          </button>
          
          <button
            onClick={() => {
              onClose();
              onBookAppointment();
            }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-transform hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Consult Advocates for {area.title}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
