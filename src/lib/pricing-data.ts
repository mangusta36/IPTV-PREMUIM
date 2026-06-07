import { siteConfig } from "@/lib/site-config";

export type DeviceCount = 1 | 2 | 3;
export type PlanDuration = "3 Months" | "6 Months" | "12 Months";

export type PricingPlan = {
  duration: PlanDuration;
  price: number;
  save: string;
  cta: string;
  badge?: "BEST VALUE";
  planLabel?: string;
  bonus?: string;
  regularPrice?: string;
  description?: string;
  monthlyEquivalent?: string;
};

export type PricingDeviceOption = {
  devices: DeviceCount;
  label: string;
  helper: string;
  plans: PricingPlan[];
};

export const planFeatures = [
  siteConfig.claims.channels,
  siteConfig.claims.vod,
  siteConfig.claims.quality,
  "EPG TV Guide Included",
  "All Devices Supported",
  siteConfig.claims.support,
  siteConfig.claims.refund,
];

export const pricingDeviceOptions: PricingDeviceOption[] = [
  {
    devices: 1,
    label: "1 Device",
    helper: "Best for one active stream.",
    plans: [
      { duration: "3 Months", price: 35, save: "14%", cta: "Get Started - 3 Months" },
      { duration: "6 Months", price: 49, save: "33%", cta: "Get Started - 6 Months" },
      {
        duration: "12 Months",
        price: 69,
        save: "Best annual value",
        cta: "Get Started - 12 Months",
        badge: "BEST VALUE",
        planLabel: "Subscription",
        bonus: "2 Months Free",
        regularPrice: "$82.80 regular",
        description: "Pay for 10 months, get 12",
        monthlyEquivalent: "Just $5.75/mo",
      },
    ],
  },
  {
    devices: 2,
    label: "2 Devices",
    helper: "For two active streams.",
    plans: [
      { duration: "3 Months", price: 55, save: "20%", cta: "Get Started - 3 Months" },
      { duration: "6 Months", price: 75, save: "46%", cta: "Get Started - 6 Months" },
      {
        duration: "12 Months",
        price: 115,
        save: "Best annual value",
        cta: "Get Started - 12 Months",
        badge: "BEST VALUE",
        planLabel: "Subscription",
        bonus: "2 Months Free",
        regularPrice: "$138.00 regular",
        description: "Pay for 10 months, get 12",
        monthlyEquivalent: "Just $9.58/mo",
      },
    ],
  },
  {
    devices: 3,
    label: "3 Devices",
    helper: "For family viewing setups.",
    plans: [
      { duration: "3 Months", price: 75, save: "17%", cta: "Get Started - 3 Months" },
      { duration: "6 Months", price: 99, save: "45%", cta: "Get Started - 6 Months" },
      {
        duration: "12 Months",
        price: 149,
        save: "Best annual value",
        cta: "Get Started - 12 Months",
        badge: "BEST VALUE",
        planLabel: "Subscription",
        bonus: "2 Months Free",
        regularPrice: "$178.80 regular",
        description: "Pay for 10 months, get 12",
        monthlyEquivalent: "Just $12.42/mo",
      },
    ],
  },
];

export function getPricingOption(devices: DeviceCount) {
  return pricingDeviceOptions.find((option) => option.devices === devices) ?? pricingDeviceOptions[0];
}

export function getPricingPlan(devices: DeviceCount, duration: PlanDuration) {
  return getPricingOption(devices).plans.find((plan) => plan.duration === duration) ?? getPricingOption(devices).plans[1];
}

export function formatPrice(price: number) {
  return `$${price}`;
}
