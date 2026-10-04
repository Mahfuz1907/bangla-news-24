'use client'

import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface NewsContextTypes{
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

export const NewsContext = createContext<NewsContextTypes>({
    page: 1,
    setPage: () => {}
})

const NewsProvider = ({children}:{children:ReactNode}) => {
    const [page, setPage] = useState<number>(1)

    const sharedData = {
        page,
        setPage
    }
    
    return (
        <NewsContext.Provider value={sharedData}>{children}</NewsContext.Provider>
    );
};

export default NewsProvider;