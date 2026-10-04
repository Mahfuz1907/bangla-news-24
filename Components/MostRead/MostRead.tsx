import React from 'react';
import Link from 'next/link';

interface MostReadNewsTypes {
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    imageAlt: string,
    category: string,
    type: string,
    isLive: boolean,
    firstPublished: string,
    lastPublished: string,
    source: string,
    rank: number
}


const toBanglaNumeral = (num: number): string => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num
    .toString()
    .split('')
    .map((digit) => banglaDigits[parseInt(digit, 10)] || digit)
    .join('');
};


const getMostRead = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read', {
        cache: "no-store"
    })
    const data = await res.json()
    return data.data
}

const MostRead = async() => {
    const mostRead = await getMostRead()
    
    return (
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
      {/* Widget Header */}
      <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 font-serif">
        সর্বাধিক পঠিত
      </h2>

      <ul className="space-y-4">
        {
            mostRead.map((article : MostReadNewsTypes) => (
                <li key={article.id} className="flex items-start space-x-3 group">
                    <span className="text-xl font-bold text-emerald-800 leading-none pt-0.5 min-w-6">
                    {toBanglaNumeral(article.rank)}
                    </span>
                    <Link
                    href={`/article/${article.id}`}
                    className="text-base font-medium text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug font-serif"
                    >
                    {article.title}
                    </Link>
                </li>
            ))
        }
      </ul>
    </div>
    );
};

export default MostRead;