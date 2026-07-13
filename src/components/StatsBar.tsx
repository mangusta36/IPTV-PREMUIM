"use client";

import { useEffect, useRef, useState } from "react";
import { Film, Globe, Tv, Users } from "lucide-react";

type Stat = {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { icon: <Tv className="h-5 w-5 text-accent" />, value: 26000, suffix: "+", label: "Live Channels" },
  { icon: <Film className="h-5 w-5 text-accent" />, value: 100000, suffix: "+", label: "Movies & Series" },
  { icon: <Globe className="h-5 w-5 text-accent" />, value: 99, suffix: "%", label: "Uptime" },
  { icon: <Users className="h-5 w-5 text-accent" />, value: 15000, suffix: "+", label: "Happy Clients" },
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function StatItem({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp(stat.value, 2200);

  const formatted = count >= 1000
    ? `${Math.round(count / 1000).toLocaleString()}K`
    : count.toLocaleString();

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 px-6 py-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.06]">
        {stat.icon}
      </div>
      <div className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
        {count >= 1000 ? `${formatted}` : count}{stat.suffix}
      </div>
      <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative border-y border-border bg-card/20 py-6" aria-label="Service statistics">
      <div className="pointer-events-none absolute inset-0 -z-10 line-grid opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
