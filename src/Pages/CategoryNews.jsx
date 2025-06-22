import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewCard from '../Components/NewCard';

const CategoryNews = () => {
    const {data: news} = useLoaderData()
    // console.log(news)
    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            <p className='text-gray-400'>{news.length} news found in this category</p>
            <div>
                {
                    news.map(singleNews => <NewCard key={singleNews._id} singleNews={singleNews}></NewCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;