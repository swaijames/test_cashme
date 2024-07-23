// components/TestimonialSection.tsx

"use client";

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import Image from 'next/image';

type Testimonial = {
    name: string;
    role: string;
    text: string;
    image: string;
    rating: number;
};

type TestimonialSectionProps = {
    testimonials: Testimonial[];
};

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
    useEffect(() => {
        new WOW().init();
    }, []);

    // Ensure there are enough testimonials to show in pairs
    const testimonialsInPairs = [];
    for (let i = 0; i < testimonials.length; i += 2) {
        testimonialsInPairs.push(testimonials.slice(i, i + 2));
    }

    return (
        <section className="w-full bg-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-6 text-gray-900">Testimonials</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className="wow animate__animated animate__fadeIn"
                >
                    {testimonialsInPairs.map((pair, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {pair.map((testimonial, subIndex) => (
                                    <div
                                        key={subIndex}
                                        className="bg-gray-100 text-gray-900 rounded-lg p-6 shadow-md max-w-[calc(50%-1rem)] flex flex-col items-center text-center wow animate__animated animate__fadeInUp"
                                    >
                                        <div className="relative w-24 h-24 mb-4">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                layout="fill"
                                                className="rounded-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                                        <p className="text-gray-600 mb-2">{testimonial.role}</p>
                                        <p className="text-gray-600 mb-4">{testimonial.text}</p>
                                        <div className="flex justify-center mb-2">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <span key={i} className="text-yellow-400">&#9733;</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSection;
