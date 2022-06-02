import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../../services';

const PostWidget = ({ categories, slug }) => {

    const [relatedOrRecentPosts, setRelatedOrRecentPosts] = useState([]);
    const [title, setTitle] = useState();

    useEffect(() => {
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
                        setTitle("Recent Posts")
                    });
                }
            });
        } else {
            getRecentPosts().then((result) => {
                setRelatedOrRecentPosts(result);
                setTitle("Recent Posts")
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
                    <div className='group relative mb-2 cursor-pointer'>
                        <span className="absolute top-0 left-0 rounded bg-gradient-to-b opacity-70 from-neutral-500 via-neutral-700 to-neutral-800 h-full w-full"></span>
                        <span className='absolute top-0 right-0 h-6 w-6 bg-amber-500 rounded-bl-lg rounded-tr-lg drop-shadow-lg transition duration-400 opacity-0 group-hover:opacity-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-4 w-4 m-1"
                                height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="11,6 17,12 11,18"></polyline>
                            </svg>
                        </span>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full rounded-lg'>
                            <div className='px-3'>
                                <a className="drop-shadow-lg text-sm font-semibold text-white">
                                    {post.title}
                                </a>
                                <p className='font-semibold drop-shadow-lg text-xs text-neutral-200'>
                                    {moment(post.createdAt).format('MMM DD, YYYY')}
                                </p>
                            </div>

                        </div>
                        <img
                            alt={post.title}
                            className='thumb rounded transition group-hover:opacity-100'
                            src={post.featuredImage.url}
                        />


                    </div>
                </Link>

            ))}

        </div>);
};

export default PostWidget;
