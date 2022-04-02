import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Link from 'next/link';
import {getRecentPosts, getSimilarPosts} from '../../services';

const PostWidget = ({categories, slug}) => {
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

        <div className='bg-lighter-washed-black shadow-lg rounded-lg p-8 mb-4'>
            <h3 className='text-white text-xl mb-2 font-semibold border-b pb-2 border-white/5'>
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post) => (
                <Link href={`/post/${post.slug}`} key={post.title}>
                    <div key={post.title} className='flex items-center w-full mb-2
                    transition duration-400 text-neutral-200 font-medium hover:text-amber-500
                    cursor-pointer'>
                        <div className='flex-none'>
                            <img
                                alt={post.title}
                                className='circular-landscape'
                                src={post.featuredImage.url}
                            />
                        </div>
                        <div className='flex-grow ml-4'>
                            <p className='text-xs font-normal text-neutral-400'>
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </p>
                            <span>
                                {post.title}
                            </span>
                        </div>
                    </div>
                </Link>

            ))}
        </div>);
};

export default PostWidget;
