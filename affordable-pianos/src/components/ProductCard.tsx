import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  stock?: number;
  index?: number;
}

export default function ProductCard({ name, price, oldPrice, image, stock, index = 0 }: ProductCardProps) {
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
      whileHover={{ y: -8 }}
      className="group block cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F5] mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Stock Badge */}
        {stock !== undefined && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1A1A1A] text-white text-xs font-medium">
            {stock} in stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-[#1A1A1A] text-base sm:text-lg font-medium mb-2 group-hover:opacity-70 transition-opacity">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[#1A1A1A] font-semibold">{price}</span>
          {oldPrice && (
            <span className="text-[#999999] line-through text-sm">{oldPrice}</span>
          )}
        </div>
      </div>
    </motion.a>
  );
}
