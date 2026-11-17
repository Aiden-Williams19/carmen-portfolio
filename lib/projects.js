/*
 * Project data — single source of truth.
 * Every field comes directly from the existing Adobe Portfolio.
 * DO NOT add invented descriptions, fake clients, or placeholder text.
 */

const projects = [
  {
    slug: "vermy-verassings",
    title: "VERMY VERASSINGS",
    year: "2026",
    category: "TVC",
    description: "30' TVC for LEKKESLAAP - done for a project with Red & Yellow",
    thumbnail: "/images/thumbnails/vermy-verassings.png",
    images: [
      "/images/vermy-verassings/1.png",
      "/images/vermy-verassings/2.png",
      "/images/vermy-verassings/3.png",
    ],
    embeds: [
      {
        type: "video",
        src: "https://www-ccv.adobe.io/v1/player/ccv/QXNE24Qchbb/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      },
    ],
  },
  {
    slug: "book-lounge",
    title: "The Book Lounge - Billboard Campaign",
    year: "2026",
    category: "Billboard",
    description: null,
    thumbnail: "/images/thumbnails/book-lounge.jpg",
    images: [
      "/images/book-lounge/1.jpg",
      "/images/book-lounge/2.jpg",
      "/images/book-lounge/3.jpg",
    ],
  },
  {
    slug: "nelsons-eye",
    title: "Nelson's Eye - Traditional Radio",
    year: "2026",
    category: "Radio",
    description: null,
    thumbnail: "/images/thumbnails/nelsons-eye.jpeg",
    images: [
      "/images/nelsons-eye/1.jpeg",
    ],
    embeds: [
      {
        type: "audio",
        src: "https://www-ccv.adobe.io/v1/player/ccv/UneaQB2Rn7X/embed?bgcolor=%23bebebe&autohide=false&lazyLoading=true&maxframewidth=6400&maxframeheight=75&api_key=BehancePro2View",
      },
    ],
  },
  {
    slug: "kwaai",
    title: "KWAAI - Brand Launch",
    year: "2026",
    category: "Branding",
    description: null,
    thumbnail: "/images/thumbnails/kwaai.jpg",
    images: [
      "/images/kwaai/1.jpg",
      "/images/kwaai/2.jpg",
      "/images/kwaai/3.jpg",
      "/images/kwaai/4.jpg",
      "/images/kwaai/5.jpg",
    ],
    embeds: [
      {
        type: "video",
        src: "https://www-ccv.adobe.io/v1/player/ccv/H9R-q4KG4sW/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      },
      {
        type: "video",
        src: "https://www-ccv.adobe.io/v1/player/ccv/8p_EN4YcrPc/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      },
    ],
  },
  {
    slug: "listerine",
    title: "Listerine Fresh Burst - Traditional Print Ad",
    year: "2026",
    category: "Print",
    description: "This magazine ad for Listerine Fresh Burst explores the confidence that comes with fresh breath. Based on the insight that bad breath can make you insecure and reserved, while fresh breath gives you the boldness to put yourself out there. The creative solution was to exaggerate this transformation, humorously portraying fresh breath as having almost unbelievable side effects, from commanding a room to winning people over.",
    thumbnail: "/images/thumbnails/listerine.png",
    images: [
      "/images/listerine/1.png",
      "/images/listerine/2.png",
    ],
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return projects.map((p) => p.slug);
}
