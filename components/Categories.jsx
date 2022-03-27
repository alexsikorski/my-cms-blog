import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { getCategories } from '../services';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    function generateSpan(name, slug) {
        if (slug == 'leetcode-easy') return <span name='category' id={slug}
            className={`cursor-pointer inline-block p-1
                text-center text-[#07b87b] rounded-md bg-leetcode-black select-none transition
                mr-1 mt-1 text-xs font-medium`}>
            {name}
        </span>
        if (slug == 'leetcode-medium') return <span name='category' id={slug}
            className={`cursor-pointer inline-block p-1    
                text-center text-[#ffc01e] rounded-md bg-leetcode-black select-none
                mr-1 mt-1 text-xs font-medium`}>
            {name}
        </span>
        if (slug == 'leetcode-hard') return <span name='category' id={slug}
            className={`cursor-pointer inline-block p-1
                text-center text-[#ff375f] rounded-md bg-leetcode-black select-none
                mr-1 mt-1 text-xs font-medium`}>
            {name}
        </span>
        return <span name='category' id={slug}
            className={`cursor-pointer inline-block p-1
                text-center text-white rounded-md bg-amber-500 select-none
                mr-1 mt-1 text-xs font-medium`}>
            {name}
        </span>
    }

    return (<>
        <div className='bg-lighter-washed-black shadow-lg rounded-lg p-8 pb-12'>
            <h3 className='text-xl text-white mb-2 font-semibold border-b border-white/5 pb-2'>
                Categories
            </h3>
            {categories.map((category) => (

                <Link key={category.slug} href={`/category/${category.slug}`}>
                    {generateSpan(category.name, category.slug)}
                </Link>

            ))}
        </div>
    </>
    )
};

export default Categories;

