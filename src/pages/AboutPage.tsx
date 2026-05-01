import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutUs from '@/sections/AboutUs';
import HowItWorks from '@/sections/HowItWorks';
import Testimonials from '@/sections/Testimonials';
import ContactForm from '@/sections/ContactForm';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-12 bg-[#F5F5F5]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A]">
              About Us
            </h1>
            <p className="text-[#666666] text-base sm:text-lg mt-4 max-w-2xl">
              Our story, our values, and the people behind Furnexa.
            </p>
          </div>
        </section>

        <AboutUs />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}