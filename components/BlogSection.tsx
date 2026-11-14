"use client";

import React, { useState } from "react";
import { BLOG_POSTS, BlogPost, FIRM_INFO } from "@/data/content";

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-widest uppercase">
            <span className="h-px w-8 bg-amber-400"></span>
            LEGAL INSIGHTS & ARTICLES
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            LAWYER&apos;S <span className="text-amber-400">BLOG</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Expert analysis, legal precedents, and judicial guidance authored by {FIRM_INFO.advocateName}.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-amber-500/5"
            >
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-slate-700">
                  {post.date}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>By {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full pt-3 border-t border-slate-800 text-amber-400 hover:text-amber-300 font-semibold text-xs flex items-center justify-between transition-colors"
                >
                  <span>Read Full Article</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="relative h-48 bg-slate-950 overflow-hidden">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-800 text-slate-300 p-2 rounded-full border border-slate-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                  {selectedPost.date} • {selectedPost.readTime}
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-1 leading-snug">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-slate-300 text-sm leading-relaxed">
              {selectedPost.content.map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mt-4">
                <p className="text-xs font-semibold text-amber-400">Legal Consultation Note:</p>
                <p className="text-xs text-slate-400 mt-1">
                  Articles are provided for general educational purposes. For specific case evaluation before Punjab &amp; Haryana High Court or District Courts, contact Adv. Harmanjeet Singh Saini at {FIRM_INFO.phoneDisplay}.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-400">Authored by {selectedPost.author}</span>
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition-colors"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
