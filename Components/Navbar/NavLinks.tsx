'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavigationTypes{
    slug: string,
    title: string,
    topicID: string,
    url: string,
    scrapable: boolean 
}

interface NavLinkProps{
    navigations: NavigationTypes[]
}

const NavLinks = ({navigations}:NavLinkProps) => {
    const pathName = usePathname()

    const designNavs = (path:string, slug:string) => {
        if (pathName === '/') {
            return slug === '/bengali' || slug === '' || path === '/' && slug !== '/bengali/popular/read';
        }

        return pathName === path;
    }
    return (
        <nav className="border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <ul className="flex items-center justify-center space-x-6 sm:space-x-8 py-2.5 overflow-x-auto text-sm font-medium text-gray-700">
          {
            navigations.map((item) => {
                const targetPath = !item.scrapable ? '/' : `/category/${item.slug}`;
                const isActive = designNavs(targetPath, item.slug);
            return(
                <Link 
                key={item.title} 
                href={targetPath}
                className={`transition-colors text-[10px] sm:text-xs py-1 block whitespace-nowrap ${
                    isActive
                      ? 'text-emerald-800 font-bold border-b-2 border-emerald-800'
                      : 'hover:text-emerald-700 text-gray-700'
                  }`}>
                  {item.title}
                </Link>
            )})
          }
        </ul>
      </div>
    </nav>
    );
};

export default NavLinks;