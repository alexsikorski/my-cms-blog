import React from 'react';


const Author = ({author}) => {
    return <div className='flex items-center justify-center mb-4 p-8 rounded-lg bg-white/[.045]'>
        <div>
            <img
                alt={author.name}
                height='100px'
                width='100px'
                className='rounded-full shadow-lg align-middle'
                src={author.photo.url}
            />
        </div>
        <div className="ml-4">
            <h3 className='text-white text-xl font-bold'>{author.name}</h3>
            <p className='text-white '>{author.bio}</p>
        </div>
    </div>;
};

export default Author;
