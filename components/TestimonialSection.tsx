'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'animate.css/animate.min.css';
import Image from 'next/image';

// Import WOW library only on the client side
let WOW: any;

if (typeof window !== 'undefined') {
    WOW = require('wowjs').WOW;
}

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
        if (WOW) {
            new WOW().init();
        }
    }, []);

    return (
        <section className="w-full bg-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-6 text-gray-900">Testimonials</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1} // Default to 1 slide per view
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // 1 slide per view for small screens
                        },
                        768: {
                            slidesPerView: 2, // 2 slides per view for medium screens
                        },
                        1024: {
                            slidesPerView: 3, // 3 slides per view for large screens
                        },
                    }}
                    className="wow animate__animated animate__fadeIn"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-gray-100 text-gray-900 rounded-lg p-6 shadow-md flex flex-col items-center text-center wow animate__animated animate__fadeInUp h-80">
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
                                <p className="text-gray-600 mb-4 text-justify">{testimonial.text}</p>
                                <div className="flex justify-center mb-2">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <span key={i} className="text-yellow-400">&#9733;</span>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSection;
