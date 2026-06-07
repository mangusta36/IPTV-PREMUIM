import { STRIP_LOGOS } from "@/lib/channel-logos";

// Triple the array for perfectly seamless CSS loop
const SCROLL = [...STRIP_LOGOS, ...STRIP_LOGOS, ...STRIP_LOGOS];

export default function AnimatedLogos() {
  return (
    <div className="w-full overflow-hidden  py-10 border-y border-white/5 relative group/strip">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-scroll group-hover/strip:[animation-play-state:paused]">
        {SCROLL.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="mx-4 sm:mx-6 flex-shrink-0">
            <div
              title={logo.name}
              className="flex items-center justify-center w-28 h-14 sm:w-36 sm:h-16 rounded-xl bg-white border border-white/[0.07] opacity-100 hover:grayscale-0  hover:scale-110 transition-all duration-300 px-4 py-2 shadow-[0_2px_16px_rgba(0,0,0,0.4)]"
            >
              {/* Using a standard <img> tag to avoid Next.js Image optimization blocking external SVG-rendered PNGs */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
