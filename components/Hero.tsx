"use client";

import { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import 'animate.css/animate.min.css';

const Hero = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <section className="bg-white pt-24 mt-5 md:pt-32 pb-20">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:text-left">
                <div className="w-full md:w-1/2 mb-12 md:mb-0 wow animate__animated animate__fadeInLeft">
                    <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight">
                        Exclusive Platform For <span className="text-blue-800">Easily invest</span> and cash your Invoice.
                    </h1>
                    <p className="mt-4 text-gray-600">
                        We are <span className="text-blue-600 font-bold">CashMe Tanzania</span>, an online marketplace for Invoice Discounting.
                        <br />
                        The Platform is owned and Operated by Sebuys Company Limited, a Limited Company Incorporated in Tanzania.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                        <Button type="button" title="CashPay" variant="blue-900" />
                        <Button type="button" title="How We Work?" variant="blue-900" onClick={openPopup} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center wow animate__animated animate__fadeInRight">
                    <div className="relative w-full h-64 md:h-96">
                        <Image
                            src="/assets/work-tv.png"
                            alt="Hero Image"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>

            {/* Popup */}
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 wow animate__animated animate__fadeIn">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md relative">
                        <button onClick={closePopup} className="absolute top-2 right-2 text-gray-600 hover:text-red-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <p className="text-gray-800">
                            CashPay is a leading payments platform in Tanzania, regional and local businesses. We provide a single API payments platform that enables businesses to collect payments online and offline while allowing anyone to pay from their mobile money.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
