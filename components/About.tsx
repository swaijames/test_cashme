"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMenu } from "./Navbar"; // Adjust the path as needed

const customStyles = `
    .hero-background {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/about2.jpg'); /* Ensure this path is correct */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 1;
    }
`;

const About = () => {
  const { isMenuOpen } = useMenu();

  // Conditional rendering to ensure `window` is available
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    // Check if `window` is defined (client-side)
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a fallback UI for server-side rendering
  }

  return (
    <>
      <style jsx>{customStyles}</style>
      <div className="bg-white w-full">
        {/* Hero Section */}
        <section className={`bg-gray-800 text-white transition-all duration-300 ${isMenuOpen ? "mt-40" : "mt-20"}`}>
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-128 hero-background">
            <div className="z-10 flex flex-col items-center justify-center h-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">About Us</h1>
              <p className="mt-4 text-lg sm:text-xl text-white">Learn more about our mission and vision.</p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 px-6 sm:px-16 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:h-screen">
          {/* Image Column */}
          <div className="flex items-center justify-center w-full lg:w-1/2 mb-8 lg:mb-0 h-full">
            <Image
              src="/assets/mara2.png" // Replace with your image path
              alt="What We Do"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Mission and Vision Column */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 lg:pl-16 h-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">What We Do</h2>
            <p className="text-gray-700 mb-8 text-justify">
              CashMe Tanzania is an online marketplace for Invoice Discounting.
              The Platform is owned and operated by Sebuys Company Limited, a
              limited company incorporated in Tanzania.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
                <p className="text-gray-700 text-justify">
                  To empower the public to participate in innovative modern
                  financial solutions that promote financial inclusion and
                  deepening; and promotes economic growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Vision</h3>
                <p className="text-gray-700 text-justify">
                  To become an innovative Fintech Company that solves present
                  financing problems using futuristic solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
