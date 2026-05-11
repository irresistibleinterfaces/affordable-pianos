import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from '@/components/Navigation';
import MarqueeBanner from '@/components/MarqueeBanner';
import Footer from '@/components/Footer';
import AboutPage from '@/pages/AboutPage';
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
import SocialCTA from '@/sections/SocialCTA';
import ContactForm from '@/sections/ContactForm';

function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero4 />
        <MarqueeBanner />
        <BestSellers />
        <ModernLiving />
        <WhyChooseUsV2 />
        <Testimonials />
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