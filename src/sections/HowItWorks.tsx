import { motion } from 'framer-motion';
import { Search, MessageCircle, Truck, Eye } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Browse Available Pianos',
    description:
      'View our current selection of upright and grand pianos online.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Enquire or Book a Viewing',
    description:
      'Contact us to ask questions or arrange a time to visit our warehouse.',
  },
  {
    number: '03',
    icon: Eye,
    title: 'Inspect & Play',
    description:
      'Come in, test the piano, and make sure it feels right.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Purchase with Confidence',
    description:
      'Take home a piano you’ll love — ready to play from day one.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="text-[#999999] text-xs uppercase tracking-[0.2em] font-medium">
            Simple & Seamless
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight mt-4">
            How It Works
          </h2>
          <p className="text-[#666666] text-base sm:text-lg mt-4 max-w-xl mx-auto">
            From inspiration to installation, we have refined every step so furnishing your home feels effortless.
          </p>
        </motion.div>

        {/* Steps — Desktop: horizontal with connector line */}
        <div className="hidden lg:block relative">
          {/* Connector Line */}
          <div className="absolute top-[60px] left-[12.5%] right-[12.5%] h-[1px] bg-[#E5E5E5]" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="relative text-center"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-[120px] h-[120px] mx-auto bg-[#F5F5F5] flex items-center justify-center mb-8">
                    <div className="w-20 h-20 border border-[#E5E5E5] bg-white flex items-center justify-center">
                      <Icon
                        className="w-6 h-6 text-[#1A1A1A]"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className="text-[#999999] text-xs uppercase tracking-[0.15em] font-medium">
                    Step {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-[#1A1A1A] text-xl font-semibold mt-3 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#666666] text-sm leading-relaxed max-w-[260px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Steps — Mobile/Tablet: vertical layout */}
        <div className="lg:hidden space-y-12 sm:space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex gap-5 sm:gap-6"
              >
                {/* Left: Number + Icon */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#E5E5E5] bg-white flex items-center justify-center">
                    <Icon
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A1A1A]"
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Vertical connector */}
                  {index < steps.length - 1 && (
                    <div className="w-[1px] flex-1 min-h-[40px] bg-[#E5E5E5] mt-4" />
                  )}
                </div>

                {/* Right: Content */}
                <div className="pt-1">
                  <span className="text-[#999999] text-xs uppercase tracking-[0.15em] font-medium">
                    Step {step.number}
                  </span>
                  <h3 className="text-[#1A1A1A] text-lg sm:text-xl font-semibold mt-1 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
