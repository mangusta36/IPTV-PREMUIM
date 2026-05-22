import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Settings, Wifi, Key, Tv, ShieldAlert, ArrowRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "Contact & Support | iflexiptv",
  description: "Need help setting up your IPTV? Experiencing buffering? Contact our 24/7 WhatsApp support team for instant assistance.",
  alternates: {
    canonical: "https://www.iflexiptv.com/support",
  },
};

export default function SupportPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Support & Contact - iflexiptv",
    "url": "https://www.iflexiptv.com/support",
    "description": "Contact our 24/7 WhatsApp support team for instant assistance.",
  };

  const commonProblems = [
    {
      icon: <Wifi className="h-6 w-6 text-brand" />,
      title: "Buffering & Freezing",
      solution: "Usually caused by weak Wi-Fi or ISP throttling. We recommend using an Ethernet cable or clearing your app's cache. If it persists, contact us."
    },
    {
      icon: <Key className="h-6 w-6 text-brand" />,
      title: "Login Not Working",
      solution: "Double-check your username and password for typos (they are case-sensitive). Ensure your subscription hasn't expired."
    },
    {
      icon: <Settings className="h-6 w-6 text-brand" />,
      title: "App Not Loading",
      solution: "Restart your device (Firestick, Smart TV). If that fails, uninstall and reinstall the IPTV app, then log in again."
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-brand" />,
      title: "Channels Not Opening",
      solution: "Sometimes your ISP blocks IPTV. A VPN usually fixes this. Alternatively, try refreshing your playlist from the app settings."
    },
    {
      icon: <Tv className="h-6 w-6 text-brand" />,
      title: "Smart TV MAC Issue",
      solution: "If using SIPTV or IBO Player, ensure you provided us with the correct MAC address so we can upload your playlist."
    }
  ];

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-white/5">
        <div className="absolute inset-0 -z-20 bg-black">
          {/* Replace with licensed/user-provided asset. */}
          <Image
            src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2000"
            alt="Cinematic background for support"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">Need Help Setting Up IPTV?</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Whether you are experiencing technical issues or just need help installing an app, we are here for you 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Primary Support Card */}
          <div className="max-w-4xl mx-auto luxury-surface rounded-3xl p-8 sm:p-12 text-center border-brand/30 shadow-2xl shadow-brand/10 relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-transparent pointer-events-none" />
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-success/20 mb-6">
              <MessageCircle className="h-10 w-10 text-success" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Fastest Way to Get Help</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Message us directly on WhatsApp. We typically reply within 5 minutes. Have your username or MAC address ready for faster service.
            </p>
            <Link
              href="https://wa.me/447988033246"
              className="button-glow-success cta-pulse-success inline-flex h-16 items-center justify-center gap-3 rounded-full bg-success px-10 text-lg font-bold text-background transition hover:-translate-y-1 hover:bg-success-hover"
            >
              <MessageCircle className="h-6 w-6" /> Chat with Support Now
            </Link>
          </div>

          {/* Common Problems */}
          <div className="max-w-6xl mx-auto mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Troubleshooting Common Problems</h2>
              <p className="text-muted-foreground mt-4">Check these quick fixes before contacting support.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonProblems.map((prob, i) => (
                <div key={i} className="luxury-surface p-6 rounded-2xl hover:border-brand/40 transition-colors">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-brand/10 border border-brand/20">
                    {prob.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{prob.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{prob.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Setup Guides Link */}
          <div className="max-w-4xl mx-auto mt-16 bg-card border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-bold mb-2">Looking for Installation Instructions?</h3>
              <p className="text-muted-foreground">We have step-by-step guides for Firestick, Smart TVs, Android, and Apple devices.</p>
            </div>
            <Link href="/guides" className="inline-flex h-12 whitespace-nowrap items-center justify-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-6 text-sm font-bold text-brand transition hover:bg-brand hover:text-background">
              View Setup Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion items={[
              { question: "How fast is activation?", answer: "Activation is instant. As soon as you message us on WhatsApp and choose a plan, we generate your credentials." },
              { question: "Can I use it on multiple devices?", answer: "One subscription allows you to watch on one device at a time. For multiple simultaneous connections, please ask our support team for a family plan." },
              { question: "Do you offer a free trial?", answer: "Yes, we offer a 24-hour free trial so you can test the channels and VODs before purchasing." },
              { question: "What internet speed do I need?", answer: "We recommend at least 20Mbps for a smooth, buffer-free 4K streaming experience." }
            ]} />
          </div>

        </div>
      </section>
    </>
  );
}
