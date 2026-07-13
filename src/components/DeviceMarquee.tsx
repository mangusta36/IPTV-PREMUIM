"use client";

import { MonitorPlay, Smartphone, Tablet, Laptop, Tv, HardDrive } from "lucide-react";

const devices = [
  { name: "Smart TV", icon: Tv },
  { name: "Fire Stick", icon: HardDrive },
  { name: "Android TV", icon: MonitorPlay },
  { name: "iPhone / iPad", icon: Smartphone },
  { name: "Windows", icon: Laptop },
  { name: "Mac", icon: Laptop },
  { name: "MAG Box", icon: MonitorPlay },
  { name: "Tablet", icon: Tablet },
];

export default function DeviceMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/20 py-5" aria-label="Supported devices">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-scroll-reverse">
        {[...devices, ...devices, ...devices].map((device, i) => {
          const Icon = device.icon;
          return (
            <div
              key={`${device.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 px-6 py-2 rounded-full border border-border bg-card/40 mx-1.5 transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.04]"
            >
              <Icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                {device.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
