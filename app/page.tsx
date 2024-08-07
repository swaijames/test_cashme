import Script from 'next/script';
import { testimonials } from '../constant';
import Hero from '../components/Hero';
import FeatureSection1 from '../components/FeatureSection1';
import FeatureSection2 from '../components/FeatureSection2';
import JoinSection from '../components/JoinSection';
import ServiceSection from '../components/ServiceSection';
import ValueGood from '../components/ValueGood';
import StatsSection from '../components/StatsSection';
import TestimonialSection from '../components/TestimonialSection';
import OurPartners from '../components/OurPartners';
import HowItsWork from '../components/HowItsWork';
import ScrollToTopButton from '../components/ScrollToTopButton';
import OurTeam from '../components/OurTeam';
import ScrollHandler from '../components/ScrollHandler';

const Page: React.FC = () => {
  const scrollToHowItsWork = () => {
    const element = document.getElementById('how-its-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <Hero scrollToHowItsWork={scrollToHowItsWork} />
      <JoinSection />
      <FeatureSection1 />
      <StatsSection />
      <div id="how-its-work">
        <HowItsWork />
      </div>
      <ScrollHandler scrollToHowItsWork={scrollToHowItsWork} />
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
