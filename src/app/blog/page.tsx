import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { blogPosts } from "@/lib/blog-data";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "iFlex IPTV Blog - 2026 IPTV Setup, Sports Streaming & Device Guides",
  description:
    "Read 2026 iFlex IPTV guides about live sports setup, Fire Stick, Smart TV, EPG, buffering fixes, internet speed, and choosing 1, 2, or 3 device plans.",
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
};

export default function BlogIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.brandName} Blog`,
    url: absoluteUrl("/blog"),
    description: "2026 IPTV setup, troubleshooting, device, EPG, and streaming guides.",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      url: absoluteUrl(`/blog/${post.slug}`),
      image: absoluteUrl(post.image),
    })),
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-black pt-28 pb-16 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_16%,rgba(59,130,246,0.2),transparent_25rem),radial-gradient(circle_at_80%_16%,rgba(234,179,8,0.16),transparent_24rem),linear-gradient(180deg,#020617,#000)]" />
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand">Resources & guides</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">iFlex IPTV Blog</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/68">
            Helpful 2026 IPTV guides for live sports readiness, EPG, buffering fixes, Smart TV setup, Fire Stick setup, internet speed, and active device plans.
          </p>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-brand/40">
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-brand backdrop-blur">
                    {post.category}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-white/45">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-black text-white transition group-hover:text-brand">{post.title}</h2>
                  </Link>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/60">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand">
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.055] p-8 text-center md:p-12">
            <h3 className="text-2xl font-black text-white md:text-3xl">Need help setting up?</h3>
            <p className="mt-4 text-white/62">Message iFlex IPTV support with your device, selected app, internet speed, and package questions.</p>
            <Link
              href={createWhatsAppSupportUrl("help with an IPTV setup question from the blog")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="support-whatsapp"
              className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-green-500 px-8 font-black text-white transition hover:bg-green-400"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Chat with Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
