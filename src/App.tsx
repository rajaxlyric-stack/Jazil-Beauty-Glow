import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import WhyChooseUs from './components/WhyChooseUs';
import HowToOrder from './components/HowToOrder';
import ContactSection from './components/ContactSection';
import TikTokCta from './components/TikTokCta';
import Footer from './components/Footer';
import StickyWhatsAppBar from './components/StickyWhatsAppBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50/40 text-stone-900 font-sans selection:bg-rose-200 selection:text-rose-900">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Single-Page Content Flow */}
      <main className="flex-1">
        {/* 1. Hero / Dashboard Showcase */}
        <Hero />

        {/* 2. Our Products Categories */}
        <ProductCategories />

        {/* 3. Why Choose Jazil Beauty Glow */}
        <WhyChooseUs />

        {/* 4. How To Order (Simple 4-Step Process) */}
        <HowToOrder />

        {/* 5. Contact & Order Section (WhatsApp Hub + Email Enquiry) */}
        <ContactSection />

        {/* 6. TikTok Call-To-Action */}
        <TikTokCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile WhatsApp Floating Action Bar */}
      <StickyWhatsAppBar />
    </div>
  );
}
