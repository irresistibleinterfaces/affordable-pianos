import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Piano data
interface Piano {
  id: number;
  name: string;
  type: 'upright' | 'grand' | 'digital';
  price: number;
  image: string;
  description: string;
}

const pianos: Piano[] = [
  {
    id: 1,
    name: 'Classic Upright',
    type: 'upright',
    price: 4999,
    image: '/images/piano-upright-1.jpg',
    description: 'Polished black finish',
  },
  {
    id: 2,
    name: 'Modern Upright',
    type: 'upright',
    price: 5999,
    image: '/images/piano-upright-2.jpg',
    description: 'Matte white finish',
  },
  {
    id: 3,
    name: 'Heritage Upright',
    type: 'upright',
    price: 7299,
    image: '/images/piano-upright-3.jpg',
    description: 'Mahogany wood finish',
  },
  {
    id: 4,
    name: 'Concert Grand',
    type: 'grand',
    price: 24999,
    image: '/images/piano-grand-1.jpg',
    description: 'Glossy black finish',
  },
  {
    id: 5,
    name: 'Walnut Grand',
    type: 'grand',
    price: 28999,
    image: '/images/piano-grand-2.jpg',
    description: 'Rich walnut wood',
  },
  {
    id: 6,
    name: 'Baby Grand',
    type: 'grand',
    price: 18999,
    image: '/images/piano-grand-3.jpg',
    description: 'Ebony high gloss',
  },
  {
    id: 7,
    name: 'Smart Digital',
    type: 'digital',
    price: 1299,
    image: '/images/piano-digital-1.jpg',
    description: 'LED display, 88 keys',
  },
  {
    id: 8,
    name: 'Slim Digital',
    type: 'digital',
    price: 899,
    image: '/images/piano-digital-2.jpg',
    description: 'Compact white design',
  },
  {
    id: 9,
    name: 'Portable Stage',
    type: 'digital',
    price: 1599,
    image: '/images/piano-digital-3.jpg',
    description: 'Wooden stand included',
  },
];

type SortOption = 'featured' | 'price-low' | 'price-high';
type FilterType = 'all' | 'upright' | 'grand' | 'digital';

export default function ShopPianos() {
  const [selectedType, setSelectedType] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort pianos
  const filteredPianos = useMemo(() => {
    let result = [...pianos];

    // Apply type filter
    if (selectedType !== 'all') {
      result = result.filter((piano) => piano.type === selectedType);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedType, sortBy]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const filterButtons: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'upright', label: 'Upright' },
    { value: 'grand', label: 'Grand' },
    { value: 'digital', label: 'Digital' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4">
              Shop Pianos
            </h1>
            <p className="text-[#666666] text-base sm:text-lg max-w-2xl">
              Discover our collection of premium pianos, crafted for exceptional sound and timeless elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Sort Bar */}
      <section className="sticky top-20 z-30 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Filter Buttons - Desktop */}
            <div className="hidden sm:flex items-center gap-2">
              {filterButtons.map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setSelectedType(btn.value)}
                  data-piano="filter"
                  className={`filter-btn pressable px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedType === btn.value
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-transparent text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              data-piano="button"
              onClick={() => setShowFilters(!showFilters)}
              className="pressable sm:hidden flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] text-[#1A1A1A]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="pressable appearance-none bg-transparent border border-[#E5E5E5] px-4 py-2 pr-10 text-sm text-[#1A1A1A] cursor-pointer focus:outline-none focus:border-[#1A1A1A]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666] pointer-events-none" />
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden mt-4 pt-4 border-t border-[#E5E5E5]"
            >
              <div className="flex flex-wrap gap-2">
                {filterButtons.map((btn) => (
                  <button
                    data-piano="filter"
                    key={btn.value}
                    onClick={() => {
                      setSelectedType(btn.value);
                      setShowFilters(false);
                    }}
                    className={`filter-btn pressable px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      selectedType === btn.value
                        ? 'bg-[#1A1A1A] text-white'
                        : 'bg-[#F5F5F5] text-[#666666]'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Results Count */}
          <div className="mt-4 text-sm text-[#999999]">
            {filteredPianos.length} {filteredPianos.length === 1 ? 'product' : 'products'}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {filteredPianos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPianos.map((piano, index) => (
                <motion.div
                  key={piano.id}
                  data-piano="card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="product-card group cursor-pointer"
                >
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F5] mb-4">
                    <img
                      src={piano.image}
                      alt={piano.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div>
                    <span className="text-[#999999] text-xs uppercase tracking-wider">
                      {piano.type}
                    </span>
                    <h3 className="text-[#1A1A1A] text-lg font-medium mt-1 group-hover:opacity-70 transition-opacity">
                      {piano.name}
                    </h3>
                    <p className="text-[#666666] text-sm mt-1">
                      {piano.description}
                    </p>
                    <p className="text-[#1A1A1A] font-semibold mt-2">
                      {formatPrice(piano.price)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#666666] text-lg">
                No pianos found for the selected filter.
              </p>
              <button
                data-piano="button"
                onClick={() => setSelectedType('all')}
                className="pressable mt-4 px-6 py-2 bg-[#1A1A1A] text-white text-sm font-medium"
              >
                View all pianos
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
