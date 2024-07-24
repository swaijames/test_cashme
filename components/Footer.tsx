"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaGlobe, FaInstagram } from 'react-icons/fa';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';

const Footer: React.FC = () => {
    useEffect(() => {
        new WOW({ live: false }).init();
    }, []);

    return (
        <footer className="w-full bg-white py-12 shadow-2xl">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div
                        className="md:col-span-4 wow animate__animated animate__fadeInUp"
                        style={{ animationDuration: '1s', animationDelay: '0s' }}
                    >
                        <Image
                            src="/assets/Logo.svg"
                            alt="cashMe Logo"
                            width={150}
                            height={50}
                            className="mb-4"
                        />
                        <p className="text-gray-600 mb-4">
                            CashMe Tanzania is owned and operated by Sebuys Company Limited, a Limited company incorporated in Tanzania with incorporation No.128863. The company trades as CashMe Tanzania. Have any query?
                        </p>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full">
                            Contact us
                        </button>
                    </div>
                    <div
                        className="md:col-span-2 wow animate__animated animate__fadeInUp"
                        style={{ animationDuration: '1s', animationDelay: '0.5s' }}
                    >
                        <h3 className="text-gray-900 font-bold mb-2">Resources</h3>
                        <ul>
                            <li className="text-gray-600 mb-2"><Link href="/faq">FAQs</Link></li>
                            <li className="text-gray-600 mb-2"><Link href="/">Cash Payment</Link></li>
                            <li className="text-gray-600 mb-2"><Link href="/career">Career</Link></li>
                            <li className="text-gray-600 mb-2"><Link href="#">User Guide</Link></li>
                        </ul>
                    </div>
                    <div
                        className="md:col-span-2 wow animate__animated animate__fadeInUp"
                        style={{ animationDuration: '1s', animationDelay: '1s' }}
                    >
                        <h3 className="text-gray-900 font-bold mb-2">Support</h3>
                        <ul>
                            <li className="text-gray-600 mb-2"><Link href="#">Help Center</Link></li>
                            <li className="text-gray-600 mb-2"><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div
                        className="md:col-span-4 wow animate__animated animate__fadeInUp"
                        style={{ animationDuration: '1s', animationDelay: '1.5s' }}
                    >
                        <h3 className="text-gray-900 font-bold mb-2">Contact Us</h3>
                        <ul>
                            <li className="text-gray-600 mb-2"><Link href="mailto:info@cashme.co.tz">Email: info@cashmetanzania.com</Link></li>
                            <li className="text-gray-600 mb-2"><Link href="tel:+255123456789">Phone: +255713560288</Link></li>
                            <li className="text-gray-600 mb-2"><Link href="#">Address: Salamander Tower, Samora Ave, Dar es salaam, 4th Floor</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center wow animate__animated animate__fadeInUp"
                    style={{ animationDuration: '1s', animationDelay: '2s' }}
                >
                    <p className="text-gray-600 mb-4 md:mb-0">©CashMe Tanzania 2024, All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                            <FaGithub />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                            <FaTwitter />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                            <FaLinkedin />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                            <FaGlobe />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-blue-900 cursor-pointer">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;