import React from 'react';
import Link from 'next/link';
import { MainCardNewsTypes } from './MainNews'; 

interface SideNewsListProps {
  sideNews: MainCardNewsTypes[];
}

export default function MainSideNews({ sideNews }: SideNewsListProps) {
  return (
    <div className="w-full flex-1 h-150 bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden divide-y divide-gray-200">
      {sideNews.map((item) => (
        <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
          {/* Category Label */}
          <span className="text-xs font-semibold text-emerald-800 block mb-1">
            {item.category}
          </span>

          {/* Headline Title */}
          <Link href={`/article/${item.id}`} className="group">
            <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug font-serif">
              {item.title}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
}