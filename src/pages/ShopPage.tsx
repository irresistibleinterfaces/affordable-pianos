import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from "react-router-dom";

// Piano data
interface Piano {
id: number;
name: string;
slug: string; // ✅ added
type: 'upright' | 'grand' | 'digital';
price: number;
image: string;
description: string;
}

const pianos: Piano[] = [
{
id: 1,
name: 'Alex Steinbach Upright Piano',
slug: 'alex-steinbach-upright-piano',
type: 'upright',
price: 2999,
image: '/images/alex-steinbach-upright-piano-mahogany-front.webp',
description: 'Polished mahogany finish',
},
];

type SortOption = 'featured' | 'price-low' | 'price-high';
type FilterType = 'all' | 'upright' | 'grand' | 'digital';

export default function ShopPianos() {
const [selectedType, setSelectedType] = useState<FilterType>('all');
const [sortBy, setSortBy] = useState<SortOption>('featured');

const filteredPianos = useMemo(() => {
let result = [...pianos];

if (selectedType !== 'all') {
  result = result.filter((piano) => piano.type === selectedType);
}

switch (sortBy) {
  case 'price-low':
    result.sort((a, b) => a.price - b.price);
    break;
  case 'price-high':
    result.sort((a, b) => b.price - a.price);
    break;
}

return result;


}, [selectedType, sortBy]);

const formatPrice = (price: number) => {
return new Intl.NumberFormat('en-AU', {
style: 'currency',
currency: 'AUD',
maximumFractionDigits: 0,
}).format(price);
};

const filterButtons = [
{ value: 'all', label: 'All' },
{ value: 'upright', label: 'Upright' },
{ value: 'grand', label: 'Grand' },
{ value: 'digital', label: 'Digital' },
];

return ( <div className="min-h-screen bg-white"> 

<Helmet>
  {/* Primary SEO */}
  <title>
    Used & Restored Pianos for Sale Sydney | Upright & Grand Pianos
  </title>

  <meta
    name="description"
    content="Browse quality used and restored upright and grand pianos for sale in Sydney. Yamaha, Kawai, Steinbach and other trusted brands at affordable prices with free delivery across NSW."
  />

  <meta
    name="robots"
    content="index, follow"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://www.affordablepianos.com.au/pianos"
  />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:title"
    content="Used & Restored Pianos for Sale Sydney"
  />

  <meta
    property="og:description"
    content="Explore affordable upright and grand pianos including Yamaha, Kawai, and Steinbach models. Carefully selected used and restored pianos available across NSW."
  />

  <meta
    property="og:url"
    content="https://www.affordablepianos.com.au/pianos"
  />

  <meta
    property="og:image"
    content="https://www.affordablepianos.com.au/images/og-image.jpg"
  />

  {/* Twitter */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Used & Restored Pianos for Sale Sydney"
  />

  <meta
    name="twitter:description"
    content="Browse quality used upright and grand pianos from trusted brands including Yamaha, Kawai, and Steinbach."
  />

  <meta
    name="twitter:image"
    content="https://www.affordablepianos.com.au/images/og-image.jpg"
  />
</Helmet>


  <Navigation />

  {/* Hero */}
  <section className="pt-32 pb-12 bg-[#F5F5F5]">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4">
        Affordable Pianos in Sydney
      </h1>
      <p className="text-[#666666] text-base sm:text-lg max-w-2xl">
        Browse our collection of second-hand upright, grand and digital pianos. Carefully selected for tone, condition and value.
      </p>
    </div>
  </section>

  {/* Filters */}
  <section className="sticky top-20 z-30 bg-white border-b border-[#E5E5E5]">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div className="hidden sm:flex gap-2">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setSelectedType(btn.value as FilterType)}
              className={`px-4 py-2 text-sm ${
                selectedType === btn.value
                  ? 'bg-black text-white'
                  : 'text-gray-500'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="border px-4 py-2"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  </section>

  {/* Grid */}
  <section className="py-12">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPianos.map((piano) => (

<Link     key={piano.id}
    to={`/pianos/${piano.slug}`} className="block group">

            <div className="aspect-[3/4] bg-[#F5F5F5] mb-4 overflow-hidden">
              <img
                src={piano.image}
                alt={piano.name}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            <h3 className="text-lg font-medium">{piano.name}</h3>
            <p className="text-sm text-gray-500">{piano.description}</p>
            <p className="font-semibold mt-2">{formatPrice(piano.price)}</p>
          </Link>
        ))}
      </div>

    </div>
  </section>

  <Footer />
</div>

);
}
