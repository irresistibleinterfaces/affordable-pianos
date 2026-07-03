const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/hero-bg-mob.png"
        />

        <img
          src="/images/luxury-grand-piano-homepage-banner-sydney.webp"
          alt="Luxury black grand piano in elegant modern showroom in Sydney"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </picture>


      {/* Left Side Readability Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent z-10" />

      {/* Soft Luxury Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_40%)] z-10" />

      {/* Content */}
      <div className="relative z-20 flex h-full">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="flex flex-col h-screen pt-32 md:pt-32">

              {/* Desktop Only Tag */}
              <div className="hidden md:inline-flex items-center gap-2 self-start rounded bg-stone-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-stone-900 mb-6">
                Sydney Warehouse • Clearance Sale
              </div>

              {/* Hero Heading */}
              <div className="pt-28 md:pt-24">

                <h1
                  className="
                    font-black
                    tracking-tight
                    text-white
                    leading-[0.95]
                  "
                >
                  Affordable<br />Pianos
                </h1>

                <p
  style={{
    fontSize: "clamp(2rem, 2.5vw, 2.5rem)"
  }}
                  className="
                    mt-3
                    font-light
                    text-stone-300
                    tracking-wide
                    max-w-sm
                  "
                >
                  Saving you thousands<br />on your next piano.
                </p>

              </div>

              {/* Buttons */}
              <div
                className="
                  mt-auto
                  mb-14
                  md:mt-10
                  md:mb-0
                  flex
                  flex-col
                  sm:flex-row
                  items-stretch
                  sm:items-center
                  gap-4
                "
              >
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

