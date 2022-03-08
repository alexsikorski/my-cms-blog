import React from 'react';
import moment from 'moment';
import { textContent } from 'domutils';

function copyToClipBoard(id) {
  const element = document.getElementById(id);
  // substring because we ignore "Copy"
  navigator.clipboard.writeText(element.textContent.substring(4, element.textContent.length));
}

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
      if (obj.code) {
        modifiedText = (<code key={index} className='pl-1 pr-1 border-2 break-all border-2 border-leetcode-black bg-code-black text-neutral-200 mb-4 rounded-md'>{text}</code>);
      }
    }

    switch (type) {
      //TODO: implement bullet-list and ordered number list
      // case 'bulleted-list':
      //   return <div className='mb-4' key={index}>
      //     {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
      //   </div>
      case 'code-block':
        return <code id={index} key={index} className='multiline-text block overflow-x-auto p-2 border-2 border-leetcode-black bg-code-black text-neutral-200 mb-4 rounded-md'>
          <span className='float-right transition duration-500 transform hover:-translate-x-1 hover:bg-amber-500 hover:text-white inline-block bg-neutral-500/25 text-white/50
                  text-lg font-medium rounded-full text-white px-5 cursor-pointer select-none
                  '
            onClick={() => copyToClipBoard(index)}
          >Copy
          </span>
          {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
        </code>
      case 'block-quote':
        return <blockquote key={index} className="p-1 border-l-4 pl-2 border-leetcode-black bg-code-black font-normal text-neutral-400 mb-4 rounded-md">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</blockquote>
      case 'heading-three':
        return <h3 key={index} className="text-xl text-amber-500 font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md text-amber-500 font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className='h-full w-full shadow-lg rounded-lg lg:rounded-lg'
          />
        );
      default:
        return modifiedText;
    }
  };

  return <div className='text-neutral-200 bg-lighter-washed-black shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
    <div className='relative overflow-hidden shadow-md mb-6'>
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className='object-top h-full w-full rounded-t-lg'
      />
    </div>
    <div className='px-4 lg:px-0'>
      <div className='flex items-center mb-8 w-full'>
        <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img
            alt={post.author.name}
            height='30px'
            width='30px'
            className='align-middle rounded-full'
            src={post.author.photo.url}
          />
          <p className='inline align-middle font-normal text-neutral-400 ml-2 text-lg'>
            {post.author.name}</p>
        </div>
        <div className='font-normal text-neutral-400'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 inline mr-2 text-amber-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
          </svg>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>

      <h1 className='mb-8 text-3xl text-amber-500 font-semibold'>{post.title}</h1>

      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));

        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </div>
  </div>;
};

export default PostDetail;