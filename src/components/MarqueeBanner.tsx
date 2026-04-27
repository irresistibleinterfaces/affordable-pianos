import { useState } from 'react';

const marqueeItems = [
  'NEW ARRIVALS JUST DROPPED',
  'ENJOY EXCLUSIVE DEALS AND DISCOUNTS.',
  'LIMITED STOCK AVAILABLE',
  'UP TO 50% OFF THIS WEEK',
];

export default function MarqueeBanner() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items for seamless loop
  const allItems = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="bg-[#1A1A1A] py-4 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex whitespace-nowrap ${
          isPaused ? '' : 'animate-marquee'
        }`}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {allItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white text-xs sm:text-sm font-medium tracking-[0.1em] uppercase px-4 sm:px-8">
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
