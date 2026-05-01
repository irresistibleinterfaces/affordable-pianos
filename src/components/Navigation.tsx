import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'HOME', type: 'route', path: '/' },
  { name: 'SHOP', type: 'scroll', id: 'shop' },
  { name: 'ABOUT', type: 'scroll', id: 'about' },
  { name: 'CONTACT', type: 'scroll', id: 'contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const handleNavClick = (link: any) => {
  if (link.type === 'route') {
    navigate(link.path);

    // 👇 ADD THIS PART
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);

    setMobileMenuOpen(false);
    return;
  }

  // scroll links
  if (location.pathname !== '/') {
    navigate('/');
    setTimeout(() => {
      document.getElementById(link.id)?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
  } else {
    document.getElementById(link.id)?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  setMobileMenuOpen(false);
};

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <nav className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo-large.png"
              alt="Affordable Pianos"
              className="h-16 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`text-sm font-medium tracking-[0.05em] transition hover:opacity-70 ${
                  scrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* SEARCH */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`${scrolled ? 'text-black' : 'text-white'}`}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* MOBILE MENU */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link)}
                      className="text-lg text-left"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

          </div>
        </nav>

        {/* SEARCH BAR */}
        {searchOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white p-4 shadow-md">
            <input
              type="text"
              placeholder="Search pianos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleNavClick({ type: 'scroll', id: 'shop' });
                  setSearchOpen(false);
                }
              }}
              className="w-full px-4 py-3 border border-gray-200"
            />
          </div>
        )}

      </div>
    </motion.header>
  );
}