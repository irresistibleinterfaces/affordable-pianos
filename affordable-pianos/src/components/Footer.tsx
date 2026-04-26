import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const linkColumns = [
  {
    title: 'Links',
    links: [
      { name: 'Home', href: '#' },
      { name: 'Shop', href: '#shop' },
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'FAQ', href: '#' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { name: 'Grand Pianos', href: '#shop' },
      { name: 'Upright Pianos', href: '#shop' },
      { name: 'Digital', href: '#shop' },
      { name: 'Keyboards', href: '#shop' },
      { name: 'Accessories', href: '#shop' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Shipping Information', href: '#' },
      { name: 'Return & Refund Policy', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-12 border-b border-white/10"
        >
          {/* Left - Brand */}
<div>
  <div className="mb-4">
    <img
      src="/images/logo-white.png"
      alt="Affordable Pianos"
      className="h-28 sm:h-30 w-auto"
    />
  </div>

  <p className="text-[#999999] text-sm sm:text-base leading-relaxed max-w-md">
    Timeless Pianos, Ready for Their Next Chapter.
  </p>
</div>

          {/* Right - Contact */}
          <div className="lg:text-right">
            <div className="space-y-3">
              <a
                href="mailto:support@prelovedpianos.com"
                className="flex items-center lg:justify-end gap-2 text-[#999999] hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>support@prelovedpianos.com</span>
              </a>
              <a
                href="tel:+1800123456"
                className="flex items-center lg:justify-end gap-2 text-[#999999] hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>(+61) 469-696-969</span>
              </a>
              <div className="flex items-center lg:justify-end gap-2 text-[#999999]">
                <MapPin className="w-4 h-4" />
                <span>123 Fake St, Sutherland, Russia</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Middle Section - Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 py-12 border-b border-white/10"
        >
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-medium uppercase tracking-wider text-white mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#999999] text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
        >
          <p className="text-[#999999] text-sm">
            © 2026 Affordable Pianos. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
