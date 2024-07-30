import dynamic from 'next/dynamic';
import React from 'react'
import ContactUs from '@/components/ContactUs';
const ScrollToTopButton = dynamic(() => import('../../components/ScrollToTopButton'), { ssr: false });

const page: React.FC = () => {
    return (
        <div>
            <ContactUs />
            <ScrollToTopButton />
        </div>

    )
}

export default page