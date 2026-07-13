"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const movies = [
  {
    image: "https://image.tmdb.org/t/p/w780/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    title: "Dune: Part Two",
    genre: "Sci-Fi · Adventure",
    quality: "4K",
  },
  {
    image: "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    title: "Oppenheimer",
    genre: "Drama · History",
    quality: "4K",
  },
  {
    image: "https://image.tmdb.org/t/p/w780/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    title: "The Batman",
    genre: "Action · Crime",
    quality: "4K",
  },
  {
    image: "https://image.tmdb.org/t/p/w780/vZloFAK7NmvMGKE7pgJWKEQb43P.jpg",
    title: "John Wick: Chapter 4",
    genre: "Action · Thriller",
    quality: "4K",
  },
  {
    image: "https://image.tmdb.org/t/p/w780/t6HIqrScl4JU2VLaUTrYk2hqLG.jpg",
    title: "Avatar: The Way of Water",
    genre: "Sci-Fi · Adventure",
    quality: "4K",
  },
  {
    image: "https://image.tmdb.org/t/p/w780/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    title: "Spider-Man: No Way Home",
    genre: "Action · Adventure",
    quality: "4K",
  },
  {
    image: "https://image.tmdb.org/t/p/w780/62HCnUTziyWcpDaBO2i1DG28p6.jpg",
    title: "Top Gun: Maverick",
    genre: "Action · Drama",
    quality: "4K",
  },
  {
    image: "https://image.tmdb.org/t/p/w780/aosm8KMQ3wyoK1BkoIaXxnhXJk2.jpg",
    title: "Interstellar",
    genre: "Sci-Fi · Drama",
    quality: "4K",
  },
  {
    image: "https://image.tmdb.org/t/p/w780/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    title: "The Dark Knight",
    genre: "Action · Crime",
    quality: "4K",
  },
  {
    image: "https://image.tmdb.org/t/p/w780/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
    title: "Stranger Things",
    genre: "Sci-Fi · Horror",
    quality: "4K",
  },
];

export default function MovieCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    return () => { emblaApi.off("select", update); emblaApi.off("reInit", update); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 4500);
    return () => window.clearInterval(id);
  }, [emblaApi]);

  return (
    <section className="relative py-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />
      </div>

      {/* Header */}
      <div className="mb-10 flex items-end justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Now Streaming</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">Trending Movies &amp; Series</h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:text-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:text-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-6 flex pl-6">
          {movies.map((movie, i) => (
            <article
              key={movie.title}
              className="relative min-w-0 flex-[0_0_85%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33%]"
            >
              <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/[0.08] bg-card shadow-2xl shadow-black/40 transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_24px_80px_-12px_rgba(212,175,55,0.15)]">
                {/* Movie poster */}
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Top-right quality badge */}
                <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-bold text-white/80 backdrop-blur-md">
                  {movie.quality}
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Play button */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/20 group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 text-white" />
                  </div>

                  {/* Genre tag */}
                  <div className="mb-2 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm">
                    {movie.genre}
                  </div>

                  <h3 className="text-xl font-bold text-white sm:text-2xl">{movie.title}</h3>

                  {/* Bottom gradient line */}
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-accent/50 via-accent/20 to-transparent" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {movies.map((_, index) => (
          <button
            key={`movie-dot-${index}`}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index ? "w-8 bg-accent" : "w-3 bg-white/15 hover:bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
