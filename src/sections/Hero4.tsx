
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {

  return (

<section id="top" className="relative h-screen w-full overflow-hidden">
  {/* Background Image */}
  <picture>
    {/* Mobile Image */}
    <source
      media="(max-width: 768px)"
      srcSet="/images/premium-black-grand-piano-showroom-sydney.webp"
    />

    {/* Desktop Image */}
    <img
      src="/images/luxury-grand-piano-homepage-banner-sydney.webp"
      alt="Luxury black grand piano in elegant modern showroom in Sydney"
      className="absolute inset-0 h-full w-full object-cover"
      loading="eager"
      fetchPriority="high"
    />
  </picture>

  {/* Dark Top Overlay For Nav */}
  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent z-10" />

  {/* Left Side Readability Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent z-10" />

  {/* Optional Soft Luxury Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_40%)] z-10" />

  {/* Content */}
  <div className="relative z-20 flex h-full items-center">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="max-w-2xl">

        {/* Left Side: Uncompromising, Ultra-Clean Visual Hierarchy */}
          <div className="flex flex-col justify-center">
            
            {/* Geolocation & Intent Tag */}
            <div className="hidden md:inline-flex items-center gap-2 self-start rounded bg-stone-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-stone-900 mb-6">
              Sydney Warehouse • clearance sale 
            </div>
            
            {/* Massive Bold Headline focused explicitly on Value vs New */}
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-[68px] leading-[1.05] lg:tracking-[-0.03em]">
              Affordable Pianos<br />
              <span className="text-stone-800 font-normal">Beautifully restored pianos for modern Sydney homes.</span>
            </h1>

            {/* Razor-focused, sales-optimized Subheading */}
            <p className="mt-6 max-w-lg text-lg sm:text-xl font-medium leading-relaxed text-white">
              Discover a curated range of pre-loved and restored upright, grand, and digital pianos and save thousands. Premium quality - without the premium price tag.
            </p>

            {/* High-Converting CTA Button Assembly */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                  onClick={(e) => {
    e.preventDefault();
    scrollTo('about');
  }}
                className="inline-block px-10 py-5 border border-white text-white text-sm font-bold tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
              >
                LEARN MORE
              </button>
              <button
                  onClick={(e) => {
    e.preventDefault();
    scrollTo('shop');
  }}
                className="bg-stone-900 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] text-center cursor-pointer"
              >
                Browse Pianos
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}