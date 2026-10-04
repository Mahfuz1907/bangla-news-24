import React from 'react';
import Card from './Card'

interface SelectedNewsTypes{
    title: string,
}

export interface NewsTypes{
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
    source: string
}

const getSelectedNews = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections', {
        cache: "no-store"
    })
    const data = await res.json()
    return data.data.find((item:SelectedNewsTypes) => item.title === 'নির্বাচিত খবর').articles
}

const SelectedNews = async() => {
    const selectedNews = await getSelectedNews()

    return (
        <div className='w-full flex flex-col justify-between items-start gap-5'>
            <div className='w-full'>
                <h1 className='mb-3'>নির্বাচিত খবর</h1>
                <hr className='text-green-600 font-black border-2' />
            </div>
            <div className='grid grid-cols-3 justify-between items-start gap-5'>
                {
                    selectedNews.map((card:NewsTypes) => <Card key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default SelectedNews;