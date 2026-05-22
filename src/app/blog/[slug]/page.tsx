import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import SchemaMarkup from "@/components/SchemaMarkup";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | iflexiptv Blog`,
    description: post.description,
    alternates: {
      canonical: `https://www.iflexiptv.com/blog/${post.slug}`,
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Proper markdown parser for blog content
function renderContent(content: string) {
  const blocks = content.trim().split("\n\n");
  
  return blocks.map((block, index) => {
    // H3 headings
    if (block.startsWith("### ")) {
      return <h3 key={index} className="text-xl font-bold mt-8 mb-3 text-foreground">{block.replace("### ", "")}</h3>;
    }

    // H2 headings
    if (block.startsWith("## ")) {
      return <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">{block.replace("## ", "")}</h2>;
    }
    
    // Unordered list
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter(i => i.startsWith("- "));
      return (
        <ul key={index} className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground leading-relaxed">
          {items.map((item, i) => {
            const text = item.replace("- ", "");
            const parts = text.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={i}>
                {parts.map((part, j) => (j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part))}
              </li>
            );
          })}
        </ul>
      );
    }
    
    // Ordered list
    if (/^\d+\./.test(block)) {
      const items = block.split("\n").filter(i => /^\d+\./.test(i));
      return (
        <ol key={index} className="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground leading-relaxed">
           {items.map((item, i) => {
            const text = item.replace(/^\d+\.\s/, "");
            const parts = text.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={i}>
                {parts.map((part, j) => (j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part))}
              </li>
            );
          })}
        </ol>
      );
    }

    // Table support (pipe-separated)
    if (block.includes("|") && block.split("\n").length >= 3) {
      const rows = block.split("\n").filter(r => r.trim());
      if (rows.length >= 2 && rows[1]?.includes("---")) {
        const headers = rows[0].split("|").map(h => h.trim()).filter(Boolean);
        const dataRows = rows.slice(2);
        return (
          <div key={index} className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-white/5">
                  {headers.map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left font-bold text-foreground border-b border-white/10">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, i) => {
                  const cells = row.split("|").map(c => c.trim()).filter(Boolean);
                  return (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/3">
                      {cells.map((cell, j) => {
                        const parts = cell.split(/\*\*(.*?)\*\*/g);
                        return (
                          <td key={j} className="px-4 py-3 text-muted-foreground">
                            {parts.map((part, k) => (k % 2 === 1 ? <strong key={k} className="text-foreground font-semibold">{part}</strong> : part))}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
    }

    // Default paragraph with bold support
    const lines = block.split("\n");
    return (
      <p key={index} className="mb-6 text-muted-foreground leading-relaxed">
        {lines.map((line, i) => {
           const parts = line.split(/\*\*(.*?)\*\*/g);
           return (
             <span key={i}>
               {parts.map((part, j) => (j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part))}
               {i < lines.length - 1 && <br />}
             </span>
           );
        })}
      </p>
    );
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "url": `https://www.iflexiptv.com/blog/${post.slug}`,
    "image": `https://www.iflexiptv.com${post.image}`,
    "author": {
      "@type": "Organization",
      "name": "iflexiptv"
    }
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <article className="pb-20">
        {/* Post Hero */}
        <section className="relative isolate pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-white/5">
          <div className="absolute inset-0 -z-20 bg-black">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover opacity-20 blur-sm"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/90 to-background/60" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-brand mb-4">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-white/20"></span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              <span>•</span>
              <span>By iflexiptv Team</span>
            </div>
          </div>
        </section>

        {/* Content & Sidebar Layout */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-white/90 leading-relaxed mb-10 font-medium border-l-4 border-brand pl-6">
                  {post.description}
                </p>
                {renderContent(post.content)}
              </div>

              {/* In-article CTA */}
              <div className="mt-16 bg-brand/10 border border-brand/20 rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">Ready to cut the cord?</h3>
                  <p className="text-muted-foreground text-sm">Join thousands of users enjoying zero-buffering IPTV.</p>
                </div>
                <Link
                  href="https://wa.me/447988033246"
                  className="button-glow-success whitespace-nowrap inline-flex h-12 items-center justify-center gap-2 rounded-full bg-success px-6 text-sm font-bold text-background transition hover:-translate-y-0.5 hover:bg-success-hover"
                >
                  <MessageCircle className="h-4 w-4" /> Start Free Trial
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Support Card */}
                <div className="luxury-surface rounded-2xl p-6 border-t-4 border-t-success">
                  <h3 className="text-lg font-bold mb-3">Need Setup Help?</h3>
                  <p className="text-sm text-muted-foreground mb-6">Our WhatsApp support team is online 24/7. We can help you install apps on any device.</p>
                  <Link
                    href="https://wa.me/447988033246"
                    className="flex w-full h-12 items-center justify-center gap-2 rounded-xl bg-success/20 text-success font-bold transition-colors hover:bg-success hover:text-background"
                  >
                    <MessageCircle className="h-4 w-4" /> Message Support
                  </Link>
                </div>

                {/* Popular Posts */}
                <div className="luxury-surface rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Related Guides</h3>
                  <ul className="space-y-4">
                    {blogPosts.filter(p => p.slug !== post.slug).slice(0, 4).map((p) => (
                      <li key={p.slug} className="group">
                        <Link href={`/blog/${p.slug}`} className="flex gap-4 items-center">
                          <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md">
                            <Image src={p.image} alt={p.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold line-clamp-2 group-hover:text-brand transition-colors">{p.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{p.readTime}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
            
          </div>
        </div>
      </article>
    </>
  );
}
