import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';

const categories = [
  { name: 'Lamps', priceRange: '$1,099 - $6,099', image: '/images/category-lamps.jpg' },
  { name: 'Office', priceRange: '$3,099 - $6,099', image: '/images/category-office.jpg' },
  { name: 'Living Room', priceRange: '$2,099 - $5,099', image: '/images/category-living.jpg' },
  { name: 'Dining', priceRange: '$1,099 - $3,099', image: '/images/category-dining.jpg' },
  { name: 'Bedroom', priceRange: '$2,099 - $9,099', image: '/images/category-bedroom.jpg' },
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A1A]">
            Shop by category
          </h2>
          
          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-[#E5E5E5] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-[#E5E5E5] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Categories Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
        >
          {categories.map((category, index) => (
            <div key={category.name} className="snap-start">
              <CategoryCard
                name={category.name}
                priceRange={category.priceRange}
                image={category.image}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
