"use client";
import React, { useEffect } from 'react';
import Button from './Button';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import Link from 'next/link';

const JoinSection = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            new WOW().init();
        }
    }, []);

    return (
        <section className="w-full bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="bg-white text-gray-900 rounded-lg flex-grow p-6 shadow-md wow animate__animated animate__fadeInLeft">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Join as Borrower</h2>
                            <p className="text-gray-600 mb-4">Join us now to quickly unlock cash flow from your invoice.</p>
                            <div className="flex justify-center items-center">
                                <Link href="https://portal.cashmetanzania.com/borrower-registration" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        type="button"
                                        title="Join as Borrower"
                                        variant="blue-900"
                                        full={false}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white text-gray-900 rounded-lg flex-grow p-6 shadow-md wow animate__animated animate__fadeInRight">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Join as Investor</h2>
                            <p className="text-gray-600 mb-4">Join us to create extra income, aid creative entrepreneurs.</p>
                            <div className="flex justify-center items-center">
                                <Link href="https://portal.cashmetanzania.com/investor-registration" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        type="button"
                                        title="Join as Investor"
                                        variant="blue-900"
                                        full={false}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
