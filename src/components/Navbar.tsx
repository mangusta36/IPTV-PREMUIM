"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Crown, Menu, MonitorPlay, X } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/channels", label: "Channels" },
  { href: "/pricing", label: "Pricing" },
  { href: "/devices", label: "Devices" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${
          scrolled || open
            ? "border-accent/10 bg-navy/90 shadow-2xl shadow-black/50 backdrop-blur-2xl"
            : "border-white/5 bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-3 px-3 sm:px-4 lg:px-5">
          <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="iFlex IPTV home">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/[0.06] text-accent transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/[0.12] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <Crown className="relative h-5 w-5" />
            </span>
            <span className="min-w-0 text-lg font-bold tracking-tight text-foreground">
              iFlex <span className="luxury-gradient-text">IPTV</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 backdrop-blur-sm lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-gradient-to-r from-accent to-accent-hover text-background shadow-lg shadow-accent/20"
                    : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={createWhatsAppSupportUrl("help choosing an IPTV plan")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="navbar-whatsapp"
              className="hidden h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-5 text-sm font-bold text-background shadow-lg shadow-accent/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent/30 md:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Get Started
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation" : "Open navigation"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-foreground transition-all duration-300 hover:border-accent/20 hover:text-accent backdrop-blur-sm lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <nav className="grid gap-2 border-t border-white/[0.06] px-3 pb-4 pt-3 sm:grid-cols-2 sm:px-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-gradient-to-r from-accent to-accent-hover text-background"
                      : "bg-white/[0.03] text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={createWhatsAppSupportUrl("help choosing an IPTV plan")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="navbar-whatsapp"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-hover px-4 py-3 text-sm font-bold text-background transition-all duration-300 hover:brightness-110 sm:col-span-2"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Start Premium Experience
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
