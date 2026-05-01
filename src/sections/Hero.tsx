import { motion } from 'framer-motion';
import { heroBackground, heroTitle, fadeInUp, staggerContainerSlow, drawLine } from '@/lib/animations';

export default function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        variants={heroBackground}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <img
          src="/images/hero-bg.png"
          alt="Modern grand piano in living room"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        {/* Main Title */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroTitle}
            className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-extrabold text-white tracking-[-0.02em] leading-[0.9] text-center"
          >
            AFFORDABLE PIANOS
          </motion.h1>
        </motion.div>

        {/* Annotation Lines */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl hidden lg:block">
          <svg
            className="w-full h-[300px]"
            viewBox="0 0 800 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Line to sofa */}
            <motion.path
              variants={drawLine}
              initial="hidden"
              animate="visible"
              d="M 400 150 L 550 150 L 550 200"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <motion.circle
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              cx="550"
              cy="205"
              r="4"
              fill="white"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              x="560"
              y="145"
              fill="white"
              fontSize="14"
              fontWeight="400"
            >
              
            </motion.text>
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              x="560"
              y="165"
              fill="white"
              fontSize="14"
              fontWeight="400"
            >
              
            </motion.text>
          </svg>
        </div>

        {/* Bottom Product Info */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          className="pb-8"
        >
          <motion.div variants={fadeInUp} className="mb-3">
            <span className="inline-block px-3 py-1.5 bg-white/90 text-[#1A1A1A] text-xs font-medium tracking-wide rounded">
              Sydney-Based Piano Warehouse
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4"
          >
            Quality second-hand pianos in Sydney. Book a private viewing today.
          </motion.h2>
          <motion.div variants={fadeInUp}>
<a
  href="#shop"
  onClick={(e) => {
    e.preventDefault();

    const el = document.getElementById('shop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="inline-block px-8 py-4 bg-white text-[#1A1A1A] text-sm font-medium tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
>
  BROWSE PIANOS
</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
