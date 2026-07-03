import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import MarqueeBanner from '@/components/MarqueeBanner';
import Footer from '@/components/Footer';
import AboutPage from '@/pages/AboutPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Returns from './pages/Returns';
import Shipping from './pages/Shipping';
import ProductDetail from '@/pages/ProductDetail';
import ShopPage from '@/pages/ShopPage';
import ScrollToTop from '@/components/ScrollToTop';


import Hero4 from '@/sections/Hero4';
import ModernLiving from '@/sections/ModernLiving';
import BestSellers from '@/sections/BestSellers';
import WhyChooseUsV2 from '@/sections/WhyChooseUsV2';
import Testimonials from '@/sections/Testimonials';
import BlogSection from '@/sections/BlogSection';
import Brands from '@/sections/Brands';
import SocialCTA from '@/sections/SocialCTA';
import ContactForm from '@/sections/ContactForm';

function HomePage() {

  const schema = {
  "@context": "https://schema.org",
  "@type": "MusicStore",
  "name": "Affordable Pianos",
  "image": "https://www.affordablepianos.com.au/images/affordable-pianos-sydney-logo-large.webp",
  "url": "https://www.affordablepianos.com.au",
  "description":
    "Used and restored grand and upright pianos for sale with free delivery across Sydney.",
  "knowsAbout": [
    "Grand Pianos",
    "Upright Pianos",
    "Used Pianos",
    "Refurbished Pianos",
    "Kawai Pianos",
    "Second Hand Pianos"
  ],
  "areaServed": "Sydney",
  "telephone": "+61484128805",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "sameAs": [
    "https://www.facebook.com/people/Affordable-Pianos/61589474743823/",
    "https://www.instagram.com/affordablepianos/",
    "https://x.com/affordablepiano/"
  ]
  }

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Affordable Pianos Sydney | Used & Restored Upright and Grand Pianos
        </title>

        <meta
          name="description"
          content="Browse quality used and restored upright and grand pianos in Sydney and across NSW. Affordable Yamaha, Kawai, Steinbach and other trusted brands with free delivery available."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.affordablepianos.com.au/"
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Affordable Pianos Sydney"
        />

        <meta
          property="og:description"
          content="Quality used and restored upright and grand pianos at affordable prices."
        />

        <meta
          property="og:url"
          content="https://www.affordablepianos.com.au/"
        />

        <meta
          property="og:image"
          content="https://www.affordablepianos.com.au/images/og-image.jpg"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Affordable Pianos Sydney"
        />

        <meta
          name="twitter:description"
          content="Used and restored upright and grand pianos available across NSW."
        />

        <meta
          name="twitter:image"
          content="https://www.affordablepianos.com.au/images/og-image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>

      </Helmet>
      <Navigation />
      <main>
        <Hero4 />
        <MarqueeBanner />
        <BestSellers />
        <ModernLiving />
        <WhyChooseUsV2 />
        <Brands />
        <Testimonials />
        <BlogSection />
        <SocialCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/pianos" element={<ShopPage />} />
        <Route path="/pianos/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;