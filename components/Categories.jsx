import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Script from 'next/script'
import { getCategories } from '../services';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    function generateSpan(name, slug) {
        if (slug == 'leetcode-easy') return <span name='category' id={slug}
            className={`cursor-pointer block pb-3 mb-3
        p-3 text-center text-[#07b87b] rounded-md bg-[#2e2f31] select-none transition`}>
            {name}
        </span>
        if (slug == 'leetcode-medium') return <span name='category' id={slug}
            className={`cursor-pointer block pb-3 mb-3
        p-3 text-center text-[#ffc01e] rounded-md bg-[#2e2f31] select-none`}>
            {name}
        </span>
        if (slug == 'leetcode-hard') return <span name='category' id={slug}
            className={`cursor-pointer block pb-3 mb-3
    p-3 text-center text-[#ff375f] rounded-md bg-[#2e2f31] select-none`}>
            {name}
        </span>
        return <span name='category' id={slug}
            className={`cursor-pointer block pb-3 mb-3
            p-3 text-center text-white rounded-md bg-amber-500 select-none`}>
            {name}
        </span>
    }

    return (<>
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'
            onLoad={() => { alert("div is loaded") }}>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
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

