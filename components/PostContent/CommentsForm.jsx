import React, { Fragment, useEffect, useRef, useState } from 'react';
import { submitComment } from '../../services';
import { Dialog, Transition } from "@headlessui/react";

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [localStorage, setLocalStorage] = useState(null);
    const closeButtonRef = useRef(null)
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

        // check if fields are empty
        if (!comment || !name || !email) {
            setError(true);
            setErrorMessage("All fields are required!")
            return;
        }

        // check if email matches format
        if (!email.toLowerCase().match(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        )) {
            setError(true);
            setErrorMessage("Email is not valid!")
            return;
        }

        setModalOpen(true);

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
                commentEl.current.value = "";
            })
    }

    const returnModal = () => {
        return <Transition.Root show={modalOpen} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={closeButtonRef}
                onClose={setModalOpen}>
                <div
                    className="flex items-center justify-center min-h-screen text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div
                            className="p-6 bg-code-black border-2 border-leetcode-black relative inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="">
                                <div className="sm:flex sm:items-start">
                                    <div className="text-center ">
                                        <Dialog.Title as="h3"
                                            className="text-lg leading-6 font-medium text-white">
                                            Comment sent for approval!
                                        </Dialog.Title>
                                        <div>
                                            <p className="text-sm text-neutral-500 mt-2 ">
                                                The comment has been sent to the admin for approval. Once it has been
                                                reviewed and accepted, it will appear in the comments section.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="bg-amber-500 text-white py-2 px-5 font-medium rounded-lg mt-4"
                                    onClick={() => setModalOpen(false)}
                                    ref={closeButtonRef}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    }

    return <div className='relative bg-lighter-washed-black shadow-lg rounded-lg lg:p-8 p-4 mb-4'>
        <h3 className='text-white text-xl mb-2 font-semibold border-b pb-2 border-white/5'>
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
        {returnModal()}
        <div className='mt-4 lg:mb-0 w-full h-full lg:w-auto flex'>
            <div className='flex-auto'>
                <div>
                    <input
                        ref={storeDataEl}
                        type='checkbox'
                        id='storeData'
                        value='true'
                    />
                    <label className='font-normal text-neutral-400 cursor-pointer ml-2 text-xs' htmlFor='storeData'>
                        Save my details.
                    </label>
                    {error && <p className='text-xs text-red-500'>{errorMessage}</p>}
                </div>
            </div>
            <button
                className='transition duration-400 ease transform hover:-translate-x-1 bg-amber-500 text-lg rounded-lg text-white px-8 py-1 cursor-pointer font-medium'
                type='button'
                onClick={handleCommentSubmission}>
                Post
            </button>
        </div>


    </div>;
}

export default CommentsForm;
