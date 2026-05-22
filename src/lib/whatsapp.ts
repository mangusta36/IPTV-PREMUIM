const PHONE_NUMBER = "447988033246";

export function createWhatsAppOrderUrl(
  planName: string,
  price: string
) {
  const message = encodeURIComponent(
    `Hi iflexiptv, I want to order the ${planName} plan (${price}). Please send me the activation details.`
  );

  return `https://wa.me/${PHONE_NUMBER}?text=${message}`;
}

export const whatsappSetupGuidanceUrl =
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hi iflexiptv, I need setup guidance for my device."
  )}`;