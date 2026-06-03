import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  MonitorPlay,
  Play,
  Star,
  Tv,
  MessageCircle,
  Trophy,
  Film,
  Smartphone,
  Calendar,
  Clock,
  Zap,
  Shield,
  Infinity,
} from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import EmblaSlider from "@/components/EmblaSlider";
import AnimatedLogos from "@/components/AnimatedLogos";
import { blogPosts } from "@/lib/blog-data";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iflexiptv",
    url: "https://www.iflexiptv.pro",
    logo: "https://www.iflexiptv.pro/logo.png",
    description: "Premium IPTV subscription service offering 4K/FHD channels, sports, and VODs.",
  };

  const featureCards = [
    {
      badge: "Live 24/7",
      title: "Every Big Match. Zero Miss.",
      description:
        "Premier League, Champions League, UFC, F1, NBA — all in crystal-clear 4K UHD with anti-freeze servers.",
      image: "/imgs/bg_sliders/bg_slider_1.webp",
      cta: "Watch Live Sports",
    },
    {
      badge: "100K+ Titles",
      title: "Movies & Series Every Night.",
      description:
        "An endless cinema of blockbusters, award-winning series, Arabic dramas, and kids shows. Updated daily.",
      image: "/imgs/movies/movie_1.webp",
      cta: "Browse VOD Library",
    },
    {
      badge: "5-Min Setup",
      title: "Works on Every Screen.",
      description:
        "Smart TV, Firestick, iPhone, Android, PC, MAG box — one subscription, unlimited screens.",
      image: "/imgs/bg_sliders/bg_slider_2.webp",
      cta: "See All Devices",
    },
  ];

  const devices = [
    {
      name: "Smart TV",
      difficulty: "Easy",
      icon: <Tv className="h-8 w-8" style={{ color: "#F2C847" }} />,
      image: "/imgs/bg_sliders/bg_slider_3.webp",
    },
    {
      name: "Firestick",
      difficulty: "Easy",
      icon: <MonitorPlay className="h-8 w-8" style={{ color: "#F2C847" }} />,
      image: "/imgs/movies/movie_2.webp",
    },
    {
      name: "Apple TV",
      difficulty: "Easy",
      icon: <Tv className="h-8 w-8" style={{ color: "#F2C847" }} />,
      image: "/imgs/movies/movie_3.webp",
    },
    {
      name: "Smartphones",
      difficulty: "Very Easy",
      icon: <Smartphone className="h-8 w-8" style={{ color: "#F2C847" }} />,
      image: "/imgs/movies/movie_4.webp",
    },
  ];

  const pricingPlans = [
    {
      months: "3 Months",
      price: "€34",
      perMonth: "€11.66/mo",
      tag: null,
      tagType: "none",
      image: "/imgs/movies/movie_5.webp",
      features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Tech", "24/7 Support"],
      cta: "Get Started",
    },
    {
      months: "6 Months",
      price: "€49",
      perMonth: "€8.33/mo",
      tag: "Most Popular",
      tagType: "popular",
      image: "/imgs/movies/movie_6.webp",
      features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Tech", "24/7 Support"],
      cta: "Get Popular Plan",
    },
    {
      months: "12 Months",
      price: "€67",
      perMonth: "€6.67/mo",
      tag: "Best Value",
      tagType: "best",
      image: "/imgs/movies/movie_7.webp",
      features: ["26,000+ Live Channels", "100,000+ VODs", "4K & FHD Quality", "Anti-Freeze Tech", "24/7 Priority Support"],
      cta: "Get Best Value",
    },
  ];

  const latestPosts = blogPosts.slice(0, 4);

  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* ─────────────────────────────────────────────────────────
          GLOBAL LUXURY DESIGN TOKENS
      ───────────────────────────────────────────────────────── */}
      <style>{`
        /* ── Gold palette ── */
        :root {
          --g1: #C9A020;
          --g2: #F2C847;
          --g3: #F9E08A;
          --ink: #05050A;
          --s1:  #08080F;
          --s2:  #0B0B16;
        }

        /* ── Grain overlay ── */
        .grain::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 160px 160px;
        }

        /* ── Gold shimmer line ── */
        .gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(242,200,71,0.5) 30%, rgba(249,224,138,0.8) 50%, rgba(242,200,71,0.5) 70%, transparent 100%);
        }

        /* ── Ambient glow orb ── */
        .g-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(242,200,71,0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Gold text gradient ── */
        .tg {
          background: linear-gradient(130deg, #C9A020 0%, #F2C847 40%, #F9E08A 65%, #C9A020 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Gold badge ── */
        .gold-badge {
          background: linear-gradient(130deg, #F2C847 0%, #F9E08A 50%, #C9A020 100%);
          color: #07070D;
          box-shadow: 0 0 18px rgba(242,200,71,0.5), inset 0 1px 0 rgba(255,255,255,0.4);
        }

        /* ── Primary gold button ── */
        .btn-gold {
          background: linear-gradient(130deg, #F2C847 0%, #F9E08A 45%, #C9A020 100%);
          color: #07070D;
          font-weight: 800;
          box-shadow: 0 4px 22px rgba(242,200,71,0.45), inset 0 1px 0 rgba(255,255,255,0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-gold::before {
          content:"";
          position:absolute;
          inset:0;
          border-radius:inherit;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%);
          background-size: 250% 100%;
          background-position: 200% 0;
          animation: sheen 3.5s ease-in-out infinite;
        }
        @keyframes sheen {
          0%,55%  { background-position: 200% 0; }
          100%    { background-position: -200% 0; }
        }
        .btn-gold:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 36px rgba(242,200,71,0.65), inset 0 1px 0 rgba(255,255,255,0.35);
        }

        /* ── Ghost gold button ── */
        .btn-ghost {
          background: rgba(242,200,71,0.06);
          border: 1px solid rgba(242,200,71,0.28);
          color: #F2C847;
          transition: all 0.3s ease;
        }
        .btn-ghost:hover {
          transform: translateY(-3px);
          background: rgba(242,200,71,0.12);
          border-color: rgba(242,200,71,0.55);
          box-shadow: 0 0 28px rgba(242,200,71,0.22);
        }

        /* ── Card hover ── */
        .card-hover {
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
        }
        .card-hover:hover {
          border-color: rgba(242,200,71,0.45) !important;
          box-shadow: 0 0 50px rgba(242,200,71,0.14), 0 24px 64px rgba(0,0,0,0.75) !important;
          transform: translateY(-6px);
        }

        /* ── Section heading ornament ── */
        .orn {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }
        .orn-line {
          flex: 1;
          max-width: 48px;
          height: 1px;
        }
        .orn-line-l { background: linear-gradient(90deg, transparent, rgba(242,200,71,0.55)); }
        .orn-line-r { background: linear-gradient(90deg, rgba(242,200,71,0.55), transparent); }

        /* ── Feature card bottom glow layer ── */
        .feat-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(to top, rgba(242,200,71,0.07) 0%, transparent 55%);
          pointer-events: none;
          z-index: 3;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .feat-card:hover::after { opacity: 1; }

        /* ─────────────────────────────────────────
           PRICING SECTION  —  full rebuild
        ───────────────────────────────────────── */

        /* Container */
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .pricing-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }

        /* Base card */
        .p-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .p-card:hover { transform: translateY(-8px); }

        /* ── Standard card ── */
        .p-card-std {
          background: linear-gradient(160deg, #0C0C18 0%, #08080F 100%);
          border: 1px solid rgba(242,200,71,0.12);
          box-shadow: 0 8px 40px rgba(0,0,0,0.55);
        }
        .p-card-std:hover {
          border-color: rgba(242,200,71,0.32);
          box-shadow: 0 20px 64px rgba(0,0,0,0.7), 0 0 40px rgba(242,200,71,0.12);
        }

        /* ── Popular card ── */
        .p-card-pop {
          background: linear-gradient(160deg, #10101E 0%, #0C0C18 100%);
          box-shadow: 0 8px 48px rgba(0,0,0,0.6), 0 0 32px rgba(242,200,71,0.12);
        }
        .p-card-pop::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1.5px;
          background: linear-gradient(160deg, rgba(242,200,71,0.7), rgba(249,224,138,0.35) 50%, rgba(201,160,32,0.6));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 10;
        }
        .p-card-pop:hover {
          box-shadow: 0 24px 80px rgba(0,0,0,0.75), 0 0 60px rgba(242,200,71,0.25);
        }

        /* ── Best value card ── */
        .p-card-best {
          background: linear-gradient(155deg, #0F0D08 0%, #0C0A06 50%, #0F0D08 100%);
          box-shadow: 0 0 80px rgba(242,200,71,0.22), 0 24px 80px rgba(0,0,0,0.7);
        }
        .p-card-best::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, #F2C847 0%, #F9E08A 30%, #C9A020 60%, #F2C847 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 10;
        }
        .p-card-best:hover {
          box-shadow: 0 0 100px rgba(242,200,71,0.35), 0 32px 100px rgba(0,0,0,0.8);
        }
        /* Animated gold top bar for best card */
        .p-card-best .p-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #C9A020, #F2C847 25%, #F9E08A 50%, #F2C847 75%, #C9A020);
          background-size: 200% 100%;
          animation: topbar-move 3s linear infinite;
          z-index: 11;
        }
        @keyframes topbar-move {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        /* Card image overlay */
        .p-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .p-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.98) 100%);
        }

        /* Card content */
        .p-body {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 32px 28px 28px;
        }

        /* Price display */
        .p-price-num {
          font-size: 3.25rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.03em;
          color: white;
        }
        .p-card-best .p-price-num { background: linear-gradient(135deg, #F2C847, #F9E08A 50%, #C9A020); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        /* Savings ribbon for best/popular */
        .p-savings {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: rgba(242,200,71,0.12);
          border: 1px solid rgba(242,200,71,0.3);
          color: #F2C847;
          width: fit-content;
        }
        .p-card-best .p-savings {
          background: rgba(242,200,71,0.18);
          border-color: rgba(242,200,71,0.5);
          box-shadow: 0 0 12px rgba(242,200,71,0.2);
        }

        /* Feature list row */
        .p-feat {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255,255,255,0.78);
          padding: 5px 0;
        }
        .p-feat-icon {
          width: 18px; height: 18px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .p-feat-icon-std {
          background: rgba(242,200,71,0.1);
          border: 1px solid rgba(242,200,71,0.25);
        }
        .p-feat-icon-best {
          background: rgba(242,200,71,0.2);
          border: 1px solid rgba(242,200,71,0.45);
          box-shadow: 0 0 8px rgba(242,200,71,0.25);
        }

        /* Divider in pricing card */
        .p-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(242,200,71,0.2) 50%, transparent);
          margin: 20px 0;
        }
        .p-card-best .p-divider {
          background: linear-gradient(90deg, transparent, rgba(242,200,71,0.45) 50%, transparent);
        }

        /* Pricing note at bottom */
        .pricing-note {
          text-align: center;
          margin-top: 36px;
          font-size: 0.8125rem;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .pricing-note span {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
      `}</style>

      {/* ══════════════════════════════════════════════════
          1 · HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="grain relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28 min-h-[90vh] flex items-center"
        style={{ background: "#05050A" }}
      >
        <div className="g-orb" style={{ width: 700, height: 700, top: "-15%", right: "-8%", opacity: 0.8 }} />
        <div className="g-orb" style={{ width: 450, height: 450, bottom: "-5%", left: "-8%", opacity: 0.5 }} />

        {/* Background Image (replacing video with static image) */}
        <div className="absolute inset-0 -z-20 bg-black">
          <Image
            src="/imgs/bg_sliders/bg_slider_1.webp"
            alt="Hero background"
            fill
            className="object-cover opacity-35"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#05050A] via-[#05050A]/55 to-[#05050A]/10" />
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 65% 55% at 72% 18%, rgba(242,200,71,0.09), transparent)" }} />

        <div className="gold-line absolute top-0 left-0 right-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left" style={{ position: "relative", zIndex: 5 }}>
          <div className="max-w-4xl mx-auto md:mx-0">

            {/* Pill badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, rgba(242,200,71,0.12), rgba(242,200,71,0.04))",
                border: "1px solid rgba(242,200,71,0.35)",
                color: "#F2C847",
                boxShadow: "0 0 24px rgba(242,200,71,0.18), inset 0 1px 0 rgba(242,200,71,0.15)"
              }}>
              <Star className="h-4 w-4 fill-[#F2C847] text-[#F2C847]" />
              The Ultimate IPTV Experience
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ lineHeight: 1.08 }}>
              Every Match. Every Movie.{" "}
              <span className="tg">Zero Buffering.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 sm:text-xl mx-auto md:mx-0 font-medium"
              style={{ color: "rgba(255,255,255,0.68)" }}>
              Join thousands of cord-cutters. Get instant access to 26,000+ live premium channels, live sports in 4K, and a massive VOD library.
            </p>

            <div className="mt-11 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link href="https://wa.me/447988033246"
                className="btn-gold relative inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-9 text-base tracking-wide">
                <MessageCircle className="h-5 w-5" style={{ position: "relative", zIndex: 1 }} />
                <span style={{ position: "relative", zIndex: 1 }}>Start Free Trial Now</span>
              </Link>
              <Link href="/channels"
                className="btn-ghost inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-9 text-base font-semibold">
                View Channel List
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-11 flex flex-wrap items-center justify-center md:justify-start gap-7 text-sm font-semibold uppercase tracking-wider"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" style={{ color: "#F2C847" }} />
                Anti-Freeze Servers
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" style={{ color: "#F2C847" }} />
                4K &amp; FHD Quality
              </span>
            </div>
          </div>
        </div>

        <div className="gold-line absolute bottom-0 left-0 right-0" />
      </section>

      {/* ══════════════════════════════════════════════════
          2 · ANIMATED LOGOS
      ══════════════════════════════════════════════════ */}
      <div style={{

        borderTop: "1px solid rgba(242,200,71,0.07)",
        borderBottom: "1px solid rgba(242,200,71,0.07)"
      }}>
        <AnimatedLogos />
      </div>

      {/* ══════════════════════════════════════════════════
          3 · LIVE SPORTS SLIDER
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-20 sm:py-28 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #080810 0%, #050510 100%)" }}>
        <div className="g-orb" style={{ width: 700, height: 500, top: "-20%", right: "-10%", opacity: 0.65 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" style={{ position: "relative", zIndex: 5 }}>
          <div className="mb-14">
            <div className="orn">
              <div className="orn-line orn-line-l" />
              <Trophy style={{ width: 14, height: 14, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl text-white flex items-center gap-3">
              <Trophy className="h-8 w-8" style={{ color: "#F2C847" }} />
              Live <span className="tg" style={{ marginLeft: 8 }}>Sports Hub</span>
            </h2>
            <p className="mt-2" style={{ color: "rgba(255,255,255,0.48)" }}>Never miss a kickoff, punch, or pole position.</p>
          </div>

          <EmblaSlider delay={3500}>
            {[
              { title: "World Cup 2030", img: "/imgs/sports/bg1.webp" },
              { title: "Champions League", img: "/imgs/sports/bg2.jpg" },
              { title: "La Liga", img: "/imgs/sports/bg3.jpg" },
              { title: "Premier League", img: "/imgs/sports/bg4.jpg" },
              { title: "UFC & Boxing",img: "/imgs/sports/bg5.jpg" },
            ].map((card, i) => (
              <div key={i} className="card-hover relative aspect-video overflow-hidden rounded-2xl group"
                style={{ border: "1px solid rgba(242,200,71,0.12)", background: "#0B0B14", boxShadow: "0 8px 40px rgba(0,0,0,0.55)" }}>
                <div className="absolute inset-0 bg-black/30 z-10 transition-colors group-hover:bg-transparent" />
                <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" quality={85} />
                <div className="absolute inset-0 z-20 flex items-end p-6"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3) 50%, transparent)" }}>
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg,#F2C847,#C9A020)", boxShadow: "0 0 18px rgba(242,200,71,0.6)" }}>
                      <Play className="h-4 w-4 text-black fill-current" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">{card.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </EmblaSlider>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4 · MOVIES & SERIES SLIDER
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-20 overflow-hidden"
        style={{ background: "#05050A", borderTop: "1px solid rgba(242,200,71,0.07)", borderBottom: "1px solid rgba(242,200,71,0.07)" }}>
        <div className="g-orb" style={{ width: 500, height: 500, bottom: "-20%", left: "-5%", opacity: 0.45 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" style={{ position: "relative", zIndex: 5 }}>
          <div className="mb-14">
            <div className="orn">
              <div className="orn-line orn-line-l" />
              <Film style={{ width: 14, height: 14, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl text-white flex items-center gap-3">
              <Film className="h-8 w-8" style={{ color: "#F2C847" }} />
              Premium <span className="tg" style={{ marginLeft: 8 }}>Cinema</span>
            </h2>
            <p className="mt-2" style={{ color: "rgba(255,255,255,0.48)" }}>100,000+ VODs updated daily. Your home theater awaits.</p>
          </div>

          <EmblaSlider delay={4000}>
            {[
              { title: "Blockbuster Action", img: "/imgs/movies/movie_1.webp", badge: "4K UHD" },
              { title: "Crime & Drama", img: "/imgs/movies/movie_2.webp", badge: "HDR" },
              { title: "Arabic Series", img: "/imgs/movies/movie_3.webp", badge: "NEW" },
              { title: "Sci-Fi Fantasy", img: "/imgs/movies/movie_4.webp", badge: "4K UHD" },
              { title: "Family & Kids", img: "/imgs/movies/movie_5.webp", badge: "HD" },
            ].map((card, i) => (
              <div key={i} className="card-hover relative aspect-[3/4] overflow-hidden rounded-2xl group"
                style={{ border: "1px solid rgba(242,200,71,0.1)", boxShadow: "0 8px 40px rgba(0,0,0,0.55)" }}>
                <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" quality={85} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.35) 50%, transparent)" }} />
                <div className="absolute top-4 right-4" style={{ zIndex: 10 }}>
                  <span className="gold-badge text-xs font-black px-3 py-1 rounded-full tracking-wider">{card.badge}</span>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ zIndex: 10 }}>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                </div>
              </div>
            ))}
          </EmblaSlider>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5 · FEATURE CARDS
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-20 sm:py-28 overflow-hidden"
        style={{ background: "linear-gradient(170deg,#080810 0%,#05050D 60%,#080810 100%)" }}>
        <div className="g-orb" style={{ width: 900, height: 450, top: 0, left: "50%", transform: "translateX(-50%)", opacity: 0.45 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 5 }}>
          <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: "4rem" }}>
            <div className="orn" style={{ justifyContent: "center" }}>
              <div className="orn-line orn-line-l" />
              <Star style={{ width: 14, height: 14, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl text-white">
              Why Thousands <span className="tg">Choose Us</span>
            </h2>
            <p className="mt-4 font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Premium entertainment. Zero compromise.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card) => (
              <div key={card.title}
                className="feat-card card-hover group relative overflow-hidden rounded-[2rem] aspect-[3/4]"
                style={{ border: "1px solid rgba(242,200,71,0.15)", boxShadow: "0 0 50px rgba(242,200,71,0.12), 0 20px 60px rgba(0,0,0,0.65)" }}>

                {/* BG image */}
                <div className="absolute inset-0" style={{ zIndex: 0 }}>
                  <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-108" quality={85} />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ zIndex: 1, background: "linear-gradient(to top, #05050A 0%, rgba(5,5,10,0.75) 45%, rgba(5,5,10,0.2) 100%)" }} />
                {/* Top shimmer line */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ zIndex: 4, background: "linear-gradient(90deg, transparent, rgba(242,200,71,0.55) 50%, transparent)" }} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8" style={{ zIndex: 5 }}>
                  <span className="gold-badge mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest w-fit">
                    {card.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mb-3 leading-tight">{card.title}</h3>
                  <p className="text-sm leading-relaxed font-medium mb-7" style={{ color: "rgba(255,255,255,0.62)" }}>{card.description}</p>
                  <Link href="https://wa.me/447988033246"
                    className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm tracking-wide">
                    <MessageCircle className="h-4 w-4" style={{ position: "relative", zIndex: 1 }} />
                    <span style={{ position: "relative", zIndex: 1 }}>{card.cta}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6 · DEVICES
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-20 sm:py-28 overflow-hidden"
        style={{ background: "#05050A", borderTop: "1px solid rgba(242,200,71,0.07)", borderBottom: "1px solid rgba(242,200,71,0.07)" }}>
        <div className="g-orb" style={{ width: 600, height: 600, bottom: "-20%", right: "-5%", opacity: 0.5 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 5 }}>
          <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: "4rem" }}>
            <div className="orn" style={{ justifyContent: "center" }}>
              <div className="orn-line orn-line-l" />
              <Tv style={{ width: 14, height: 14, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl text-white mb-4">
              Watch on <span className="tg">Any Screen</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>Setup takes less than 5 minutes on any of these devices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, i) => (
              <div key={i} className="card-hover group relative overflow-hidden rounded-2xl aspect-[4/3]"
                style={{ border: "1px solid rgba(242,200,71,0.12)", background: "#0B0B16", boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}>
                <Image src={device.image} alt={device.name} fill
                  className="object-cover opacity-25 transition-all duration-700 group-hover:scale-105 group-hover:opacity-18" quality={75} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5) 60%, transparent)" }} />
                {/* hover top accent */}
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(90deg, transparent, #F2C847 50%, transparent)" }} />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 gap-4" style={{ zIndex: 5 }}>
                  <div className="p-5 rounded-full transition-all duration-300"
                    style={{ background: "rgba(242,200,71,0.08)", border: "1px solid rgba(242,200,71,0.22)", boxShadow: "0 0 22px rgba(242,200,71,0.1)" }}>
                    {device.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{device.name}</h3>
                    <span className="text-xs font-black uppercase tracking-wider mt-2 block" style={{ color: "#F2C847" }}>
                      Setup: {device.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/guides" className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3" style={{ color: "#F2C847" }}>
              View Installation Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7 · PRICING  (full luxury rebuild)
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-24 sm:py-32 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #080810 0%, #060610 50%, #080810 100%)" }}>

        {/* Atmospheric gold glow */}
        <div className="g-orb" style={{ width: 1000, height: 600, top: "-15%", left: "50%", transform: "translateX(-50%)", opacity: 0.35 }} />
        <div className="g-orb" style={{ width: 500, height: 500, bottom: "-10%", left: "10%", opacity: 0.2 }} />
        <div className="g-orb" style={{ width: 400, height: 400, bottom: "-10%", right: "10%", opacity: 0.2 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 5 }}>

          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: "56px" }}>
            <div className="orn" style={{ justifyContent: "center" }}>
              <div className="orn-line orn-line-l" />
              <Star style={{ width: 14, height: 14, color: "#F2C847" }} />
              <div className="orn-line orn-line-r" />
            </div>
            <h2 className="text-4xl font-extrabold sm:text-5xl text-white tracking-tight mb-3">
              Choose Your <span className="tg">Access Pass</span>
            </h2>
            <p className="text-lg font-medium" style={{ color: "rgba(255,255,255,0.52)" }}>
              Instant activation · Premium content · WhatsApp delivery
            </p>
          </div>

          {/* Cards grid */}
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article
                key={plan.months}
                className={`p-card ${
                  plan.tagType === "best"
                    ? "p-card-best"
                    : plan.tagType === "popular"
                    ? "p-card-pop"
                    : "p-card-std"
                }`}
              >
                {/* Animated top bar (best only) */}
                {plan.tagType === "best" && <div className="p-topbar" />}

                {/* Background image */}
                <div className="p-img-wrap">
                  <Image src={plan.image} alt={plan.months} fill className="object-cover opacity-25" quality={80} />
                  <div className="p-img-overlay" />
                </div>

                {/* Tag badge */}
                {plan.tag && (
                  <div style={{ position: "absolute", top: plan.tagType === "best" ? "22px" : "20px", right: "20px", zIndex: 12 }}>
                    {plan.tagType === "best" ? (
                      <span className="gold-badge rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest block">
                        ★ {plan.tag}
                      </span>
                    ) : (
                      <span className="p-savings">
                        <Zap style={{ width: 9, height: 9 }} />
                        {plan.tag}
                      </span>
                    )}
                  </div>
                )}

                {/* Card body */}
                <div className="p-body">

                  {/* Plan name */}
                  <div style={{ marginBottom: "20px" }}>
                    <p className="text-xs font-black uppercase tracking-[0.18em]"
                      style={{ color: plan.tagType === "best" ? "#F2C847" : "rgba(255,255,255,0.45)", marginBottom: 6 }}>
                      {plan.tagType === "best" ? "— Premium —" : plan.tagType === "popular" ? "— Popular —" : "— Starter —"}
                    </p>
                    <h3 className="text-2xl font-black tracking-tight"
                      style={{ color: plan.tagType === "best" ? "#F2C847" : "white" }}>
                      {plan.months}
                    </h3>
                  </div>

                  {/* Price block */}
                  <div style={{ marginBottom: "4px" }}>
                    <div className="p-price-num">{plan.price}</div>
                    <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
                      {plan.perMonth}
                    </p>
                  </div>

                  {/* Savings pill */}
                  {plan.tagType !== "none" && (
                    <div style={{ marginTop: 12 }}>
                      <div className="p-savings">
                        <Shield style={{ width: 9, height: 9 }} />
                        {plan.tagType === "best" ? "Save 32% vs monthly" : "Save 18% vs monthly"}
                      </div>
                    </div>
                  )}

                  <div className="p-divider" />

                  {/* Features */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28, flex: 1 }}>
                    {plan.features.map((feat) => (
                      <li key={feat} className="p-feat">
                        <div className={`p-feat-icon ${plan.tagType === "best" ? "p-feat-icon-best" : "p-feat-icon-std"}`}>
                          <CheckCircle style={{ width: 11, height: 11, color: "#F2C847" }} />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="https://wa.me/447988033246"
                    className={`inline-flex w-full items-center justify-center gap-3 rounded-full py-4 text-base tracking-wide ${
                      plan.tagType === "none" ? "btn-ghost" : "btn-gold"
                    }`}
                    style={{ fontWeight: 800 }}
                  >
                    <MessageCircle className="h-5 w-5" style={{ position: "relative", zIndex: 1 }} />
                    <span style={{ position: "relative", zIndex: 1 }}>{plan.cta}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Trust row */}
          <div className="pricing-note">
            <span><Zap style={{ width: 13, height: 13, color: "#F2C847" }} /> Instant Activation</span>
            <span><Shield style={{ width: 13, height: 13, color: "#F2C847" }} /> No Contract</span>
            <span><Infinity style={{ width: 13, height: 13, color: "#F2C847" }} /> 24/7 Support</span>
            <span><MessageCircle style={{ width: 13, height: 13, color: "#F2C847" }} /> WhatsApp Delivery</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8 · BLOG PREVIEW
      ══════════════════════════════════════════════════ */}
      <section className="grain relative py-20 sm:py-28 overflow-hidden"
        style={{ background: "#05050A", borderTop: "1px solid rgba(242,200,71,0.07)" }}>
        <div className="g-orb" style={{ width: 600, height: 400, top: 0, left: "50%", transform: "translateX(-50%)", opacity: 0.3 }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 5 }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ marginBottom: "3.5rem" }}>
            <div className="max-w-2xl">
              <div className="orn">
                <div className="orn-line orn-line-l" />
                <Calendar style={{ width: 14, height: 14, color: "#F2C847" }} />
                <div className="orn-line orn-line-r" />
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl text-white">
                Latest IPTV <span className="tg">Guides</span>
              </h2>
            </div>
            <Link href="/blog" className="font-bold inline-flex items-center gap-2 whitespace-nowrap transition-all hover:gap-3" style={{ color: "#F2C847" }}>
              Read all articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="card-hover group flex flex-col overflow-hidden rounded-2xl"
                style={{ border: "1px solid rgba(242,200,71,0.1)", background: "#0B0B16", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" quality={85} />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-black backdrop-blur"
                      style={{ background: "rgba(242,200,71,0.15)", border: "1px solid rgba(242,200,71,0.35)", color: "#F2C847" }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col" style={{ background: "rgba(0,0,0,0.35)" }}>
                  <h3 className="text-base font-bold mb-3 text-white line-clamp-2 leading-snug transition-colors group-hover:text-[#F2C847]">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-xs pt-4"
                    style={{ color: "rgba(255,255,255,0.4)", borderTop: "1px solid rgba(242,200,71,0.08)" }}>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9 · FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="grain relative isolate overflow-hidden py-32"
        style={{ background: "#080810", borderTop: "1px solid rgba(242,200,71,0.1)" }}>
        <div className="absolute inset-0" style={{ zIndex: -2 }}>
          <Image src="/imgs/bg_sliders/bg_slider_3.webp"
            alt="Cinematic TV Glow" fill className="object-cover opacity-12" quality={75} />
        </div>
        <div className="absolute inset-0" style={{ zIndex: -1, background: "linear-gradient(to top, #080810 0%, rgba(8,8,16,0.72) 60%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ zIndex: -1, background: "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(242,200,71,0.1), transparent)" }} />

        <div className="g-orb" style={{ width: 800, height: 500, bottom: "-10%", left: "50%", transform: "translateX(-50%)", opacity: 0.65 }} />

        <div className="gold-line absolute top-0 left-0 right-0" />

        <div className="container mx-auto px-4 text-center" style={{ position: "relative", zIndex: 5 }}>
          <div className="orn" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
            <div className="orn-line orn-line-l" />
            <Star style={{ width: 18, height: 18, color: "#F2C847" }} />
            <div className="orn-line orn-line-r" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Start Watching <span className="tg">Tonight.</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.52)" }}>
            Get your login credentials delivered instantly via WhatsApp. Join the future of television.
          </p>
          <Link href="https://wa.me/447988033246"
            className="btn-gold inline-flex h-16 items-center justify-center gap-3 rounded-full px-14 text-lg">
            <MessageCircle className="h-6 w-6" style={{ position: "relative", zIndex: 1 }} />
            <span style={{ position: "relative", zIndex: 1 }}>Get Your Pass Now</span>
          </Link>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm font-semibold uppercase tracking-wider"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" style={{ color: "#F2C847" }} /> Instant Activation</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" style={{ color: "#F2C847" }} /> 24/7 Support</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" style={{ color: "#F2C847" }} /> No Contract</span>
          </div>
        </div>

        <div className="gold-line absolute bottom-0 left-0 right-0" />
      </section>
    </>
  );
}