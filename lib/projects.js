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
      "/images/thumbnails/vermy-verassings.png",
    ],
    needsFullImages: true,
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
      "/images/thumbnails/nelsons-eye.jpeg",
    ],
    needsFullImages: true,
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
  },
  {
    slug: "listerine",
    title: "Listerine - Traditional Print",
    year: "2026",
    category: "Print",
    description: null,
    thumbnail: "/images/thumbnails/listerine.png",
    images: [
      "/images/thumbnails/listerine.png",
    ],
    needsFullImages: true,
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
