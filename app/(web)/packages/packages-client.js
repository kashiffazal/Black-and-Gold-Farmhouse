"use client";

import React, { useState } from "react";
import { Check, X, Sparkles, Clock, Users, Zap, ShieldCheck } from "lucide-react";
import { GoldButton } from "../../../components/gold-button";

/**
 * PackagesFilterClient — Client component for filtering Black Gold Farmhouse packages & viewing the comparison matrix.
 */
export function PackagesFilterClient({ tenHourPackages, twentyTwoHourPackages, eventPackages, comparisonFeatures }) {
  const [activeTab, setActiveTab] = useState("22h"); // '22h' | '10h' | 'events'

  return (
    <div>
      {/* ── Tab Selector Buttons ─────────────────────────────────── */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-lg bg-card border border-border/80 shadow-md max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveTab("22h")}
            className={`px-5 py-3 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeTab === "22h"
                ? "bg-gold text-[#0a0704] shadow-[0_4px_20px_-4px_rgba(200,160,80,0.5)]"
                : "text-foreground/60 hover:text-gold"
            }`}
          >
            22 Hours Slot 🌙
          </button>
          <button
            onClick={() => setActiveTab("10h")}
            className={`px-5 py-3 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeTab === "10h"
                ? "bg-gold text-[#0a0704] shadow-[0_4px_20px_-4px_rgba(200,160,80,0.5)]"
                : "text-foreground/60 hover:text-gold"
            }`}
          >
            10 Hours Slot ☀️
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-5 py-3 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeTab === "events"
                ? "bg-gold text-[#0a0704] shadow-[0_4px_20px_-4px_rgba(200,160,80,0.5)]"
                : "text-foreground/60 hover:text-gold"
            }`}
          >
            Event Charges 🎉
          </button>
        </div>
      </div>

      {/* ── Package Cards Grid ───────────────────────────────────── */}
      {activeTab === "22h" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-24 max-w-5xl mx-auto">
          {twentyTwoHourPackages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>
      )}

      {activeTab === "10h" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-24">
          {tenHourPackages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>
      )}

      {activeTab === "events" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-24 max-w-5xl mx-auto">
          {eventPackages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>
      )}

      {/* ── Key Policies Bar ────────────────────────────────────── */}
      <div className="bg-card border border-gold/30 rounded-lg p-6 md:p-8 mb-20 shadow-lg">
        <h4 className="font-display text-xl text-gold mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5" /> Important Booking Policies & Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-foreground/80">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Capacity Allowance</p>
              <p className="text-xs text-foreground/60 mt-1">
                Maximum 35 persons allowed including kids. Guests above 40 will be charged <span className="text-gold font-semibold">Rs. 1,000/- per person</span>.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Pool Timings</p>
              <p className="text-xs text-foreground/60 mt-1">
                Pool operations close <span className="text-gold font-semibold">1 Hour before Check Out time</span> for maintenance & filtration.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Generator & AC</p>
              <p className="text-xs text-foreground/60 mt-1">
                Heavy duty generator & fuel included for seamless power backup during your slot.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Feature Comparison Matrix Table ─────────────────────── */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
            Facilities Overview
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Complete Estate Facilities
          </h2>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-lg">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-4 text-xs font-semibold text-foreground uppercase tracking-wider">
                  Facility / Amenity
                </th>
                <th className="p-4 text-xs font-semibold text-gold uppercase tracking-wider text-center bg-gold/10">
                  Included in All Packages
                </th>
                <th className="p-4 text-xs font-semibold text-foreground uppercase tracking-wider text-center">
                  Details & Specifications
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-sm">
              {comparisonFeatures.map((item, idx) => (
                <tr key={idx} className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium text-foreground/90">
                    {item.name}
                  </td>
                  <td className="p-4 text-center bg-gold/5">
                    <Check className="w-5 h-5 text-gold mx-auto" />
                  </td>
                  <td className="p-4 text-center text-xs text-foreground/70">
                    {item.detail}
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

function PackageCard({ pkg }) {
  const isFeatured = pkg.featured;

  return (
    <div
      className={`flex flex-col relative rounded-md transition-all duration-500 ${
        isFeatured
          ? "beam-border p-8 md:p-10 shadow-[0_40px_100px_-40px_rgba(200,160,80,0.3)]"
          : "bg-card border border-border p-8 md:p-10 aura-box hover:border-gold/40 shadow-sm hover:shadow-xl"
      }`}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-gold text-[#0a0704] text-[11px] font-bold px-3 py-1 tracking-wider uppercase z-20 rounded-bl-md flex items-center gap-1">
          <Sparkles className="w-3 h-3 fill-current" /> {pkg.badge || "Popular Choice"}
        </div>
      )}

      <h3 className="font-display text-2xl md:text-3xl text-foreground dark:text-white mb-1">
        {pkg.title}
      </h3>
      <p className="text-gold/80 text-xs font-semibold uppercase tracking-wider mb-6">
        {pkg.timing}
      </p>

      <div className="mb-6 pb-6 border-b border-border/60">
        <span className="text-3xl sm:text-4xl font-display text-gold">
          {pkg.price}
        </span>
        <span className="text-foreground/50 dark:text-white/50 text-xs block mt-1">
          {pkg.acInfo}
        </span>
      </div>

      <p className="text-foreground/70 dark:text-white/70 text-sm mb-6 leading-relaxed">
        {pkg.desc}
      </p>

      <ul className="space-y-3 mb-8 text-xs sm:text-sm text-foreground/80 dark:text-white/80 flex-grow">
        {pkg.features.map((feat, fIdx) => (
          <li key={fIdx} className="flex items-start">
            <Check className="w-4 h-4 text-gold mr-2.5 shrink-0 mt-0.5" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4">
        <GoldButton
          href={`/book-now?package=${encodeURIComponent(pkg.title)}`}
          variant={isFeatured ? "fill" : "outline"}
          beam={isFeatured}
          size="full"
        >
          Book {pkg.title}
        </GoldButton>
      </div>
    </div>
  );
}
