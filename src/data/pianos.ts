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

  }
];