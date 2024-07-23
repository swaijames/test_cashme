import Image from "next/image";
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


export default function Home() {
  return (
    <section>
      <Hero />
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
}
