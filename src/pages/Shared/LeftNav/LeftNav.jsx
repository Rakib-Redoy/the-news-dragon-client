import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftNavFooter from './LeftNavFooter';

const LeftNav = () => {
    const [categories, setCategories] =useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h4>All Categories</h4>
            {
                categories.map(category=> <p className="font-weight-bold"
                key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-muted font-weight-bold text-decoration-none'>{category.name}</Link>
                </p>)
            }
            <LeftNavFooter></LeftNavFooter>
        </div>
    );
};

export default LeftNav;