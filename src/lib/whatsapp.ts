import { siteConfig } from "@/lib/site-config";
import { DeviceCount, formatPrice, PricingPlan } from "@/lib/pricing-data";

function createWhatsAppUrl(message: string) {
  const whatsappNumber = siteConfig.whatsappNumber.replace(/\D/g, "");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppUrlForMessage(message?: string) {
  return createWhatsAppUrl(
    message ??
      "Hello iFlex IPTV, I want to learn more about your IPTV subscriptions and activation options."
  );
}

export function createWhatsAppOrderUrl(planName: string, price: string, devices?: string | number) {
  return createWhatsAppUrl(
    [
      "Hello iFlex IPTV, I want to start a subscription.",
      "",
      `Plan: ${planName}`,
      devices ? `Devices: ${devices}` : null,
      `Price: ${price}`,
      "",
      "Please help me activate my IPTV subscription.",
    ]
      .filter(Boolean)
      .join("\n")
  );
}

export function createWhatsAppPlanUrl(
  plan: PricingPlan,
  devices: DeviceCount
) {
  return createWhatsAppOrderUrl(plan.duration, formatPrice(plan.price), `${devices} ${devices === 1 ? "Device" : "Devices"}`);
}

export function createWhatsAppSupportUrl(topic = "setup guidance for my device") {
  return createWhatsAppUrl(`Hello iFlex IPTV, I need ${topic}.`);
}

export const whatsappSetupGuidanceUrl = createWhatsAppSupportUrl();
