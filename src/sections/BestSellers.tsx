import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { pianos, type Piano } from "@/data/pianos";

export default function BestSellers() {
  return (
    <section
      id="shop"
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-3">
            OUR COLLECTION
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A]">
            Explore Our Pianos
          </h2>
        </motion.div>

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-4
            sm:gap-6
            lg:gap-8
          "
        >
          {pianos.map((piano: Piano, index: number) => (
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