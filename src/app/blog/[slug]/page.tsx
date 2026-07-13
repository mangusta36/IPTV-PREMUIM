import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { blogPosts } from "@/lib/blog-data";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((item) => item.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.seoTitle ?? post.title} | iFlex IPTV Blog`,
    description: post.metaDescription ?? post.description,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
    openGraph: {
      title: post.ogTitle ?? post.title,
      description: post.ogDescription ?? post.metaDescription ?? post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [{ url: absoluteUrl(post.image), width: 1200, height: 630, alt: post.title }],
      type: "article",
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function renderInline(text: string) {
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*.*?\*\*)/g);
  return tokens.map((token, index) => {
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <Link key={index} href={link[2]} className="font-semibold text-accent underline-offset-4 hover:underline">
          {link[1]}
        </Link>
      );
    }

    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-white">
          {token.slice(2, -2)}
        </strong>
      );
    }

    return token;
  });
}

function renderContent(content: string) {
  return content.trim().split("\n\n").map((block, index) => {
    if (block.startsWith("## ")) {
      return <h2 key={index} className="mt-10 mb-4 font-serif text-2xl font-black text-white">{block.replace("## ", "")}</h2>;
    }

    if (block.startsWith("### ")) {
      return <h3 key={index} className="mt-8 mb-3 font-serif text-xl font-black text-white">{block.replace("### ", "")}</h3>;
    }

    if (block.startsWith("- ")) {
      return (
        <ul key={index} className="mb-6 list-disc space-y-2 pl-6 leading-7 text-white/68">
          {block.split("\n").filter((item) => item.startsWith("- ")).map((item) => (
            <li key={item}>{renderInline(item.replace("- ", ""))}</li>
          ))}
        </ul>
      );
    }

    if (/^\d+\./.test(block)) {
      return (
        <ol key={index} className="mb-6 list-decimal space-y-2 pl-6 leading-7 text-white/68">
          {block.split("\n").filter((item) => /^\d+\./.test(item)).map((item) => (
            <li key={item}>{renderInline(item.replace(/^\d+\.\s/, ""))}</li>
          ))}
        </ol>
      );
    }

    if (block.includes("|") && block.split("\n").length >= 3) {
      const rows = block.split("\n").filter((row) => row.trim());
      if (rows[1]?.includes("---")) {
        const headers = rows[0].split("|").map((cell) => cell.trim()).filter(Boolean);
        const dataRows = rows.slice(2);
        return (
          <div key={index} className="mb-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[34rem] text-sm">
              <thead className="bg-card/80">
                <tr>
                  {headers.map((header) => (
                    <th key={header} className="px-4 py-3 text-left font-black text-white">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row) => (
                  <tr key={row} className="border-t border-border">
                    {row.split("|").map((cell) => cell.trim()).filter(Boolean).map((cell) => (
                      <td key={cell} className="px-4 py-3 text-white/68">{renderInline(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }

    return (
      <p key={index} className="mb-6 leading-8 text-white/68">
        {block.split("\n").map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`}>
            {renderInline(line)}
            {lineIndex < block.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((item) => item.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription ?? post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl(post.image),
    author: {
      "@type": "Organization",
      name: siteConfig.brandName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logoPath),
      },
    },
  };
  const schema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@graph": [
          blogSchema,
          {
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ],
      }
    : blogSchema;

  return (
    <>
      <SchemaMarkup schema={schema} />

      <article className="bg-background pb-20">
        <section className="relative isolate overflow-hidden bg-background noise-overlay pt-24 pb-16 sm:pt-32 sm:pb-24">
          <Image
            src="https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt=""
            fill
            unoptimized
            priority
            sizes="100vw"
            className="-z-30 object-cover opacity-20"
          />
          <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-navy/80 via-navy/50 to-navy" />
          <div className="pointer-events-none absolute inset-0 -z-19 bg-gradient-to-r from-navy/90 via-navy/40 to-navy/60" />

          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-accent hover:text-accent-hover">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="mb-4 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-accent">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              <span className="font-serif luxury-gradient-text">{post.title}</span>
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/55">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
              <span>•</span>
              <span>By iFlex IPTV Team</span>
            </div>
          </div>
        </section>

        <div className="container mx-auto mt-12 grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_22rem] lg:px-8">
          <div>
            <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-border">
              <Image src={post.image} alt={post.title} fill unoptimized sizes="(min-width: 1024px) 62vw, 92vw" className="object-cover" />
            </div>
            <p className="mb-10 border-l-4 border-accent pl-6 text-xl font-semibold leading-8 text-white/88">{post.description}</p>
            {renderContent(post.content)}

            {post.imagePlan?.length ? (
              <section className="mt-12">
                <h2 className="mb-5 font-serif text-2xl font-black text-white">Recommended Images &amp; Media Plan</h2>
                <div className="space-y-4">
                  {post.imagePlan.map((item) => (
                    <div key={item.filename} className="rounded-2xl border border-border bg-card/50 p-5">
                      <h3 className="font-serif text-lg font-black text-white">{item.filename}</h3>
                      <dl className="mt-3 grid gap-3 text-sm leading-6 text-white/68 sm:grid-cols-2">
                        <div>
                          <dt className="font-semibold text-white">Placement</dt>
                          <dd>{item.placement}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-white">Purpose</dt>
                          <dd>{item.purpose}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-white">Aspect ratio</dt>
                          <dd>{item.aspectRatio}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-white">Loading</dt>
                          <dd>{item.loading}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-white">Alt text</dt>
                          <dd>{item.alt}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-white">Caption</dt>
                          <dd>{item.caption}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-white">Image type</dt>
                          <dd>{item.imageType}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-white">File size target</dt>
                          <dd>{item.sizeTarget}</dd>
                        </div>
                      </dl>
                      <p className="mt-4 rounded-xl bg-background/80 p-4 text-sm leading-6 text-white/62">{item.prompt}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {post.faqs?.length ? (
              <section className="mt-12">
                <h2 className="mb-5 font-serif text-2xl font-black text-white">FAQs</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl border border-border bg-card/50 p-5">
                      <h3 className="font-serif text-lg font-black text-white">{faq.question}</h3>
                      <p className="mt-2 leading-7 text-white/68">{renderInline(faq.answer)}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="mt-14 rounded-2xl border border-border bg-card/50 p-8">
              <h2 className="font-serif text-2xl font-black text-white">Need help with this setup?</h2>
              <p className="mt-3 leading-7 text-white/64">Message iFlex IPTV support with your device, app, internet speed, and the article topic you are following.</p>
              <Link
                href={createWhatsAppSupportUrl(`help with ${post.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="support-whatsapp"
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 font-black text-background transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Message Support
              </Link>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h2 className="font-serif text-lg font-black text-white">Related guides</h2>
              <div className="mt-5 space-y-4">
                {blogPosts.filter((item) => item.slug !== post.slug).slice(0, 4).map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="block rounded-xl border border-border bg-background/50 p-4 transition hover:border-accent/40">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">{item.category}</p>
                    <h3 className="mt-2 text-sm font-black leading-5 text-white">{item.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
