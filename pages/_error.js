import {Categories, PostWidget} from '../components';
import Link from 'next/link';
import React from "react";

function Error({statusCode}) {
    return (
        <div className='container mx-auto lg:px-24 px-5 mb-4'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-4'>
                <div className='lg:col-span-8 col-span-1'>
                    <div className="col-span-1 lg:col-span-8 bg-lighter-washed-black rounded-md p-8 text-center mb-4">
                        <div className="text-neutral-400 border-2 border-leetcode-black bg-code-black rounded-lg p-4">
                            <div className="mb-2 items-center">
                                <span className="text-white text-center text-2xl font-semibold">{statusCode}</span>
                            </div>
                            <div className="mb-4">
                                <span>Uh oh... An error has occurred.</span>
                            </div>

                            <div>
                                <Link href='/'>
                                    <a className="transition duration-400 transform hover:-translate-y-1 inline-block bg-amber-500 text-lg font-medium rounded-lg text-white px-5 py-2 cursor-pointer">
                                        Return Home</a>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='lg:col-span-4 col-span-1'>
                    <div className='lg:sticky relative lg:top-4'>
                        <PostWidget/>
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default Error
