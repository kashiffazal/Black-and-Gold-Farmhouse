"use client";

import React, { useState } from "react";
import { GoldButton } from "../../../components/gold-button";
import { CheckCircle2, Send } from "lucide-react";

/**
 * ContactFormClient — Interactive contact form with client-side state & confirmation feedback.
 */
export function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulate swift form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="bg-card border border-gold/40 rounded-lg p-10 text-center shadow-xl flex flex-col items-center justify-center min-h-[420px]">
        <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display text-3xl text-foreground mb-3">
          Message Received!
        </h3>
        <p className="text-foreground/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Thank you for reaching out to Black Gold Farmhouse. Our concierge team has received your message and will call or email you within 2 to 4 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs uppercase tracking-widest text-gold hover:text-gold-soft font-semibold transition-colors cursor-pointer"
        >
          ← Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-xl relative overflow-hidden">
      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
        Send Us a Message
      </h3>
      <p className="text-foreground/60 text-sm mb-8">
        Fill out your details and special requests below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-foreground/70 font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="Name"
              placeholder="e.g. Tariq Mahmood"
              required
              className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-foreground/70 font-semibold mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="Phone"
              placeholder="e.g. +92 300 1234567"
              required
              className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-foreground/70 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="Email"
              placeholder="e.g. tariq@example.com"
              className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-foreground/70 font-semibold mb-2">
              Subject / Interest
            </label>
            <select
              name="Subject"
              className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground appearance-none"
            >
              <option value="Booking Inquiry">General Booking Inquiry</option>
              <option value="Wedding / Event">Wedding or Large Event</option>
              <option value="Corporate Retreat">Corporate Retreat</option>
              <option value="Custom Request">Custom Request</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-foreground/70 font-semibold mb-2">
            Your Message *
          </label>
          <textarea
            name="Message"
            required
            rows="5"
            placeholder="Please let us know your preferred dates, guest count, or any special requirements..."
            className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
          ></textarea>
        </div>

        <GoldButton
          type="submit"
          variant="fill"
          beam
          size="full"
          className="mt-2"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit Message"}
        </GoldButton>
      </form>
    </div>
  );
}
