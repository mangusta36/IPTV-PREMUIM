"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle, CreditCard, MessageCircle, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { createWhatsAppPlanUrl } from "@/lib/whatsapp";
import { DeviceCount, formatPrice, planFeatures, pricingDeviceOptions } from "@/lib/pricing-data";

const steps = [
  "Choose your package",
  "Message us on WhatsApp",
  "Receive payment instructions",
  "Get activation details",
  "Start watching on your device",
];

export default function PricingSelector({ compact = false }: { compact?: boolean }) {
  const [selectedDevices, setSelectedDevices] = useState<DeviceCount>(1);
  const option = pricingDeviceOptions.find((item) => item.devices === selectedDevices) ?? pricingDeviceOptions[0];

  return (
    <section className={compact ? "py-14" : "py-20"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-brand">Simple IPTV pricing</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">Choose your active device plan</h2>
          <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg">
            Select 1, 2, or 3 active device plans. Every package includes live channels, VOD, EPG support, and guided WhatsApp activation.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-2 sm:grid-cols-3">
          {pricingDeviceOptions.map((deviceOption) => (
            <button
              key={deviceOption.devices}
              type="button"
              onClick={() => setSelectedDevices(deviceOption.devices)}
              className={`rounded-xl px-5 py-4 text-left transition ${
                selectedDevices === deviceOption.devices
                  ? "bg-brand text-black shadow-lg shadow-brand/25"
                  : "bg-black/35 text-white hover:bg-white/10"
              }`}
            >
              <span className="flex items-center gap-2 text-base font-black">
                <Smartphone className="h-5 w-5" />
                {deviceOption.label}
              </span>
              <span className={`mt-1 block text-xs font-semibold ${selectedDevices === deviceOption.devices ? "text-black/70" : "text-white/45"}`}>
                {deviceOption.helper}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {option.plans.map((plan) => {
            const isBest = plan.badge === "BEST VALUE";
            return (
              <article
                key={plan.duration}
                className={`relative flex min-h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-2xl transition hover:-translate-y-1 ${
                  isBest
                    ? "border-brand bg-[linear-gradient(155deg,rgba(234,179,8,0.18),rgba(12,12,12,0.96)_35%,rgba(22,163,74,0.12))] shadow-brand/20"
                    : "border-white/10 bg-white/[0.055] shadow-black/30"
                }`}
              >
                {isBest && (
                  <div className="absolute right-5 top-5 rounded-full bg-brand px-3 py-1 text-[11px] font-black uppercase tracking-widest text-black">
                    BEST VALUE
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">{plan.planLabel ?? "Subscription"}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{plan.duration}</h3>
                  {plan.bonus && (
                    <p className="mt-2 inline-flex rounded-full border border-green-400/25 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-300">
                      {plan.bonus}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  {plan.regularPrice && (
                    <p className="text-sm font-semibold text-white/40 line-through">{plan.regularPrice}</p>
                  )}
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black tracking-tight text-white">{formatPrice(plan.price)}</span>
                    <span className="pb-2 text-sm font-bold text-white/45">USD</span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-brand">
                    {plan.monthlyEquivalent ?? `Save ${plan.save}`}
                  </p>
                  {plan.description && <p className="mt-1 text-sm text-white/55">{plan.description}</p>}
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {planFeatures.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-white/76">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={createWhatsAppPlanUrl(plan, selectedDevices)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="pricing-whatsapp"
                  className={`inline-flex h-14 items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black uppercase tracking-wider transition ${
                    isBest
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/25 hover:bg-green-400"
                      : "bg-white text-black hover:bg-brand"
                  }`}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {plan.cta}
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-black/35 p-5 text-sm text-white/70 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-green-300" />
            <span>7-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-green-300" />
            <span>Fast WhatsApp activation</span>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-brand" />
            <span>EPG and setup guidance included</span>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.045] p-6">
          <div className="mb-6 flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-brand" />
            <h3 className="text-lg font-black text-white">What happens after payment?</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="rounded-xl border border-white/10 bg-black/30 p-4">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-black text-black">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold text-white/75">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
