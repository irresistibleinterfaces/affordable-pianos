
import { useEffect, useState } from 'react';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {

  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % PIANO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-20 top-12 lg:top-2">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">     
       
          {/* Left Side: Uncompromising, Ultra-Clean Visual Hierarchy */}
          <div className="flex flex-col justify-center">
            
            {/* Geolocation & Intent Tag */}
            <div className="inline-flex items-center gap-2 self-start rounded bg-stone-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-stone-900 mb-6">
              Sydney Warehouse • clearance sale 
            </div>
            
            {/* Massive Bold Headline focused explicitly on Value vs New */}
            <h1 className="text-4xl font-black tracking-tight text-stone-900 sm:text-6xl lg:text-[68px] leading-[1.05] lg:tracking-[-0.03em]">
              Save $9,000 <br />
              <span className="text-stone-400 font-normal">On A Certified Upright Piano.</span>
            </h1>

            {/* Razor-focused, sales-optimized Subheading */}
            <p className="mt-6 max-w-lg text-lg sm:text-xl font-medium leading-relaxed text-stone-600">
              Why pay $12,000 for a new mass-market piano? Our hand-restored Yamaha, Kawai, and Steinbach uprights look, feel, and sound immaculate—at half the investment.
            </p>

            {/* High-Converting CTA Button Assembly */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                  onClick={(e) => {
    e.preventDefault();
    scrollTo('about');
  }}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-stone-200 bg-white px-10 py-5 text-sm font-extrabold uppercase tracking-widest text-stone-900 transition-all hover:bg-stone-50 hover:border-stone-900 active:scale-[0.98] cursor-pointer"
              >
                Learn More
              </button>
              <button
                  onClick={(e) => {
    e.preventDefault();
    scrollTo('shop');
  }}
                className="bg-stone-900 px-10 py-5 text-sm font-extrabold uppercase tracking-widest text-white shadow-md transition-all hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] text-center cursor-pointer"
              >
                Browse Pianos
              </button>
            </div>

          </div>
      {/* Right Side: Heavyweight Focal Image Block */}
     
          {/* RIGHT — Image */}
          <div className="order-1 lg:order-2">
            <div className={`relative ${isVisible ? 'animate-scale-in delay-400' : 'opacity-0'}`} style={{ aspectRatio: '4/5' }}>
              {/* Main image */}
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                {PIANO_IMAGES.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{ opacity: i === activeImage ? 1 : 0 }}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                ))}
                {/* Soft gradient overlay at bottom */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 40%)' }}
                  aria-hidden="true"
                />

                {/* Carousel dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {PIANO_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeImage
                          ? 'w-2 h-2 bg-white'
                          : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`View piano image ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Price tag */}
                <div className="absolute top-6 right-6 z-10 bg-white rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm bg-opacity-95">
                  <p className="font-inter text-xs text-gray-500 line-through">RRP $11,999</p>
                  <p className="font-grotesque text-2xl font-bold text-amber-700 mt-1">$2,999</p>
                  <p className="font-inter text-xs text-emerald-600 font-medium mt-1">Save $9,000</p>
                </div>
              </div>
             </div>
              </div>
        
        
        </div>
      </div>
  );
}


const PIANO_IMAGES = [
  {
    src: 'https://www.affordablepianos.com.au/images/alex-steinbach-upright-piano-mahogany-front2.png',
    alt: 'Restored upright Yamaha piano with polished ebony finish — available in Sydney',
  },
  {
    src: 'https://www.affordablepianos.com.au/images/alex-steinbach-upright-piano-side-angle.png',
    alt: 'Grand piano keys close-up showing immaculate ivory and ebony restoration quality',
  },
  {
    src: 'https://www.affordablepianos.com.au/images/alex-steinbach-piano-logo-keyboard-closeup.png',
    alt: 'Pianist playing a restored Kawai upright piano in a Sydney home',
  },
];
