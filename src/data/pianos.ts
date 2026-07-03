export type Piano = {
  slug: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  images: string[];
  description: string;
  category: string;
  fullDescription?: string;
  specs?: {
    brand?: string;
    model?: string;
    type?: string;
    serialNumber?: string;
    height?: string;
    width?: string;
    depth?: string;
    weight?: string;
    pedals?: string;
    keys?: string;
    finish?: string;
    origin?: string;
    condition?: string;
  };
  deliveryInfo?: string;
};

export const pianos: Piano[] = [
  {
    slug: "alex-steinbach-JS-115D-upright-piano",
    name: "Alex Steinbach JS-115D Upright Piano",
    brand: "Alex Steinbach",
    price: "$2,999",
    image:
      "https://www.affordablepianos.com.au/images/alex-steinbach-upright-piano-mahogany-front.webp",
    images: [
      "https://www.affordablepianos.com.au/images/alex-steinbach-upright-piano-mahogany-front.webp",
      "https://www.affordablepianos.com.au/images/alex-steinbach-upright-piano-side-angle.webp",
      "https://www.affordablepianos.com.au/images/alex-steinbach-piano-logo-keyboard-closeup.webp",
      "https://www.affordablepianos.com.au/images/alex-steinbach-upright-piano-brass-pedals.webp",
      "https://www.affordablepianos.com.au/images/alex-steinbach-piano-internal-strings-serial.webp"
    ],
    description: "A beautifully presented Alex Steinbach upright piano in like-new condition, featuring a polished mahogany finish and warm, resonant tone. Designed with German influence and built for reliability, it’s an excellent choice for players of all levels seeking quality at an affordable price.",
    category: "Upright",
    fullDescription: "This Alex Steinbach upright piano is presented in like-new condition, with no visible scratches or damage. Finished in a rich polished mahogany cabinet, it offers both timeless style and a warm, resonant tone ideal for home or studio use.\n\nDesigned with German influence and precision, Alex Steinbach pianos combine traditional craftsmanship with modern manufacturing. This model was developed in collaboration with renowned German piano technician Klaus Fenner and produced by Samick Musical Instruments, one of the world’s largest and most respected piano manufacturers based in South Korea.\n\nThe result is a reliable, high-quality acoustic piano that delivers excellent performance and long-term value — perfect for beginners, students, or experienced players seeking an affordable upright piano.\n\n\n\n",
    specs: {
      brand: "Alex Steinbach",
      model: "JS-115D",
      type: "Upright Piano",
      height: "115cm",
      width: "148cm",
      depth: "56cm",
      weight: "215kg",
      pedals: "3",
      finish: "Polished Mahogany",
      condition: "Excellent"
    },
  },
  {
    slug: "kawai-KG-3C-grand-piano",
    name: "Kawai KG-3C Grand Piano",
    brand: "Kawai",
    price: "$7,999",
    image:
      "https://www.affordablepianos.com.au/images/kawai-KG-3C-grand-piano-side-angle-main.webp",
    images: [
      "https://www.affordablepianos.com.au/images/kawai-KG-3C-grand-piano-side-angle-main.webp",
      "https://www.affordablepianos.com.au/images/kawai-KG-3C-grand-piano-logo-keyboard-closeup.webp",
      "https://www.affordablepianos.com.au/images/kawai-KG-3C-grand-piano-side-angle.webp",
      "https://www.affordablepianos.com.au/images/kawai-KG-3C-grand-piano-front.webp"
    ],
    description: "This beautifully maintained Kawai KG-3C is a beautifully crafted grand piano renowned for its rich tonal depth, responsive touch, and timeless Japanese engineering. Finished in an elegant high-gloss black cabinet, this premium grand piano delivers both stunning visual presence and exceptional musical performance for homes, studios, and professional spaces alike.",
    category: "Grand",
    fullDescription: "Experience the warmth, clarity, and expressive power of the Kawai KG-3C Grand Piano — a highly regarded model from one of Japan’s most respected piano manufacturers. Combining precision craftsmanship with classic elegance, the KG-3C is celebrated for its balanced tone, responsive action, and impressive dynamic range, making it equally suited for serious pianists, educators, recording environments, and luxury interiors.\n\nPresented in excellent condition and finished in a striking polished ebony cabinet, this KG-3C immediately commands attention with its refined curves, brass accents, and sophisticated grand piano silhouette.\n\nThe KG-3C remains a sought-after instrument among musicians and collectors alike. A perfect blend of elegance, craftsmanship, and performance, the Kawai KG-3C is more than just a piano — it is a centrepiece instrument designed to inspire for generations.\n\n\n\n",
    specs: {
      brand: "Kawai",
      model: "KG-3C",
      type: "Grand Piano",
      height: "102cm",
      width: "152cm",
      depth: "182cm",
      weight: "315kg",
      keys: "88",
      pedals: "3",
      finish: "Polished Ebony",
      origin: "Made in Japan",
      condition: "Excellent"
    },
  },
  {
    slug: "kawai-CS-40-upright-piano",
    name: "Kawai CS-40 Upright Piano",
    brand: "Kawai",
    price: "Negotiable",
    image:
      "https://www.affordablepianos.com.au/images/kawai-CS-40-upright-piano-front.webp",
    images: [
      "/images/kawai-CS-40-upright-piano-front.webp"
    ],
    description: "A quality Japanese-made Kawai CS-40 upright piano featuring a rich, resonant tone and responsive touch. Renowned for its reliability, musical performance, and elegant design, the CS-40 is an excellent choice for students, families, and experienced pianists.",
    category: "Upright",
    fullDescription: "The Kawai CS-40 is a highly regarded Japanese-made upright piano that combines exceptional craftsmanship with the warm, expressive sound for which Kawai is renowned. Built to deliver outstanding musical performance and long-term reliability, the CS-40 is an excellent choice for both developing musicians and experienced players seeking a quality acoustic piano.\n\nWith its taller cabinet design, the CS-40 offers impressive tonal depth and projection, producing a rich, resonant sound that is often associated with larger upright pianos. Its responsive action provides excellent control and consistency across the keyboard, allowing players to perform with confidence and expression across a wide range of musical styles.\n\nCrafted in Japan using high-quality materials and precise engineering, the Kawai CS-40 is designed to provide decades of dependable performance. Its elegant cabinet styling makes it a beautiful addition to any home, studio, or teaching environment, while its musical capabilities ensure it remains rewarding to play for years to come.\n\nWhether you are purchasing your first acoustic piano, upgrading from a smaller instrument, or searching for a quality Japanese upright at exceptional value, the Kawai CS-40 delivers an outstanding balance of tone, touch, and craftsmanship.",
    specs: {
      brand: "Kawai",
      model: "CS-40",
      serialNumber: "2280689",
      type: "Upright Piano",
      keys: "88",
      pedals: "3",
      finish: "Polished Ebony",
      origin: "Made in Japan",
      height: "132cm",
      width: "156cm",
      depth: "66cm",
      weight: "230kg",
      condition: "Excellent"
    },
  },
  {
    slug: "yamaha-P2-upright-piano",
    name: "Yamaha P2 Upright Piano",
    brand: "Yamaha",
    price: "Negotiable",
    image:
      "https://www.affordablepianos.com.au/images/yamaha-P2-upright-piano-sydney-front.webp",
    images: [
      "https://www.affordablepianos.com.au/images/yamaha-P2-upright-piano-sydney-front.webp",
      "https://www.affordablepianos.com.au/images/yamaha-P2-upright-piano-sydney-angle.png",
      "https://www.affordablepianos.com.au/images/yamaha-P2-upright-piano-sydney-brass-pedals.webp",
      "https://www.affordablepianos.com.au/images/yamaha-P2-upright-piano-sydney-close-up.webp",
      "https://www.affordablepianos.com.au/images/yamaha-P2-upright-piano-sydney-internal-strings-serial.webp",
      "https://www.affordablepianos.com.au/images/yamaha-P2-upright-piano-sydney-keys.webp"
    ],
    description: "A beautifully crafted Yamaha P2 upright piano renowned for its warm tone, responsive touch, and exceptional reliability. An excellent choice for beginners, advancing students, and experienced players seeking Yamaha quality at an affordable price.",
    category: "Upright",
    fullDescription: "The Yamaha P2 is a highly regarded upright piano that combines Yamaha's renowned build quality with a rich, balanced sound and responsive keyboard action. Designed to provide years of reliable performance, the P2 has become a popular choice for families, students, teachers, and pianists looking for a quality instrument without the cost of a new piano.\n\nThis pre-owned Yamaha P2 delivers a warm, expressive tone with excellent clarity across the entire keyboard. Its responsive action provides a comfortable playing experience, helping players develop proper technique while offering the control and dynamic range required for more advanced repertoire.\n\nBuilt with Yamaha's reputation for durability and consistency, the P2 is well suited to both home practice and regular use. Its elegant cabinet design complements a wide range of interiors, making it as attractive as it is enjoyable to play.\n\nWhether you're purchasing your first piano, upgrading from a keyboard, or looking for a dependable instrument for your home, the Yamaha P2 offers outstanding value and performance.",
    specs: {
      brand: "Yamaha",
      model: "P2",
      serialNumber: "3343926",
      type: "Upright Piano",
      keys: "88",
      pedals: "3",
      finish: "Polished Walnut / Mahogany-look cabinet",
      height: "114cm",
      width: "148cm",
      depth: "54cm",
      weight: "191kg",
      origin: "Made in Japan",
      condition: "Excellent"
    },
  },
  {
    slug: "kawai-CE-7N-upright-piano",
    name: "Kawai CE-7N Upright Piano",
    brand: "Kawai",
    price: "Negotiable",
    image:
      "https://www.affordablepianos.com.au/images/kawai-CE-7N-upright-piano-front.webp",
    images: [
      "/images/kawai-CE-7N-upright-piano-front.webp"
    ],
    description: "A beautifully crafted Japanese-made Kawai CE-7N upright piano offering a rich, warm tone and responsive touch. Combining elegant design with renowned Kawai craftsmanship, it is an excellent choice for students, families, and experienced pianists alike.",
    category: "Upright",
    fullDescription: "The Kawai CE-7N is a premium upright piano that reflects Kawai's long-standing reputation for exceptional craftsmanship, musical expression, and reliability. Manufactured in Japan, this elegant instrument delivers the rich tonal character and responsive playing experience that have made Kawai a favourite among pianists, teachers, and music enthusiasts around the world.\n\nFeaturing a warm, balanced tone with excellent depth and clarity, the CE-7N provides an expressive sound suitable for everything from beginner lessons to advanced repertoire. Its responsive action offers precise control and consistency across the keyboard, allowing players to develop confidence and technique while enjoying a highly rewarding playing experience.\n\nThe CE-7N's cabinet design combines timeless elegance with practical functionality, making it a beautiful addition to any home, studio, or teaching environment. Built to Kawai's exacting standards, this piano is designed to provide many years of dependable performance and musical enjoyment.\n\nWhether you are purchasing your first acoustic piano, upgrading from a digital instrument, or seeking a quality Japanese-made upright, the Kawai CE-7N represents outstanding value and performance.",
    specs: {
      brand: "Kawai",
      model: "CE-7N",
      type: "Upright Piano",
      height: "108cm",
      width: "149cm",
      depth: "58cm",
      keys: "88",
      pedals: "3",
      finish: "Polished Mahogany",
      condition: "Very Good"
    },
  },
  {
    slug: "yamaha-M5J-upright-piano",
    name: "Yamaha M5J Upright Piano",
    brand: "Yamaha",
    price: "Negotiable",
    image:
      "https://www.affordablepianos.com.au/images/yamaha-M5J-upright-piano-front.webp",
    images: [
      "/images/yamaha-M5J-upright-piano-front.webp"
    ],
    description: "A quality Japanese-made Yamaha M5J upright piano featuring a warm, expressive tone and responsive touch. Well suited to beginners, students, and experienced players seeking Yamaha craftsmanship, reliability, and musical performance at exceptional value.",
    category: "Upright",
    fullDescription: "The Yamaha M5J is a beautifully crafted upright piano that showcases the quality, reliability, and musicality that have made Yamaha one of the world's most respected piano manufacturers. Built in Japan, the M5J offers an excellent balance of tone, touch, and durability, making it a popular choice for homes, studios, and teaching environments.\n\nThis pre-owned Yamaha M5J delivers a rich, warm sound with impressive clarity throughout the keyboard. Its responsive action provides excellent control and consistency, allowing players to develop technique with confidence while enjoying an expressive and rewarding playing experience.\n\nDesigned with Yamaha's renowned attention to detail, the M5J combines dependable performance with an elegant cabinet design that complements both traditional and modern interiors. Whether you're a beginner purchasing your first acoustic piano or an experienced pianist seeking a quality instrument at an affordable price, the Yamaha M5J represents outstanding value.\n\nEach note responds smoothly and evenly, producing a balanced tone suitable for a wide range of musical styles, from classical and jazz to contemporary music. Yamaha's reputation for long-term reliability means this piano is built to provide many years of enjoyment and performance.",
    specs: {
      brand: "Yamaha",
      model: "M5J",
      serialNumber: "R3801862",
      type: "Upright Piano",
      height: "108cm",
      width: "148cm",
      depth: "56cm",
      pedals: "3",
      finish: "Polished Ebony",
      origin: "Made in Japan",
      condition: "Excellent"
    },
  },
];