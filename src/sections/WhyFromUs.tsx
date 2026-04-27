import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

export default function WhyFromUs() {
  const words = [
    { text: 'Experience', bold: false },
    { text: 'timeless', bold: true },
    { text: 'sound,', bold: false },
    { text: 'refined', bold: true },
    { text: 'craftmanship,', bold: false },
    { text: 'and', bold: false },
    { text: 'premium', bold: true },
    { text: 'quality', bold: false },
    { text: 'built', bold: true },
    { text: 'to', bold: false },
    { text: 'last', bold: true },
    { text: 'for', bold: false },
    { text: 'generations', bold: true },
    { text: '.', bold: false },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className={`inline-block mr-2 ${
                    word.bold ? 'font-semibold text-[#1A1A1A]' : 'font-normal text-[#666666]'
                  }`}
                >
                  {word.text}
                </motion.span>
              ))}
            </h2>
            
            <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
              Each piano is carefully selected to deliver rich tone, elegant design, and
              performance that lasts for generations—bringing music, character, and soul into your space.
            </p>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src="/images/why-from-us.png"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
