"use client";
import { Features1 } from '@/constant';
import Image from 'next/image';
import { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';

const customStyles = `
    .wow {
        animation-duration: 0.5s; /* Set your custom animation duration */
    }
`;

const FeatureSection1 = () => {
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
            <div className="overflow-hidden bg-white sm:py-32 pt-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 mt-[-10%] sm:mt-[-5%] gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 capitalize text-indigo-900 wow animate__animated animate__fadeInUp">
                                    Get funded faster
                                </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl wow animate__animated animate__fadeInUp">
                                    Make it happen with Invoice Finance
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600 wow animate__animated animate__fadeInUp text-justify">
                                    Take control of your cash flow and advance the funds owed to you from outstanding invoices.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {Features1.map((feature) => (
                                        <div key={feature.name} className="relative pl-9 wow animate__animated animate__fadeInUp text-justify">
                                            <dt className="inline font-semibold text-gray-900 text-justify">
                                                <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-900" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline text-justify">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="flex items-center justify-center wow animate__animated animate__fadeInRight">
                            <Image
                                alt="work-image"
                                src="/assets/work-tv.png"
                                width={950}
                                height={900}
                                className="w-full h-[98%] max-w-full rounded-xl "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureSection1;
