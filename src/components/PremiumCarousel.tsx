"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { CarouselItem } from "@/lib/media";

type PremiumCarouselProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: CarouselItem[];
};

export default function PremiumCarousel({
  eyebrow,
  title,
  description,
  items,
}: PremiumCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const headingId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-carousel`;

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelected = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", updateSelected);
    emblaApi.on("reInit", updateSelected);

    return () => {
      emblaApi.off("select", updateSelected);
      emblaApi.off("reInit", updateSelected);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 5200);

    return () => window.clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-12 sm:py-16" aria-labelledby={headingId}>
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">{eyebrow}</p>
          <h2 id={headingId} className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            title={`Previous ${title}`}
            aria-label={`Previous ${title}`}
            onClick={scrollPrev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-foreground shadow-lg shadow-black/30 backdrop-blur transition hover:border-brand/50 hover:text-brand hover:shadow-brand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            title={`Next ${title}`}
            aria-label={`Next ${title}`}
            onClick={scrollNext}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-foreground shadow-lg shadow-black/30 backdrop-blur transition hover:border-brand/50 hover:text-brand hover:shadow-brand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex">
          {items.map((item) => (
            <article
              key={`${title}-${item.title}`}
              className="min-w-0 flex-[0_0_86%] pl-5 sm:flex-[0_0_48%] lg:flex-[0_0_31%]"
            >
              <Link
                href={item.href ?? "/pricing"}
                className="group relative block h-[22rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-card shadow-2xl shadow-black/30 transition duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:h-[27rem]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 86vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
                    {item.eyebrow}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/72">{item.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand">{item.meta}</span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-background shadow-lg shadow-brand/30 transition group-hover:scale-105">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={`${headingId}-dot-${index}`}
            type="button"
            aria-label={`Go to ${title} slide ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={`h-3 rounded-full transition-all ${
              selectedIndex === index ? "w-8 bg-brand" : "w-3 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
