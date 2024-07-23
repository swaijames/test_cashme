// components/Button.tsx
"use client"; // Add this directive at the top
import React, { ReactNode } from 'react';

type ButtonProps = {
    type?: 'button' | 'submit';
    title?: string; // title is optional for icon-only buttons
    icon?: ReactNode; // Changed from string to ReactNode
    variant: 'primary' | 'secondary' | 'blue-900' | 'scrollToTop';
    full?: boolean;
    onClick?: () => void; // Optional onClick prop
};

const Button = ({ type = 'button', title, icon, variant, full = false, onClick }: ButtonProps) => {
    const baseClasses = "flex items-center justify-center transition duration-300 transform hover:scale-105";
    let variantClasses = "";

    switch (variant) {
        case 'primary':
            variantClasses = "text-white bg-blue-600 hover:bg-blue-700";
            break;
        case 'secondary':
            variantClasses = "text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white";
            break;
        case 'blue-900':
            variantClasses = "text-white bg-blue-900 hover:bg-blue-800";
            break;
        case 'scrollToTop':
            variantClasses = "text-white bg-blue-900 hover:bg-blue-700 fixed bottom-6 right-6 shadow-lg z-50";
            break;
        default:
            variantClasses = "text-white bg-gray-500 hover:bg-gray-600";
            break;
    }

    const fullClasses = full ? "w-full" : "";

    // Rounded button size
    const sizeClasses = variant === 'scrollToTop' ? "w-12 h-12 rounded-full" : "px-6 py-3 rounded-md"; // Circular size for scrollToTop variant

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button type={type} className={`${baseClasses} ${variantClasses} ${fullClasses} ${sizeClasses}`} onClick={handleClick}>
            {icon}
            {title}
        </button>
    );
};

export default Button;
