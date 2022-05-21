import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FeaturedPostCard } from '../index';
import { getFeaturedPosts } from '../../services';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

const FeaturedPosts = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getFeaturedPosts().then((result) => {
            setFeaturedPosts(result);
            setDataLoaded(true);
        });
    }, []);

    const ArrowLeft = (arrowProps) => {
        const { carouselState, children, ...restArrowProps } = arrowProps;
        return (
            <div {...restArrowProps}
                className='select-none absolute left-0 cursor-pointer transition hover:bg-amber-500 text-white/50 hover:text-white py-3 px-4 rounded-r-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" className="h-6 w-5 w-full"
                    height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="12,6 6,12 12,18"></polyline>
                </svg>
                {children}
            </div>
        );
    };

    const ArrowRight = (arrowProps) => {
        const { carouselState, children, ...restArrowProps } = arrowProps;
        return (
            <div {...restArrowProps}
                className='select-none absolute right-0 cursor-pointer transition hover:bg-amber-500 text-white/50 hover:text-white py-3 px-4 rounded-l-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" className="h-6 w-5 w-full"
                    height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="12,6 18,12 12,18"></polyline>
                </svg>
                {children}
            </div>
        );
    };

    return (
        <div className='shadow-lg rounded-lg mb-4'>
            <Carousel infinite customLeftArrow={<ArrowLeft />} customRightArrow={<ArrowRight />} responsive={responsive}
                itemClass="px-2">
                {dataLoaded && featuredPosts.map((post, index) => (
                    <FeaturedPostCard key={index} post={post} />
                ))}
            </Carousel>
        </div>
    );
};

export default FeaturedPosts;