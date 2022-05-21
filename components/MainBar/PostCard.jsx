import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
    return (
        <div className='bg-lighter-washed-black shadow-lg rounded-lg mb-4 text-white'>
            <div className='relative overflow-hidden shadow-md pb-60'>
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='object-top absolute h-60 w-full object-cover shadow-lg rounded-t-lg '
                />
            </div>
            <div className='lg:p-10 md:p-10 p-4'>
                <h1 className='inline-block transition duration-400 text-left
                 hover:text-amber-500 text-3xl font-semibold'>
                    <Link href={`/post/${post.slug}`}>
                        {post.title}
                    </Link>

                </h1>
                <div className='flex justify-center items-center'>
                    <div className='flex-auto'>
                        {post.categories.map((category) => {
                            return (
                                <Link href={`/category/${category.slug}`} key={category.slug}>
                                    <p className='inline mr-2 text-sm font-medium text-neutral-400 transition duration-400 cursor-pointer hover:text-amber-500'>
                                        #{category.name}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                    <div className='flex-auto'>
                        <p className='text-right font-medium text-sm text-neutral-400'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                    </div>
                </div>


                <p className='text-left text-lg text-neutral-200 font-medium  mt-4 mb-4'>
                    {post.brief}
                </p>
                <div className='mt-4 lg:mb-0 w-full h-full lg:w-auto flex'>
                    <span className='flex-auto'>
                        <img
                            alt={post.author.name}
                            height='30px'
                            width='30px'
                            className='inline rounded-full align-middle'
                            src={post.author.photo.url}
                        />
                        <p className='ml-2 inline font-normal text-lg text-neutral-400 align-middle'>
                            {post.author.name}</p>

                    </span>
                    <span>
                        <Link href={`/post/${post.slug}`}>
                            <div className='p-1 transition duration-400 transform hover:-translate-x-1 bg-amber-500
                                rounded-lg shadow-lg text-white cursor-pointer w-16'>
                                <svg xmlns="http://www.w3.org/2000/svg" height='22' width='16' className='m-auto'
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>

                        </Link>
                    </span>
                </div>

            </div>
        </div>

    )
};

export default PostCard;
