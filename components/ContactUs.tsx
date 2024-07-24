/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import Button from './Button';

const customStyles = `
    .wow {
        animation-duration: 0.5s; /* Set your custom animation duration */
    }
    .custom-input, .custom-textarea {
        background-color: white;
        color: black;
        padding: 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.375rem;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    .custom-input:focus, .custom-textarea:focus {
        border-color: #1e40af;
        box-shadow: 0 0 0 3px rgba(44, 105, 239, 0.3);
        outline: none;
    }
`;

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: -6.818771081274225,
    lng: 39.28672018058803,
};

const ContactUs = () => {
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
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Contact Us</h1>
                        <p className="mt-4 text-lg sm:text-xl">We're here to help. Reach out to us anytime.</p>
                    </div>
                </section>

                {/* Contact Us Section */}
                <section className="py-16 px-6 sm:px-16 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:h-screen">
                    {/* Contact Form Column */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 wow animate__fadeInLeft">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Get in Touch</h2>
                        <p className="text-gray-700 mb-8">
                            Have a question or feedback? We're here to help. Send us a message, and we'll respond back.
                        </p>
                        <form className="space-y-4">
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="custom-input w-1/2"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="custom-input w-1/2"
                                />
                            </div>
                            <input
                                type="text"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                className="custom-input w-full"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="custom-input w-full"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="custom-textarea w-full h-32"
                            />
                            <Button
                                type="submit"
                                variant="blue-900"
                                title="Send Details"
                            />
                        </form>
                    </div>

                    {/* Map and Contact Info Column */}
                    <div className="w-full lg:w-1/2 wow animate__fadeInRight">
                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={14}
                            >
                                <Marker position={center} />
                            </GoogleMap>
                        </LoadScript>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center">
                                <MdLocationOn size={24} className="text-gray-700" />
                                <p className="ml-4 text-gray-700">Salamander Tower, Samora Ave, Dar es Salaam, 4th Floor</p>
                            </div>
                            <div className="flex items-center">
                                <AiFillPhone size={24} className="text-gray-700" />
                                <p className="ml-4 text-gray-700">+255713560288</p>
                            </div>
                            <div className="flex items-center">
                                <AiFillMail size={24} className="text-gray-700" />
                                <p className="ml-4 text-gray-700">info@cashmetanzania.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactUs;
