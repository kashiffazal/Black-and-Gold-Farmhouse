"use client";

import React, { useState } from "react";
import { Check, X, Sparkles } from "lucide-react";
import { GoldButton } from "../../../components/gold-button";

/**
 * PackagesFilterClient — Client component for filtering packages & viewing feature comparison matrix.
 */
export function PackagesFilterClient({ overnightPackages, dayPackages, comparisonFeatures }) {
  const [tab, setTab] = useState("overnight"); // 'overnight' | 'day'

  const activePackages = tab === "overnight" ? overnightPackages : dayPackages;

  return (
    <div>
      {/* ── Tab Selector Buttons ─────────────────────────────────── */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex p-1.5 rounded-lg bg-card border border-border/80 shadow-md">
          <button
            onClick={() => setTab("overnight")}
            className={`px-6 py-3 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              tab === "overnight"
                ? "bg-gold text-[#0a0704] shadow-[0_4px_20px_-4px_rgba(200,160,80,0.5)]"
                : "text-foreground/60 hover:text-gold"
            }`}
          >
            Overnight Stays 🌙
          </button>
          <button
            onClick={() => setTab("day")}
            className={`px-6 py-3 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              tab === "day"
                ? "bg-gold text-[#0a0704] shadow-[0_4px_20px_-4px_rgba(200,160,80,0.5)]"
                : "text-foreground/60 hover:text-gold"
            }`}
          >
            Day Events & Parties ☀️
          </button>
        </div>
      </div>

      {/* ── Package Cards Grid ───────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
        {activePackages.map((pkg, idx) => {
          const isFeatured = pkg.featured;

          return (
            <div
              key={idx}
              className={`flex flex-col relative rounded-md transition-all duration-500 ${
                isFeatured
                  ? "beam-border p-8 md:p-10 shadow-[0_40px_100px_-40px_rgba(200,160,80,0.3)] transform lg:-translate-y-4"
                  : "bg-card border border-border p-8 md:p-10 aura-box hover:border-gold/40 shadow-sm hover:shadow-xl"
              }`}
            >
              {/* Featured Badge */}
              {isFeatured && (
                <div className="absolute top-0 right-0 bg-gold text-[#0a0704] text-[11px] font-bold px-3 py-1 tracking-wider uppercase z-20 rounded-bl-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              {/* Title & Capacity */}
              <h3 className="font-display text-3xl text-foreground dark:text-white mb-2">
                {pkg.title}
              </h3>
              <p className="text-foreground/60 dark:text-white/60 text-sm mb-6">
                {pkg.capacity}
              </p>

              {/* Price */}
              <div className="mb-8 pb-6 border-b border-border/60">
                <span className="text-4xl font-display text-gold">
                  {pkg.price}
                </span>
                <span className="text-foreground/50 dark:text-white/50 text-sm">
                  {" "}
                  / {pkg.unit}
                </span>
              </div>

              {/* Description */}
              <p className="text-foreground/70 dark:text-white/70 text-sm mb-8 leading-relaxed">
                {pkg.desc}
              </p>

              {/* Feature List */}
              <ul className="space-y-4 mb-10 text-sm text-foreground/80 dark:text-white/80 flex-grow">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="w-4 h-4 text-gold mr-3 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-auto">
                <GoldButton
                  href={`/book-now?package=${encodeURIComponent(pkg.title)}`}
                  variant={isFeatured ? "fill" : "outline"}
                  beam={isFeatured}
                  size="full"
                >
                  Reserve Package
                </GoldButton>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Feature Comparison Matrix Table ─────────────────────── */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
            Side-by-Side
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Package Comparison Matrix
          </h2>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-lg">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-5 text-sm font-semibold text-foreground uppercase tracking-wider">
                  Features & Amenities
                </th>
                <th className="p-5 text-sm font-semibold text-foreground uppercase tracking-wider text-center">
                  Intimate Escape
                </th>
                <th className="p-5 text-sm font-semibold text-gold uppercase tracking-wider text-center bg-gold/10">
                  Signature Farmhouse ⭐
                </th>
                <th className="p-5 text-sm font-semibold text-foreground uppercase tracking-wider text-center">
                  Celebration Suite
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-sm">
              {comparisonFeatures.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="p-4 font-medium text-foreground/80">
                    {item.name}
                  </td>
                  <td className="p-4 text-center">
                    {renderCell(item.intimate)}
                  </td>
                  <td className="p-4 text-center bg-gold/5 font-semibold text-gold">
                    {renderCell(item.signature)}
                  </td>
                  <td className="p-4 text-center">
                    {renderCell(item.celebration)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function renderCell(val) {
  if (val === true)
    return <Check className="w-5 h-5 text-gold mx-auto" />;
  if (val === false)
    return <X className="w-5 h-5 text-foreground/20 mx-auto" />;
  return <span className="text-xs text-foreground/70">{val}</span>;
}
