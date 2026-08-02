"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Check, CheckCircle2, Phone, MessageSquare, ShieldCheck, Sparkles, Clock, Calendar, Users, Calculator, ArrowRight } from "lucide-react";
import { GoldButton } from "../../../components/gold-button";

/* ── Packages Data with exact April - July 2026 rates ──────────────────── */
const PACKAGES = [
  {
    id: "22h-weekend",
    name: "22 Hours Weekend Overnight",
    timing: "Fri - Sun & Holidays (2 PM to 12 PM)",
    price: 110000,
    priceText: "Rs. 110,000/-",
    popular: true,
    tag: "Overnight Stay",
    features: [
      "Full 22 Hours weekend exclusive estate access",
      "2 AC Bedrooms & Royal Sitting Lounge",
      "Big Adult Pool (3.5-5.75ft) & Kids Splash Pool",
      "Indoor AC Snooker, Carrom & Foosball",
      "Heavy Generator & Fuel Included",
    ],
  },
  {
    id: "22h-weekday",
    name: "22 Hours Weekday Overnight",
    timing: "Mon - Thu (2 PM to 12 PM)",
    price: 85000,
    priceText: "Rs. 85,000/-",
    popular: false,
    tag: "Overnight Stay",
    features: [
      "Full 22 Hours weekday exclusive estate access",
      "2 AC Bedrooms (Max 10H AC timing)",
      "Big Adult Pool & Kids Splash Pool with slides",
      "Snooker Table, Carrom & Foosball",
      "Live BBQ Station, Lawn & Pergolas",
    ],
  },
  {
    id: "10h-weekday-day",
    name: "10 Hours Weekday Day Picnic",
    timing: "Mon - Thu Morning Slot (8 AM to 6 PM)",
    price: 35000,
    priceText: "Rs. 35,000/-",
    popular: false,
    tag: "Day Picnic",
    features: [
      "10 Hours exclusive estate daytime access",
      "Adult Pool & Kids Pool with slides",
      "Snooker, Carrom & Foosball games",
      "Max 5 Hours AC timing included",
    ],
  },
  {
    id: "10h-weekday-night",
    name: "10 Hours Weekday Night Slot",
    timing: "Mon - Thu Night Slot (8 PM to 6 AM)",
    price: 45000,
    priceText: "Rs. 45,000/-",
    popular: false,
    tag: "Night Slot",
    features: [
      "10 Hours night illuminated estate access",
      "Night pool lighting & Pergola lounge",
      "Snooker, Carrom & Foosball games",
      "Max 5 Hours AC timing included",
    ],
  },
  {
    id: "10h-weekend-day",
    name: "10 Hours Weekend Day Picnic",
    timing: "Fri - Sun Morning Slot (8 AM to 6 PM)",
    price: 50000,
    priceText: "Rs. 50,000/-",
    popular: false,
    tag: "Day Picnic",
    features: [
      "10 Hours weekend daytime exclusive access",
      "Adult Pool & Kids Splash Pool with slides",
      "Snooker, Carrom, Foosball & Lawn access",
      "Max 5 Hours AC timing included",
    ],
  },
  {
    id: "10h-weekend-night",
    name: "10 Hours Weekend Night Slot",
    timing: "Fri - Sun Night Slot (8 PM to 6 AM)",
    price: 65000,
    priceText: "Rs. 65,000/-",
    popular: false,
    tag: "Night Slot",
    features: [
      "10 Hours weekend night illuminated access",
      "Pergola lounge with ambient Sufi lighting",
      "Adult Pool, Snooker, Carrom & Foosball",
      "Max 5 Hours AC timing included",
    ],
  },
  {
    id: "grand-event",
    name: "Grand Event / Wedding Booking",
    timing: "Flexible Event Hours (50 to 100+ Pax)",
    price: 75000,
    priceText: "Rs. 75,000 - 100,000/-",
    popular: false,
    tag: "Event Booking",
    features: [
      "Full estate setup for 50 to 100+ Pax events",
      "Heavy Generator & Fuel included for entire event",
      "Sprawling manicured lawn for stage & dining",
      "Catering, decoration & sound setup support",
    ],
  },
];

