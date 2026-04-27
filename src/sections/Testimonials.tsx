import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Couldn’t be happier with our piano. It looks beautiful in our home and sounds even better. The whole process was smooth from start to finish.",
    author: "Kylie C.",
    avatar: "/images/testimonial-avatar.jpg",
  },
  {
    id: 2,
    quote: "I was a bit hesitant buying a used piano online, but the quality exceeded expectations. It arrived in perfect condition and plays like new.",
    author: "Cameron M.",
    avatar: "/images/testimonial-avatar.jpg",
  },
  {
    id: 3,
    quote: "Amazing value for money. You can tell these pianos are properly cared for — not just resold. Will definitely recommend to friends",
    author: "Boi D.",
    avatar: "/images/testimonial-avatar.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Content */}
          <div className="relative min-h-[250px] sm:min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="text-center"
              >
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#1A1A1A] leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="text-[#1A1A1A] font-semibold">
                    {testimonials[currentIndex].author}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 border border-[#E5E5E5] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-[#1A1A1A] w-4'
                      : 'bg-[#E5E5E5] hover:bg-[#999999]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 border border-[#E5E5E5] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
