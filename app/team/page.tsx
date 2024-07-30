import dynamic from 'next/dynamic';
import OurTeam from '@/components/OurTeam'
import React from 'react'
import Teams from '@/components/Teams';
const ScrollToTopButton = dynamic(() => import('../../components/ScrollToTopButton'), { ssr: false });


const page: React.FC = () => {
    return (
        <div>
            <Teams />
            <OurTeam />
            <ScrollToTopButton />

        </div>
    )
}

export default page