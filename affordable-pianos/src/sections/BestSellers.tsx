import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const products = [
  {
    name: 'Grand Piano',
    price: '$99.00',
    oldPrice: '$129.00',
    image: '/images/product-grand-piano2.png',
    stock: 10,
  },
  {
    name: 'Grand Piano',
    price: '$299',
    image: '/images/product-grand-piano3.png',
    stock: 10,
  },
  {
    name: 'Grand Piano',
    price: '$99',
    image: '/images/product-grand-piano4.png',
    stock: 10,
  },
  {
    name: 'Grand Piano',
    price: '$99',
    image: '/images/product-grand-piano1.png',
    stock: 10,
  },
];

export default function BestSellers() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A1A]">
            Featured
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
              stock={product.stock}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
