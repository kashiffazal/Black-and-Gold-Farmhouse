import Link from "next/link";

/**
 * GoldButton — Reusable button component for the entire site.
 *
 * Props:
 *   variant   "fill" | "outline"   — Fill style (default: "fill")
 *   beam      boolean              — Adds animated spinning beam border (combinable with any variant)
 *   size      "auto" | "full"      — Width behavior (default: "auto")
 *   href      string               — Renders as Next.js <Link> when provided
 *   onClick   function             — Click handler (button mode)
 *   type      "button" | "submit"  — Button type attribute
 *   className string               — Extra Tailwind classes
 *   children  ReactNode            — Button label
 *
 * Examples:
 *   <GoldButton variant="fill">Book Now</GoldButton>
 *   <GoldButton variant="outline" beam>Reserve</GoldButton>
 *   <GoldButton variant="fill" beam size="full">Submit</GoldButton>
 */
export function GoldButton({
  href,
  onClick,
  type = "button",
  children,
  variant = "fill",
  beam = false,
  size = "auto",
  className = "",
}) {
  /* ── Width ─────────────────────────────────────────────────────── */
  const widthClass = size === "full" ? "w-full" : "";

  /* ── Shared base styles (all buttons get rounded-md) ───────────── */
  const base =
    "group relative inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-500 cursor-pointer select-none rounded-md overflow-hidden";

  /* ── Variant-specific styles ───────────────────────────────────── */
  let variantClass = "";

  if (variant === "fill") {
    variantClass = beam
      ? /* Fill + Beam: beam border wraps a gold-filled inner */
        "beam-border rounded-md text-[#1a1208]"
      : /* Fill only: solid gold gradient */
        "btn-gold";
  } else if (variant === "outline") {
    variantClass = beam
      ? /* Outline + Beam: beam border wraps transparent inner */
        "beam-border rounded-md text-white hover:text-[#1a1208]"
      : /* Outline only: gold border, fills on hover */
        "border border-gold/50 text-gold bg-transparent hover:bg-gradient-to-r hover:from-gold hover:to-gold-deep hover:text-[#1a1208] hover:border-transparent hover:shadow-[0_10px_30px_-12px_rgba(200,160,80,0.4)] hover:-translate-y-0.5";
  }

  const combinedClass =
    `${base} ${variantClass} ${widthClass} ${className}`.trim();

  /* ── Inner content: beam variant uses a span overlay for hover fill ── */
  const innerContent = beam ? (
    <>
      {/* Inner background span — sits inside the beam border */}
      <span
        className={`absolute inset-[2px] rounded-[inherit] transition-all duration-500 z-[-1] ${
          variant === "fill"
            ? /* Fill+beam: always gold */
              "bg-gradient-to-r from-gold to-gold-deep"
            : /* Outline+beam: transparent → gold on hover */
              "bg-[#14100c] group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-gold-deep"
        }`}
      />
      <span className="relative z-10 text-white">{children}</span>
    </>
  ) : (
    children
  );

  /* ── Render as <Link> or <button> ──────────────────────────────── */
  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {innerContent}
    </button>
  );
}
