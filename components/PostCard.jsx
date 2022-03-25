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
                {/* 
                <div className='text-left mb-2 w-full'>
                    <div className='flex items-center mb-2 lg:mb-0 w-full lg:w-auto mr-8'>
                        <img
                            alt={post.author.name}
                            height='30px'
                            width='30px'
                            className='align-middle rounded-full'
                            src={post.author.photo.url}
                        />
                        <p className=' font-normal text-neutral-400 ml-2 '>
                            {post.author.name}</p>
                        <span className='ml-2 font-normal text-neutral-400'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 inline mr-1 text-neutral-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                            </svg>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </span>
                        <div className='text-center'>
                            <Link href={`/post/${post.slug}`}>
                                <span className='transition duration-400 transform hover:-translate-y-1 inline-block bg-amber-500
                    text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer
                    '>Continue Reading</span>
                            </Link>
                        </div>
                    </div>
                </div> */}



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
                            <span className='ml-4 font-normal text-neutral-400'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 inline mr-1 text-neutral-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                                </svg>
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </span>
                        </span>
                        <div className='text-center'>
                            <Link href={`/post/${post.slug}`}>
                                <div className='p-1 transition duration-400 transform hover:-translate-x-1 bg-amber-500
                    text-lg font-medium rounded-full text-white cursor-pointer'>
     
                                        <svg xmlns="http://www.w3.org/2000/svg" height='25' width='25' className='m-auto'  fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
