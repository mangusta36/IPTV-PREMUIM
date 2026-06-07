import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Clapperboard, Film, Globe2, Headphones, MonitorPlay, Music, Newspaper, RadioTower, Search, Sparkles, Trophy, Tv } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "iFlex IPTV Channels - Sports, Movies, Series, News & International TV",
  description:
    "Explore iFlex IPTV channel categories including live sports, football, movies, series, news, kids, entertainment, international channels, EPG, and HD/FHD/4K quality where available.",
  alternates: {
    canonical: absoluteUrl("/channels"),
  },
};

const categories = [
  { name: "Live Sports", icon: Trophy, color: "from-red-500/70 to-orange-400/35", description: "Popular sports categories, event nights, and backup stream organization." },
  { name: "Football", icon: RadioTower, color: "from-green-500/70 to-emerald-400/35", description: "Football-focused viewing setup for major match days and weekly fixtures." },
  { name: "Movies", icon: Film, color: "from-blue-500/70 to-cyan-400/35", description: "Premium cinema categories, classics, action, drama, family, and weekend viewing." },
  { name: "Series", icon: Clapperboard, color: "from-violet-500/70 to-fuchsia-400/35", description: "Series categories arranged for easy discovery and VOD browsing." },
  { name: "News", icon: Newspaper, color: "from-sky-500/70 to-blue-400/35", description: "News and regional information categories where available in your package." },
  { name: "Kids", icon: Baby, color: "from-yellow-500/70 to-lime-400/35", description: "Family-friendly and kids categories for supported apps and profiles." },
  { name: "Entertainment", icon: Tv, color: "from-brand/80 to-yellow-300/35", description: "General entertainment, lifestyle, reality, talk, and variety categories." },
  { name: "International", icon: Globe2, color: "from-emerald-500/70 to-blue-400/35", description: "International categories for global, regional, and multilingual viewing." },
  { name: "24/7 Channels", icon: MonitorPlay, color: "from-rose-500/70 to-red-400/35", description: "Always-on entertainment categories and curated round-the-clock streams." },
  { name: "Premium Cinema", icon: Sparkles, color: "from-amber-500/70 to-orange-400/35", description: "Movie-night focused shelves and cinematic VOD categories." },
  { name: "Documentaries", icon: Search, color: "from-slate-400/70 to-blue-300/35", description: "Knowledge, history, nature, science, and documentary categories." },
  { name: "Music", icon: Music, color: "from-pink-500/70 to-purple-400/35", description: "Music, lifestyle, and background entertainment categories." },
];

export default function ChannelsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "iFlex IPTV Channels",
    url: absoluteUrl("/channels"),
    description: `Explore ${siteConfig.claims.channels}, ${siteConfig.claims.vod}, EPG TV guide support, and HD/FHD/4K quality where available.`,
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-black pt-28 pb-16 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(239,68,68,0.16),transparent_24rem),radial-gradient(circle_at_76%_12%,rgba(59,130,246,0.2),transparent_25rem),linear-gradient(180deg,#020617,#000)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand">Channel categories</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Explore iFlex IPTV live TV, sports, movies, series, and international categories
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Browse safe category previews. Exact channel availability may vary by package and region, and our support team can help confirm the best setup for your device.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.055] p-3 shadow-xl shadow-black/30">
            <label className="flex items-center gap-3 rounded-xl bg-black/45 px-4 py-3 text-white/60">
              <Search className="h-5 w-5 text-brand" />
              <input
                type="search"
                placeholder="Search categories like sports, movies, kids, news..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
              />
            </label>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {categories.slice(0, 8).map((category) => (
                <span key={category.name} className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white/70">
                  {category.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <article key={category.name} className={`min-h-64 rounded-2xl border border-white/10 bg-gradient-to-br ${category.color} p-6 shadow-2xl shadow-black/25`}>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/25 backdrop-blur">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-white">{category.name}</h2>
                  <p className="mt-3 leading-7 text-white/78">{category.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#020617] py-16">
        <div className="container mx-auto grid gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
            <Sparkles className="mb-4 h-7 w-7 text-brand" />
            <h2 className="font-black text-white">HD / FHD / 4K where available</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">Stream quality depends on the selected channel, device, app, and internet connection.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
            <MonitorPlay className="mb-4 h-7 w-7 text-blue-300" />
            <h2 className="font-black text-white">EPG TV guide included</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">Use EPG support to browse schedules and navigate live categories more easily.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
            <Headphones className="mb-4 h-7 w-7 text-green-300" />
            <h2 className="font-black text-white">Support checks your setup</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">Ask WhatsApp support which app and package best fit your screen and active device count.</p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-3xl font-black text-white sm:text-5xl">Want help choosing a package?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/62">
            Message iFlex IPTV on WhatsApp with your device, region, and preferred categories. We will help you choose a plan and setup path.
          </p>
          <Link
            href={createWhatsAppSupportUrl("help checking IPTV channel categories for my device")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="support-whatsapp"
            className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-green-500 px-8 font-black text-white transition hover:bg-green-400"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Ask on WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
