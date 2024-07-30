import dynamic from 'next/dynamic';
import ServiceSection from '@/components/ServiceSection'
import Servicespage from '@/components/Servicespage'
const ScrollToTopButton = dynamic(() => import('../../components/ScrollToTopButton'), { ssr: false });
import React from 'react'

const page: React.FC = () => {
    return (

        <div>
            <Servicespage />
            <ServiceSection />
            <ScrollToTopButton />
        </div>
    )
}

export default page