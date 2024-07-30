// pages/faq/page.tsx
import dynamic from 'next/dynamic';
import React from 'react';
import FAQComponent from '../../components/FAQ';
const ScrollToTopButton = dynamic(() => import('../../components/ScrollToTopButton'), { ssr: false });
const FAQPage: React.FC = () => (
    <div>
        <FAQComponent />
        <ScrollToTopButton />
    </div>
);

export default FAQPage;
