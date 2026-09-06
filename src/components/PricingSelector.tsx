"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Flame,
  Headphones,
  Lock,
  MessageCircle,
  MonitorPlay,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tv,
  Users,
  Zap,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { createWhatsAppPlanUrl, createWhatsAppSupportUrl } from "@/lib/whatsapp";
import { DeviceCount, formatPrice, planFeatures, pricingDeviceOptions } from "@/lib/pricing-data";

const steps = [
  {
    step: "1",
    title: "Select Package",
    desc: "Pick your device count (1, 2, or 3 screens) and duration.",
  },
  {
    step: "2",
    title: "WhatsApp Message",
    desc: "Click to chat with your pre-filled plan details.",
  },
  {
    step: "3",
    title: "Safe Payment",
    desc: "Receive encrypted, hassle-free payment instructions.",
  },
  {
    step: "4",
    title: "Instant Credentials",
    desc: "Get your Xtream Codes or M3U credentials in under 10 mins.",
  },
  {
    step: "5",
    title: "Start Streaming",
    desc: "Enjoy 26,000+ channels and 4K sports on your favorite app.",
  },
];

const comparisonFeatures = [
  { name: "Live TV Channels", three: "26,000+", six: "26,000+", twelve: "26,000+" },
  { name: "VOD Movies & Series", three: "100,000+", six: "100,000+", twelve: "100,000+" },
  { name: "4K UHD & FHD 60FPS", three: "Included", six: "Included", twelve: "Included" },
  { name: "Anti-Freeze 9.3 Multi-CDN", three: "Included", six: "Included", twelve: "Priority Routing" },
  { name: "7-Day Sports Catch-Up", three: "Included", six: "Included", twelve: "Included" },
  { name: "Interactive EPG TV Guide", three: "Included", six: "Included", twelve: "Real-time Sync" },
  { name: "All Devices Supported", three: "Yes", six: "Yes", twelve: "Yes" },
  { name: "Bonus Free Months", three: "—", six: "—", twelve: "+2 Months Free" },
  { name: "WhatsApp Concierge Setup", three: "Standard", six: "Priority", twelve: "VIP 24/7 Priority" },
  { name: "7-Day Money-Back Guarantee", three: "Included", six: "Included", twelve: "Included" },
];

