import { redirect } from "next/navigation";
import { createWhatsAppPlanUrl } from "@/lib/whatsapp";
import { DeviceCount, getPricingPlan, PlanDuration } from "@/lib/pricing-data";

export const metadata = {
  title: "WhatsApp Order - iFlex IPTV",
  description: "Continue your premium IPTV subscription order on WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function OrderPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const plan = (resolvedSearchParams?.plan as string) || "6m";
  const devicesParam = Number(resolvedSearchParams?.devices ?? 1);
  const devices = ([1, 2, 3].includes(devicesParam) ? devicesParam : 1) as DeviceCount;

  const duration: PlanDuration = (() => {
    switch (plan) {
      case "3m":
        return "3 Months";
      case "12m":
        return "12 Months";
      case "6m":
      default:
        return "6 Months";
    }
  })();

  redirect(createWhatsAppPlanUrl(getPricingPlan(devices, duration), devices));
}
