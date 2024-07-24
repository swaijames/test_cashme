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
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { teamMembers } from '../constant';

const OurTeam: React.FC = () => {
    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <section className="w-full bg-white py-8 shadow-2xl">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-6 text-gray-900">Meet the <span className="text-blue-800">team</span></h2>
                <p className="mt-4 text-lg text-center pb-4 text-gray-600 animate__animated animate__fadeIn animate__delay-1s">
                    Our dedicated team of professionals
                </p>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className="wow animate__animated animate__fadeIn"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center px-2">
                            <div className="w-full bg-gray-100 text-gray-900 rounded-lg p-6 shadow-md max-w-sm flex flex-col items-center text-center wow animate__animated animate__fadeInUp">
                                <div className="relative w-32 h-32 mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        layout="fill"
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-600 mb-2">{member.role}</p>
                                <div className="flex justify-center space-x-4 text-2xl mb-4">
                                    {member.social.twitter && (
                                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                                            <FaTwitter />
                                        </a>
                                    )}
                                    {member.social.linkedin && (
                                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                                            <FaLinkedin />
                                        </a>
                                    )}
                                    {member.social.instagram && (
                                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                                            <FaInstagram />
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
