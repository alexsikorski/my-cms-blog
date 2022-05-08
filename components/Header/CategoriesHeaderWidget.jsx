import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import Link from 'next/link'

function returnBorderedItem(categories, category, itemCount) {
    return categories.length - 1 === itemCount ?

        <span className='flex text-center items-center hover:text-amber-500 text-white block py-2
        text-sm cursor-pointer transition duration-400'>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" className="mt-0.5 mr-0.5 text-leetcode-black"
                 height="13" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                 strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <polyline points="9 6 15 12 9 18"></polyline>
            </svg>
            {category.name}
        </span>
        :
        <span className='flex text-center items-center border-b border-white/5 hover:text-amber-500
        text-white block  py-2 text-sm cursor-pointer transition duration-400'>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" className="mt-0.5 mr-0.5 text-leetcode-black"
                 height="13" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                 strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <polyline points="9 6 15 12 9 18"></polyline>
            </svg>
            {category.name}
        </span>

}

const CategoriesHeaderWidget = ({categories}) => {
    let itemCount = 0;
    return (
        <Menu className="ml-2 md:ml-1 mt-2 float-right lg:float-left lg:invisible relative">
            <div>
                <Menu.Button
                    className="inline-block text-white hover-hover:hover:text-amber-500 transition duration-400
                    focus:outline-none focus:ring-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 30 30">
                        <path
                            d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/>
                    </svg>
                </Menu.Button>
                <Transition as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">

                    <Menu.Items
                        className="w-44 origin-top-right absolute right-0 mt-2 rounded-lg shadow-lg bg-lighter-washed-black z-10 font-medium p-4 text-left
                        focus:outline-none focus:ring-0">
                        <div className="py-1">
                            {categories.map((category) => (
                                <Menu.Item key={`dropdown-${category.slug}`}>
                                    <a>
                                        <Link href={`/category/${category.slug}`}>
                                            {returnBorderedItem(categories, category, itemCount++)}
                                        </Link>
                                    </a>
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </div>
        </Menu>
    )

}

export default CategoriesHeaderWidget;