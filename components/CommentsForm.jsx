import React, { useRef, useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value = window.localStorage.getItem('email');
    }, [])

    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if (!comment || !name || !email) {
            setError(true);
            return;
        }

        const commentObj = { name, email, comment, slug };

        if (storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            })
    }

    return <div className='bg-lighter-washed-black shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-white text-xl mb-8 font-semibold border-b pb-4 border-white/5'>
            Leave a comment
        </h3>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            <textarea
                ref={commentEl}
                className='p-4 outline-none w-full rounded-lg text-neutral-200 font-medium focus:ring-2 focus:ring-leetcode-black bg-code-black placeholder-leetcode-black'
                placeholder='Comment'
                name='comment'
            />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
            <input
                type='text'
                ref={nameEl}
                className='py-2 px-4 outline-none w-full rounded-lg text-neutral-200 font-medium focus:ring-2 focus:ring-leetcode-black bg-code-black placeholder-leetcode-black'
                placeholder='Name'
                name='name'
            />
            <input
                type='text'
                ref={emailEl}
                className='py-2 px-4 outline-none w-full rounded-lg text-neutral-200 font-medium focus:ring-2 focus:ring-leetcode-black bg-code-black placeholder-leetcode-black'
                placeholder='Email'
                name='email'
            />
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            <div>
                <input
                    ref={storeDataEl}
                    type='checkbox'
                    id='storeData'
                    value='true'
                />
                <label className='font-normal text-neutral-400 cursor-pointer ml-2' htmlFor='storeData'>
                    Save my email and name for next time.
                </label>
            </div>
        </div>
        {error && <p className='text-xs text-red-500'>All fields are required!</p>}
        <div className='mt-8'>
            <button
                className='transition duration-400 ease transform hover:-translate-y-1 inline-block bg-amber-500 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
                type='button'
                onClick={handleCommentSubmission}>
                Post Comment
            </button>
            {showSuccessMessage && <span className='float-right font-semibold px-8 py-3 bg-green-500 text-white rounded-full'>Comment Submitted for review!</span>}
        </div>
    </div>;
}

export default CommentsForm;
