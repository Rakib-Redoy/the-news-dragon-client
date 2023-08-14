import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Categories = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is Categories : {categoryNews.length}</h2>
            {
            categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Categories;