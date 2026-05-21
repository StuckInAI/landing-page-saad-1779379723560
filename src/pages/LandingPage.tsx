import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoBar from '@/components/LogoBar';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
