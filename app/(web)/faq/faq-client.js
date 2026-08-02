"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, Search, HelpCircle, MessageSquare, Sparkles } from "lucide-react";

/**
 * FAQClientView — Interactive Luxury FAQ component with real-time search & category tabs.
 */
export function FAQClientView({ faqCategories }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItemKey, setOpenItemKey] = useState(null);

  // Flatten all questions for global search & filtering
  const allQuestions = useMemo(() => {
    const list = [];
    faqCategories.forEach((cat) => {
      cat.questions.forEach((qItem, idx) => {
        list.push({
          ...qItem,
          categoryId: cat.id,
          categoryTitle: cat.title,
          key: `${cat.id}-${idx}`,
        });
      });
    });
    return list;
  }, [faqCategories]);

  // Filtered items based on active category & search query
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.categoryTitle === activeCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [allQuestions, activeCategory, searchQuery]);

  function toggleItem(key) {
    setOpenItemKey((prev) => (prev === key ? null : key));
  }

  const categoryNames = ["All", ...faqCategories.map((c) => c.title)];

  return (
    <div>
      {/* ── Search Bar & Category Filter Pills ─────────────────────── */}
      <div className="max-w-4xl mx-auto mb-12 space-y-6">
        {/* Real-Time Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any question (e.g. pool, rates, generator, timing)..."
            className="w-full bg-card border border-border/80 rounded-xl py-4 pl-12 pr-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 shadow-lg transition-all"
          />
          <Search className="w-5 h-5 text-gold absolute left-4 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider text-foreground/50 hover:text-gold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills (Wrapping without scrollbar) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold rounded-md whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gold text-[#0a0704] shadow-[0_4px_20px_-6px_rgba(200,160,80,0.5)]"
                  : "bg-card border border-border text-foreground/60 hover:text-gold hover:border-gold/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results Count ────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto text-xs uppercase tracking-widest text-foreground/60 pb-3 border-b border-border/50">
        <span>
          Showing <strong className="text-gold font-bold text-sm">{filteredQuestions.length}</strong> Answers
        </span>
        <span>
          Category: <strong className="text-gold font-semibold">{activeCategory}</strong>
        </span>
      </div>

      {/* ── Questions Accordion Grid ─────────────────────────────────── */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="bg-card border border-border rounded-xl p-12 text-center aura-box">
            <HelpCircle className="w-12 h-12 text-gold/50 mx-auto mb-4" />
            <h3 className="font-display text-2xl text-foreground mb-2">No Matching Answers Found</h3>
            <p className="text-foreground/60 text-sm max-w-md mx-auto mb-6">
              We couldn&apos;t find an exact match for &quot;{searchQuery}&quot;. Connect with our 24/7 concierge for instant help.
            </p>
            <a
              href="https://wa.me/923332973045"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold"
            >
              <MessageSquare className="w-4 h-4" /> Ask Concierge on WhatsApp
            </a>
          </div>
        ) : (
          filteredQuestions.map((item) => {
            const isOpen = openItemKey === item.key;
            return (
              <div
                key={item.key}
                className={`rounded-xl border transition-all duration-300 overflow-hidden aura-box ${
                  isOpen
                    ? "border-gold/60 bg-card shadow-xl shadow-gold/5"
                    : "border-border/80 bg-card/60 hover:border-gold/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.key)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer group select-none"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <span className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span
                      className={`text-base md:text-lg font-display transition-colors duration-300 ${
                        isOpen ? "text-gold" : "text-foreground group-hover:text-gold"
                      }`}
                    >
                      {item.q}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-gold" : "text-foreground/40 group-hover:text-gold"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 pl-17">
                      <div className="w-12 h-[1px] bg-gold/40 mb-4" />
                      <p className="text-foreground/75 text-sm md:text-base leading-relaxed font-light">
                        {item.a}
                      </p>
                      <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-foreground/50">
                        <span className="uppercase tracking-wider text-gold/70 font-semibold">
                          {item.categoryTitle}
                        </span>
                        <a
                          href="https://wa.me/923332973045"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gold transition-colors flex items-center gap-1"
                        >
                          Need more details? Chat →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
