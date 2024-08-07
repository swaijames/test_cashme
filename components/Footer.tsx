"use client";
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <>
            <style jsx>{`
                .footer-container {
                    min-height: 400px; /* Adjust based on your design */
                }
            `}</style>
            <footer className="w-full bg-white py-12 shadow-2xl footer-container">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4">
                            <Image
                                src="/assets/Logo.svg"
                                alt="cashMe Logo"
                                width={150}
                                height={50}
                                className="mb-4"
                            />
                            <p className="text-gray-600 mb-4 text-justify">
                                CashMe Tanzania is owned and operated by Sebuys Company Limited, a Limited company incorporated in Tanzania with incorporation No.128863. The company trades as CashMe Tanzania. Have any query?
                            </p>
                            <Link href="/contact">
                                <button className="bg-blue-900 text-white px-4 py-2 rounded-full">
                                    Contact us
                                </button>
                            </Link>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="text-gray-900 font-bold mb-2">Resources</h3>
                            <ul>
                                <li className="text-gray-600 mb-2"><Link href="/faq">FAQs</Link></li>
                                <li className="text-gray-600 mb-2"><Link href="/">Cash Payment</Link></li>
                                <li className="text-gray-600 mb-2"><Link href="/career">Career</Link></li>
                                <li className="text-gray-600 mb-2"><Link href="#">User Guide</Link></li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="text-gray-900 font-bold mb-2">Support</h3>
                            <ul>
                                <li className="text-gray-600 mb-2"><Link href="#">Help Center</Link></li>
                                <li className="text-gray-600 mb-2"><Link href="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="md:col-span-4">
                            <h3 className="text-gray-900 font-bold mb-2">Contact Us</h3>
                            <ul>
                                <li className="text-gray-600 mb-2"><Link href="mailto:info@cashme.co.tz">Email: info@cashmetanzania.com</Link></li>
                                <li className="text-gray-600 mb-2"><Link href="tel:+255123456789">Phone: +255713560288</Link></li>
                                <li className="text-gray-600 mb-2"><Link href="#">Address: Salamander Tower, Samora Ave, Dar es salaam, 4th Floor</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 mb-4 md:mb-0">©CashMe Tanzania 2024, All rights reserved.</p>
                        <div className="flex space-x-4">
                            <Link href="https://x.com/cashmetanzania" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                                <FontAwesomeIcon icon={faXTwitter} size="2x" />
                            </Link>
                            <Link href="https://www.instagram.com/p/C5YoBGHtnbq/?igsh=MWFzYWh0ZXM3Mmg1Mw==" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/cashmetanzania/posts?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B7P%2BReuTkQxOufM6nrhmHkg%3D%3D" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </Link>
                            <Link href="https://www.youtube.com/@cashmetanzania6826" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
