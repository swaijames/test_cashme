'use client';

import { useRef } from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { testimonials } from '../constant';

// Dynamically import components with no server-side rendering (SSR)
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const FeatureSection1 = dynamic(() => import('../components/FeatureSection1'), { ssr: false });
const FeatureSection2 = dynamic(() => import('../components/FeatureSection2'), { ssr: false });
const JoinSection = dynamic(() => import('../components/JoinSection'), { ssr: false });
const ServiceSection = dynamic(() => import('../components/ServiceSection'), { ssr: false });
const ValueGood = dynamic(() => import('../components/ValueGood'), { ssr: false });
const StatsSection = dynamic(() => import('../components/StatsSection'), { ssr: false });
const TestimonialSection = dynamic(() => import('../components/TestimonialSection'), { ssr: false });
const OurPartners = dynamic(() => import('../components/OurPartners'), { ssr: false });
const HowItsWork = dynamic(() => import('../components/HowItsWork'), { ssr: false });
const ScrollToTopButton = dynamic(() => import('../components/ScrollToTopButton'), { ssr: false });
const OurTeam = dynamic(() => import('../components/OurTeam'), { ssr: false });

const Page: React.FC = () => {
  const howItsWorkRef = useRef<HTMLDivElement>(null);

  const scrollToHowItsWork = () => {
    if (typeof window !== 'undefined' && howItsWorkRef.current) {
      howItsWorkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
        strategy="lazyOnload"
      />
    </section>
  );
};

export default Page;
