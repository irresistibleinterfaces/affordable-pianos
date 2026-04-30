import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from '@/components/Navigation';
import MarqueeBanner from '@/components/MarqueeBanner';
import Footer from '@/components/Footer';
import AboutPage from '@/pages/AboutPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Returns from './pages/Returns';
import Shipping from './pages/Shipping';

import Hero from '@/sections/Hero';
import Categories from '@/sections/Categories';
import HowItWorks from '@/sections/HowItWorks';
import ModernLiving from '@/sections/ModernLiving';
import BestSellers from '@/sections/BestSellers';
import ComingSoonProducts from '@/sections/ComingSoonProducts';
import AboutUs from '@/sections/AboutUs';
import WhyFromUs from '@/sections/WhyFromUs';
import WhyChooseUsV2 from '@/sections/WhyChooseUsV2';
import Brands from '@/sections/Brands';
import Testimonials from '@/sections/Testimonials';
import BlogSection from '@/sections/BlogSection';
import SocialCTA from '@/sections/SocialCTA';
import TransformCTA from '@/sections/TransformCTA';
import Membership from '@/sections/Membership';
import Newsletter from '@/sections/Newsletter';
import ContactForm from '@/sections/ContactForm';

function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <MarqueeBanner />
        <ModernLiving />
        <ComingSoonProducts />
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
    <HashRouter>

        <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<Terms />} />
<Route path="/returns" element={<Returns />} />
<Route path="/shipping" element={<Shipping />} />
      </Routes>
    </HashRouter>
  );
}

export default App;