import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    return (
        <div className='bg-lighter-washed-black shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-white text-xl mb-4 font-semibold border-b pb-4 border-white/5'>
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post) => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='w-16 flex-none'>
                        <img
                            alt={post.title} height='60px' width='60px'
                            className='rounded-md align-middle shadow-md'
                            // className="p-1 border-l-4 bg-neutral-100 text-neutral-600 mb-4 rounded-md">
                            src={post.featuredImage.url}
                        />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='font-normal text-neutral-400'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <span className='transition duration-400 text-neutral-200 font-medium hover:text-amber-500'>
                            <Link href={`/post/${post.slug}`} key={post.title}>
                                {post.title}
                            </Link>
                        </span>
                    </div>
                </div>
            ))}
        </div>);
};

export default PostWidget;
