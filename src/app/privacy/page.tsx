import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how iFlex IPTV handles contact information, WhatsApp communication, cookies, and support data.",
  alternates: { canonical: absoluteUrl("/privacy") },
};

export default function PrivacyPage() {
  return (
    <main className="bg-black py-24 sm:py-32">
      <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand">Privacy</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl">Privacy Policy</h1>
        <div className="mt-10 space-y-8 text-white/68">
          <section>
            <h2 className="text-xl font-black text-white">Information We Collect</h2>
            <p className="mt-3 leading-7">When you contact iFlex IPTV, we may receive your name, email address, WhatsApp number, selected package, device type, and support details needed to help with setup.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">WhatsApp Communication</h2>
            <p className="mt-3 leading-7">Most sales and support communication happens through WhatsApp. Messages are used to answer questions, provide activation information, and resolve setup issues.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Cookies and Analytics</h2>
            <p className="mt-3 leading-7">This site may use basic cookies or analytics in the future to understand performance and conversion activity. Any future analytics should be configured with privacy in mind.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Data Retention</h2>
            <p className="mt-3 leading-7">Support records may be retained for account assistance, payment follow-up, troubleshooting, and refund review. You can request help through {siteConfig.supportEmail}.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
