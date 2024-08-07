"use client";

import React, { ReactNode, useEffect, useState } from 'react';

type ButtonProps = {
    type?: 'button' | 'submit'; 
    title?: string; // title is optional for icon-only buttons
    icon?: ReactNode; // Changed from string to ReactNode
    variant: 'primary' | 'secondary' | 'blue-900' | 'scrollToTop';
    full?: boolean;
    onClick?: () => void; // Optional onClick prop
    disabled?: boolean; // Add disabled prop
    children?: ReactNode; // Added children prop
};

const Button = ({ 
    type = 'button', 
    title, 
    icon, 
    variant, 
    full = false, 
    onClick, 
    disabled = false, 
    children 
}: ButtonProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Check if `window` is defined (client-side)
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // or a fallback UI for server-side rendering
    }

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
    const sizeClasses = variant === 'scrollToTop' ? "w-12 h-12 rounded-full" : "px-6 py-3 rounded-md";

    const handleClick = () => {
        if (onClick && !disabled) {
            onClick();
        }
    };

    return (
        <button 
            type={type} 
            className={`${baseClasses} ${variantClasses} ${fullClasses} ${sizeClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={handleClick}
            disabled={disabled}
            aria-label={title} // Optional aria-label for better accessibility
        >
            {icon}
            {title}
            {children}
        </button>
    );
};

Button.displayName = 'Button';

export default Button;