export function BookNowClient() {
  const searchParams = useSearchParams();
  const preSelectedPkg = searchParams.get("package");

  const [selectedPkgId, setSelectedPkgId] = useState("22h-weekend");
  const [guestCount, setGuestCount] = useState("1-35");
  const [extraGuests, setExtraGuests] = useState(0);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("Family Getaway");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preSelectedPkg) {
      const match = PACKAGES.find(
        (p) => p.id === preSelectedPkg || p.id.includes(preSelectedPkg)
      );
      if (match) setSelectedPkgId(match.id);
    }
  }, [preSelectedPkg]);

  const selectedPkg = PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[0];

  // Calculate estimated price
  const basePrice = selectedPkg.price;
  const extraGuestFee = extraGuests * 1000;
  const totalPrice = basePrice + extraGuestFee;

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  function handleWhatsAppDispatch() {
    const text = `Hello Black Gold Farmhouse! I would like to reserve a stay:
📌 Package: ${selectedPkg.name} (${selectedPkg.priceText})
📅 Preferred Date: ${date || "To be confirmed"}
👥 Guests: ${guestCount} ${extraGuests > 0 ? `(+${extraGuests} extra guests)` : ""}
🎉 Occasion: ${occasion}
👤 Name: ${name || "Guest"}
📞 Contact: ${phone || "WhatsApp"}
💬 Notes: ${message || "None"}

Estimated Total: Rs. ${totalPrice.toLocaleString()}/-
Please verify date availability.`;

    const url = `https://wa.me/923332973045?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  if (submitted) {
    return (
      <div className="bg-card border border-gold/40 rounded-xl p-10 md:p-16 text-center shadow-2xl backdrop-blur-md max-w-3xl mx-auto aura-box">
        <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/40 text-gold flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(200,160,80,0.3)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold block mb-2">
          Reservation Request Registered
        </span>
        <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
          Thank You, {name || "Valued Guest"}!
        </h3>
        <p className="text-foreground/75 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed font-light">
          Your reservation details for <strong className="text-gold">{selectedPkg.name}</strong> on <strong className="text-gold">{date || "your selected date"}</strong> have been dispatched to our head concierge desk.
        </p>

        <div className="p-6 rounded-lg bg-muted/60 border border-border max-w-md mx-auto mb-8 text-left space-y-2 text-xs">
          <p className="text-gold uppercase font-semibold tracking-wider mb-2">Booking Breakdown</p>
          <div className="flex justify-between">
            <span className="text-foreground/70">Selected Package:</span>
            <span className="font-semibold text-foreground">{selectedPkg.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground/70">Estimated Total:</span>
            <span className="font-bold text-gold text-sm">Rs. {totalPrice.toLocaleString()}/-</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleWhatsAppDispatch}
            className="btn-gold px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Open WhatsApp Confirmation
          </button>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-muted border border-border text-foreground hover:border-gold hover:text-gold px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold rounded-md transition-all"
          >
            Edit Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left 7 Columns: Package Selector & Form */}
      <div className="lg:col-span-7 space-y-10">
        
        {/* Step 1: Select Package Card Grid */}
        <div className="bg-card border border-border/80 rounded-xl p-6 sm:p-8 shadow-xl aura-box">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
            <span className="w-7 h-7 rounded-full bg-gold text-[#0a0704] font-bold text-xs flex items-center justify-center">
              1
            </span>
            <h3 className="font-display text-xl sm:text-2xl text-foreground">
              Select Your Package Slot
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PACKAGES.map((pkg) => {
              const isSelected = pkg.id === selectedPkgId;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkgId(pkg.id)}
                  className={`p-5 rounded-lg border cursor-pointer transition-all duration-300 relative ${
                    isSelected
                      ? "border-gold bg-gold/10 shadow-lg shadow-gold/5"
                      : "border-border/80 bg-background/60 hover:border-gold/40"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute top-2 right-2 bg-gold text-[#0a0704] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-gold block mb-1">
                    {pkg.tag}
                  </span>
                  <h4 className="font-display text-base text-foreground mb-1 leading-snug">
                    {pkg.name}
                  </h4>
                  <p className="text-[11px] text-foreground/60 mb-3">{pkg.timing}</p>
                  <p className="font-display text-lg text-gold font-bold">{pkg.priceText}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2 & 3: Reservation Details Form */}
        <div className="bg-card border border-border/80 rounded-xl p-6 sm:p-8 shadow-xl aura-box">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
            <span className="w-7 h-7 rounded-full bg-gold text-[#0a0704] font-bold text-xs flex items-center justify-center">
              2
            </span>
            <h3 className="font-display text-xl sm:text-2xl text-foreground">
              Guest Details & Preferences
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-foreground/80 font-semibold mb-2">
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tariq Mahmood"
                  required
                  className="w-full bg-background border border-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-foreground/80 font-semibold mb-2">
                  Phone / WhatsApp <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +92 333 1234567"
                  required
                  className="w-full bg-background border border-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-foreground/80 font-semibold mb-2">
                  Preferred Date <span className="text-gold">*</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-background border border-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground min-w-0"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-foreground/80 font-semibold mb-2">
                  Estimated Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => {
                    setGuestCount(e.target.value);
                    if (e.target.value === "40+") setExtraGuests(5);
                    else setExtraGuests(0);
                  }}
                  className="w-full bg-background border border-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground appearance-none min-w-0"
                >
                  <option value="1-35">Up to 35 Pax (Included)</option>
                  <option value="36-40">36 - 40 Pax (Standard)</option>
                  <option value="40+">40+ Pax (+Rs 1,000/extra pax)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-foreground/80 font-semibold mb-2">
                  Occasion Type
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground appearance-none min-w-0"
                >
                  <option value="Family Getaway">Family Getaway</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Corporate Retreat">Corporate Retreat</option>
                  <option value="Wedding / Event">Wedding / Grand Event</option>
                  <option value="Friend Reunion">Friend Reunion</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-foreground/80 font-semibold mb-2">
                Special Requirements / Catering Needs
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="3"
                placeholder="Let us know if you require BBQ chef, extra seating, sound system setup..."
                className="w-full bg-background border border-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <GoldButton
                type="submit"
                variant="fill"
                beam
                className="flex-1 py-4 text-xs uppercase tracking-[0.2em]"
                disabled={loading}
              >
                {loading ? "Processing..." : "Submit Reservation Request"}
              </GoldButton>

              <button
                type="button"
                onClick={handleWhatsAppDispatch}
                className="bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-[0.2em] px-6 py-4 rounded-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> 1-Click WhatsApp Booking
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right 5 Columns: Summary & Guarantee Sidebar */}
      <div className="lg:col-span-5 space-y-6 sticky top-28">
        {/* Selected Package Summary Card */}
        <div className="bg-card border border-gold/40 rounded-xl p-6 sm:p-8 shadow-2xl aura-box">
          <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" /> Reservation Summary
          </div>
          <h3 className="font-display text-2xl text-foreground mb-1">
            {selectedPkg.name}
          </h3>
          <p className="text-xs text-foreground/60 mb-6">{selectedPkg.timing}</p>

          <ul className="space-y-3 text-xs text-foreground/80 mb-6 pb-6 border-b border-border/60">
            {selectedPkg.features.map((f, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-4 h-4 text-gold mr-2 shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-2 mb-6 text-sm">
            <div className="flex justify-between text-foreground/70">
              <span>Base Package Rate:</span>
              <span className="font-semibold text-foreground">Rs. {basePrice.toLocaleString()}/-</span>
            </div>
            {extraGuestFee > 0 && (
              <div className="flex justify-between text-foreground/70">
                <span>Extra Guest Fee ({extraGuests} pax):</span>
                <span className="font-semibold text-foreground">+Rs. {extraGuestFee.toLocaleString()}/-</span>
              </div>
            )}
            <div className="flex justify-between text-base font-bold text-foreground pt-3 border-t border-border/50">
              <span>Estimated Total:</span>
              <span className="text-gold font-display text-2xl">Rs. {totalPrice.toLocaleString()}/-</span>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gold/10 border border-gold/30 text-xs text-foreground/80 space-y-1.5">
            <p className="font-semibold text-gold uppercase tracking-wider">🔒 Booking Guarantee</p>
            <p className="text-[11px] leading-relaxed">
              50% advance deposit secures your date. Dates are held strictly on a first-come, first-served basis.
            </p>
          </div>
        </div>

        {/* Quick Contact Card */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-xl">
          <h4 className="font-display text-lg text-foreground mb-3">
            Prefer Direct Call Booking?
          </h4>
          <p className="text-xs text-foreground/60 mb-4">
            Speak directly with our head concierge officer for instant date check:
          </p>
          <a
            href="tel:+923332973045"
            className="flex items-center justify-between p-3.5 rounded-lg bg-muted border border-border hover:border-gold text-sm font-semibold text-foreground hover:text-gold transition-all"
          >
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" /> +92 333 2973045
            </span>
            <span className="text-xs text-gold uppercase tracking-wider font-bold">Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
