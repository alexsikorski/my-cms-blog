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
                    <div key={post.title} className='w-full mb-2 text-center
                    transition duration-400 text-neutral-200 font-medium hover:text-amber-500
                    cursor-pointer border-2 border-leetcode-black rounded-lg'>
                        <div>
                            <img
                                alt={post.title}
                                className='thumb rounded-t-lg'
                                src={post.featuredImage.url}
                            />
                        </div>
                        <div className="bg-code-black rounded-b-lg p-2">
                            <span className="text-sm">
                                {post.title}
                            </span>
                            <p className='text-xs font-normal text-neutral-400'>
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </p>
                        </div>
                    </div>
                </Link>

            ))}
        </div>);
};

export default PostWidget;
