import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { premiumImages } from "@/lib/media";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "iFlex IPTV FAQ - Setup, Pricing, Devices & Support",
  description: "Read iFlex IPTV FAQ answers about setup, buffering, live channels, VOD titles, active device plans, refunds, and support.",
  alternates: {
    canonical: absoluteUrl("/faq"),
  },
};

const faqs = [
  {
    question: "What is iFlex IPTV?",
    answer: `iFlex IPTV is a premium IPTV subscription service with ${siteConfig.claims.channels}, ${siteConfig.claims.vod}, EPG support, HD/FHD/4K quality where available, and setup help for major devices.`,
  },
  {
    question: "What devices do you support?",
    answer: "We support almost all devices including Smart TVs (Samsung, LG, Android TV), Amazon Firestick, MAG boxes, Apple TV, iOS, Android devices, and Windows/Mac computers.",
  },
  {
    question: "Will I experience freezing or buffering?",
    answer: "Streaming quality depends on your internet speed, device, app, and connection stability. We help you check practical fixes like Ethernet, cache clearing, EPG refreshes, and app setup.",
  },
  {
    question: "How long does it take to get my account?",
    answer: "Activation details are prepared after payment confirmation and package/device details are collected. WhatsApp is the fastest support channel.",
  },
  {
    question: "Can I use my subscription on multiple devices?",
    answer: siteConfig.claims.devicePolicy,
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes! We offer a 7-day money-back guarantee if you experience technical issues that our support team cannot resolve.",
  },
];

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <div>
        <section className="relative isolate overflow-hidden bg-background noise-overlay pt-24 pb-16 sm:pt-32 sm:pb-24">
          <Image
            src={premiumImages.faqHero}
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="-z-30 object-cover opacity-20"
          />
          <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          <div className="pointer-events-none absolute inset-0 -z-19 bg-gradient-to-r from-background/90 via-background/40 to-background/60" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Clear answers</p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl font-serif">Frequently Asked Questions</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">Find answers to common questions about our premium IPTV service.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqs} />

              <div className="mt-16 luxury-surface rounded-[1.5rem] p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">24/7 support</p>
                <h2 className="mt-3 text-2xl font-bold mb-4">Still have questions?</h2>
                <p className="text-muted-foreground mb-6">Our dedicated support team is available 24/7 to help you with any issues.</p>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-[#c9a227] px-6 text-sm font-bold text-background transition hover:-translate-y-0.5"
                >
                  Contact Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
