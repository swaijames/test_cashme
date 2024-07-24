"use client";

import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constant';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`bg-white shadow-lg fixed top-0 w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm' : 'bg-opacity-100'}`}>
            <div className="container mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
                <Link href={"/"}>
                    <div className="relative cursor-pointer h-16 w-16">
                        <Image src={"/assets/Logo.svg"} alt={"Logo"} layout="fill" />
                    </div>
                </Link>
                <div className="hidden md:flex space-x-4">
                    {NAV_LINKS.map(link => (
                        <Link key={link.key} href={link.href} className={`text-gray-600 hover:text-blue-900 relative transition duration-300 ease-in-out ${pathname === link.href ? 'font-bold' : ''}`}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex space-x-2">
                    <Link href="https://portal.cashmetanzania.com/login" className="bg-blue-900 text-white px-4 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-800">
                        Log In
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white px-4 py-2 space-y-2">
                    {NAV_LINKS.map(link => (
                        <Link key={link.key} href={link.href} className={`block text-gray-600 hover:text-blue-900 relative transition duration-300 ease-in-out ${pathname === link.href ? 'font-bold' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/login" className="bg-blue-900 text-white px-4 py-2 rounded-full w-full text-center block transition-colors duration-300 ease-in-out hover:bg-blue-800">

                        Log In

                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
