import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact iFlex IPTV Support",
  description:
    "Contact iFlex IPTV support for pricing help, WhatsApp activation, IPTV setup guidance, troubleshooting, and device support.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <main className="bg-black">
      <section className="relative isolate overflow-hidden border-b border-white/10 pt-28 pb-16 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_18%,rgba(22,163,74,0.18),transparent_24rem),radial-gradient(circle_at_78%_20%,rgba(234,179,8,0.16),transparent_24rem),linear-gradient(180deg,#020617,#000)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand">Contact support</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-6xl">Get help from iFlex IPTV</h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              For the fastest response, message us on WhatsApp. We can help with plan selection, device setup, activation, EPG, and troubleshooting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6">
              <WhatsAppIcon className="mb-4 h-9 w-9 text-green-300" />
              <h2 className="text-xl font-black text-white">WhatsApp Support</h2>
              <p className="mt-2 text-sm leading-6 text-white/62">Recommended for activation, pricing questions, and device setup guidance.</p>
              <Link
                href={createWhatsAppSupportUrl("support with my iFlex IPTV setup")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="support-whatsapp"
                className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-6 font-black text-white transition hover:bg-green-400"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Message WhatsApp
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6">
              <Mail className="mb-4 h-8 w-8 text-brand" />
              <h2 className="text-xl font-black text-white">Email</h2>
              <p className="mt-2 text-sm leading-6 text-white/62">Use email for non-urgent account or policy questions.</p>
              <a href={`mailto:${siteConfig.supportEmail}`} className="mt-4 inline-block font-bold text-brand hover:text-brand-hover">
                {siteConfig.supportEmail}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 sm:p-8">
            <h2 className="text-2xl font-black text-white">What we can help with</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: MessageSquare, title: "Plan selection", text: "Choose 1, 2, or 3 active device plans." },
                { icon: Clock, title: "Fast activation", text: "Receive payment instructions and activation details." },
                { icon: ShieldCheck, title: "Troubleshooting", text: "Get help with login, EPG, buffering checks, and app setup." },
                { icon: Mail, title: "Policy questions", text: "Ask about refunds, support scope, and account details." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-white/10 bg-black/30 p-5">
                    <Icon className="mb-4 h-6 w-6 text-brand" />
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 rounded-xl border border-brand/20 bg-brand/10 p-4 text-sm leading-6 text-white/68">
              There is no fake contact form here. Until a real backend or email provider is connected, WhatsApp and email are the reliable contact methods.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
