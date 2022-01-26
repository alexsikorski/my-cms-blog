import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'

const posts = [
  { title: 'Completing LeetCode easy problem #1234', brief: 'Solution includes usage of arrays.' },
  { title: 'Writing this blog!', brief: 'Learn React with Tailwind.' }
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 text-white'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relatve top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}