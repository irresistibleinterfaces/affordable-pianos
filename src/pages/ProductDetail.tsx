import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Shield, RefreshCw, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { pianos } from '@/data/pianos';
import { Helmet } from 'react-helmet-async';

const trustItems = [
  { icon: Truck, title: 'Delivery Available', desc: 'Contact for quote' },
  { icon: Shield, title: 'Fully Inspected', desc: 'Excellent condition' },
  { icon: RefreshCw, title: 'Test Before Purchase', desc: 'Viewings welcome' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const piano = pianos.find(p => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0);

  if (!piano) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Piano not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
<Helmet>
  <title>{piano.name} | Affordable Pianos Australia</title>

  <meta
    name="description"
    content={`${piano.name} in excellent condition. Polished finish, great tone, and affordable price. Available now in Australia.`}
  />

  <meta name="keywords" content="upright piano, affordable piano Australia, used piano, Alex Steinbach piano" />

  {/* Open Graph (for social sharing) */}
  <meta property="og:title" content={piano.name} />
  <meta property="og:description" content={piano.description.slice(0, 120)} />
  <meta property="og:image" content={piano.images[0]} />
</Helmet>
      <Navigation />

      <main className="pt-20">

        {/* Breadcrumb */}
        <div className="border-b border-[#E5E5E5]">
          <div className="max-w-[1400px] mx-auto px-4 py-4 text-sm text-[#999] flex items-center gap-2">
            <Link to="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/" className="hover:text-black">Pianos</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-black">{piano.name}</span>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-12">
          <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Images */}
            <div>
              <div className="aspect-[4/5] bg-[#F5F5F5] mb-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={piano.images[selectedImage]}
                    alt={piano.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              <div className="flex gap-2">
                {piano.images.map((img, i) => (
                  <button key={i} onClick={() => setSelectedImage(i)}>
                    <img src={img} className="w-20 h-20 object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-3xl font-semibold mb-4">
                {piano.name}
              </h1>

              <div className="text-2xl mb-6">
                {piano.price}
              </div>

              {/* Description */}
              <div className="space-y-4 text-[#666] mb-8">
                {piano.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* CTA */}
<div className="flex flex-col sm:flex-row gap-4">

  {/* CALL BUTTON */}
  <a
    href="tel:+61484128805"
    className="bg-black text-white px-6 py-3 text-center hover:bg-[#333]"
  >
    Call Now
  </a>

  {/* SMS BUTTON */}
  <a
    href={`sms:+61484128805?body=Hi, I'm interested in the ${piano.name}`}
    className="border border-black px-6 py-3 text-center hover:bg-black hover:text-white"
  >
    SMS Enquiry
  </a>

</div>
<p className="text-sm text-[#666] mt-2">
  Fast response — usually within 1 hour
</p>

              {/* Trust */}
              <div className="mt-8 space-y-3">
                {trustItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-2">
                      <Icon className="w-4 h-4" />
                      <span>{item.title} — {item.desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* Description */}
        <section className="py-12 border-t">
          <div className="max-w-[800px] mx-auto px-4">
            <h2 className="text-xl font-semibold mb-4">
              Full Description
            </h2>
            <div className="space-y-4 text-[#666]">
              {(piano.fullDescription || piano.description)
                .split('\n\n')
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
          </div>
        </section>

        {/* Contact anchor target */}
        <div id="contact" />

      </main>

      <Footer />
    </div>
  );
}