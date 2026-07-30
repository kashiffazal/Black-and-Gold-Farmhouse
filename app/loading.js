import Image from "next/image";

/**
 * Next.js App Router Loading Screen
 *
 * This file is automatically rendered by Next.js when:
 *  - A page is loading for the first time (initial visit)
 *  - Navigating between routes (client-side transitions)
 *
 * It wraps the route's content in a React Suspense boundary,
 * so this component shows while the page chunk is being fetched.
 *
 * Design: Matches the Black Gold Farmhouse brand —
 *  dark background, floating logo, gold loading bar, stars bg.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#0a0704] overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 stars-bg pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Floating logo with gentle bounce animation */}
        <div className="float-y mb-8">
          <Image
            src="/logo.png"
            alt="Black Gold Farmhouse"
            width={200}
            height={200}
            className="w-36 md:w-48 h-auto"
            priority
          />
        </div>

        {/* Loading text + animated gold progress bar */}
        <div className="mt-4 flex flex-col items-center">
          <p className="text-gold uppercase tracking-[0.4em] text-xs shimmer">
            Loading
          </p>
          {/* Animated progress bar — infinite sliding gold fill */}
          <div className="w-40 h-[2px] bg-gold/20 mt-4 rounded-full overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold/0 via-gold to-gold/0 w-1/2 rounded-full"
              style={{
                animation: "loadingSlide 1.4s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* Keyframes for the sliding loader animation */}
      <style>{`
        @keyframes loadingSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
