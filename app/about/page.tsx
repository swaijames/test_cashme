import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports with no SSR
const About = dynamic(() => import('../../components/About'), { ssr: false });
const StatsSection = dynamic(() => import('@/components/StatsSection'), { ssr: false });
const OurPartners = dynamic(() => import('../../components/OurPartners'), { ssr: false });
const OurTeam = dynamic(() => import('@/components/OurTeam'), { ssr: false });
const ScrollToTopButton = dynamic(() => import('../../components/ScrollToTopButton'), { ssr: false });

const Page: React.FC = () => {
    return (
        <div>
            <About />
            <StatsSection />
            <OurPartners />
            <OurTeam />
            <ScrollToTopButton />
        </div>
    );
};

export default Page;
