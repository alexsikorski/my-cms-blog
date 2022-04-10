import React from 'react';
import moment from 'moment';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {ImageModel} from "../index";
import CodeBlockStyle from "./CodeBlockStyle";

function copyToClipBoard(id) {
    const element = document.getElementById(id);
    // substring because we ignore "Copy"
    navigator.clipboard.writeText(element.textContent.substring(4, element.textContent.length));
}

const PostContent = ({post}) => {
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
                modifiedText = (<code key={index}
                                      className='pl-1 pr-1 border-2 break-all border-2 border-leetcode-black bg-code-black text-neutral-200 mb-4 rounded-md'>{text}</code>);
            }
        }

        switch (type) {
            //TODO: implement bullet-list and ordered number list
            // case 'bulleted-list':
            //   return <div className='mb-4' key={index}>
            //     {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
            //   </div>
            case 'code-block':
                return <code id={index} key={index}
                             className='text-sm relative multiline-text block overflow-x-auto p-2 border-2 border-leetcode-black bg-code-black text-neutral-200 mb-4 rounded-md'>
                    <span className='absolute right-2 transition duration-400 transform hover:-translate-x-1 hover:bg-amber-500 hover:text-white inline-block text-leetcode-black
                                    text-lg font-medium rounded-lg text-white py-1 px-3 cursor-pointer select-none'
                          onClick={() => copyToClipBoard(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                           <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                           <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                        </svg>

                    </span>
                    <SyntaxHighlighter language={post.codeBlockType} style={CodeBlockStyle}>{text}</SyntaxHighlighter>
                </code>
            case 'block-quote':
                return <blockquote key={index}
                                   className="p-1 border-l-4 pl-2 border-leetcode-black bg-code-black font-normal text-neutral-400 mb-4 rounded-md">{modifiedText.map((item, i) =>
                    <React.Fragment key={i}>{item}</React.Fragment>)}</blockquote>
            case 'heading-three':
                return <h3 key={index}
                           className="text-xl text-amber-500 font-semibold mb-4">{modifiedText.map((item, i) =>
                    <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-4">{modifiedText.map((item, i) => <React.Fragment
                    key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index}
                           className="text-md text-amber-500 font-semibold mb-4">{modifiedText.map((item, i) =>
                    <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (<ImageModel key={index} index={index} obj={obj}/>);
            default:
                return modifiedText;
        }
    };

    return <div className='bg-lighter-washed-black shadow-lg rounded-lg'>
        <div className='relative overflow-hidden shadow-md mb-2'>
            <img
                src={post.featuredImage.url}
                alt={post.title}
                className='object-top h-full w-full rounded-t-lg'
            />
        </div>
        <div className='text-neutral-200 lg:p-8 p-4 mb-4'>
            <div className='px-4 lg:px-0'>
                <div className='grid grid-cols-2 mb-4 w-full items-center'>
                    <div className='flex w-full'>
                        <img
                            alt={post.author.name}
                            height='30px'
                            width='30px'
                            className='rounded-full'
                            src={post.author.photo.url}
                        />
                        <p className='font-normal text-neutral-400 ml-2 text-lg'>
                            {post.author.name}</p>
                    </div>
                    <div className='font-normal text-neutral-400 text-right'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 inline mr-2 text-neutral-400'
                             fill='none'
                             viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/>
                        </svg>
                        <span>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </span>
                    </div>

                </div>

                <h1 className='mb-4 text-3xl text-amber-500 font-semibold'>{post.title}</h1>

                {post.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));

                    return getContentFragment(index, children, typeObj, typeObj.type);
                })}
            </div>

        </div>
    </div>;
};

export default PostContent;