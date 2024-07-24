"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';

const customStyles = `
    .wow {
        animation-duration: 0.5s; /* Set your custom animation duration */
    }
`;

const About = () => {
    useEffect(() => {
        new WOW({
            animateClass: 'animate__animated', // default
            offset: 0,
        }).init();
    }, []);

    return (
        <>
            <style jsx>{customStyles}</style>
            <div className="bg-white w-full">
                {/* Hero Section */}
                <section className="relative mt-20 bg-gray-800 text-white">
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/banner.jpeg" // Ensure this path is correct
                            alt="Hero Background"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-35"
                        />
                    </div>
                    <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-16 lg:px-24 max-w-screen-xl mx-auto text-center wow animate__fadeInUp">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">About Us</h1>
                        <p className="mt-4 text-lg sm:text-xl">Learn more about our mission and vision.</p>
                    </div>
                </section>

                {/* What We Do Section */}
                <section className="py-16 px-6 sm:px-16 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:h-screen">
                    {/* Image Column */}
                    <div className="flex items-center justify-center w-full lg:w-1/2 mb-8 lg:mb-0 h-full wow animate__fadeInLeft">
                        <Image
                            src="/assets/Illustration1.png" // Replace with your image path
                            alt="What We Do"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Mission and Vision Column */}
                    <div className="flex flex-col justify-center w-full lg:w-1/2 lg:pl-16 h-full wow animate__fadeInRight">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What We Do</h2>
                        <p className="text-gray-700 mb-8">
                            CashMe Tanzania is an online marketplace for Invoice Discounting. The Platform is owned and operated by Sebuys Company Limited, a limited company incorporated in Tanzania.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
                                <p className="text-gray-700">
                                    To empower the public to participate in innovative modern financial solutions that promotes financial inclusion and deepening; and promotes economic growth.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Vision</h3>
                                <p className="text-gray-700">
                                    To become an innovative Fintech Company that solves present financing problems using futuristic solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
