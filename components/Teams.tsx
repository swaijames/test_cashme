'use client';

import React from 'react';

// Define a custom style with a dynamic background image
const customStyles = `
    .hero-background {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/team.jpg'); /* Ensure this path is correct */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 1;
    }
`;

const Teams = () => {
    // Perform a client-side check
    if (typeof window === 'undefined') {
        return null; // or some fallback content if needed
    }

    return (
        <div className="bg-white w-full">
            <style jsx>{customStyles}</style>
            {/* Hero Section */}
            <section className="relative mt-20 bg-gray-800 text-white">
                <div className="w-full h-64 sm:h-80 md:h-96 lg:h-128 hero-background">
                    <div className="z-10 flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Meet Our Team</h1>
                        <p className="mt-4 text-base sm:text-lg md:text-xl text-white text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                            Our team at CashMe Tanzania is dedicated to providing innovative financial solutions and exceptional customer service. Get to know the experts driving our mission to promote financial inclusion and empower communities.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teams;
