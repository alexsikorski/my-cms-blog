import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const AdjacentPostCard = ({ post, position }) => (
    <>
        <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-52"
            style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
        <div
            className="absolute rounded-lg bg-center bg-gradient-to-b opacity-70 from-neutral-500 via-neutral-700 to-neutral-800 w-full h-52" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
            <p className="text-white text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <p className="text-white text-shadow font-semibold text-2xl text-center">{post.title}</p>
        </div>
        <Link key={`${position}-${post.slug}`} href={`/post/${post.slug}`}><span className="z-10 cursor-pointer absolute w-full h-full" /></Link>
        {position === 'LEFT' && (
            <div className="absolute arrow-btn bottom-5 cursor-pointer right-4">
                <button className="bg-amber-500 py-2 px-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" className="text-white h-4 w-5 w-full"
                        height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="15,6 9,12 15,18"></polyline>
                    </svg>
                </button>

            </div>
        )}
        {position === 'RIGHT' && (
            <div className="absolute arrow-btn bottom-5 cursor-pointer right-4">
                <button className="bg-amber-500 py-2 px-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" className="text-white h-4 w-5 w-full"
                        height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="9,6 15,12 9,18"></polyline>
                    </svg>
                </button>

            </div>
        )}
    </>
);


export default AdjacentPostCard;