import Script from 'next/script';
import Hero from '../components/Hero';
import FeatureSection1 from '../components/FeatureSection1';
import FeatureSection2 from '../components/FeatureSection2';
import JoinSection from '../components/JoinSection';
import ServiceSection from '../components/ServiceSection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ValueGood from '../components/ValueGood';
import StatsSection from '../components/StatsSection';
import { testimonials } from '../constant';
import TestimonialSection from '../components/TestimonialSection';
import OurPartners from '../components/OurPartners';
import OurTeam from '../components/OurTeam';
import HowItsWork from '../components/HowItsWork';

export default function Home() {
  return (
    <section>
      <Hero />
      <JoinSection />
      <FeatureSection1 />
      <StatsSection />
      <HowItsWork />
      <FeatureSection2 />
      <ServiceSection />
      <ValueGood />
      <TestimonialSection testimonials={testimonials} />
      <OurPartners />
      <OurTeam />
      <ScrollToTopButton />
      
      {/* Add the Chatway widget script */}
      <Script
        id="chatway"
        src="https://cdn.chatway.app/widget.js?id=UpIbbYh3qlTZ"
        strategy="afterInteractive"
      />
      <Script
        id="pixel-chaty"
        src="https://cdn.chaty.app/pixel.js?id=YWPQELSx"
        strategy="afterInteractive"
      />
    </section>
  );
}
