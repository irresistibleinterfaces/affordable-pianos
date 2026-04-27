import { motion } from 'framer-motion';

interface CategoryCardProps {
  name: string;
  priceRange: string;
  image: string;
  index: number;
}

export default function CategoryCard({ name, priceRange, image, index }: CategoryCardProps) {
  return (
    <motion.a
      href="#shop"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative flex-shrink-0 w-[260px] sm:w-[280px] h-[360px] sm:h-[380px] overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white text-xl sm:text-2xl font-semibold mb-1">
          {name}
        </h3>
        <p className="text-white/80 text-sm">
          {priceRange}
        </p>
      </div>
    </motion.a>
  );
}
