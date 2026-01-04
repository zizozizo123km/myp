import React from 'react';
import { Search, Home, Video, Store, Users, Bell, MessageSquare, Grid, Gamepad } from 'lucide-react';

// --- Sub-Components ---

// Placeholder for Profile Avatar
const ProfileAvatar = ({ src, alt = 'User Avatar' }) => (
    <img
        className="h-9 w-9 rounded-full cursor-pointer object-cover transition-opacity duration-150 hover:opacity-90"
        src={src || "https://via.placeholder.com/150/007bff/ffffff?text=U"}
        alt={alt}
    />
);

// Navigation Item component (Center)
const NavItem = ({ Icon, isActive }) => (
    <div className={`
        flex items-center justify-center 
        flex-1 h-full px-2 lg:px-6 
        cursor-pointer transition-colors duration-200 
        ${isActive 
            ? 'border-b-4 border-blue-500 text-blue-500' 
            : 'text-gray-500 hover:bg-gray-100 rounded-lg'
        }
        `}>
        <Icon className={`h-6 w-6 lg:h-7 lg:w-7`} />
    </div>
);

// Utility Icon component (Right side)
const UtilityIcon = ({ Icon, count = 0 }) => (
    <div className="relative p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-150 cursor-pointer mx-1">
        <Icon className="h-6 w-6 text-black" />
        {count > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full border-2 border-white">
                {count > 9 ? '9+' : count}
            </span>
        )}
    </div>
);

// --- Facebook Logo SVG ---
const FacebookLogo = () => (
    <svg viewBox="0 0 24 24" className="h-10 w-10 text-blue-600">
        <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.328 6.4h-1.63c-.15 0-.276.1-.276.3v1.3H15.1l-.234 1.762h-1.127v5.138h-2.126V11.86h-1.07V10h1.07v-.812c0-1.06.647-1.64 1.587-1.64h1.747v1.2z"/>
    </svg>
);


const Header = () => {
    // Mock user data
    const user = {
        name: "Developer",
        avatarSrc: "https://images.unsplash.com/photo-1506794778202-dfa523556c4d?w=100&q=80&auto=format&fit=crop"
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md flex items-center justify-between h-[56px] lg:h-[60px] px-2 lg:px-4">
            
            {/* 1. Left Section (RTL: Right side of screen for Logo/Search) */}
            <div className="flex items-center space-x-2">
                <FacebookLogo />
                
                {/* Search Bar (Desktop/Tablet) */}
                <div className="relative hidden md:flex items-center bg-gray-100 p-2 rounded-full w-fit">
                    <Search className="h-5 w-5 text-gray-500 mx-2" />
                    <input 
                        type="text" 
                        dir="rtl" // Force Right-to-Left writing direction for Arabic input
                        placeholder="ابحث في فيسبوك" 
                        className="bg-transparent outline-none placeholder-gray-500 text-sm w-48 text-right pr-1"
                    />
                </div>
                
                {/* Mobile Search Icon */}
                <div className="md:hidden p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
                    <Search className="h-6 w-6 text-gray-700" />
                </div>
            </div>

            {/* 2. Center Section: Navigation Links */}
            <nav className="flex items-center justify-center max-w-xl flex-grow h-full mx-2 hidden sm:flex">
                <NavItem Icon={Home} isActive={true} />
                <NavItem Icon={Video} isActive={false} />
                <NavItem Icon={Store} isActive={false} />
                <NavItem Icon={Users} isActive={false} />
                <NavItem Icon={Gamepad} isActive={false} /> 
            </nav>
            
            {/* 3. Right Section (RTL: Left side of screen for Utility Icons & Profile) */}
            <div className="flex items-center space-x-1 lg:space-x-2">
                
                {/* Desktop/Tablet Utility Icons */}
                <div className="hidden md:flex items-center space-x-2">
                    <UtilityIcon Icon={Grid} />
                    <UtilityIcon Icon={MessageSquare} count={3} />
                    <UtilityIcon Icon={Bell} count={12} />
                </div>
                
                {/* Profile */}
                <ProfileAvatar src={user.avatarSrc} alt={user.name} />

                {/* Mobile Navigation/Menu Icon (If center nav is hidden) */}
                <div className="md:hidden">
                    <UtilityIcon Icon={Grid} />
                </div>
            </div>

        </header>
    );
};

export default Header;