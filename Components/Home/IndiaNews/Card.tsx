import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NewsTypes } from './IndiaNews';


interface CardTypes{
    card: NewsTypes
}


export default function MainCard({ card }: CardTypes) {

    const formatNewsDate =(isoString: string): string => {
        const date = new Date(isoString);

        // 1. Get Date Part (e.g., "২ অক্টোবর, ২০২৬")
        const datePart = date.toLocaleDateString('bn-BD', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC',
        });

        // 2. Get Time Part with Bangla Numerals (e.g., "৪:১৮")
        const timePart = date.toLocaleTimeString('bn-BD', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'UTC',
        });

        // 3. Extract pure time digits (e.g., "৪:১৮") ignoring any English/Bangla AM/PM text
        const timeDigits = timePart.replace(/[^\d:১২৩৪৫৬৭৮৯০]/g, '').trim();

        // 4. Get English AM/PM tag
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

        // Output: "২ অক্টোবর, ২০২৬ এ ৪:১৮ PM"
        return `${datePart} এ ${timeDigits} ${ampm}`;
    }

  return (
    <Link href={`/article/${card.id}`} className="max-w-md group cursor-pointer h-105 flex-1 bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md hover:border hover:border-green-600 transition-shadow duration-200">
      {/* Featured Image */}
      <div className="relative w-full h-40 bg-gray-100">
        <Image
          src={card.imageUrl}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex flex-col space-y-3">
        {/* Category Tag */}
        <span className="text-sm font-bold text-emerald-800">
          {card.category}
        </span>

        {/* Headline / Title */}
          <h2 className="text-md font-bold text-gray-900 leading-snug group-hover:text-emerald-800 transition-colors font-serif">
            {card.title}
          </h2>

        {/* Short Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 font-normal">
          {card.description}
        </p>

        {/* Date and Time Timestamp */}
        <div className="pt-2 text-xs text-gray-400 font-medium">
          {formatNewsDate(card.firstPublished)}
        </div>
      </div>
    </Link>
  );
}