import Link from "next/link";
import { CreditCard, Mail, MonitorPlay, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/42 text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand/25 bg-brand/10">
                <MonitorPlay className="h-5 w-5 text-brand" />
              </span>
              <span className="text-xl font-bold tracking-tight">iFlex <span className="text-brand">IPTV</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium IPTV access for live sports categories, movies, series, news, kids, and international entertainment with guided setup support.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-accent">Fast WhatsApp Ordering</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-brand transition-colors">Home</Link></li>
              <li><Link href="/features" className="text-sm text-muted-foreground hover:text-brand transition-colors">Features</Link></li>
              <li><Link href="/channels" className="text-sm text-muted-foreground hover:text-brand transition-colors">Channels</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-brand transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-brand transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground tracking-wider uppercase">Support & Guides</h3>
            <ul className="space-y-3">
              <li><Link href="/support" className="text-sm text-muted-foreground hover:text-brand transition-colors">Help & Support</Link></li>
              <li><Link href="/guides" className="text-sm text-muted-foreground hover:text-brand transition-colors">Setup Guides</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-brand transition-colors">FAQ</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-brand transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-brand transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground tracking-wider uppercase">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{siteConfig.supportEmail}<br/>24/7 iFlex IPTV Support</span>
              </li>
            </ul>
            <Link
              href={createWhatsAppSupportUrl("support with my IPTV subscription")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="support-whatsapp"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-black text-white transition hover:bg-green-400"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Support
            </Link>
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Accepted Payments</h4>
              <div className="flex gap-2">
                <div className="rounded-xl border border-white/10 bg-white/8 p-2"><CreditCard className="h-5 w-5 text-muted-foreground" /></div>
                <div className="rounded-xl border border-white/10 bg-white/8 p-2"><WhatsAppIcon className="h-5 w-5 text-muted-foreground" /></div>
                {/* Additional payment icons can go here */}
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {currentYear} iFlex IPTV. All rights reserved. Channel availability may vary by package and region.
          </p>
          <div className="flex gap-4">
            <Link href="/disclaimer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Disclaimer</Link>
            <Link href="/refund-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
