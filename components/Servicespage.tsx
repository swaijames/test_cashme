"use client"
import React from 'react'


const customStyles = `
    .hero-background {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/banner.jpeg'); /* Ensure this path is correct */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 1;
    }
`;

const Servicespage = () => {
    return (
        <div className="bg-white w-full">
            <style jsx>{customStyles}</style>
            {/* Hero Section */}
            <section className="relative mt-20 bg-gray-800 text-white">
                <div className="w-full h-64 sm:h-80 md:h-96 lg:h-128 hero-background">
                    <div className="z-10 flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Services</h1>
                        <p className="mt-4 text-base sm:text-lg md:text-xl text-white text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                            CashMe Tanzania offers a comprehensive range of financial services designed to meet the needs of individuals and businesses alike.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicespage;
