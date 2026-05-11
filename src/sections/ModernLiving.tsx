import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function ModernLiving() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content: Heavyweight Focal Image Block */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
          <div className="relative mt-6 lg:mt-0">
            <div className="aspect-[4/5] w-full overflow-hidden bg-stone-50 shadow-xl border border-stone-100">
              <img
                src="/images/luxury-grand-piano-showroom-sydney.webp"
                alt="Luxury black grand piano displayed in a modern Sydney piano showroom"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-8"> 
              At Affordable Pianos, we specialise in sourcing high-quality used pianos
              across Sydney, giving each instrument a second life.
              Unlike typical online marketplaces, we give you the opportunity
              to inspect and play each piano in person at our Sydney warehouse before making
              a decision. No surprises, no pressure — just a straightforward buying experience.
            </p>
            
            <div className="mb-8">
              <h3 className="text-[#1A1A1A] text-xl sm:text-2xl font-semibold mb-2">
                New Stock Arriving Soon
              </h3>
              <p className="text-[#666666] text-sm sm:text-base">
                We’re currently preparing a selection of quality pre-loved pianos.
                Our full inventory will be available shortly — in the meantime, feel free
                to get in touch for early access to upcoming
                arrivals.
              </p>
            </div>

            <a
              href="#shop"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="inline-flex items-center gap-2 text-[#1A1A1A] font-medium hover:opacity-70 transition-opacity"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
