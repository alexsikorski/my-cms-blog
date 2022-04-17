import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const AdjacentPostCard = ({post, position}) => (
    <>
        <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-52"
             style={{backgroundImage: `url('${post.featuredImage.url}')`}}/>
        <div
            className="absolute rounded-lg bg-center bg-gradient-to-b opacity-60 from-gray-400 via-gray-700 to-black w-full h-52"/>
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
            <p className="text-white text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <p className="text-white text-shadow font-semibold text-2xl text-center">{post.title}</p>
        </div>
        <Link key={`${position}-${post.slug}`} href={`/post/${post.slug}`}><span className="z-10 cursor-pointer absolute w-full h-full"/></Link>
        {position === 'LEFT' && (
            <div className="absolute arrow-btn bottom-5 cursor-pointer right-4">
                <button className="bg-amber-500 py-2 px-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 text-white w-full" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                              d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </button>

            </div>
        )}
        {position === 'RIGHT' && (
            <div className="absolute arrow-btn bottom-5 cursor-pointer right-4">
                <button className="bg-amber-500 py-2 px-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 text-white w-full" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </button>

            </div>
        )}
    </>
);


export default AdjacentPostCard;