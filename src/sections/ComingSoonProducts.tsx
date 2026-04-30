import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const sampleProducts = [
  {
    id: 1,
    name: 'Traditional Upright Piano',
    category: 'Upright Pianos',
    priceRange: '$799 – $2,499',
    image: '/images/category-traditional-upright.png',
  },
  {
    id: 2,
    name: 'Baby Grand Piano',
    category: 'Grand Pianos',
    priceRange: '$2,999 – $7,999',
    image: '/images/category-baby-grand.png',
  },
  {
    id: 3,
    name: 'Compact Upright Piano',
    category: 'Upright Pianos',
    priceRange: '$499 – $1,199',
    image: '/images/category-compact-upright.png',
  },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function ComingSoonProducts() {
  return (
    <section id="shop" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.15em] font-medium mb-6">
            <Clock className="w-3.5 h-3.5" strokeWidth={2} />
            Coming Soon
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
            Our Collection
          </h2>
          <p className="text-[#666666] text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            We’re currently preparing a curated selection of quality pre-loved pianos.
            Our full inventory will be available shortly — in the meantime, feel free
            to browse example models below or get in touch for early access to upcoming
            arrivals.
          </p>
        </motion.div>

        {/* Disclaimer Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 sm:mb-14 p-4 sm:p-5 border border-[#E5E5E5] bg-[#F5F5F5] text-center"
        >
          <p className="text-[#666666] text-sm">
            <span className="text-[#1A1A1A] font-medium">Note:</span> The products below are 
            <span className="text-[#1A1A1A] font-medium"> representative samples only</span>. 
            Final inventory, exact prices, and product details will be available shortly. 
            Please get n touch with us if you wish to be notified when the full catalogue goes live.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sampleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group cursor-default"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F5] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Sample Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#1A1A1A] text-[10px] uppercase tracking-wider font-medium">
                  Sample
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/10 transition-colors duration-300" />
              </div>

              {/* Info */}
              <div>
                <span className="text-[#999999] text-xs uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-[#1A1A1A] text-lg font-medium mt-1">
                  {product.name}
                </h3>
                <p className="text-[#666666] text-sm mt-1">
                  Est. price range
                </p>
                <p className="text-[#1A1A1A] font-semibold mt-1">
                  {product.priceRange}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14 sm:mt-20"
        >
          <p className="text-[#999999] text-sm mb-4">
            Want to know when the full collection drops?
          </p>
<a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    scrollTo('contact');
  }}

            data-piano="cta"
            className="pressable inline-block px-8 py-4 bg-[#1A1A1A] text-white text-sm font-medium tracking-wide"
          >
            GET NOTIFIED
          </a>
        </motion.div>
      </div>
    </section>
  );
}
