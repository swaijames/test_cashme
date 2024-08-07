"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import { Features2 } from '@/constant';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';

// Tailwind CSS class extensions
const customStyles = `
    .shadow-custom {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .shadow-custom-hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    .wow {
        animation-duration: 0.5s; /* Set your custom animation duration */
    }
`;

const FeatureSection2 = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            new WOW({
                animateClass: 'animate__animated', // default
                offset: 0,
            }).init();
        }
    }, []);

    return (
        <>
            <style jsx>{customStyles}</style>
            <section className="bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-6 mt-[-8%]">
                    <div className="border-b border-gray-300 py-6 lg:py-8 w-full">
                        <h2 className="text-base font-semibold leading-7 text-indigo-900 text-center wow animate__animated animate__fadeInUp">
                            Features
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center wow animate__animated animate__fadeInUp">
                            Here is what we promise to offer our customers.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-center wow animate__animated animate__fadeInUp">
                            To become an innovative Fintech Company that solves present financing problems using futuristic solutions.
                        </p>
                    </div>
                    <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-8">
                        <div className="flex justify-center items-center wow animate__animated animate__fadeInLeft">
                            <Image
                                alt="feature-image"
                                src="/assets/citizen.jpg"
                                width={700}
                                height={750}
                                className="w-full h-[520px] max-w-full rounded-xl "
                            />
                        </div>
                        <div className="lg:pl-4">
                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-2 lg:gap-y-8 cursor-pointer">
                                {Features2.map((feature) => (
                                    <div 
                                        key={feature.name}
                                        className={`relative pl-14 pr-4 pt-4 pb-4 transition-transform duration-300 hover:scale-105 hover:bg-indigo-50 rounded-lg shadow-custom hover:shadow-custom-hover wow animate__animated animate__fadeInUp`}
                                    >
                                        <dt className="text-base font-semibold leading-7 text-gray-900">
                                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-900">
                                                <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureSection2;
