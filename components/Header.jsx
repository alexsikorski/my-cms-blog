import React, { useState, useEffect } from 'react';
import { SearchHeaderWidget } from '.';
import Link from 'next/link'


import { getCategories } from '../services';



const Header = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return <div className='container mx-auto px-10 mb-8 select-none'>
        <div className='border-b w-full inline-block border-white/20 py-8 '>
            <div className='md:float-left block
            transition duration-500 transform hover:-translate-y-1 '>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-white '>
                        Alex Sikorski<span className=' text-amber-500'>.net</span>
                    </span>
                </Link>
            </div>
            <div>
                <span className='sm:contents'>
                    <SearchHeaderWidget />
                </span>
                <span className='hidden lg:float-left lg:contents'>

                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer
                         transition duration-500 transform hover:-translate-y-1'>
                                {category.name}
                            </span>
                        </Link>
                    ))}

                </span>
            </div>

        </div>
    </div>;
};

export default Header;
