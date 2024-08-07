"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import { FaLinkedin } from 'react-icons/fa';
import { teamMembers } from '../constant';

const OurTeam: React.FC = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            new WOW().init();
        }
    }, []);

    return (
        <section className="w-full bg-white py-8 shadow-2xl">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-6 text-gray-900">
                    Meet the <span className="text-blue-800">team</span>
                </h2>
                <p className="mt-4 text-lg text-center pb-4 text-gray-600 animate__animated animate__fadeIn animate__delay-1s">
                    Our dedicated team of professionals
                </p>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1} // Default to 1 column
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // 1 column on small devices
                        },
                        768: {
                            slidesPerView: 2, // 2 columns on medium devices
                        },
                        1024: {
                            slidesPerView: 3, // 3 columns on large devices
                        },
                        1280: {
                            slidesPerView: 3, // 3 columns on extra-large devices
                            spaceBetween: 30, // Add extra space between slides on xl devices
                        },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className="wow animate__animated animate__fadeIn"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center px-2">
                            <div className="w-full bg-gray-100 text-gray-900 rounded-lg p-6 shadow-md max-w-sm flex flex-col items-center text-center wow animate__animated animate__fadeInUp">
                                <div className="relative w-40 h-40 mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        layout="fill"
                                        className="rounded-full object-cover"
                                        quality={100}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-600 mb-2">{member.role}</p>
                                <div className="flex justify-center space-x-4 text-2xl mb-4">
                                    {member.social.linkedin && (
                                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                                            <FaLinkedin />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurTeam;
