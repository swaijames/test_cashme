"use client"
import { useRef } from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import FeatureSection1 from '../components/FeatureSection1';
import FeatureSection2 from '../components/FeatureSection2';
import JoinSection from '../components/JoinSection';
import ServiceSection from '../components/ServiceSection';
import ValueGood from '../components/ValueGood';
import StatsSection from '../components/StatsSection';
import { testimonials } from '../constant';
import TestimonialSection from '../components/TestimonialSection';
import OurPartners from '../components/OurPartners';
import HowItsWork from '../components/HowItsWork';

// Dynamic import with no SSR
const ScrollToTopButton = dynamic(() => import('../components/ScrollToTopButton'), { ssr: false });
const OurTeam = dynamic(() => import('../components/OurTeam'), { ssr: false });

export default function Home() {
  const howItsWorkRef = useRef<HTMLDivElement>(null);

  const scrollToHowItsWork = () => {
    howItsWorkRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      <Hero scrollToHowItsWork={scrollToHowItsWork} />
      <JoinSection />
      <FeatureSection1 />
      <StatsSection />
      <div ref={howItsWorkRef}>
        <HowItsWork />
      </div>
      <FeatureSection2 />
      <ServiceSection />
      <ValueGood />
      <TestimonialSection testimonials={testimonials} />
      <OurPartners />
      <OurTeam />
      <ScrollToTopButton />
      
      <Script
        id="pixel-chaty"
        src="https://cdn.chaty.app/pixel.js?id=YWPQELSx"
        strategy="afterInteractive"
      />
    </section>
  );
}
