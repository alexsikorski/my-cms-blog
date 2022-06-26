import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

function placeNewLabel(cardIndex) {
    if (cardIndex == 0) return <div className='absolute right-0 top-0 h-16 w-16 z-10'>
        <p className='absolute transform rotate-45 bg-amber-500 text-center shadow-sm text-white text-xs font-semibold py-1 left-[-50px] top-[10px] w-[180px]'>NEW</p>
    </div>
}

const FeaturedPostCard = ({ post, cardIndex }) => (
    <div className="relative h-40 md:h-60 overflow-hidden">
        <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-40 md:h-60"
            style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
        <div
            className="absolute rounded-lg bg-center bg-gradient-to-b opacity-70 from-neutral-500 via-neutral-700 to-neutral-900 w-full h-40 md:h-60" />
        {placeNewLabel(cardIndex)}
        <div className="flex flex-col rounded-lg p-2 items-center justify-center absolute w-full h-full  ">
            <p className="text-neutral-200 mb-2 drop-shadow-lg font-semibold text-xs bg-white/5 px-1 py-1 rounded-lg">
                {moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <p className="text-white mb-4 drop-shadow-lg font-semibold text-md text-center bg-white/5 px-1 py-1 rounded-lg">
                {post.title}</p>
            <div className="flex items-center absolute md:bottom-4 bottom-2 bg-white/5 rounded-lg px-1 py-1 justify-center ">
                <Image
                    unoptimized
                    alt={post.author.name}
                    height="20px"
                    width="20px"
                    className="align-middle drop-shadow-lg rounded-full"
                    src={post.author.photo.url}
                />
                <p className="inline align-middle text-sm text-neutral-200 drop-shadow-lg ml-1 font-medium">{post.author.name}</p>
            </div>
        </div>
        <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
);

export default FeaturedPostCard;