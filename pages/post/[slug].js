import React from 'react';
import {useRouter} from 'next/router'
import {getPostDetails, getPosts} from '../../services';
import {AdjacentPosts, Author, Categories, Comments, CommentsForm, PostDetail, PostWidget} from '../../components'

const PostDetails = ({post}) => {
    const router = useRouter();
    if (router.isFallback) {
        return <></>
    }
    return (
        <>
            <div className='container mx-auto lg:px-24 px-5 mb-4'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-4'>
                    <div className='col-span-1 lg:col-span-8'>
                        <PostDetail post={post}/>
                        <Author author={post.author}/>
                        <AdjacentPosts slug={post.slug} createdAt={post.createdAt}/>
                        <CommentsForm slug={post.slug}/>
                        <Comments slug={post.slug}/>
                    </div>
                    <div className='col-span-1 lg:col-span-4 mb-4'>
                        <div className='relative lg:sticky '>
                            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                            <Categories/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PostDetails;

export async function getStaticProps({params}) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data,
        },
    };
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({node: {slug}}) => ({params: {slug}})),
        fallback: true,
    };
}
