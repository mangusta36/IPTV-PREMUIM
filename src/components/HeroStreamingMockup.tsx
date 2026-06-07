import { Activity, CalendarDays, Clapperboard, MonitorPlay, RadioTower, ShieldCheck, Sparkles, Tv } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const categoryCards = [
  { label: "Live Sports", tone: "from-red-500/70 to-orange-400/40" },
  { label: "Movies", tone: "from-blue-500/70 to-cyan-400/35" },
  { label: "Series", tone: "from-violet-500/70 to-fuchsia-400/35" },
  { label: "Kids", tone: "from-emerald-500/70 to-lime-400/35" },
];

export default function HeroStreamingMockup() {
  return (
    <div className="hero-mockup-root relative mx-auto w-full max-w-[38rem]">
      <div className="hero-glow hero-glow-blue absolute -left-6 top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="hero-glow hero-glow-green absolute -right-8 bottom-12 h-40 w-40 rounded-full bg-green-500/20 blur-3xl" />
      <div className="hero-dashboard relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl">
        <div className="hero-scanline pointer-events-none absolute inset-x-6 top-0 z-20 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent" />
        <div className="rounded-[1.25rem] border border-white/10 bg-black/70 p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-black">
                <MonitorPlay className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Streaming Console</p>
                <p className="text-sm font-bold text-white">iFlex IPTV Dashboard</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-xs font-black text-white shadow-lg shadow-red-500/30">
              <span className="hero-live-dot h-2 w-2 rounded-full bg-white" />
              LIVE
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
            <div className="hero-main-card relative min-h-52 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_18rem),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(0,0,0,0.96))] p-5">
              <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-white/80">
                4K Ready
              </div>
              <RadioTower className="mb-8 h-10 w-10 text-red-300" />
              <p className="text-xs uppercase tracking-[0.24em] text-red-200">Match Night</p>
              <h3 className="mt-2 text-2xl font-black leading-tight text-white">Live sports categories without the setup stress.</h3>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-white/75">
                <span className="rounded-lg bg-white/10 py-2">FHD</span>
                <span className="rounded-lg bg-white/10 py-2">EPG</span>
                <span className="rounded-lg bg-white/10 py-2">Fast</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="hero-mini-card rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-brand" />
                  <div>
                    <p className="text-xs text-white/45">EPG Guide</p>
                    <p className="text-sm font-bold text-white">Tonight at 20:00</p>
                  </div>
                </div>
              </div>
              <div className="hero-mini-card rounded-2xl border border-green-400/25 bg-green-500/10 p-4">
                <div className="flex items-center gap-3">
                  <WhatsAppIcon className="h-6 w-6 text-green-300" />
                  <div>
                    <p className="text-xs text-green-100/65">WhatsApp Activation</p>
                    <p className="text-sm font-bold text-white">Setup help ready</p>
                  </div>
                </div>
              </div>
              <div className="hero-mini-card rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-blue-300" />
                  <p className="text-sm font-bold text-white">1, 2, or 3 device plans</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categoryCards.map((card, index) => (
              <div key={card.label} className={`hero-category-card min-h-24 rounded-2xl border border-white/10 bg-gradient-to-br ${card.tone} p-3 shadow-lg shadow-black/20`} style={{ animationDelay: `${index * 140}ms` }}>
                <Clapperboard className="mb-5 h-5 w-5 text-white/80" />
                <p className="text-sm font-black text-white">{card.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-xs font-bold text-white/70">
          <span className="hero-device-chip flex items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/[0.06] py-3">
            <Tv className="h-4 w-4 text-brand" /> Smart TV
          </span>
          <span className="hero-device-chip flex items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/[0.06] py-3">
            <Activity className="h-4 w-4 text-blue-300" /> Fire Stick
          </span>
          <span className="hero-device-chip flex items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/[0.06] py-3">
            <Sparkles className="h-4 w-4 text-green-300" /> 4K
          </span>
        </div>
      </div>
    </div>
  );
}
