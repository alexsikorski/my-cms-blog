import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const SearchHeaderWidget = ({ slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        getRecentPosts()
            .then((result) => setRelatedPosts(result))
    }, [slug])

    return (<>
        <span className='inline-grid md:float-right mt-2 grid-cols-2 w-60'>
            <input
                type='text'
                className='pl-2 md:ml-4 outline-none w-full rounded-l-lg  bg-gray-100 text-gray-700 drop-shadow'
                placeholder='Search'
                name='search'
            />
            <button
                className='md:ml-4 transition duration-500 ease transform hover:-translate-x-1 inline-block bg-amber-500 rounded-r-lg text-white cursor-pointer drop-shadow '
                type='button'
            >
                Search
            </button>
        </span>
    </>

    );

};

export default SearchHeaderWidget;
