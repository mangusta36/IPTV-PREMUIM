import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import PricingSelector from "@/components/PricingSelector";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";
import { pricingDeviceOptions } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "iFlex IPTV Pricing - 1, 2 & 3 Device Subscription Plans",
  description:
    "Choose an iFlex IPTV plan for 1, 2, or 3 active devices. 3-month, 6-month, and 12-month IPTV subscriptions with WhatsApp activation and setup support.",
  alternates: {
    canonical: absoluteUrl("/pricing"),
  },
};

export default function PricingPage() {
  const allPlans = pricingDeviceOptions.flatMap((option) =>
    option.plans.map((plan) => ({
      "@type": "Offer",
      name: `${siteConfig.brandName} ${plan.duration} - ${option.label}`,
      price: String(plan.price),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/pricing"),
      description: `${option.label} IPTV subscription with ${siteConfig.claims.channels}, ${siteConfig.claims.vod}, EPG, and setup support.`,
    }))
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${siteConfig.brandName} IPTV Subscription`,
    description: siteConfig.defaultDescription,
    brand: {
      "@type": "Brand",
      name: siteConfig.brandName,
    },
    image: absoluteUrl(siteConfig.ogImagePath),
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "35",
      highPrice: "149",
      priceCurrency: "USD",
      offerCount: allPlans.length,
      offers: allPlans,
    },
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-black pt-28 pb-16 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(234,179,8,0.2),transparent_25rem),radial-gradient(circle_at_80%_20%,rgba(22,163,74,0.16),transparent_26rem),linear-gradient(180deg,#020617,#000)]" />
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand">Pricing by device count</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
            iFlex IPTV plans for 1, 2, or 3 active devices
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/68">
            Choose 3 months, 6 months, or the 12-month best value package. Every plan includes EPG support, setup help, and WhatsApp activation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={createWhatsAppSupportUrl("help choosing the right iFlex IPTV pricing plan")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero-whatsapp"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-green-500 px-8 font-black text-white transition hover:bg-green-400"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Ask on WhatsApp
            </Link>
            <Link
              href="#plans"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 font-black text-white transition hover:border-brand/40 hover:text-brand"
            >
              Compare Plans
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <div id="plans" className="scroll-mt-24">
        <PricingSelector />
      </div>

      <section className="bg-black pb-20">
        <div className="container mx-auto grid gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
            <Smartphone className="mb-4 h-7 w-7 text-brand" />
            <h2 className="font-black text-white">Device-based clarity</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Install on supported devices. Active streams depend on your selected 1, 2, or 3 device package.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
            <ShieldCheck className="mb-4 h-7 w-7 text-green-300" />
            <h2 className="font-black text-white">7-day guarantee</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              If a technical issue cannot be resolved by support, you can request a refund within the policy window.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
            <Sparkles className="mb-4 h-7 w-7 text-blue-300" />
            <h2 className="font-black text-white">Setup included</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              WhatsApp support helps with app setup, playlist login, EPG refreshes, and basic troubleshooting.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
