import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
    return (
        <div className='bg-lighter-washed-black shadow-lg rounded-lg mb-2 text-white'>
            <div className='relative overflow-hidden shadow-md pb-60 mb-2'>
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='object-top absolute h-60 w-full object-cover shadow-lg rounded-t-lg '
                />
            </div>
            <div className='lg:p-10 md:p-10 p-4 '>
                <h1 className='inline-block transition duration-400 text-left mb-2 cursor:pointer
                 hover:text-amber-500 text-3xl font-semibold'>
                    <Link href={`/post/${post.slug}`}>
                        {post.title}
                    </Link>

                </h1>
                <p className='text-left text-lg text-neutral-200 font-medium  mb-2'>
                    {post.brief}
                </p>
                <div className=' w-full'>
                    <div className='grid grid-cols-6 mb-2 lg:mb-0 w-full lg:w-auto'>
                        <span className='col-span-5'>
                            <img
                                alt={post.author.name}
                                height='30px'
                                width='30px'
                                className='inline align-middle rounded-full'
                                src={post.author.photo.url}
                            />
                            <p className='inline font-normal text-neutral-400 ml-2 '>
                                {post.author.name}</p>
                            <span className='ml-2 font-normal text-xs text-neutral-400'>
                      
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </span>
                        </span>
                        <div className='text-center'>
                            <Link href={`/post/${post.slug}`}>
                                <div className='p-1 transition duration-400 transform hover:-translate-x-1 bg-amber-500
                    text-lg font-medium rounded-full text-white cursor-pointer bottom-0 right-0'>

                                    <svg xmlns="http://www.w3.org/2000/svg" height='25' width='25' className='m-auto ' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>

                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
};

export default PostCard;
