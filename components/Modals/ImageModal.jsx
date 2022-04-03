import React, {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'


const ImageModal = ({obj, index}) => {
    const [open, setOpen] = useState(false)

    const closeButtonRef = useRef(null)

    return (<>
            <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
                onClick={() => setOpen(true)}
                className='h-full w-full shadow-lg rounded-lg mb-4 cursor-pointer'
            />
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={closeButtonRef}
                        onClose={setOpen}>
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
                            <Dialog.Overlay className="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity"/>
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
                                className="shadow-xl relative inline-block align-bottom rounded-lg text-left overflow-hidden transform transition-all sm:align-middle sm:max-w-7xl sm:w-full">
                                <div className="sm:flex sm:items-start">
                                    <button
                                        type="button"
                                        className="absolute text-white/10 bg-amber-500/10 rounded-lg px-3 right-0 mr-5 mt-5 transition duration-200 hover:text-white hover:bg-amber-500 focus:outline-none"
                                        onClick={() => setOpen(false)}
                                        ref={closeButtonRef}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-5" viewBox="0 0 20 20"
                                             fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </button>
                                    <img
                                        key={index}
                                        alt={obj.title}
                                        height={obj.height}
                                        width={obj.width}
                                        src={obj.src}
                                        onClick={() => setOpen(true)}
                                        className='h-full w-full shadow-lg rounded-lg'
                                    />
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default ImageModal;