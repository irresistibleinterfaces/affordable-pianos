import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { pianos } from '@/data/pianos';

export default function BestSellers() {
  return (
    <section id="shop" className="py-16 sm:py-20 lg:py-24 bg-white">
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
            Pianos For Sale
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
{pianos.map((piano, index) => (
  <ProductCard
    key={piano.slug}
    name={piano.name}
    price={piano.price}
    image={piano.images[0]}
    slug={piano.slug}
    index={index}
  />
))}
        </div>
      </div>
    </section>
  );
}