export default function PricingSelector({ compact = false }: { compact?: boolean }) {
  const [selectedDevices, setSelectedDevices] = useState<DeviceCount>(1);
  const [showComparison, setShowComparison] = useState(false);

  const option =
    pricingDeviceOptions.find((item) => item.devices === selectedDevices) ?? pricingDeviceOptions[0];

  return (
    <section
      id="pricing-plans"
      className={`relative overflow-hidden ${compact ? "py-16" : "py-24 sm:py-32"}`}
      aria-label="Subscription pricing plans"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 -z-10 h-72 w-72 rounded-full bg-blue-500/[0.03] blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Transparent Pricing
          </div>
          <h2 className="mt-4 font-serif text-3xl font-black tracking-tight text-white sm:text-5xl">
            Choose Your <span className="luxury-gradient-text">Active Device Plan</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            No contracts. No hidden fees. Select how many screens you want to stream on simultaneously,
            choose your duration, and activate in minutes via WhatsApp.
          </p>
        </div>

        {/* Device Count Tabs */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-card/60 p-2 shadow-2xl backdrop-blur-xl">
            {[
              {
                devices: 1 as DeviceCount,
                icon: Tv,
                label: "1 Screen",
                badge: "Solo",
                helper: "Living Room or Stick",
              },
              {
                devices: 2 as DeviceCount,
                icon: Users,
                label: "2 Screens",
                badge: "Popular",
                helper: "Couples & 2 Rooms",
              },
              {
                devices: 3 as DeviceCount,
                icon: MonitorPlay,
                label: "3 Screens",
                badge: "Family",
                helper: "Multi-Room & Mobile",
              },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedDevices === tab.devices;
              return (
                <button
                  key={tab.devices}
                  type="button"
                  onClick={() => setSelectedDevices(tab.devices)}
                  className={`group relative flex flex-col items-center rounded-xl px-3 py-3.5 transition-all duration-300 sm:px-5 sm:py-4 ${
                    isActive
                      ? "bg-gradient-to-r from-accent to-accent-hover text-background shadow-lg shadow-accent/25"
                      : "text-white/80 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${isActive ? "text-background" : "text-accent"}`} />
                    <span className="text-sm font-black tracking-tight sm:text-base">{tab.label}</span>
                  </div>
                  <span
                    className={`mt-1 text-[11px] font-semibold transition-colors ${
                      isActive ? "text-background/80" : "text-muted-foreground"
                    }`}
                  >
                    {tab.helper}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Active streams determine simultaneous viewing. You can install on unlimited devices.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-3">
          {option.plans.map((plan) => {
            const isBest = plan.badge === "BEST VALUE";
            const isMid = plan.duration === "6 Months";

            return (
              <article
                key={plan.duration}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                  isBest
                    ? "border-accent/80 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),rgba(17,22,49,0.95)_55%)] shadow-2xl shadow-accent/20 lg:-translate-y-2"
                    : isMid
                    ? "border-white/15 bg-card/75 shadow-xl hover:border-accent/40 hover:shadow-black/50"
                    : "border-white/10 bg-card/50 shadow-lg hover:border-white/25 hover:shadow-black/50"
                }`}
              >
                {/* Best value highlight ribbon */}
                {isBest && (
                  <div className="absolute -right-12 top-7 rotate-45 bg-gradient-to-r from-accent to-accent-hover px-12 py-1 text-center text-[10px] font-black uppercase tracking-widest text-background shadow-md">
                    BEST VALUE
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                      {isBest ? "Full Season Access" : isMid ? "Semi-Annual Pass" : "Quarterly Pass"}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-black text-white sm:text-3xl">
                      {plan.duration}
                    </h3>
                  </div>

                  {plan.bonus && (
                    <span className="flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                      <Flame className="h-3 w-3" /> {plan.bonus}
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="mt-6 border-b border-white/8 pb-6">
                  {plan.regularPrice && (
                    <p className="text-xs font-bold text-white/40 line-through">{plan.regularPrice}</p>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-5xl font-black tracking-tight text-white sm:text-6xl">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      USD / one-time
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-md bg-accent/15 px-2 py-0.5 text-xs font-bold text-accent">
                      {plan.monthlyEquivalent ?? `Save ${plan.save}`}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {plan.description ?? "Renews only upon request"}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="my-7 flex-1">
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-white/50">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-3.5 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        <strong className="font-bold text-white">26,000+ Live Channels</strong> (HD/FHD/4K)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        <strong className="font-bold text-white">100,000+ VOD Titles</strong> (Updated Daily)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        <strong className="font-bold text-white">{selectedDevices} Active Screen{selectedDevices > 1 ? "s" : ""}</strong> simultaneously
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        <strong className="font-bold text-white">4K 60FPS Live Sports</strong> with low latency
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        <strong className="font-bold text-white">Anti-Freeze 9.3</strong> Multi-CDN streaming
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>EPG TV Guide &amp; 7-Day Catch-Up</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>Smart TV, Fire Stick, Android, iOS, PC</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>24/7 Dedicated WhatsApp Support</span>
                    </li>
                  </ul>
                </div>

                {/* Order CTA Button */}
                <Link
                  href={createWhatsAppPlanUrl(plan, selectedDevices)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="pricing-whatsapp"
                  className={`group/btn relative inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    isBest
                      ? "bg-gradient-to-r from-accent to-accent-hover text-background shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02]"
                      : "border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-background"
                  }`}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Order on WhatsApp</span>
                </Link>

                <p className="mt-3 text-center text-[11px] text-muted-foreground">
                  7-Day Money-Back Guarantee Included
                </p>
              </article>
            );
          })}
        </div>

        {/* Feature Comparison Toggle */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/60 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:border-accent/40 hover:text-accent"
          >
            <span>{showComparison ? "Hide Detailed Feature Matrix" : "Compare Plan Features Side-by-Side"}</span>
            {showComparison ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        {/* Collapsible Comparison Table */}
        {showComparison && (
          <div className="mt-8 overflow-x-auto rounded-3xl border border-white/10 bg-card/75 p-6 shadow-2xl backdrop-blur-xl">
            <h3 className="mb-4 font-serif text-xl font-bold text-white">Full Plan Specification Matrix</h3>
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="pb-3 pr-4">Feature</th>
                  <th className="pb-3 px-4">3 Months</th>
                  <th className="pb-3 px-4">6 Months</th>
                  <th className="pb-3 pl-4 text-accent">12 Months (Best)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/6 text-white/80">
                {comparisonFeatures.map((row) => (
                  <tr key={row.name} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 pr-4 font-semibold text-white">{row.name}</td>
                    <td className="py-3.5 px-4">{row.three}</td>
                    <td className="py-3.5 px-4">{row.six}</td>
                    <td className="py-3.5 pl-4 font-bold text-accent">{row.twelve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Security & Guarantee Trust Bar */}
        <div className="mt-14 grid gap-4 rounded-3xl border border-white/10 bg-card/50 p-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <RotateCcw className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">7-Day Guarantee</p>
              <p className="text-xs text-muted-foreground">Risk-free streaming refund policy</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Instant Activation</p>
              <p className="text-xs text-muted-foreground">Setup ready in under 10 minutes</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Encrypted Payment</p>
              <p className="text-xs text-muted-foreground">Safe payment with WhatsApp support</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Headphones className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">24/7 Human Support</p>
              <p className="text-xs text-muted-foreground">Real technicians ready on WhatsApp</p>
            </div>
          </div>
        </div>

        {/* 5-Step Activation Process */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-card/60 p-8 shadow-xl">
          <div className="mb-8 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Simple Onboarding</p>
              <h3 className="mt-1 font-serif text-2xl font-black text-white">How Activation Works</h3>
            </div>
            <Link
              href={createWhatsAppSupportUrl("I have a question about how IPTV activation works")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:underline"
            >
              <WhatsAppIcon className="h-4 w-4" /> Need help before ordering? Chat with us
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/6 bg-white/[0.02] p-5 transition hover:border-accent/30 hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-sm font-black text-background">
                  {item.step}
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
