import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';

const getNavigation = async() => {
        const response = await fetch('https://news-api-v2.vercel.app/api/categories')
        const data = await response.json()

        return data.data
    }

export default async function Navbar() {

    const now = new Date();

    const dayName   = now.toLocaleDateString('bn-BD', { weekday: 'long' });
    const monthName = now.toLocaleDateString('bn-BD', { month: 'long' });
    const dayNumber = now.toLocaleDateString('bn-BD', {day: 'numeric'});                                        
    const year      = now.toLocaleDateString('bn-BD', {year: 'numeric'});

    const navigations = await getNavigation()


  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Bar: Brand, Date, and Authentication */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Left spacing to center logo alignment */}
        <div className="hidden md:flex items-center space-x-4 w-1/4"></div>

        {/* Center: Logo & Date */}
        <Link href={'/'} className="flex items-center space-x-3 mx-auto md:mx-0">
          {/* Logo Icon */}
          <div className="relative w-12 h-12 shrink-0">
            <Image
              src="/logo.png"
              alt="Bangla News 24 Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>

          {/* Title & Date Column */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-emerald-800 font-serif">
              Bangla News 24
            </h1>
            <span className="text-xs text-gray-500 font-medium mt-0.5">
              {dayName}, {dayNumber} {monthName}, {year}
            </span>
          </div>
        </Link>

        {/* Right: Authentication Buttons */}
        <div className="flex items-center w-1/4 justify-end">
        <AuthButtons />
        </div>
      </div>

      {/* Navigation Menu Bar */}
      <NavLinks navigations={navigations} />
    </header>
  );
}