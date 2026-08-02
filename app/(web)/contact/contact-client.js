"use client";

import React, { useState } from "react";
import { GoldButton } from "../../../components/gold-button";
import { CheckCircle2, Send, Calendar, Users, Sparkles, Clock, ShieldCheck } from "lucide-react";

/**
 * ContactFormClient — High-End Luxury Concierge Inquiry Console.
 */
export function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="bg-card/90 border border-gold/40 rounded-xl p-10 md:p-14 text-center shadow-2xl backdrop-blur-md flex flex-col items-center justify-center min-h-[460px] aura-box">
        <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(200,160,80,0.3)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2">
          Request Confirmed
        </span>
        <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
          Concierge Inquiry Received
        </h3>
        <p className="text-foreground/75 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed font-light">
          Thank you for choosing Black Gold Farmhouse. Our head concierge has received your request and will contact you via WhatsApp or call within <span className="text-gold font-semibold">15 to 30 minutes</span>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-gold px-8 py-3 text-xs uppercase tracking-[0.25em] font-semibold cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card/85 backdrop-blur-md border border-border/80 rounded-xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden aura-box">
      {/* Decorative Top Accent Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

      <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/60">
        <div>
          <span className="text-gold uppercase tracking-[0.35em] text-xs font-semibold block mb-1">
            Bespoke Inquiry
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-foreground">
            Send a Concierge Request
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" /> Instant Callback
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/80 font-semibold mb-2">
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              name="Name"
              placeholder="e.g. Mr. Tariq Mahmood"
              required
              className="w-full bg-background/80 border border-border rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-foreground"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/80 font-semibold mb-2">
              Phone / WhatsApp <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              name="Phone"
              placeholder="e.g. +92 333 1234567"
              required
              className="w-full bg-background/80 border border-border rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-foreground"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/80 font-semibold mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              name="Date"
              className="w-full bg-background/80 border border-border rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-foreground min-w-0"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/80 font-semibold mb-2">
              Package Type
            </label>
            <select
              name="Package"
              className="w-full bg-background/80 border border-border rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-foreground appearance-none min-w-0"
            >
              <option value="22H Overnight Weekend">22H Overnight Weekend (Rs 110k)</option>
              <option value="22H Overnight Weekday">22H Overnight Weekday (Rs 85k)</option>
              <option value="10H Day Picnic">10H Day Picnic (Rs 35k-50k)</option>
              <option value="10H Night Party">10H Night Party (Rs 45k-65k)</option>
              <option value="Grand Event">Grand Event / Wedding (50-100+ Pax)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/80 font-semibold mb-2">
              Estimated Guests
            </label>
            <select
              name="Guests"
              className="w-full bg-background/80 border border-border rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-foreground appearance-none min-w-0"
            >
              <option value="1-15 Pax">1-15 Pax (Intimate)</option>
              <option value="16-35 Pax">16-35 Pax (Standard Family)</option>
              <option value="36-45 Pax">36-45 Pax (+Rs 1,000/pax)</option>
              <option value="50-100+ Pax">50-100+ Pax (Event)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-foreground/80 font-semibold mb-2">
            Special Requests / Occasion Details
          </label>
          <textarea
            name="Message"
            rows="4"
            placeholder="Tell us about your event — family reunion, birthday surprise, corporate retreat, or specific setup requirements..."
            className="w-full bg-background/80 border border-border rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-foreground"
          ></textarea>
        </div>

        <div className="pt-2">
          <GoldButton
            type="submit"
            variant="fill"
            beam
            size="full"
            className="py-4 text-xs uppercase tracking-[0.3em]"
            disabled={loading}
          >
            {loading ? "Processing Concierge Request..." : "Submit Reservation Request"}
          </GoldButton>
        </div>

        <div className="flex items-center justify-center gap-6 text-[11px] text-foreground/50 pt-3">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" /> No Advance Deposit Required for Inquiry
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold" /> 24/7 Fast WhatsApp Callback
          </span>
        </div>
      </form>
    </div>
  );
}
