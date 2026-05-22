import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "IPTV Setup Guides & Streaming Tips | iflexiptv Blog",
  description: "Read our expert guides on how to install IPTV, fix buffering, choose the best apps, and get the most out of your premium streaming subscription.",
  alternates: {
    canonical: "https://www.iflexiptv.com/blog",
  },
};

export default function BlogIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "iflexiptv Blog",
    "url": "https://www.iflexiptv.com/blog",
    "description": "Expert guides on how to install IPTV, fix buffering, choose the best apps, and get the most out of your premium streaming subscription.",
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "url": `https://www.iflexiptv.com/blog/${post.slug}`,
      "image": `https://www.iflexiptv.com${post.image}`
    }))
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-white/5">
        <div className="absolute inset-0 -z-20 bg-black">
          {/* Replace with licensed/user-provided asset. */}
          <Image
            src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2000"
            alt="Cinematic background for blog"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Resources & Guides</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">IPTV Support Blog</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Everything you need to know about setting up IPTV, fixing buffering, and finding the best channels.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="luxury-surface group flex flex-col overflow-hidden rounded-2xl hover:border-brand/40 transition-colors">
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden">
                  {/* Replace with licensed/user-provided asset. */}
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-brand backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors line-clamp-2">{post.title}</h2>
                    </Link>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                      {post.description}
                    </p>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 luxury-surface rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border-brand/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Still need help setting up?</h3>
            <p className="text-muted-foreground mb-8">Our support team is available 24/7 on WhatsApp to help you install and configure your IPTV app in minutes.</p>
            <Link
              href="https://wa.me/447988033246"
              className="button-glow-success inline-flex h-14 items-center justify-center gap-2 rounded-full bg-success px-8 text-base font-bold text-background transition hover:-translate-y-0.5 hover:bg-success-hover"
            >
              <MessageCircle className="h-5 w-5" /> Chat with Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
