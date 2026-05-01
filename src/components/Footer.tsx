import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const linkColumns = [
  {
    title: 'Links',
    links: [
      { name: 'Home', type: 'route', path: '/' },
      { name: 'Shop', type: 'scroll', id: 'shop' },
      { name: 'About Us', type: 'scroll', id: 'about' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { name: 'Grand Pianos', type: 'scroll', id: 'shop' },
      { name: 'Upright Pianos', type: 'scroll', id: 'shop' },
      { name: 'Digital', type: 'scroll', id: 'shop' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Shipping Information', type: 'route', path: '/shipping' },
      { name: 'Returns', type: 'route', path: '/returns' },
      { name: 'Privacy Policy', type: 'route', path: '/privacy-policy' },
      { name: 'Terms', type: 'route', path: '/terms' },
      { name: 'Contact', type: 'scroll', id: 'contact' },
    ],
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (link: any) => {
    if (link.type === 'route') {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12 border-b border-white/10"
        >
          <div>
            <Link to="/">
              <img
                src="/images/logo-white.png"
                alt="Affordable Pianos"
                className="h-24 mb-4"
              />
            </Link>
            <p className="text-[#999] max-w-md">
              Quality second-hand pianos in Sydney. Book a private viewing today.
            </p>
          </div>

          <div className="lg:text-right space-y-3">
            <a href="mailto:affordablepianos@purelymail.com" className="flex lg:justify-end gap-2 text-[#999] hover:text-white">
              <Mail className="w-4 h-4" />
              affordablepianos@purelymail.com
            </a>

            <a href="tel:+61484128805" className="flex lg:justify-end gap-2 text-[#999] hover:text-white">
              <Phone className="w-4 h-4" />
              (+61) 484 128 805
            </a>

            <div className="flex lg:justify-end gap-2 text-[#999]">
              <MapPin className="w-4 h-4" />
              Sydney, Australia
            </div>
          </div>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-12 border-b border-white/10">
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs uppercase mb-4">{column.title}</h4>

              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleClick(link)}
                      className="text-[#999] text-sm hover:text-white transition"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-[#999] text-sm">
            © 2026 Affordable Pianos
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-[#999] hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#999] hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#999] hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}