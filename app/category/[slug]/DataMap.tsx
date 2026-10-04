'use client'

import React, { useContext } from 'react';
import { NewsTypes } from './page';
import Card from './Card';
import { NewsContext } from '@/Context/NewsContext';

interface CategoryWiseTypes{
    categoryWise: NewsTypes[]
}

const DataMap = ({categoryWise}:CategoryWiseTypes) => {
    const {page} = useContext(NewsContext)
    console.log(page)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-between items-start'>
            {
                categoryWise.slice((page - 1) * 6, (page * 6)).map((card:NewsTypes) => <Card key={card.id} card={card} />)
            }
        </div>
    );
};

export default DataMap;