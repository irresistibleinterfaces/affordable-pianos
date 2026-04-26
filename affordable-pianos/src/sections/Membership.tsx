import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

export default function Membership() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] mb-4">
              Membership
            </h2>
            <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-6">
              Unlock savings made just for you with exclusive perks, early access, 
              and member-only offers.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-[#1A1A1A] text-white text-sm font-medium tracking-wide hover:bg-[#333333] transition-colors duration-300"
            >
              Join Now
            </a>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/membership.png"
                alt="Membership benefits"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
