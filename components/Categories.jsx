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

    function generateSpan(name, slug, hex) {
        return <span name='category' id={slug}
            className='cursor-pointer block pb-3 mb-3
            p-3 text-center text-black rounded-md bg-amber-500'>
            {name}
            <br />
            {hex}
        </span>
    }

    //     className={`cursor-pointer block pb-3 mb-3
    // p-3 text-center text-black rounded-md bg-[${hex}]`}>

    return (<>
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'
            onLoad={() => { alert("div is loaded") }}>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                Categories
            </h3>
            {categories.map((category) => (

                <Link key={category.slug} href={`/category/${category.slug}`}>
                    {generateSpan(category.name, category.slug, category.colour.hex)}
                </Link>

            ))}
        </div>
    </>
    )
};

export default Categories;

