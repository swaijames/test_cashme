import React from 'react'
import About from '../../components/About';
import StatsSection from '@/components/StatsSection';
import OurPartners from '../../components/OurPartners';
import OurTeam from '@/components/OurTeam';

const page: React.FC = () => {
    return (
        <div>
            <About />
            <StatsSection />
            <OurPartners />
            <OurTeam />
        </div>

    )
}

export default page