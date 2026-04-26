import Navigation from '@/components/Navigation';
import MarqueeBanner from '@/components/MarqueeBanner';
import Footer from '@/components/Footer';

import Hero from '@/sections/Hero';
import Categories from '@/sections/Categories';
import ModernLiving from '@/sections/ModernLiving';
import BestSellers from '@/sections/BestSellers';
import WhyFromUs from '@/sections/WhyFromUs';
import Testimonials from '@/sections/Testimonials';
import BlogSection from '@/sections/BlogSection';
import SocialCTA from '@/sections/SocialCTA';
import TransformCTA from '@/sections/TransformCTA';
import Membership from '@/sections/Membership';
import Newsletter from '@/sections/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <Hero />
        <MarqueeBanner />
        <Categories />
        <ModernLiving />
        <BestSellers />
        <WhyFromUs />
        <Testimonials />
        <BlogSection />
        <SocialCTA />
        <TransformCTA />
        <Membership />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
