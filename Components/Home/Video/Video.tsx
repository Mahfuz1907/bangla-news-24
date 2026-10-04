import React from 'react';
import Card from './Card'

interface Types{
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

const getVideo = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections', {
        cache: "no-store"
    })
    const data = await res.json()
    return data.data.find((item:Types) => item.title === 'ভিডিও').articles
}

const Video = async() => {
    const video = await getVideo()
    return (
        <div className='w-full flex flex-col justify-between items-start gap-5'>
            <div className='w-full'>
                <h1 className='mb-3'>ভিডিও</h1>
                <hr className='text-green-600 font-black border-2' />
            </div>
            <div className='grid grid-cols-3 justify-between items-start gap-5'>
                {
                            video.map((card:NewsTypes) => <Card key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default Video;