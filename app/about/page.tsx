import React from 'react';
import About from '../../components/About';
import StatsSection from '@/components/StatsSection';
import OurPartners from '../../components/OurPartners';
import OurTeam from '@/components/OurTeam';



const Page: React.FC = () => {
    return (
        <div>
            <About />
            <StatsSection />
            <OurPartners />
            <OurTeam />
        </div>
    );
};

export default Page;
