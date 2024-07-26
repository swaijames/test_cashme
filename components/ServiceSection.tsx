"use client"
import React, { useEffect } from 'react';
import Service from './Service';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';

const ServiceSection = () => {
    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <section className="w-full bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-2 wow animate__animated animate__fadeInUp">Our Services</h2>
                <p className="text-center text-gray-600 mb-8 wow animate__animated animate__fadeInUp animate__delay-1s">Our offerings to our customers.</p>
                <div className="flex flex-col lg:flex-row gap-8 cursor-pointer">
                    <div className="wow animate__animated animate__fadeInLeft">
                        <Service
                            title="Invoice Discounting"
                            description="This is the product which allows SMEs to raise short-term funds using invoices as the underlying assets. This is an ideal service for businesses that offers their products and services on credit and intends to ensure their steady operations with sufficient working capital tailored to their needs."
                            link="#"
                        />
                    </div>
                    <div className="wow animate__animated animate__fadeInRight">
                        <Service
                            title="Crowd Asset Financing"
                            description="This is an innovative financial solution that presents an opportunity for SMEs and private individuals aspiring to acquire non-current assets such as electronic appliances, electronic devices, and office equipment and machineries. This service involves pooling of funds from a diverse public participant."
                            link="#"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
