import { motion } from 'framer-motion';

export default function TransformCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Find the piano that feels right — explore our collection today
          </h2>
          <a
            href="#shop"
            className="inline-block text-[#666666] hover:text-[#1A1A1A] transition-colors duration-200"
          >
            Shop Deals
          </a>
        </motion.div>
      </div>
    </section>
  );
}
