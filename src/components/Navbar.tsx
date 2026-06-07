"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, MonitorPlay, X } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled || open
            ? "border-white/12 bg-black/78 shadow-2xl shadow-black/40 backdrop-blur-2xl"
            : "border-white/8 bg-black/36 shadow-xl shadow-black/20 backdrop-blur-xl"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-3 px-3 sm:px-4 lg:px-5">
          <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="iFlex IPTV home">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand/35 bg-brand/10 text-brand shadow-lg shadow-brand/10 transition group-hover:scale-105">
              <span className="absolute inset-0 rounded-2xl bg-brand/10 opacity-0 blur-xl transition group-hover:opacity-100" />
              <MonitorPlay className="relative h-5 w-5" />
            </span>
            <span className="min-w-0 text-lg font-black tracking-tight text-white">
              iFlex <span className="bg-gradient-to-r from-brand via-yellow-200 to-brand bg-clip-text text-transparent">IPTV</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.045] p-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  isActive(link.href)
                    ? "bg-brand text-black shadow-lg shadow-brand/20"
                    : "text-white/68 hover:bg-white/8 hover:text-white"
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
              className="hidden h-11 items-center justify-center gap-2 rounded-full bg-green-500 px-5 text-sm font-black text-white shadow-lg shadow-green-500/25 transition hover:-translate-y-0.5 hover:bg-green-400 md:inline-flex"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation" : "Open navigation"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-brand/40 hover:text-brand lg:hidden"
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
            <nav className="grid gap-2 border-t border-white/8 px-3 pb-4 pt-3 sm:grid-cols-2 sm:px-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                    isActive(link.href)
                      ? "bg-brand text-black"
                      : "bg-white/[0.045] text-white/72 hover:bg-white/10 hover:text-white"
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-black text-white transition hover:bg-green-400 sm:col-span-2"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Start on WhatsApp
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
