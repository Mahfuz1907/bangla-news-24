import Image from 'next/image';
import React from 'react';

interface Types{
    params: Promise<{id: string}>
}

interface NewsBodyTypes{
    type: string,
    url: string,
    caption: string,
    copyrightHolder: string,
    text: string
}

const getNewsDetails = async(id:string) => {
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`, {
        cache: "no-store"
    })
    const data = await res.json()
    return data.data
}

export async function generateMetadata({params}:Types) {
    const {id} = await params
    const newsDetails = await getNewsDetails(id)
    
    return {
        title: `${newsDetails.title}`,
        icons:{
            icon: '/logo.png'
        }
    }
} 

const NewsDetails = async({params}:Types) => {
    const {id} = await params
    const newsDetails = await getNewsDetails(id)

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

    console.log(newsDetails.body[0].caption)

    return (
        <div className='mx-100 my-10 flex flex-col justify-between items-start gap-5'>
            {/* news title */}
            <h1 className='text-3xl font-bold'>{newsDetails.title}</h1>
            {/* news short description */}
            <p>{newsDetails.description.blocks[0].model.blocks[0].model.text}</p>
            {/* data and word count */}
            <div className='flex flex-row justify-start items-center gap-5 border-y border-gray-600 w-full py-3'>
                <p>{formatNewsDate(newsDetails.firstPublished)}</p>
                <p>{newsDetails.wordCount} শব্দ</p>
            </div>
            {/* News Content */}
            <div className='flex flex-col gap-5'>
                {
                    newsDetails.body.map((news:NewsBodyTypes) => 
                    news.type === 'text' ? <p key={news.text}>{news.text}</p>
                    : news.type === 'subheading' ? <h2 className='font-bold text-2xl'>{news.text}</h2>
                    : <div className='w-full'>
                <div className="relative w-full h-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                    <Image 
                    src={news.url} 
                    alt={news.caption}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                    />
                </div>
                <p>{news.caption} ({news.copyrightHolder})</p>
            </div>
                    )
                }
            </div>
            <div className='flex flex-row justify-start items-center gap-4'>
            {
                newsDetails.tags.map((tag:string) => <button className='px-3 py-2 bg-gray-100 rounded-xl' key={tag}>{tag}</button>)
            }
            </div>
        </div>
    );
};

export default NewsDetails;