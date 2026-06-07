import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the iFlex IPTV terms covering service usage, account responsibility, payment terms, support limits, and availability.",
  alternates: { canonical: absoluteUrl("/terms") },
};

export default function TermsPage() {
  return (
    <main className="bg-black py-24 sm:py-32">
      <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand">Legal</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl">Terms of Service</h1>
        <div className="mt-10 space-y-8 text-white/68">
          <section>
            <h2 className="text-xl font-black text-white">Service Usage</h2>
            <p className="mt-3 leading-7">iFlex IPTV provides IPTV subscription access, setup guidance, and support. Channel categories, quality, and availability may vary by package, device, region, and network conditions.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Account Responsibility</h2>
            <p className="mt-3 leading-7">You are responsible for keeping login details private and using your selected active device plan appropriately. Sharing account details may interrupt service or require support review.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Payments and Activation</h2>
            <p className="mt-3 leading-7">Payment instructions are provided through official iFlex IPTV support channels. Activation details are sent after payment confirmation and device/package details are collected.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Support Limits</h2>
            <p className="mt-3 leading-7">Support can help with common setup, login, EPG, and troubleshooting questions. We cannot control third-party apps, device firmware, ISP routing, or every regional network condition.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Availability</h2>
            <p className="mt-3 leading-7">{siteConfig.legalDisclaimer}</p>
          </section>
        </div>
      </article>
    </main>
  );
}
