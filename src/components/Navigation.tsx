import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'SHOP', href: '/#shop' },
  { name: 'ABOUT', href: '/about' },
  { name: 'BLOG', href: '/#blog' },
  { name: 'CONTACT', href: '/#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
<a href="#" className="flex items-center">
  <img
    src="/images/logo-large.png"
    alt="Affordable Pianos"
    className={`h-16 w-auto transition-all duration-300 ${
      scrolled ? 'opacity-100' : 'opacity-90'
    }`}
  />
</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-[0.05em] transition-all duration-200 hover:opacity-70 ${
                  scrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors duration-300 ${
                scrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              className={`p-2 transition-colors duration-300 relative ${
                scrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1A1A1A] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 md:hidden transition-colors duration-300 ${
                    scrolled ? 'text-[#1A1A1A]' : 'text-white'
                  }`}
                  aria-label="Menu"
                >
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-[#1A1A1A] tracking-[0.05em] hover:opacity-70 transition-opacity"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
