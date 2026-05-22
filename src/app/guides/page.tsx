import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MonitorPlay, Smartphone, Tv, CheckCircle, Clock, Zap } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "IPTV Setup Guides | How to Install on Any Device",
  description: "Learn how to easily set up your IPTV subscription on Firestick, Smart TVs (Samsung, LG, Android), Apple TV, and mobile devices in minutes.",
  alternates: {
    canonical: "https://www.iflexiptv.com/guides",
  },
};

const guides = [
  {
    id: "firestick",
    title: "Amazon Firestick Setup",
    icon: <MonitorPlay className="h-6 w-6 text-brand" />,
    image: "https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=800",
    difficulty: "Easy",
    time: "5 mins",
    steps: [
      "Go to Settings > My Fire TV > Developer Options and turn on 'Apps from Unknown Sources'.",
      "Install the 'Downloader' app from the Amazon App Store.",
      "Open Downloader and enter the app URL provided by our support team.",
      "Install the app, open it, and enter your login credentials."
    ]
  },
  {
    id: "smart-tv",
    title: "Samsung & LG Smart TVs",
    icon: <Tv className="h-6 w-6 text-brand" />,
    image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800",
    difficulty: "Very Easy",
    time: "3 mins",
    steps: [
      "Open your TV's App Store (Smart Hub or LG Content Store).",
      "Search for 'IPTV Smarters Pro' or 'IBO Player' and install it.",
      "Open the app and take note of the Device MAC address shown on screen.",
      "Send us the MAC address on WhatsApp, or login with the Xtream Codes API details we provided."
    ]
  },
  {
    id: "android-tv",
    title: "Android TV & TiviMate",
    icon: <Tv className="h-6 w-6 text-brand" />,
    image: "https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=800",
    difficulty: "Medium",
    time: "5 mins",
    steps: [
      "Open the Google Play Store on your Android TV.",
      "Search for and install 'TiviMate IPTV Player'.",
      "Open the app and select 'Add Playlist'.",
      "Select 'Xtream Codes Login' and enter your provided credentials."
    ]
  },
  {
    id: "iptv-smarters",
    title: "IPTV Smarters Pro Setup",
    icon: <Smartphone className="h-6 w-6 text-brand" />,
    image: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=800",
    difficulty: "Very Easy",
    time: "2 mins",
    steps: [
      "Download IPTV Smarters Pro on your device.",
      "Open the application and select 'Login with Xtream Codes API'.",
      "Enter a profile name (e.g., iflexiptv).",
      "Enter your Username, Password, and Server URL exactly as provided by us."
    ]
  },
  {
    id: "ibo-player",
    title: "IBO Player Setup",
    icon: <Tv className="h-6 w-6 text-brand" />,
    image: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=800",
    difficulty: "Easy",
    time: "3 mins",
    steps: [
      "Install IBO Player from your device's app store.",
      "Open the app to find your 'Device MAC Address' and 'Device Key'.",
      "Send these two details to our support team on WhatsApp.",
      "We will upload your playlist remotely. Restart the app when we confirm it's done."
    ]
  },
  {
    id: "xciptv",
    title: "XCIPTV Setup",
    icon: <MonitorPlay className="h-6 w-6 text-brand" />,
    image: "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=800",
    difficulty: "Easy",
    time: "3 mins",
    steps: [
      "Install XCIPTV Player from your app store or via Downloader.",
      "Open the app. You will see a clean login screen.",
      "Enter the Server URL, Username, and Password.",
      "Click 'Sign In' and wait for the VOD and Live TV guides to download."
    ]
  },
  {
    id: "apple-tv",
    title: "Apple TV & iOS",
    icon: <Smartphone className="h-6 w-6 text-brand" />,
    image: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=800",
    difficulty: "Very Easy",
    time: "3 mins",
    steps: [
      "Open the Apple App Store.",
      "Search for 'IPTV Smarters' or 'GSE Smart IPTV' and install.",
      "Open the app and select 'Add user' or 'Login with Xtream Codes API'.",
      "Enter your Username, Password, and Server URL, then click Add."
    ]
  },
  {
    id: "mag-box",
    title: "MAG Box Setup",
    icon: <Tv className="h-6 w-6 text-brand" />,
    image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800",
    difficulty: "Medium",
    time: "5 mins",
    steps: [
      "Go to Settings > System Settings > Servers > Portals.",
      "Set Portal 1 Name to 'iflexiptv' and Portal 1 URL to the MAG Portal URL we provided.",
      "Save the settings and restart your portal.",
      "Ensure you have sent us your MAC address starting with 00:1A:79... so we can activate it."
    ]
  }
];

export default function GuidesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to set up IPTV",
    "step": guides.map((guide) => ({
      "@type": "HowToStep",
      "name": guide.title,
      "text": guide.steps.join(" ")
    }))
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-white/5">
        <div className="absolute inset-0 -z-20 bg-black">
          <Image
            src="https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Cinematic background for guides"
            fill
            priority
            className="object-cover opacity-20 blur-[2px]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/90 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">Setup Guides for Every Device</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Follow these simple, step-by-step instructions to get your IPTV running in less than 5 minutes. No technical skills required.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="grid lg:grid-cols-2 gap-8">
            {guides.map((guide, idx) => (
              <div key={guide.id} id={guide.id} className="luxury-surface rounded-[2rem] overflow-hidden flex flex-col group hover:border-brand/40 transition-colors scroll-mt-24">
                
                {/* Guide Image Header */}
                <div className="relative h-48 sm:h-56 w-full bg-card">
                  <Image src={guide.image} alt={guide.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur border border-white/10">
                      <Zap className="h-3 w-3 text-brand" /> {guide.difficulty}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur border border-white/10">
                      <Clock className="h-3 w-3 text-brand" /> {guide.time}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/60 backdrop-blur border border-white/20">
                      {guide.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{guide.title}</h2>
                  </div>
                </div>
                
                {/* Steps Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <ol className="space-y-5 mb-8 flex-1">
                    {guide.steps.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/20 font-bold text-brand text-xs">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                  
                  {/* WhatsApp CTA per Guide */}
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <Link
                      href="https://wa.me/447988033246"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-success/10 px-4 py-3 text-sm font-bold text-success transition hover:bg-success hover:text-background border border-success/20"
                    >
                      <MessageCircle className="h-4 w-4" /> Need help? Message Support
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-24 text-center luxury-surface rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Device not listed here?</h3>
            <p className="text-muted-foreground mb-8">We support almost any device with a screen and an internet connection. Check our blog for more detailed guides or contact our 24/7 technical support.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/blog"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/12 bg-white/8 px-8 text-base font-bold text-foreground transition hover:border-brand/40 hover:text-brand"
              >
                Browse Blog Guides
              </Link>
              <Link
                href="https://wa.me/447988033246"
                className="button-glow-success inline-flex h-14 items-center justify-center gap-2 rounded-full bg-success px-8 text-base font-bold text-background transition hover:-translate-y-0.5 hover:bg-success-hover"
              >
                <MessageCircle className="h-5 w-5" /> Ask on WhatsApp
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
