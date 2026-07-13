"use client";

import { Film, Globe, Music, Newspaper, Radio, Tv, Trophy, Zap } from "lucide-react";

const channels = [
  { name: "ESPN", icon: Tv, color: "text-red-400" },
  { name: "Sky Sports", icon: Trophy, color: "text-blue-400" },
  { name: "CNN", icon: Newspaper, color: "text-red-500" },
  { name: "HBO Max", icon: Film, color: "text-purple-400" },
  { name: "BBC World", icon: Globe, color: "text-white" },
  { name: "BeIN Sports", icon: Trophy, color: "text-amber-400" },
  { name: "Netflix Live", icon: Zap, color: "text-red-400" },
  { name: "MTV", icon: Music, color: "text-pink-400" },
  { name: "Discovery", icon: Globe, color: "text-sky-400" },
  { name: "Fox News", icon: Newspaper, color: "text-blue-500" },
  { name: "NBA TV", icon: Trophy, color: "text-orange-400" },
  { name: "Sky Cinema", icon: Film, color: "text-cyan-400" },
  { name: "Al Jazeera", icon: Radio, color: "text-amber-500" },
  { name: "Cartoon Network", icon: Tv, color: "text-green-400" },
  { name: "Nat Geo", icon: Globe, color: "text-yellow-400" },
  { name: "Star Sports", icon: Trophy, color: "text-red-400" },
];

export default function ChannelTicker() {
  return (
    <section className="relative border-y border-border bg-card/30 py-4 overflow-hidden" aria-label="Available channel categories">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-scroll">
        {[...channels, ...channels, ...channels].map((channel, i) => (
          <div
            key={`${channel.name}-${i}`}
            className="flex shrink-0 items-center gap-2 px-5"
          >
            <channel.icon className={`h-4 w-4 ${channel.color}`} />
            <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
              {channel.name}
            </span>
            <span className="text-muted-foreground/30">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}
