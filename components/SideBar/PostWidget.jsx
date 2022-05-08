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
        <div className='bg-lighter-washed-black shadow-lg rounded-lg lg:p-8 p-4 mb-4'>
            <h3 className='text-white text-xl mb-2 font-semibold border-b pb-2 border-white/5'>
                {title}
            </h3>
            {relatedOrRecentPosts.map((post) => (
                <Link href={`/post/${post.slug}`} key={post.title}>
                    <div key={post.title} className='group w-full mb-2 text-center
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
                    </div>
                </Link>

            ))}

        </div>);
};

export default PostWidget;
