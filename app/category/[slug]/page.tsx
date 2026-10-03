import React from 'react';
import Card from './Card';

interface Types{
    params: Promise<{slug: string}>
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

const getCategoryWise = async(slug:string) => {
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${slug}`)
    const data = await res.json()
    return data
}

export async function generateMetadata({params}:Types) {
    const {slug} = await params
    const category = await getCategoryWise(slug)
    
    return {
        title: `${category.title} | Bangla News 24`,
        icons:{
            icon: '/logo.png'
        }
    }
} 

const CategoryWise = async({params}:Types) => {
    const {slug} = await params
    const category = await getCategoryWise(slug)
    const categoryWise = category.data
    return (
        <div className='mx-37.5 my-10 flex flex-col justify-between items-start gap-5'>
            <div className='w-full'>
                <h2>{category.title}</h2>
                <hr className='border-2 border-green-600 mt-5' />
            </div>
            <div className='grid grid-cols-3 gap-5 justify-between items-start'>
                {
                    categoryWise.map((card:NewsTypes) => <Card key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default CategoryWise;