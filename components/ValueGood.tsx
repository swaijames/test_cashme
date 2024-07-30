"use client";
import { Values } from '@/constant';
import Image from 'next/image';
import { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';

const customStyles = `
    .wow {
        animation-duration: 0.5s; /* Set your custom animation duration */
    }
`;

const ValueGood = () => {
    useEffect(() => {
        new WOW({
            animateClass: 'animate__animated', // default
            offset: 0,
        }).init();
    }, []);

    return (
        <>
            <style jsx>{customStyles}</style>
            <div className="overflow-hidden bg-white sm:py-32 pt-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 sm:mt-[-5%] gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="flex items-center justify-center wow animate__animated animate__fadeInLeft">
                            <Image
                                alt="goals-and-values-image"
                                src="/assets/team1-min.jpg"
                                width={700}
                                height={700}
                                className="w-[583px] h-[480px] max-w-full rounded-xl shadow-xl ring-1 ring-blue-600/10"
                            />
                        </div>
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className=" font-bold uppercase leading-7 text-4xl text-indigo-900 wow animate__animated animate__fadeInUp">
                                    Our goals and Values
                                </h2>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {Values.map((value) => (
                                        <div key={value.title} className="relative pl-9 wow animate__animated animate__fadeInUp">
                                            <dt className="inline font-semibold text-indigo-900">{value.title}:</dt>{' '}
                                            <dd className="inline">{value.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ValueGood;
