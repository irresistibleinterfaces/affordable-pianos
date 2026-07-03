import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Shield, RefreshCw, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { pianos, type Piano } from '@/data/pianos';

const trustItems = [
  { icon: Truck, title: 'Free Delivery', desc: 'Contact for details' },
  { icon: Shield, title: 'Fully Inspected', desc: 'Excellent condition' },
  { icon: RefreshCw, title: 'Test Before Purchase', desc: 'Viewings welcome' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const piano = pianos.find((p: Piano) => p.slug === slug);

const [selectedImage, setSelectedImage] = useState(0);

const [activeTab, setActiveTab] = useState<
  'description' | 'specs' | 'delivery'
>('description');

  if (!piano) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Piano not found</p>
      </div>
    );
  }

const specs = piano.specs ?? {};

const deliveryInfo =
  piano.deliveryInfo ??
  `

Viewings are welcome by appointment.

Delivery is available throughout Sydney and surrounding areas.

Please contact us for interstate delivery options.

All pianos are carefully inspected prior to sale.

`;

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": piano.name,
  "description": piano.description,
  "image": piano.image,
  "brand": {
    "@type": "Brand",
    "name": piano.brand
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "AUD",
    "price": piano.price.replace(/[^0-9.]/g, ""),
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/UsedCondition",
    "url": `https://www.affordablepianos.com.au/pianos/${piano.slug}`
  }
};

  return (
    <div className="min-h-screen bg-white">
<Helmet>

  <title>
    {piano.name} for Sale in Sydney | Affordable Pianos
  </title>

  <meta
    name="description"
    content={piano.description}
  />

  <meta name="keywords" content="upright piano, affordable piano Australia, used piano, Alex Steinbach piano" />

  <link
    rel="canonical"
    href={`https://www.affordablepianos.com.au/pianos/${piano.slug}`}
  />

  {/* Open Graph */}
  <meta property="og:title" content={`${piano.name} | Affordable Pianos Sydney`} />
  <meta property="og:description" content={piano.description.slice(0, 120)} />
  <meta property="og:image" content={piano.image} />

  <meta
    property="og:type"
    content="product"
  />

<script type="application/ld+json">
  {JSON.stringify(schema)}
</script>

</Helmet>
      <Navigation />

      <main className="pt-20">

        {/* Breadcrumb */}
        <div className="border-b border-[#E5E5E5]">
          <div className="max-w-[1400px] mx-auto px-4 py-4 text-sm text-[#999] flex items-center gap-2">
            <Link to="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/pianos" className="hover:text-black">Pianos</Link>
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
                {piano.images.map((img: string, i: number) => (
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

{/* Product Information Tabs */}
<section className="py-12 border-t">
  <div className="max-w-[900px] mx-auto px-4">

    {/* Tabs */}
    <div className="flex gap-6 border-b mb-8 overflow-x-auto">

      <button
        onClick={() => setActiveTab('description')}
        className={`pb-4 whitespace-nowrap transition-colors ${
          activeTab === 'description'
            ? 'border-b-2 border-black text-black'
            : 'text-[#777]'
        }`}
      >
        Description
      </button>

      <button
        onClick={() => setActiveTab('specs')}
        className={`pb-4 whitespace-nowrap transition-colors ${
          activeTab === 'specs'
            ? 'border-b-2 border-black text-black'
            : 'text-[#777]'
        }`}
      >
        Specifications
      </button>

      <button
        onClick={() => setActiveTab('delivery')}
        className={`pb-4 whitespace-nowrap transition-colors ${
          activeTab === 'delivery'
            ? 'border-b-2 border-black text-black'
            : 'text-[#777]'
        }`}
      >
        Delivery & Warranty
      </button>

    </div>

    {/* Description Tab */}
    {activeTab === 'description' && (
      <div className="space-y-4 text-[#666]">
        {(piano.fullDescription ?? piano.description)
          .split('\n\n')
          .map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
      </div>
    )}

    {/* Specifications Tab */}
    {activeTab === 'specs' && (
      <div className="border rounded-lg overflow-hidden">

        {Object.entries(specs).length > 0 ? (
          Object.entries(specs).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between px-4 py-3 border-b last:border-b-0"
            >
              <span className="font-medium capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </span>

              <span className="text-[#666]">
                {String(value)}
              </span>
            </div>
          ))
        ) : (
          <div className="p-4 text-[#666]">
            Specifications coming soon.
          </div>
        )}

      </div>
    )}

    {/* Delivery Tab */}
    {activeTab === 'delivery' && (
      <div className="space-y-4 text-[#666]">
        {deliveryInfo
          .trim()
          .split('\n\n')
          .map((para, i) => (
            <p key={i}>{para}</p>
          ))}
      </div>
    )}

  </div>
</section>

        {/* Contact anchor target */}
        <div id="contact" />

      </main>

      <Footer />
    </div>
  );
}