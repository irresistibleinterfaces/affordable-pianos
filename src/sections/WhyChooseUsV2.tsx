import { motion } from 'framer-motion';
import { Gem, SearchCheck, Warehouse, Handshake } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Upright & Grand Pianos — Without the Retail Markup',
    description:
      'We specialise in high-quality upright and grand pianos from trusted brands, priced far below new retail.',
  },
  {
    icon: SearchCheck,
    title: 'Fully Inspected & Play-Tested Pianos',
    description:
      'Every piano is carefully inspected for tone, touch, and condition — so you’re not gambling on unknown quality or risky online listings.',
  },
  {
    icon: Warehouse,
    title: 'Try Before You Buy — Sydney Warehouse',
    description:
      'Visit our Sydney location and experience each piano in person. No pressure, no sales tactics — just honest advice and time to choose what feels right.',
  },
  {
    icon: Handshake,
    title: 'Deal Direct — No Middlemen, No Markups',
    description:
      'You’re speaking directly with the seller, not a showroom or reseller. That means clearer answers, better prices, and a smoother buying experience.',
  },
];

export default function WhyChooseUsV2() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
            Why Buy From Us
          </h2>
          <div className="w-16 h-[2px] bg-[#1A1A1A] mx-auto mt-6" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="group bg-white p-8 sm:p-10 lg:p-12"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#E5E5E5] group-hover:border-[#1A1A1A] group-hover:bg-[#1A1A1A] transition-all duration-300">
                    <Icon
                      className="w-5 h-5 text-[#1A1A1A] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Number */}
                <span className="text-[#E5E5E5] text-5xl sm:text-6xl font-bold leading-none block mb-4">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Title */}
                <h3 className="text-[#1A1A1A] text-lg font-semibold mb-4 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
