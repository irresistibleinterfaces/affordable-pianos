import Navigation from '@/components/Navigation';
import MarqueeBanner from '@/components/MarqueeBanner';
import Footer from '@/components/Footer';

import Hero from '@/sections/Hero';
import HeroV2 from '@/sections/HeroV2';
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
import ComingSoonProducts from '@/sections/ComingSoonProducts';
import HowItWorks from '@/sections/HowItWorks';
import WhyChooseUsV2 from '@/sections/WhyChooseUsV2';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <Hero />
        <HeroV2 />
        <MarqueeBanner />
        <ModernLiving />
        <ComingSoonProducts />
        <WhyFromUs />
        <WhyChooseUsV2 />
        <Testimonials />
        <BlogSection />
        <HowItWorks />
        <SocialCTA />
        <TransformCTA />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
