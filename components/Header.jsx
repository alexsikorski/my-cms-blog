import React, { useState, useEffect } from 'react';
import { CategoriesHeaderWidget, SearchHeaderWidget } from '.';
import Link from 'next/link'
import { getCategories } from '../services';

const Header = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return <div className='container mx-auto px-10 mb-4 select-none'>
        <div className='border-b w-full inline-block border-white/5 py-6'>
            <div className='md:float-left block
            transition duration-400 transform hover:-translate-y-1 '>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-2xl lg:text-4xl text-white'>
                        Alex Sikorski<span className=' text-amber-500'>.net</span>
                    </span>
                </Link>
            </div>
            <div>
                <CategoriesHeaderWidget categories={categories} />
                <span className='sm:contents'>
                    <SearchHeaderWidget />
                </span>transition duration-400
                <span>
                    <a href="https://www.linkedin.com/in/alex-sikorski-541249182/" target="_blank" className="float-right mt-2 lg:ml-4 ml-2 align-middle text-white hover:text-amber-500 transition duration-400 hover:cursor-pointer transform hover:-translate-y-1 hover:text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 30 30" width="25" height="25" >
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" />
                        </svg>
                    </a>
                </span>
                <span>
                    <a href="https://github.com/alexsikorski" target="_blank" className="float-right mt-2 lg:ml-4 ml-2 align-middle text-white hover:text-amber-500 transition duration-400 hover:cursor-pointer transform hover:-translate-y-1 hover:text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 64 64" width="" height="25" >
                            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
                        </svg>
                    </a>
                </span>

                <span className='hidden lg:float-left lg:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-white text-sm ml-4 font-semibold cursor-pointer
                         transition duration-400 transform hover:-translate-y-1 hover:text-amber-500'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </span>
            </div>
        </div >

    </div >;
};

export default Header;
