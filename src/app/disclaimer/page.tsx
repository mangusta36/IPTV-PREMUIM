import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Read the iFlex IPTV independence, availability, and affiliation disclaimer.",
  alternates: { canonical: absoluteUrl("/disclaimer") },
};

export default function DisclaimerPage() {
  return (
    <main className="bg-background py-24 sm:py-32">
      <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.28em] luxury-gradient-text">Disclaimer</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl font-serif">Service Disclaimer</h1>
        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-black text-white">Independent Service</h2>
            <p className="mt-3 leading-7">{siteConfig.legalDisclaimer}</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Availability May Vary</h2>
            <p className="mt-3 leading-7">Channel categories, VOD titles, EPG data, and streaming quality can vary by package, region, device, app, and internet connection.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">No Partnership Claims</h2>
            <p className="mt-3 leading-7">References to sports, movies, live TV, or entertainment categories are descriptive only and do not imply official endorsement, sponsorship, or partnership.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
