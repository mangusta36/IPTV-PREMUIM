import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Read the iFlex IPTV 7-day money-back guarantee conditions and refund request process.",
  alternates: { canonical: absoluteUrl("/refund-policy") },
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-background py-24 sm:py-32">
      <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.28em] luxury-gradient-text">Refunds</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl font-serif">Refund Policy</h1>
        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-black text-white">7-Day Money-Back Guarantee</h2>
            <p className="mt-3 leading-7">iFlex IPTV offers a 7-day money-back guarantee for eligible technical issues that support cannot resolve after reasonable troubleshooting.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Conditions</h2>
            <p className="mt-3 leading-7">Refund eligibility may depend on account status, payment confirmation, support history, device compatibility, and whether the issue is caused by local internet, device limitations, or third-party apps.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">How to Request a Refund</h2>
            <p className="mt-3 leading-7">Contact support through WhatsApp or email {siteConfig.supportEmail}. Include your package, device, activation date, and a short description of the issue.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Processing Time</h2>
            <p className="mt-3 leading-7">Approved refunds are processed after support review. Processing time may vary depending on payment method and provider.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
