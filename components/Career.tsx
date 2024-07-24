"use client";
import React from 'react';
import Button from './Button';
import Link from 'next/link';

const CareerSection: React.FC = () => {
    return (
        <div className="bg-white p-6 sm:p-10 lg:p-14">
            <div className="w-full items-center h-full py-6 sm:py-14 border-b border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-8 max-w-screen-xl mx-auto">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl md:text-2xl lg:text-4xl text-gray-800">Career Opportunities</h3>
                        <p className="text-gray-600 mt-2">No Careers Posted</p>
                        {/* <p className="text-gray-600 mt-2">Visit another time on our website to check or you can help me to create an understandable header and description.</p> */}
                    </div>
                    <div className="flex gap-2">
                        <a href="/" className="hover:text-blue-800 cursor-pointer font-medium text-gray-700">HOME</a>
                        <span>/</span>
                        <a href="/career" className="text-blue-800 font-medium hover:text-gray-700">Career</a>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl py-4 rounded-lg mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Left Column: Career Jobs */}
                    <div className="space-y-6 sm:space-y-12">
                        <h3 className="font-bold text-xl md:text-2xl text-gray-800">Career Jobs</h3>
                        <p className="text-gray-600">Currently, there are no job openings. Please check back later.</p>
                        {/* You can add more details or job listings here in the future */}
                    </div>
                    {/* Right Column: Support */}
                    <div className="space-y-6 sm:space-y-12">
                        <h3 className="font-bold text-xl md:text-2xl text-gray-800">SUPPORT</h3>
                        <h4 className="font-medium text-lg text-gray-800">Request Support</h4>
                        <p className="font-medium text-gray-800">Contact our support team who are ready to serve you 24/7</p>
                        <Button type='button' variant='blue-900'>
                            <Link href={"/#contact"}>CONTACT PAGE</Link>
                        </Button>
                        <div className="space-y-6">
                            {data.contacts.map(({ title, value }, index) => (
                                <div className="grid grid-cols-3 gap-4 items-start" key={index}>
                                    <span className="font-medium text-gray-800">{title}:</span>
                                    <span className="prose prose-sm col-span-2 text-gray-800" dangerouslySetInnerHTML={{ __html: value }}></span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-start -mx-2 mb-8">
                            {data.socials.map(({ icon, link, title }, index) => (
                                <Link href={link} key={index}>
                                    <div className="mx-2 bg-white-500 cursor-pointer rounded-full items-center justify-center flex p-2 shadow-md">
                                        <div dangerouslySetInnerHTML={{ __html: icon }} className="h-6 w-6 flex justify-center items-center" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerSection;

const data = {
    contacts: [
        {
            title: "Address", value: `
          Salamander Tower, Samora Ave, Dar es salaam, 4th Floor
      `
        },
        {
            title: "Email", value: `
          info@cashmetanzania.com
      `
        },
        {
            title: "Phone", value: `
          <a href="tel:++255713560288" class="no-underline">+255713560288</a>
      `
        },
    ],
    socials: [
        {
            title: "facebook",
            icon: `
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
    `,
            link: `https://m.facebook.com/cashmeinvoice`,
        },
        {
            title: "instagram",
            icon: `
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          `,
            link: `https://instagram.com/cashmetanzania?igshid=MzRlODBiNWFlZA==`
        },
        {
            title: "twitter",
            icon: `
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM224 352c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72zm72-152c0 8.5-7 15.5-15.5 15.5H159.5c-8.5 0-15.5-7-15.5-15.5V128c0-8.5 7-15.5 15.5-15.5h128c8.5 0 15.5 7 15.5 15.5v72zM416 432H64V128h352v304z"/></svg>
      `,
            link: `https://twitter.com/cashmetanzania`
        },
        {
            title: "linkedIn",
            icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
        `,
            link: `https://www.linkedin.com/company/cashmetanzania/`,
        },
    ]
};
