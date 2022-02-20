import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const SearchPost = ({ posts }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return posts.length == 0 ?
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
                <div className="col-span-1 lg:col-span-8 bg-white rounded-md p-8 text-center">
                    <h1 className="text-center mb-8  text-3xl font-semibold">
                        No results! try again?</h1>
                    <a className="transition duration-500 transform hover:-translate-y-1 inline-block bg-amber-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer" href="/">
                        Return home.</a>
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
        :
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post.node} />
                    ))}
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
};
export default SearchPost;

export async function getStaticProps({ params }) {
    const posts = await getCategoryPost(params.slug);

    return {
        props: { posts },
    };
}

export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
}