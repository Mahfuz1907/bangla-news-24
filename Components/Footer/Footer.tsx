import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6 text-sm text-gray-600 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left spacer for centering balance */}
        <div className="w-1/3 hidden md:block"></div>

        {/* Center: Copyright Notice */}
        <div className="w-full md:w-1/3 text-center">
          <span>&copy; {currentYear} BanglaBulletin</span>
        </div>

        {/* Right: Source Attribution */}
        <div className="w-full md:w-1/3 text-right">
          <span>Source: BBC Bangla</span>
        </div>
      </div>
    </footer>
  );
}