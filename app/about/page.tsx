import React from 'react'
import dynamic from 'next/dynamic';
import About from '../../components/About';
import StatsSection from '@/components/StatsSection';
import OurPartners from '../../components/OurPartners';
import OurTeam from '@/components/OurTeam';
const ScrollToTopButton = dynamic(() => import('../../components/ScrollToTopButton'), { ssr: false });

const page: React.FC = () => {
    return (
        <div>
            <About />
            <StatsSection />
            <OurPartners />
            <OurTeam />
            <ScrollToTopButton />
        </div>

    )
}

export default page