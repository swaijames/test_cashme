"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import Button from './Button';
import styles from '@/styles/ContactUs.module.css'; // Assuming you create a corresponding CSS module

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            new WOW({
                animateClass: 'animate__animated', // default
                offset: 0,
            }).init();
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await res.json();
            if (res.status === 200) {
                setStatusMessage('Email sent successfully');
                setFormData({
                    firstName: '',
                    lastName: '',
                    mobileNumber: '',
                    email: '',
                    message: ''
                });
            } else {
                setStatusMessage('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatusMessage('Error sending email');
        }
    };

    return (
        <>
            <style jsx>{`
                .hero-background {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/banner.jpeg');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    opacity: 1;
                }
            `}</style>
            <div className="bg-white w-full">
                {/* Hero Section */}
                <section className="relative mt-20 bg-gray-800 text-white">
                    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-128 hero-background">
                        <div className="z-10 flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Contact Us</h1>
                            <p className="mt-4 text-base sm:text-lg md:text-xl text-white text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                                We&apos;re here to help. Reach out to us anytime.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Us Section */}
                <section className="py-16 px-6 sm:px-16 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:h-screen space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Contact Form Column */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 wow animate__fadeInLeft lg:mr-4">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Get in Touch</h2>
                        <p className="text-gray-700 mb-8">
                            Have a question or feedback? We&apos;re here to help. Send us a message, and we&apos;ll respond back.
                        </p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className={styles.customInput}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className={styles.customInput}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                type="text"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                className={styles.customInput}
                                value={formData.mobileNumber}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className={styles.customInput}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className={`${styles.customInput} ${styles.customTextarea}`}
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                variant="blue-900"
                                title="Send Details"
                            />
                        </form>
                        {statusMessage && <p className="mt-4 text-gray-700">{statusMessage}</p>}
                    </div>

                    {/* Map and Contact Info Column */}
                    <div className="w-full lg:w-1/2 wow animate__fadeInRight">
                        <div className={styles.mapContainer}>
                            <Image
                                src="/assets/map.png"
                                alt="Map"
                                layout="fill"
                                className={styles.mapImage}
                            />
                        </div>
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
