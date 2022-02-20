import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const SearchHeaderWidget = () => {
    const router = useRouter()
    const searchEl = useRef();

    useEffect(() => {
        searchEl.current.value = window.localStorage.getItem('search');
    }, [])

    const handleSearch = () => {
        const { value: search } = searchEl.current;
        window.localStorage.setItem('search', search);

        const slug = search.replace(/\s+/g, '-').toLowerCase();

        router.push(`/search/${slug}`);
    }

    return (<>
        <span className='inline-grid md:float-right mt-2 grid-cols-2 w-60'>
            <input
                ref={searchEl}
                type='text'
                className='pl-2 pr-2 md:ml-4 outline-none w-full rounded-l-lg  bg-gray-100 text-gray-700 drop-shadow'
                placeholder='Search'
                name='search'
            />
            <button
                className='md:ml-4  inline-block bg-amber-500 rounded-r-lg text-white cursor-pointer drop-shadow '
                type='submit'
                onClick={handleSearch}
            >
                Search
            </button>

        </span>
    </>
    );
}


export default SearchHeaderWidget;
