import Head from 'next/head';
import {Categories, FeaturedPosts, PostCard, PostWidget} from '../components';
import {getPosts} from '../services';

export default function Home({posts}) {

    return <div className='container mx-auto lg:px-24 px-5 px-5 mb-4'>
        <Head>
            <title>Alex Sikorski</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <FeaturedPosts/>
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
}

export async function getStaticProps() {
    const posts = (await getPosts()) || [];

    return {
        props: {posts}
    }
}
