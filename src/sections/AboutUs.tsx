import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Globe, Heart } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '12K', label: 'Happy Customers' },
  { value: '48', label: 'Design Partners' },
  { value: '100%', label: 'Satisfaction Rate' },
];

const values = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description:
      'Every piece in our collection is hand-selected and inspected by our team before it reaches your home.',
  },
  {
    icon: Users,
    title: 'People-First Service',
    description:
      'We believe buying furniture should feel personal. Our concierges build real relationships with every client.',
  },
  {
    icon: Globe,
    title: 'Global Sourcing, Local Care',
    description:
      'We partner with workshops across Europe, Asia, and North America — then deliver with neighbourhood-level attention.',
  },
  {
    icon: Heart,
    title: 'Designed to Last Generations',
    description:
      'Fast furniture is not in our vocabulary. We choose materials and methods that age beautifully over decades.',
  },
];

export default function AboutUs() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* === ROW 1: The Hook === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20 sm:mb-28"
        >
          <span className="text-[#999999] text-xs uppercase tracking-[0.2em] font-medium">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1A1A1A] tracking-tight mt-4 leading-[1.1]">
            We believe the space around you shapes the life within you.
          </h2>
          <p className="text-[#666666] text-base sm:text-lg mt-6 sm:mt-8 leading-relaxed">
            Furnexa was founded on a simple conviction: that everyone deserves to live and work
            in spaces that inspire. What began as a small curation of hand-picked Scandinavian
            pieces has grown into a destination for design-conscious individuals who refuse to
            compromise on quality, sustainability, or service.
          </p>
        </motion.div>

        {/* === ROW 2: Stats Bar === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] mb-20 sm:mb-28"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 sm:p-10 text-center"
            >
              <span className="text-[#1A1A1A] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                {stat.value}
              </span>
              <p className="text-[#666666] text-xs sm:text-sm uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* === ROW 3: Two-Column Story + CTA === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 sm:mb-28">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#1A1A1A] text-2xl sm:text-3xl font-semibold mb-6">
              From Passion to Purpose
            </h3>
            <div className="space-y-4 text-[#666666] text-sm sm:text-base leading-relaxed">
              <p>
                In 2010, our founder spent six months searching for a single sofa that met three
                criteria: honest materials, timeless design, and a fair price. The search revealed
                a gap in the market — and a mission.
              </p>
              <p>
                Today, Furnexa works directly with workshops and independent designers in
                Denmark, Italy, Japan, and the United States. We cut out middlemen so our customers
                receive museum-quality craftsmanship at accessible prices.
              </p>
              <p>
                Every piece tells a story. We know the names of the people who built your table.
                We know the forest your oak came from. And we know that when you love where you
                live, everything else improves.
              </p>
            </div>
          </motion.div>

          {/* Right: Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E5E5E5]"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#F5F5F5] p-6 sm:p-8 group hover:bg-white transition-colors duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] mb-4 group-hover:border-[#1A1A1A] group-hover:bg-[#1A1A1A] transition-all duration-300">
                    <Icon
                      className="w-4 h-4 text-[#1A1A1A] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4 className="text-[#1A1A1A] text-base font-semibold mb-2">
                    {value.title}
                  </h4>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* === ROW 4: Conversion CTA === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-[#1A1A1A] py-16 sm:py-20 px-6 sm:px-8"
        >
          <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
            Ready to transform your space?
          </h3>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Book a complimentary design consultation with one of our experts. No obligation,
            just honest guidance.
          </p>
          <a
            href="#contact"
            data-piano="cta"
            className="pressable inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A1A1A] text-sm font-medium tracking-wide hover:bg-[#F5F5F5] transition-colors duration-200"
          >
            <span>BOOK A CONSULTATION</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-white/40 text-xs mt-4">
            Free 30-minute session • Online or in-showroom
          </p>
        </motion.div>
      </div>
    </section>
  );
}
