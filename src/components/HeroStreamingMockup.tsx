import { CalendarDays, Clapperboard, Film, Globe, MonitorPlay, RadioTower, ShieldCheck, Tv } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const categoryCards = [
  { label: "Live Sports", tone: "from-red-500/60 to-orange-400/30", icon: RadioTower },
  { label: "Movies", tone: "from-blue-500/60 to-cyan-400/30", icon: Film },
  { label: "Series", tone: "from-violet-500/60 to-fuchsia-400/30", icon: Clapperboard },
  { label: "Kids", tone: "from-emerald-500/60 to-lime-400/30", icon: Globe },
];

export default function HeroStreamingMockup() {
  return (
    <div className="hero-mockup-root relative mx-auto w-full max-w-[38rem]">
      {/* Soft gold aura */}
      <div className="hero-glow hero-glow-gold absolute -right-12 -top-8 h-56 w-56 rounded-full bg-brand/15 blur-[6rem]" />
      <div className="hero-glow absolute -left-10 bottom-10 h-44 w-44 rounded-full bg-blue-500/10 blur-[5rem]" />

      {/* Luxury frame */}
      <div className="hero-frame relative rounded-[2rem] bg-gradient-to-b from-brand/25 via-white/5 to-transparent p-px shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
        {/* Inner glass console */}
        <div className="hero-dashboard relative overflow-hidden rounded-[1.95rem] border border-white/8 bg-[#0a0a0a]/90 p-4 backdrop-blur-3xl sm:p-5">
          {/* Gold scanline */}
          <div className="hero-scanline pointer-events-none absolute inset-x-10 top-0 z-20 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent" />

          {/* Header */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-amber-600 shadow-lg shadow-brand/20">
                <MonitorPlay className="h-5 w-5 text-black" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-brand/70">Private Console</p>
                <p className="text-sm font-black text-white">iFlex IPTV</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-brand">
              <span className="hero-live-dot h-2 w-2 rounded-full bg-brand" />
              4K Live
            </span>
          </div>

          {/* Main grid */}
          <div className="grid gap-3 sm:grid-cols-[1.25fr_0.75fr]">
            {/* Feature card */}
            <div className="hero-main-card relative min-h-56 overflow-hidden rounded-2xl border border-white/8 bg-[radial-gradient(circle_at_18%_18%,rgba(234,179,8,0.22),transparent_18rem),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(0,0,0,0.96))] p-5">
              <div className="absolute right-4 top-4 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-bold text-brand">
                Ultraclear
              </div>
              <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />

              <div className="relative z-10">
                <RadioTower className="mb-6 h-11 w-11 text-brand/90" />
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand/80">Tonight&apos;s Feature</p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-white sm:text-[1.6rem]">Live sports, curated without compromise.</h3>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-white/70">
                  <span className="rounded-lg border border-white/8 bg-white/[0.04] py-2.5">FHD</span>
                  <span className="rounded-lg border border-white/8 bg-white/[0.04] py-2.5">EPG</span>
                  <span className="rounded-lg border border-white/8 bg-white/[0.04] py-2.5">Fast</span>
                </div>
              </div>
            </div>

            {/* Side cards */}
            <div className="space-y-3">
              <div className="hero-mini-card rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/12">
                    <CalendarDays className="h-4.5 w-4.5 text-brand" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40">Guide Loaded</p>
                    <p className="text-sm font-bold text-white">Tonight at 20:00</p>
                  </div>
                </div>
              </div>
              <div className="hero-mini-card rounded-2xl border border-brand/20 bg-brand/[0.07] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15">
                    <WhatsAppIcon className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-[10px] text-brand/70">Concierge</p>
                    <p className="text-sm font-bold text-white">Setup included</p>
                  </div>
                </div>
              </div>
              <div className="hero-mini-card rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15">
                    <ShieldCheck className="h-4.5 w-4.5 text-blue-300" />
                  </div>
                  <p className="text-sm font-bold text-white">1, 2, or 3 screens</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category cards */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categoryCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className={`hero-category-card relative min-h-24 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br ${card.tone} p-3.5`}
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <Icon className="mb-4 h-5 w-5 text-white/80" />
                  <p className="text-sm font-black text-white">{card.label}</p>
                </div>
              );
            })}
          </div>

          {/* Device chips */}
          <div className="mt-4 grid grid-cols-3 gap-3 text-xs font-bold text-white/60">
            <span className="hero-device-chip flex items-center justify-center gap-1.5 rounded-xl border border-white/8 bg-white/[0.03] py-3">
              <Tv className="h-4 w-4 text-brand" /> Smart TV
            </span>
            <span className="hero-device-chip flex items-center justify-center gap-1.5 rounded-xl border border-white/8 bg-white/[0.03] py-3">
              <MonitorPlay className="h-4 w-4 text-blue-300" /> Fire Stick
            </span>
            <span className="hero-device-chip flex items-center justify-center gap-1.5 rounded-xl border border-white/8 bg-white/[0.03] py-3">
              <ShieldCheck className="h-4 w-4 text-brand" /> 4K
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
