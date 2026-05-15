export type Piano = {
  slug: string;
  name: string;
  price: string;
  image: string;
  images: string[];
  description: string;
  category: string;
  fullDescription?: string;
};

export const pianos: Piano[] = [
  {
    slug: "alex-steinbach-upright-piano",
    name: "Alex Steinbach Upright Piano",
    price: "$2,999",
    image:
      "https://www.affordablepianos.com.au/images/alex-steinbach-upright-piano-mahogany-front.webp",
    images: [
      "/images/alex-steinbach-upright-piano-mahogany-front.webp",
      "/images/alex-steinbach-upright-piano-side-angle.webp",
      "/images/alex-steinbach-piano-logo-keyboard-closeup.webp",
      "/images/alex-steinbach-upright-piano-brass-pedals.webp",
      "/images/alex-steinbach-piano-internal-strings-serial.webp"
    ],
    description: "A beautifully presented Alex Steinbach upright piano in like-new condition, featuring a polished mahogany finish and warm, resonant tone. Designed with German influence and built for reliability, it’s an excellent choice for players of all levels seeking quality at an affordable price.",
    category: "Upright",
    fullDescription: "This Alex Steinbach upright piano is presented in like-new condition, with no visible scratches or damage. Finished in a rich polished mahogany cabinet, it offers both timeless style and a warm, resonant tone ideal for home or studio use.\n\nDesigned with German influence and precision, Alex Steinbach pianos combine traditional craftsmanship with modern manufacturing. This model was developed in collaboration with renowned German piano technician Klaus Fenner and produced by Samick Musical Instruments, one of the world’s largest and most respected piano manufacturers based in South Korea.\n\nThe result is a reliable, high-quality acoustic piano that delivers excellent performance and long-term value — perfect for beginners, students, or experienced players seeking an affordable upright piano.\n\n\n\n",

  },
  {
    slug: "kawai-KG-3C-grand-piano",
    name: "Kawai KG-3C Grand Piano",
    price: "$7,999",
    image:
      "https://www.affordablepianos.com.au/images/kawai-KG-3C-grand-piano-side-angle-main.webp",
    images: [
      "/images/kawai-KG-3C-grand-piano-side-angle-main.webp",
      "/images/kawai-KG-3C-grand-piano-logo-keyboard-closeup.webp",
      "/images/kawai-KG-3C-grand-piano-side-angle.webp",
      "/images/kawai-KG-3C-grand-piano-front.webp"
    ],
    description: "This beautifully maintained Kawai KG-3C is a beautifully crafted grand piano renowned for its rich tonal depth, responsive touch, and timeless Japanese engineering. Finished in an elegant high-gloss black cabinet, this premium grand piano delivers both stunning visual presence and exceptional musical performance for homes, studios, and professional spaces alike.",
    category: "Grand",
    fullDescription: "Experience the warmth, clarity, and expressive power of the Kawai KG-3C Grand Piano — a highly regarded model from one of Japan’s most respected piano manufacturers. Combining precision craftsmanship with classic elegance, the KG-3C is celebrated for its balanced tone, responsive action, and impressive dynamic range, making it equally suited for serious pianists, educators, recording environments, and luxury interiors.\n\nPresented in excellent condition and finished in a striking polished ebony cabinet, this KG-3C immediately commands attention with its refined curves, brass accents, and sophisticated grand piano silhouette.\n\nThe KG-3C remains a sought-after instrument among musicians and collectors alike. A perfect blend of elegance, craftsmanship, and performance, the Kawai KG-3C is more than just a piano — it is a centrepiece instrument designed to inspire for generations.\n\n\n\n",
  },
];