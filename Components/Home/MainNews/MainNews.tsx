import React from 'react';
import MainCard from './MainCard';
import MainSideNews from './MainSideNews';

interface MainNewsTypes{
    title: string,
}

export interface MainCardNewsTypes {
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


const getMainNews = async() => {
    const response = await fetch('https://news-api-v2.vercel.app/api/news/sections', {
        cache: "no-store"
    })
    const data = await response.json()
    return data.data.find((item:MainNewsTypes) => item.title === 'প্রধান খবর').articles
}

const MainNews = async() => {
    const MainNews = await getMainNews()
    const mainNewsCard:MainCardNewsTypes = MainNews[0]

    const sideNews = MainNews.slice(1,7)
    return (
        <div className='flex flex-col lg:flex-row justify-between items-start gap-5 w-full'>
            <MainCard mainNewsCard={mainNewsCard} />
            <MainSideNews sideNews={sideNews} />
        </div>
    );
};

export default MainNews;