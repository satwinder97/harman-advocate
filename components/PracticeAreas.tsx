"use client";

import React, { useState } from "react";
import { PRACTICE_AREAS, PracticeArea } from "@/data/content";

interface PracticeAreasProps {
  onSelectArea: (area: PracticeArea) => void;
}

export default function PracticeAreas({ onSelectArea }: PracticeAreasProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    const matchesSearch = area.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          area.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeCategory === "all") return matchesSearch;
    if (activeCategory === "civil") return matchesSearch && (area.id.includes("stay") || area.id.includes("corporate") || area.id.includes("arbitration") || area.id.includes("contract"));
    if (activeCategory === "bails") return matchesSearch && (area.id.includes("bail") || area.id.includes("suspension"));
    if (activeCategory === "criminal") return matchesSearch && (area.id.includes("trial") || area.id.includes("fir") || area.id.includes("direction") || area.id.includes("revision") || area.id.includes("cheque"));
    if (activeCategory === "matrimonial") return matchesSearch && (area.id.includes("divorce") || area.id.includes("maintenance") || area.id.includes("dowry"));
    return matchesSearch;
  });

  return (
    <section id="practice-areas" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-widest uppercase">
            <span className="h-px w-8 bg-amber-400"></span>
            LEGAL SPECIALIZATIONS & SERVICES
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            PRACTICE <span className="text-amber-400">AREAS</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify sm:text-center">
            Comprehensive legal counsel and courtroom defense across Civil, Corporate, Criminal, Matrimonial, and Arbitration law. <strong>Adv. Harmanjeet Singh Saini</strong> brings extensive experience before the Punjab &amp; Haryana High Court, District &amp; Sessions Courts in Mohali &amp; Chandigarh, delivering assertive and result-oriented legal representation.
          </p>
        </div>

        {/* Search & Category Filter Tabs */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors ${activeCategory === "all" ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-300 hover:text-white"}`}
            >
              All 14 Specializations
            </button>
            <button
              onClick={() => setActiveCategory("civil")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors ${activeCategory === "civil" ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-300 hover:text-white"}`}
            >
              Civil, Stay &amp; Corporate
            </button>
            <button
              onClick={() => setActiveCategory("bails")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors ${activeCategory === "bails" ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-300 hover:text-white"}`}
            >
              Bails &amp; Sentences
            </button>
            <button
              onClick={() => setActiveCategory("criminal")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors ${activeCategory === "criminal" ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-300 hover:text-white"}`}
            >
              Criminal, Cheque &amp; Writs
            </button>
            <button
              onClick={() => setActiveCategory("matrimonial")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors ${activeCategory === "matrimonial" ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-300 hover:text-white"}`}
            >
              Divorce &amp; Matrimonial
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search legal practice..."
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-amber-400 transition-colors"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              id={area.id}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* Card Image Header */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-amber-500/90 text-slate-950 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  High Court &amp; District
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mt-2 line-clamp-3">
                    {area.shortDesc}
                  </p>
                </div>

                {/* Key Legal Provisions Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {area.keyProvisions.slice(0, 2).map((prov, i) => (
                    <span key={i} className="text-[10px] bg-slate-900 text-amber-300/80 px-2 py-0.5 rounded border border-slate-800">
                      {prov}
                    </span>
                  ))}
                </div>

                {/* Read More Trigger Button */}
                <button
                  onClick={() => onSelectArea(area)}
                  className="w-full mt-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 font-semibold text-xs py-2.5 px-4 rounded-xl border border-slate-800 hover:border-amber-500 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Legal Insights &amp; Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
