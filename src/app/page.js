'use client';

import AboutSection from '@/components/organisms/About';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import StickyNavbar from '@/components/organisms/Navbar';
import ProductShowcaseSection from '@/components/organisms/Products';
import AdvertisingServices from '@/components/organisms/Services';
import TestimonialGridSection from '@/components/organisms/Testimonial';
import AdValuesSection from '@/components/organisms/ValuesSection';
import WorkProcessSection from '@/components/organisms/WorkProcces';

export default function Home() {
  return (
    <main>
      <StickyNavbar />
      <Hero />
      <AboutSection />
      <AdValuesSection />
      <AdvertisingServices />
      <ProductShowcaseSection />
      <WorkProcessSection />
      <TestimonialGridSection />
      <Footer />
    </main>
  );
}
