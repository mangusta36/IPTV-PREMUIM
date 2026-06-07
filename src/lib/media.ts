const pexels = (id: string, width = 1800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const premiumVideos = {
  heroMovieClip:
    "https://imdb-video.media-imdb.com/vi973841433/1434659607842-pgv4ql-1616202708102.mp4?Expires=1777937916&Signature=LvTF7qiqPFsVFo1cXdTETZl-uwvWQmV00k9PId0KYdYv0A4vsJi1dOWkPssi1SrQFeVfgP~B3I~JSvG33ThR0wrJ2sNjBwpfrcoyf7hHBPTg6TZ~aqjU81vKYh2Uz81cplOaXfyBQfOod1aZAkAIk3y0wuPhVaTW5lxxkIw4-tzEffkXtnkAAx6mEBsNWU650ecBWrEx99Em84G8pPJrubhSxACAYW5bHR0b4oqctjjHcEcaGBkFKxVpdpFVenJNsXHOa7~Br4mPNulTbMr66U02fE7TR4S~bFFOiqTKNp20jUu7Djm6zotn0e6mUbMDWF94eS70YGblETlXnuYcAA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
};

export const premiumImages = {
  heroPoster: pexels("7513460", 2200),
  heroPreview: pexels("7991437", 1900),
  homeDevices: pexels("36698022", 1700),
  homeCta: pexels("19465400", 1900),
  featureHero: pexels("4649221", 2200),
  featureSports: pexels("32101385", 1800),
  channelHero: pexels("7234300", 2200),
  channelSports: pexels("31544347", 1700),
  channelMovies: pexels("7234229", 1700),
  channelInternational: pexels("9946854", 1700),
  channelNews: pexels("7789818", 1700),
  channelFamily: pexels("4009398", 1700),
  channelLifestyle: pexels("2337785", 1700),
  devicesHero: pexels("23495483", 2200),
  deviceSmartTv: pexels("4649221", 1700),
  deviceStreaming: pexels("4009398", 1700),
  deviceMobile: pexels("36698022", 1700),
  deviceOther: pexels("29387632", 1700),
  setupGuidance: pexels("8102153", 1700),
  pricingHero: pexels("30916053", 2200),
  planMonthly: pexels("23932756", 1400),
  planQuarterly: pexels("7234229", 1400),
  planSemiAnnual: pexels("32190714", 1400),
  planAnnual: pexels("32285230", 1400),
  faqHero: pexels("7234300", 2200),
  contactHero: pexels("23495483", 2200),
  movieMarquee: pexels("7234236", 1700),
  movieSciFi: pexels("7991266", 1700),
  movieThriller: pexels("7234300", 1700),
  movieFamily: pexels("30588668", 1700),
  sportsMatchNight: pexels("32190714", 1700),
  sportsAction: pexels("32285230", 1700),
  sportsArena: pexels("9946854", 1700),
  sportsFans: pexels("23495483", 1700),
  topEntertainment: pexels("4009398", 1700),
  topSports: pexels("31544347", 1700),
  topCinema: pexels("7234229", 1700),
  topInternational: pexels("29388609", 1700),
};

export type CarouselItem = {
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  image: string;
  alt: string;
  href?: string;
};

export const trendingMovies: CarouselItem[] = [
  {
    eyebrow: "Hollywood-style VOD",
    title: "Blockbuster Premieres",
    description: "High-energy movie nights, new-release shelves, and premium cinematic categories.",
    meta: "4K and FHD VOD",
    image: premiumImages.movieMarquee,
    alt: "Crowded cinema theater watching a bright movie screen",
    href: "/channels",
  },
  {
    eyebrow: "Sci-Fi Worlds",
    title: "Immersive Favorites",
    description: "A polished VOD experience built for action, adventure, sci-fi, and fantasy fans.",
    meta: "Curated movies",
    image: premiumImages.movieSciFi,
    alt: "Audience wearing 3D glasses while watching a cinematic movie",
    href: "/channels",
  },
  {
    eyebrow: "Crime & Thriller",
    title: "Late Night Suspense",
    description: "Browse darker stories, thrillers, dramas, and intense weekend marathons.",
    meta: "Movie library",
    image: premiumImages.movieThriller,
    alt: "Dark premium movie theater with red seats and a glowing screen",
    href: "/channels",
  },
  {
    eyebrow: "Family Premieres",
    title: "Weekend Watchlist",
    description: "Family-friendly movies, comedy nights, and easy sofa-to-screen entertainment.",
    meta: "Instant activation",
    image: premiumImages.movieFamily,
    alt: "Warm cinematic screening room for a premium movie night",
    href: "/pricing",
  },
];

export const liveSports: CarouselItem[] = [
  {
    eyebrow: "Live Sports",
    title: "Night Match Energy",
    description: "Premium sports channels for football, basketball, PPV events, and more.",
    meta: "Sports and PPV",
    image: premiumImages.sportsMatchNight,
    alt: "Intense football match under bright stadium lights",
    href: "/channels",
  },
  {
    eyebrow: "Global Leagues",
    title: "Action Every Week",
    description: "Follow major leagues, tournaments, and weekend fixtures from one place.",
    meta: "Global coverage",
    image: premiumImages.sportsAction,
    alt: "Football players competing on a sunny stadium field",
    href: "/channels",
  },
  {
    eyebrow: "Big Venues",
    title: "Stadium Atmosphere",
    description: "Bring major arenas, finals, and match-day drama into your living room.",
    meta: "99.9% uptime",
    image: premiumImages.sportsArena,
    alt: "Large football stadium with open roof and bright seating",
    href: "/features",
  },
  {
    eyebrow: "Fan Nights",
    title: "Watch Together",
    description: "Keep the live feed close for parties, family nights, and weekend fixtures.",
    meta: "Multi-device",
    image: premiumImages.sportsFans,
    alt: "Friends watching a live TV sports event together at home",
    href: "/devices",
  },
];

export const topChannels: CarouselItem[] = [
  {
    eyebrow: "Entertainment",
    title: "Premium Networks",
    description: "Movie, series, documentary, and lifestyle channels arranged for fast discovery.",
    meta: "3,500+ channels",
    image: premiumImages.topEntertainment,
    alt: "Couple watching entertainment channels on a living room television",
    href: "/channels",
  },
  {
    eyebrow: "Sports",
    title: "Live Event Channels",
    description: "Stay close to major fixtures, PPV nights, and international sports coverage.",
    meta: "1,200+ sports",
    image: premiumImages.topSports,
    alt: "Dramatic soccer match action inside a stadium",
    href: "/channels",
  },
  {
    eyebrow: "Cinema",
    title: "Movie Channels",
    description: "A cinematic channel mix designed for evenings, weekends, and family viewing.",
    meta: "VOD included",
    image: premiumImages.topCinema,
    alt: "Movie audience watching a large cinema screen",
    href: "/channels",
  },
  {
    eyebrow: "International",
    title: "Worldwide Lineup",
    description: "Channels from the USA, UK, Europe, Latino, Arabic, Asian regions, and more.",
    meta: "26,000+ live",
    image: premiumImages.topInternational,
    alt: "Large modern football stadium representing worldwide live channels",
    href: "/channels",
  },
];
