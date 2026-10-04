import React from 'react';
import './NewsTicker.css'
import Link from 'next/link';

interface HeadlineTypes{
  id: string,
  title: string
}

const getHeadLines = async() => {
  const response = await fetch('https://news-api-v2.vercel.app/api/news/sections', {
    cache: "no-store"
  })
  const data = await response.json()
  return data.data[0].articles
}

export default async function NewsTicker() {
  const newsHeadlines = await getHeadLines()

  return (
    <div className="w-full px-37.5 sticky top-0 z-50 bg-emerald-800 text-white flex items-center overflow-hidden border-t border-b border-emerald-900 shadow-inner">
      {/* Fixed 'Latest' Label */}
      <div className="bg-emerald-950 px-5 py-2 font-bold text-sm z-10 whitespace-nowrap flex items-center shadow-md">
        সর্বশেষ
      </div>

      {/* Scrolling Text Container */}
      <div className="overflow-hidden whitespace-nowrap flex-1 py-2">
        <div className="animate-marquee flex items-center space-x-8 text-sm font-medium">
          {/* First Render */}
          {newsHeadlines.map((headline:HeadlineTypes) => (
            <Link href={`/article/${headline.id}`} key={headline.id} className="flex items-center space-x-8">
              <span className="hover:underline cursor-pointer">{headline.title}</span>
              <span className="text-emerald-400 text-xs">•</span>
            </Link>
          ))}

          {/* Duplicate Render for Seamless Infinite Loop */}
          {newsHeadlines.map((headline:HeadlineTypes) => (
            <Link href={`/article/${headline.id}`} key={headline.id} className="flex items-center space-x-8">
              <span className="hover:underline cursor-pointer">{headline.title}</span>
              <span className="text-emerald-400 text-xs">•</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}