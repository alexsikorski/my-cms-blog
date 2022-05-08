import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../../services';




const PostWidget = ({ categories, slug }) => {


    const [relatedOrRecentPosts, setRelatedOrRecentPosts] = useState([]);
    const [title, setTitle] = useState();

    useEffect(() => {
        setTitle("Recent Posts")
        if (slug) {
            getSimilarPosts(categories, slug).then((result) => {
                if (result.length !== 0) {
                    // if > 0 similar posts
                    setRelatedOrRecentPosts(result);
                    setTitle("Related Posts")
                }
                else {
                    // if 0 similar posts just use recent ones
                    getRecentPosts().then((result) => {
                        setRelatedOrRecentPosts(result);
                    });
                }
            });
        } else {
            getRecentPosts().then((result) => {
                setRelatedOrRecentPosts(result);
            });
        }
    }, [slug]);

    return (
        <div className='bg-lighter-washed-black shadow-lg rounded-lg lg:p-8 lg:pb-6 p-4 pb-2 mb-4'>
            <h3 className='text-white text-xl mb-2 font-semibold border-b pb-2 border-white/5'>
                {title}
            </h3>
            {relatedOrRecentPosts.map((post) => (
                <Link href={`/post/${post.slug}`} key={post.title}>
                    {/* <div key={post.title} className='group w-full mb-2 text-center
                    transition duration-400 text-neutral-200 font-medium hover:text-amber-500
                    cursor-pointer border-2 border-leetcode-black rounded-lg'>
                        <div>
                            <img
                                alt={post.title}
                                className='thumb rounded-t-lg opacity-50 transition group-hover:opacity-100'
                                src={post.featuredImage.url}
                            />
                        </div>
                        <div className="bg-code-black rounded-b-lg p-2">
                            <a className="text-sm font-bold">
                                {post.title}
                            </a>
                            <p className='text-xs font-normal text-neutral-400'>
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </p>
                        </div>
                    </div> */}

                    {/* 
                    <div className='grid grid-cols-2'>
                        <div>
                            <img
                                    alt={post.title}
                                    className='thumb rounded-l-lg opacity-50 transition group-hover:opacity-100'
                                    src={post.featuredImage.url}
                            />
                        </div>
                        <div className='bg-code-black rounded-r-lg'>
                        <a className="text-sm font-bold">
                                {post.title}
                            </a>
                            <p className='text-xs font-normal text-neutral-400'>
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </p>
                        </div>
                    </div> */}

                    <div className='relative mb-2 cursor-pointer'>
                        <span class="absolute top-0 left-0 rounded-lg bg-gradient-to-b opacity-60 from-gray-400 via-gray-700-to-black h-full w-full"></span>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white/5 px-3 py-1 rounded-lg'>
                            <a className="drop-shadow-lg font-semibold text-white">
                                {post.title}
                            </a>
                            <p className='font-semibold drop-shadow-lg text-xs text-neutral-200'>
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </p>
                        </div>
                        <img
                            alt={post.title}
                            className='thumb rounded-lg  transition group-hover:opacity-100'
                            src={post.featuredImage.url}
                        />


                    </div>
                </Link>

            ))}

        </div>);
};

export default PostWidget;
