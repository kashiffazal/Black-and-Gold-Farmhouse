"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQAccordion — Animated accordion component for FAQ questions.
 *
 * Features:
 *  - Smooth height animation on expand/collapse
 *  - Gold accent on active item
 *  - Rotating chevron indicator
 *  - Only one item open at a time per category
 *  - Accessible: uses button with aria-expanded
 *
 * Props:
 *  questions  — Array of { q: string, a: string }
 *  categoryId — Unique ID prefix for accessibility
 */
export function FAQAccordion({ questions, categoryId }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(idx) {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }

  return (
    <div className="space-y-3">
      {questions.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `${categoryId}-panel-${idx}`;
        const triggerId = `${categoryId}-trigger-${idx}`;

        return (
          <div
            key={idx}
            className={`rounded-md border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-gold/50 bg-card shadow-lg shadow-gold/5"
                : "border-border bg-card/50 hover:border-border/80"
            }`}
          >
            {/* ── Question trigger ─────────────────────────────── */}
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer group select-none"
            >
              <span
                className={`text-sm md:text-base font-medium pr-4 transition-colors duration-300 ${
                  isOpen ? "text-gold" : "text-foreground group-hover:text-gold/80"
                }`}
              >
                {item.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 text-gold"
                    : "text-foreground/40 group-hover:text-gold/60"
                }`}
              />
            </button>

            {/* ── Answer panel (animated height via CSS grid) ──── */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                  {/* Gold top accent line */}
                  <div className="w-8 h-[1px] bg-gold/40 mb-4" />
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
