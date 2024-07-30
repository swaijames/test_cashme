import dynamic from 'next/dynamic';
import React from 'react'
import CareerSection from '../../components/Career';
const ScrollToTopButton = dynamic(() => import('../../components/ScrollToTopButton'), { ssr: false });

const page: React.FC = () => {
    return (
        <div>
            <CareerSection/>
            <ScrollToTopButton />
        </div>
    )
}

export default page