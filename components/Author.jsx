import React from 'react';
import Image from 'next/image';


const Author = ({ author }) => {
  return <div className='flex grid grid-cols-5 text-left mb-4 p-6 relative rounded-lg bg-white/[.045]'>
    <div className='m-auto '>
      <img
        alt={author.name}
        unoptimized
        height='100px'
        width='100px'
        className=' rounded-full shadow-lg'
        src={author.photo.url}
      />
    </div>
    <div className='col-span-4 my-4 ml-4'>
    <h3 className='text-white  text-xl font-bold'>{author.name}</h3>
    <p className='text-white text-lg'>{author.bio}</p>
    </div>

  </div>;
};

export default Author;
