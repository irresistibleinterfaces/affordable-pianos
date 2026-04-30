import { motion } from 'framer-motion';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function SocialCTA() {
  return (
    <section className="relative h-[300px] sm:h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/social-bg.png"
          alt="Furniture showroom"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
          Follow @affordablepianos
        </h2>
        
<a
  href="#shop"
  onClick={(e) => {
    e.preventDefault();
    scrollTo('shop');
  }}

          className="inline-block px-8 py-3 border border-white text-white text-sm font-medium tracking-wide hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
        >
          BROWSE PIANOS
        </a>
      </motion.div>
    </section>
  );
}
