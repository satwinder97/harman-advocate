"use client";

import React, { useState } from "react";
import { FIRM_INFO } from "@/data/content";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [payModalOpen, setPayModalOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState<"office1" | "office2">("office1");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "Stay Matters & Injunctions",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-widest uppercase">
            <span className="h-px w-8 bg-amber-400"></span>
            CONNECT WITH ADV. HARMANJEET SINGH SAINI
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            GET IN <span className="text-amber-400">TOUCH</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Visit our Chamber Office at Wave Estate Mohali or Office-cum-Residence at Kharar, or schedule a consultation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">Send A Direct Inquiry</span>
            </h3>

            {formSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white">Thanks for submitting!</h4>
                <p className="text-xs text-slate-300">
                  Your inquiry has been received by Adv. Harmanjeet Singh Saini&apos;s chamber. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-amber-400 underline hover:text-amber-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 95929 21930"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Matter / Legal Case Type *</label>
                  <select
                    value={formData.option}
                    onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Stay Matters & Injunctions">Stay Matters & Injunctions</option>
                    <option value="Cheque Bounce (138 NI Act)">Cheque Bounce (138 NI Act)</option>
                    <option value="Regular & Anticipatory Bails">Regular & Anticipatory Bails</option>
                    <option value="Criminal Trial Defense">Criminal Trial Defense</option>
                    <option value="Revision & Appeals">Revision & Appeals</option>
                    <option value="Divorce Cases & Matrimonial Law">Divorce Cases & Matrimonial Law</option>
                    <option value="Maintenance & Domestic Violence Cases">Maintenance & Domestic Violence Cases</option>
                    <option value="Dowry Matters (498-A IPC)">Dowry Matters (498-A IPC)</option>
                    <option value="FIR Quashing">FIR Quashing</option>
                    <option value="Suspension & Remission of Sentences">Suspension & Remission of Sentences</option>
                    <option value="Direction Petitions">Direction Petitions</option>
                    <option value="Contract Drafting & Corporate Meetings">Contract Drafting & Corporate Meetings</option>
                    <option value="Arbitration & Dispute Resolution">Arbitration & Dispute Resolution</option>
                    <option value="Corporate & Civil Litigation">Corporate & Civil Litigation</option>
                    <option value="General Legal Consultation">General Legal Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Case Facts / Inquiries</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly state your case facts, court location, or legal dispute..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.01]"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Address, Map & Payment */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  OFFICE LOCATIONS & <span className="text-amber-400">ADDRESSES</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Practicing at Punjab & Haryana High Court, District & Sessions Court, Mohali & Chandigarh
                </p>
              </div>

              {/* Both Addresses Displayed */}
              <div className="space-y-4 text-xs text-slate-300">
                {/* Office 1 */}
                <div className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${activeLocation === "office1" ? "bg-slate-950 border-amber-500/50 shadow-lg" : "bg-slate-950/50 border-slate-800 hover:border-slate-700"}`} onClick={() => setActiveLocation("office1")}>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-white text-sm">Chamber Office (Wave Estate)</p>
                        <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 font-semibold">Office 1</span>
                      </div>
                      <p className="mt-1">{FIRM_INFO.office1.line1}</p>
                      <p>{FIRM_INFO.office1.line2}</p>
                      <p>{FIRM_INFO.office1.city} ({FIRM_INFO.office1.pin})</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[11px] text-amber-400 font-semibold">Click to view on Map below ↓</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office 2 */}
                <div className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${activeLocation === "office2" ? "bg-slate-950 border-amber-500/50 shadow-lg" : "bg-slate-950/50 border-slate-800 hover:border-slate-700"}`} onClick={() => setActiveLocation("office2")}>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-white text-sm">Office-cum-Residence (Kharar)</p>
                        <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 font-semibold">Office 2</span>
                      </div>
                      <p className="mt-1">{FIRM_INFO.office2.line1}</p>
                      <p>{FIRM_INFO.office2.line2}</p>
                      <p>{FIRM_INFO.office2.city} ({FIRM_INFO.office2.pin})</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[11px] text-amber-400 font-semibold">Click to view on Map below ↓</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={`tel:${FIRM_INFO.phone}`}
                    className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-3 hover:border-amber-500/40 transition-colors"
                  >
                    <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-semibold">Direct Call</p>
                      <p className="font-bold text-white text-xs">{FIRM_INFO.phoneDisplay}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${FIRM_INFO.email}`}
                    className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-3 hover:border-amber-500/40 transition-colors"
                  >
                    <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-semibold">Email Advocate</p>
                      <p className="font-bold text-white text-xs truncate max-w-[140px]">{FIRM_INFO.email}</p>
                    </div>
                  </a>
                </div>

                {/* Pay Now Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setPayModalOpen(true)}
                    className="w-full bg-slate-950 hover:bg-slate-800 text-amber-400 font-bold py-3 rounded-xl border border-amber-500/40 hover:border-amber-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Pay Online (Consultation / Retainer Fee)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Google Map Embed Frame for Both Locations */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl space-y-0">
              {/* Map Location Switcher Bar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">Active Location Map:</span>
                <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveLocation("office1")}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-colors ${activeLocation === "office1" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"}`}
                  >
                    1. Wave Estate (Mohali)
                  </button>
                  <button
                    onClick={() => setActiveLocation("office2")}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-colors ${activeLocation === "office2" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"}`}
                  >
                    2. Silver Enclave (Kharar)
                  </button>
                </div>
              </div>

              {/* Google Map iframe */}
              <div className="h-64 relative">
                <iframe
                  title={activeLocation === "office1" ? "Office 1 Wave Estate Mohali" : "Office 2 Silver Enclave Kharar"}
                  src={activeLocation === "office1" ? FIRM_INFO.office1.mapEmbed : FIRM_INFO.office2.mapEmbed}
                  className="w-full h-full border-0 filter grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>

                <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-700 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-amber-400 shadow">
                  {activeLocation === "office1" ? "KLC, SCO 14, 2nd Floor, Wave Estate Mohali (140308)" : "#529, Silver Enclave, Sector 125 Kharar (140301)"}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Pay Now Modal */}
      {payModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 space-y-4 text-center">
            <button
              onClick={() => setPayModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-12 h-12 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h3 className="text-lg font-serif font-bold text-white">Chamber Fee Payment Portal</h3>
            <p className="text-xs text-slate-400">
              For retainers, case filings, and legal consultation fees, payments can be made via UPI / Bank Transfer to Adv. Harmanjeet Singh Saini official account.
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2 text-left">
              <p className="font-semibold text-white">UPI / Mobile: <span className="text-amber-400">{FIRM_INFO.phoneDisplay}</span></p>
              <p className="font-semibold text-white">Beneficiary: <span className="text-slate-300">Adv. Harmanjeet Singh Saini</span></p>
              <p className="text-[11px] text-slate-400">For instant receipt confirmation, please share screenshot to WhatsApp: {FIRM_INFO.phoneDisplay}</p>
            </div>

            <button
              onClick={() => setPayModalOpen(false)}
              className="w-full bg-amber-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs"
            >
              Done / Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
