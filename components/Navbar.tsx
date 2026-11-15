"use client";

import React, { useState, useEffect } from "react";
import { FIRM_INFO, PRACTICE_AREAS } from "@/data/content";

interface NavbarProps {
  onOpenAppointment: () => void;
  onOpenECard: () => void;
  onOpenDisclaimer: () => void;
}

export default function Navbar({ onOpenAppointment, onOpenECard, onOpenDisclaimer }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-50 sticky top-0 bg-slate-900 text-white shadow-xl transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-slate-950 border-b border-amber-600/30 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 text-slate-300 font-medium">
            <span className="flex items-center gap-1.5 text-amber-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${FIRM_INFO.phone}`} className="hover:underline tracking-wide">
                {FIRM_INFO.phoneDisplay}
              </a>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">Call Today For Free Legal Consultation</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenECard}
              className="text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Click for e-Card
            </button>

            <button
              onClick={onOpenAppointment}
              className="text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-slate-950 px-3 py-1 rounded shadow transition-all duration-200 uppercase tracking-wider"
            >
              Book An Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-2.5" : "py-4"}`}>
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[7px] flex items-center justify-center border border-amber-500/30">
              {/* Scales of Justice Icon */}
              <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-8 4v2a4 4 0 004 4h0a4 4 0 004-4V7m0-4l8 4v2a4 4 0 01-4 4h0a4 4 0 01-4-4V7M4 21h16" />
              </svg>
            </div>
          </div>

          <div>
            <div className="text-lg sm:text-xl font-serif font-bold tracking-tight text-white flex flex-wrap items-baseline gap-x-1.5 leading-tight">
              <span className="whitespace-nowrap">ADV. HARMANJEET</span>
              <span className="whitespace-nowrap">SINGH <span className="text-amber-400 font-sans font-semibold">SAINI</span></span>
            </div>
            <p className="text-[10px] sm:text-xs text-amber-300/80 tracking-widest uppercase font-medium">
              Advocate | Corporate, Civil, Criminal & Divorce Lawyer
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-sm text-slate-200">
          <a href="#" className="hover:text-amber-400 transition-colors py-2">
            Home
          </a>

          {/* Practice Areas Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setPracticeDropdownOpen(true)}
            onMouseLeave={() => setPracticeDropdownOpen(false)}
          >
            <a href="#practice-areas" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              Practice Areas
              <svg className={`w-4 h-4 transition-transform ${practiceDropdownOpen ? "rotate-180 text-amber-400" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {practiceDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl p-2.5 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {PRACTICE_AREAS.slice(0, 10).map((area) => (
                  <a
                    key={area.id}
                    href={`#${area.id}`}
                    className="px-3 py-2 text-xs text-slate-300 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{area.title}</span>
                    <span className="text-[10px] text-slate-500">Legal</span>
                  </a>
                ))}
                <a
                  href="#practice-areas"
                  className="px-3 py-2 text-xs text-amber-400 font-semibold hover:bg-amber-500/10 rounded-lg text-center mt-1 border-t border-slate-800"
                >
                  View All 14 Specializations →
                </a>
              </div>
            )}
          </div>

          <a href="#blog" className="hover:text-amber-400 transition-colors py-2">
            Lawyer&apos;s Blog
          </a>

          <a href="#contact" className="hover:text-amber-400 transition-colors py-2">
            Contact Us
          </a>

          <button
            onClick={onOpenDisclaimer}
            className="text-xs text-slate-400 hover:text-slate-200 underline decoration-slate-600 underline-offset-4"
          >
            BCI Disclaimer
          </button>
        </nav>

        {/* CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAppointment}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Consult Advocates</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-slate-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Home
          </a>
          <a
            href="#practice-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Practice Areas
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Lawyer&apos;s Blog
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Contact Us
          </a>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full text-center bg-amber-500 font-bold text-slate-950 py-2.5 rounded-lg text-sm"
            >
              Book An Appointment
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenECard();
              }}
              className="w-full text-center bg-slate-800 text-amber-400 border border-amber-500/30 py-2 rounded-lg text-sm"
            >
              View Digital e-Card
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
