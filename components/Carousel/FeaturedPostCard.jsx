import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
    <div className="relative h-40 md:h-60">
        <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-40 md:h-60"
            style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
        <div
            className="absolute rounded-lg bg-center bg-gradient-to-b opacity-60 from-gray-400 via-gray-700 to-black w-full h-40 md:h-60" />
        <div className="flex flex-col rounded-lg p-2 items-center justify-center absolute w-full h-full  ">
            <p className="text-white mb-2 text-shadow font-semibold text-xs bg-white/5 px-3 py-1 rounded-lg">
                {moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <p className="text-white mb-4 text-shadow font-semibold text-lg text-center bg-white/5 px-3 py-1 rounded-lg">
                {post.title}</p>
            <div className="flex items-center absolute md:bottom-4 bottom-2 bg-white/5 rounded-lg px-3 py-1 justify-center ">
                <Image
                    unoptimized
                    alt={post.author.name}
                    height="20px"
                    width="20px"
                    className="align-middle drop-shadow-lg rounded-full"
                    src={post.author.photo.url}
                />
                <p className="inline align-middle text-sm text-neutral-200 text-shadow ml-1 font-medium">{post.author.name}</p>
            </div>
        </div>
        <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
);

export default FeaturedPostCard;