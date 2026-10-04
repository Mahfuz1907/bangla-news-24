"use client";
import { NewsContext } from "@/Context/NewsContext";
import {Pagination} from "@heroui/react";
import {useContext} from "react";
import React from 'react';
import { NewsTypes } from "./page";

interface CategoryWiseTypes{
    categoryWise: NewsTypes[]
}

const PaginationComponent = ({categoryWise}:CategoryWiseTypes) => {

    const {page, setPage} = useContext(NewsContext)

    const totalPages = categoryWise.length/6;

    return (
        <div className="w-full">
            <Pagination className="justify-center">
                <Pagination.Content>
                    <Pagination.Item>
                    <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
                        <Pagination.PreviousIcon />
                        <span>Previous</span>
                    </Pagination.Previous>
                    </Pagination.Item>
                    {Array.from({length: totalPages}, (_, i) => i + 1).map((p) => (
                    <Pagination.Item key={p}>
                        <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                        {p}
                        </Pagination.Link>
                    </Pagination.Item>
                    ))}
                    <Pagination.Item>
                    <Pagination.Next isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
                        <span>Next</span>
                        <Pagination.NextIcon />
                    </Pagination.Next>
                    </Pagination.Item>
                </Pagination.Content>
            </Pagination>
        </div>
    );
};

export default PaginationComponent;