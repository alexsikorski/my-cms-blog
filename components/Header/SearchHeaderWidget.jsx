import React, {useEffect, useRef} from 'react';
import {useRouter} from 'next/router'

const SearchHeaderWidget = () => {
    const router = useRouter()
    const searchEl = useRef();

    useEffect(() => {
        searchEl.current.value = window.localStorage.getItem('search');

        searchEl.current.addEventListener("keyup", function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSearch();
            }
        });
    }, [])

    const handleSearch = () => {
        const {value: search} = searchEl.current;
        window.localStorage.setItem('search', search);

        const slug = search.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, '');
        slug = slug.replace(/\s+/g, '-').toLowerCase();
        if (slug !== "") router.push(`/search/${slug}`);
    }

    return (<>
            <div className='inline-grid md:float-right mt-2 grid-cols-2 w-40'>
                <input
                    id='searchInput'
                    ref={searchEl}
                    type='text'
                    className='pl-2 pr-4 md:ml-4 outline-none w-full rounded-l-lg  bg-gray-100 text-gray-700 drop-shadow w-28'
                    placeholder='Search'
                    name='search'
                />
                <button
                    className='md:ml-10 md:mr-2 ml-6 mr-6 inline-block bg-amber-500 rounded-r-lg text-white cursor-pointer drop-shadow'
                    type='submit'
                    onClick={handleSearch}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className='ml-2'
                         fill="currentColor" viewBox="0 0 50 50" width="14" height="14" stroke='white' strokeWidth="1">
                        <path
                            d="M 21 4 C 11.082241 4 3 12.082241 3 22 C 3 31.917759 11.082241 40 21 40 C 24.62177 40 27.99231 38.91393 30.820312 37.0625 L 43.378906 49.621094 L 47.621094 45.378906 L 35.224609 32.982422 C 37.581469 29.938384 39 26.13473 39 22 C 39 12.082241 30.917759 4 21 4 z M 21 8 C 28.756241 8 35 14.243759 35 22 C 35 29.756241 28.756241 36 21 36 C 13.243759 36 7 29.756241 7 22 C 7 14.243759 13.243759 8 21 8 z"/>
                    </svg>
                </button>
            </div>
        </>
    );
}


export default SearchHeaderWidget;
