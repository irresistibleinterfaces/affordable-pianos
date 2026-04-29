import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-[#999999] text-xs uppercase tracking-[0.2em] font-medium">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight mt-4">
            Contact Us
          </h2>
          <p className="text-[#666666] text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Whether you have a question about a piece, need design advice, or want to
            discuss a custom order — we are here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-[#1A1A1A] text-xl font-semibold mb-6">
                Reach Out Directly
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-8">
                Our team typically responds within 24 hours. For urgent enquiries
                about existing orders, please include your order number.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 border border-[#E5E5E5] flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#1A1A1A]" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#999999] text-xs uppercase tracking-wider block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:support@furnexa.com"
                    className="text-[#1A1A1A] font-medium hover:opacity-70 transition-opacity"
                  >
                    support@furnexa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 border border-[#E5E5E5] flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#1A1A1A]" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#999999] text-xs uppercase tracking-wider block mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+18004528392"
                    className="text-[#1A1A1A] font-medium hover:opacity-70 transition-opacity"
                  >
                    +1 (800) 452-8392
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 border border-[#E5E5E5] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#1A1A1A]" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#999999] text-xs uppercase tracking-wider block mb-1">
                    Showroom
                  </span>
                  <p className="text-[#1A1A1A] font-medium">
                    214 Westwood Avenue
                    <br />
                    California, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="pt-6 border-t border-[#E5E5E5]">
              <span className="text-[#999999] text-xs uppercase tracking-wider block mb-3">
                Opening Hours
              </span>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#666666]">Mon – Fri</span>
                  <span className="text-[#1A1A1A] font-medium">9:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Saturday</span>
                  <span className="text-[#1A1A1A] font-medium">10:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Sunday</span>
                  <span className="text-[#1A1A1A] font-medium">By appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[#999999] text-xs uppercase tracking-wider block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E5E5] bg-transparent text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:border-[#1A1A1A] transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-[#999999] text-xs uppercase tracking-wider block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E5E5] bg-transparent text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:border-[#1A1A1A] transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="text-[#999999] text-xs uppercase tracking-wider block mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E5E5E5] bg-transparent text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="general">General Enquiry</option>
                  <option value="product">Product Question</option>
                  <option value="design">Design Consultation</option>
                  <option value="order">Order Status</option>
                  <option value="custom">Custom Order</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-[#999999] text-xs uppercase tracking-wider block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[#E5E5E5] bg-transparent text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:border-[#1A1A1A] transition-colors duration-200 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                data-piano="cta"
                className="pressable w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] text-white text-sm font-medium tracking-wide flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <span>Message Sent</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
