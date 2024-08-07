// app/page.tsx

import dynamic from 'next/dynamic';
import JoinSection from '../components/JoinSection';
import FeatureSection1 from '../components/FeatureSection1';
import StatsSection from '../components/StatsSection';
import FeatureSection2 from '../components/FeatureSection2';
import ServiceSection from '../components/ServiceSection';
import ValueGood from '../components/ValueGood';
import TestimonialSection from '../components/TestimonialSection';
import OurPartners from '../components/OurPartners';
import OurTeam from '../components/OurTeam';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { testimonials } from '../constant';

// Import HeroWrapper as a Client Component
const HeroWrapper = dynamic(() => import('../components/HeroWrapper'), { ssr: false });

const Page: React.FC = () => {
  return (
    <section>
      <HeroWrapper />
      <JoinSection />
      <FeatureSection1 />
      <StatsSection />
      <FeatureSection2 />
      <ServiceSection />
      <ValueGood />
      <TestimonialSection testimonials={testimonials} />
      <OurPartners />
      <OurTeam />
      <ScrollToTopButton />
    </section>
  );
};

export default Page;
