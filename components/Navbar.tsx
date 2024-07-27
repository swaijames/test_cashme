'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useCallback, createContext } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { NAV_LINKS } from '@/constant';

// Create a context for the menu state with default values
export const MenuContext = createContext({
  isMenuOpen: false,
  toggleMenu: () => {}
});

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      <nav className="bg-white shadow-lg fixed top-0 w-full z-10">
        <div className="container mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
          <Link href="/" prefetch={true} className="relative cursor-pointer h-16 w-16">
            <Image src="/assets/Logo.svg" alt="Logo" layout="fill" priority />
          </Link>
          <div className="hidden md:flex space-x-4">
            {NAV_LINKS.map(link => (
              <Link 
                key={link.key} 
                href={link.href} 
                prefetch={true} 
                className={`text-gray-600 hover:text-blue-900 relative ${pathname === link.href ? 'font-bold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex space-x-2">
            <Link 
              href="https://portal.cashmetanzania.com/login" 
              prefetch={true} 
              className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800"
            >
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
              <Link 
                key={link.key} 
                href={link.href} 
                prefetch={true} 
                className={`block text-gray-600 hover:text-blue-900 relative ${pathname === link.href ? 'font-bold' : ''}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="https://portal.cashmetanzania.com/login" 
              prefetch={true} 
              className="bg-blue-900 text-white px-4 py-2 rounded-full w-full text-center block hover:bg-blue-800"
            >
              Log In
            </Link>
          </div>
        )}
      </nav>
    </MenuContext.Provider>
  );
};

export default Navbar;
