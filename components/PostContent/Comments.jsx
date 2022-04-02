import React, {useEffect, useState} from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import {getComments} from '../../services';

const Comments = ({slug}) => {
    const [comments, setComments] = useState([]);

    function returnComment(comment, index) {
        console.log(comments.length)
        return index === comments.length - 1 ? <div key={index} className="pb-4">
                <p>
                    <span className="text-amber-500 font-bold">{comment.name}</span>
                    <span className=''>
                  <span className='text-xs font-normal text-neutral-400 '> at </span>
                  <span
                      className='text-sm font-normal text-neutral-400 '> {moment(comment.createdAt).format('hh:mm')}</span>
                  <span className='text-xs font-normal text-neutral-400 '> on </span>
                  <span
                      className='text-sm font-normal text-neutral-400 '> {moment(comment.createdAt).format('MMM DD, YYYY')}</span>
                </span>
                </p>
                <p className="whitespace-pre-line text-neutral-200 w-full">{parse(comment.comment)}</p>
            </div> :
            <div key={index} className="border-b pb-4 border-white/5 mb-2 pb-4">
                <p>
                    <span className="text-amber-500 font-bold">{comment.name}</span>
                    <span className=''>
                  <span className='text-xs font-normal text-neutral-400 '> at </span>
                  <span
                      className='text-sm font-normal text-neutral-400 '> {moment(comment.createdAt).format('hh:mm')}</span>
                  <span className='text-xs font-normal text-neutral-400 '> on </span>
                  <span
                      className='text-sm font-normal text-neutral-400 '> {moment(comment.createdAt).format('MMM DD, YYYY')}</span>
                </span>
                </p>
                <p className="whitespace-pre-line text-neutral-200 w-full">{parse(comment.comment)}</p>
            </div>

    }

    function pluralOrSingular(length) {
        if (length === 1) {
            return 'Comment';
        }
        return 'Comments';
    }

    useEffect(() => {
        getComments(slug).then((result) => {
            setComments(result);
        });
    }, []);

    return (<>
        {comments.length > 0 && (<div className="bg-lighter-washed-black shadow-lg rounded-lg p-8 mb-4 lg:mb-0">
            <h3 className="text-white text-xl mb-2 font-semibold border-b pb-2 border-white/5">
                {comments.length}
                {' '}
                {pluralOrSingular(comments.length)}
            </h3>
            {comments.map((comment, index) => (returnComment(comment, index)))}
        </div>)}
    </>);
};
{

}
export default Comments;