import { motion } from 'framer-motion';

const brands = [
  { name: 'Yamaha', tagline: 'Japanese Craftsmanship Since 1887' },
  { name: 'Steinway & Sons', tagline: 'The Piano of the Immortals' },
  { name: 'Bösendorfer', tagline: 'Viennese Tradition Since 1828' },
  { name: 'Fazioli', tagline: 'Uncompromising Excellence' },
  { name: 'Kawai', tagline: 'The Future of the Piano' },
  { name: 'Roland', tagline: 'Premium Digital Instruments' },
];

export default function Brands() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#999999] text-xs uppercase tracking-[0.2em] font-medium">
            Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight mt-4">
            Brands We Stock
          </h2>
          <p className="text-[#666666] text-base sm:text-lg mt-4 max-w-xl mx-auto">
            We are an authorised dealer for the world&apos;s most respected furniture and piano manufacturers.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E5E5E5]">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group bg-[#F5F5F5] hover:bg-white transition-colors duration-300 p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-default"
            >
              {/* Brand name as elegant typography mark */}
              <h3 className="text-[#1A1A1A] text-lg sm:text-xl font-semibold tracking-tight leading-tight">
                {brand.name}
              </h3>
              
              {/* Decorative line */}
              <div className="w-8 h-[1px] bg-[#1A1A1A]/20 my-3 group-hover:w-12 group-hover:bg-[#1A1A1A]/40 transition-all duration-300" />
              
              {/* Tagline */}
              <p className="text-[#999999] text-[10px] sm:text-xs uppercase tracking-wider">
                {brand.tagline}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-[#999999] text-xs sm:text-sm mt-8 sm:mt-10"
        >
          Authorised dealer for all brands listed. Full warranties apply.
        </motion.p>
      </div>
    </section>
  );
}
