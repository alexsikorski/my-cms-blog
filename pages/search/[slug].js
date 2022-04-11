import React from 'react';
import {useRouter} from 'next/router';

import {getSearchedPosts} from '../../services';
import {Categories, PostCard, PostWidget} from '../../components';
import Link from 'next/link';


const SearchPost = ({posts}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <></>
    }

    return posts.length === 0 ?
        <div className='container mx-auto lg:px-24 px-5 mb-4'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-4'>
                <div className='lg:col-span-8 col-span-1'>
                    <div className="col-span-1 lg:col-span-8 bg-lighter-washed-black rounded-md p-8 text-center mb-4">
                        <div className="text-neutral-400 border-2 border-leetcode-black bg-code-black rounded-lg p-4">
                            <div className="mb-2 items-center">
                                <span className="text-white text-center text-2xl font-semibold">0 Results!</span>
                            </div>
                            <div className="mb-4">
                                <span>Sorry, couldn't find any results... Try again or return home.</span>
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
        :
        <div className='container mx-auto lg:px-24 px-5 mb-4'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-4'>
                <div className='lg:col-span-8 col-span-1'>
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post.node}/>
                    ))}
                </div>
                <div className='lg:col-span-4 col-span-1'>
                    <div className='lg:sticky relative lg:top-4'>
                        <PostWidget/>
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
};
export default SearchPost;

export async function getStaticProps({params}) {
    const titleContains = params.slug.replace(/-/g, ' ');

    const posts = await getSearchedPosts(titleContains);

    return {
        props: {posts},
    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}