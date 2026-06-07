import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";

export default function FloatingWhatsAppButton() {
  return (
    <Link
      href={createWhatsAppSupportUrl("help choosing the right IPTV plan")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with iFlex IPTV on WhatsApp"
      data-cta="floating-whatsapp"
      className="fixed bottom-5 right-4 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#16a34a]/95 text-white shadow-[0_12px_40px_rgba(22,163,74,0.45)] backdrop-blur transition hover:-translate-y-1 hover:bg-[#22c55e] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-8 w-8 sm:h-9 sm:w-9" />
    </Link>
  );
}
