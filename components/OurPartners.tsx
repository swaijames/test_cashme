"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'animate.css/animate.min.css';

// Define the type for partner images
type Partner = {
    src: string;
    alt: string;
    scale?: number;
};

const OurPartners: React.FC = () => {
    const partners: Partner[] = [
        { src: '/assets/Companies/01.svg', alt: 'cmpd', scale: 1 },
        { src: '/assets/Companies/creditinfo.svg', alt: 'creaditinfo' , scale: 1.5 },
        { src: '/assets/Companies/06.svg', alt: 'airtel', scale: 1.5 },
        { src: '/assets/Companies/04.svg', alt: 'tigo' , scale: 1.5 },
        { src: '/assets/Companies/vodacom.svg', alt: 'vodacom', scale: 1 }, // Scale down Vodacom logo
        { src: '/assets/Companies/03.svg', alt: 'cashme' , scale: 1.2  },
        { src: '/assets/Companies/07.svg', alt: 'tcra' , scale: 1.2  },
        { src: '/assets/Icon/mastercard.svg', alt: 'mastercard' , scale: 2  },
        { src: '/assets/Companies/uba.svg', alt: 'UBA' , scale: 1.2  },
        { src: '/assets/Icon/godaddys.svg', alt: 'godaddy' , scale: 1.5  },
        { src: '/assets/Icon/tcb.svg', alt: 'tcb' , scale: 1.2  },
    ];

    return (
        <section className="bg-white py-12 sm:py-16 shadow-lg transition-shadow duration-500 ease-in-out hover:shadow-2xl">
            <div className="w-full mx-auto px-4 lg:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 animate__animated animate__fadeIn">
                        Our Partners
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 animate__animated animate__fadeIn animate__delay-1s">
                        Other companies we work with
                    </p>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="swiper-container"
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div
                                className="w-40 h-40 p-8 flex justify-center items-center animate__animated animate__fadeIn"
                                style={{ animationDelay: `${(index + 2) * 0.5}s` }}
                            >
                                <div
                                    className="relative flex justify-center items-center"
                                    style={{ width: '100%', height: '100%', transform: `scale(${partner.scale || 1})` }}
                                >
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurPartners;
