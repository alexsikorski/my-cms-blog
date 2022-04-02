import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import Link from 'next/link'

function returnBorderedItem(categories, category, itemCount) {
    return categories.length - 1 == itemCount ?

        <span className='hover:text-amber-500 text-white block py-2 text-sm cursor-pointer
                                        transition duration-400'>
            {category.name}
        </span>
        :

        <span className=' border-b border-white/5 hover:text-amber-500 text-white block  py-2 text-sm cursor-pointer
                                        transition duration-400'>
            {category.name}
        </span>

}

const CategoriesHeaderWidget = ({categories}) => {
    const itemCount = 0;
    return (
        <Menu as="span" className="ml-2 md:ml-1 mt-2 float-right lg:float-left lg:invisible relative">
            <div>
                <Menu.Button
                    className="inline-block justify-center w-full rounded-lg drop-shadow px-2 py-1 bg-amber-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-current h-4 w-4'
                         viewBox="0 0 20 20" stroke='white'>
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
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
                        className="origin-top-right absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-lighter-washed-black z-10 font-medium p-4 text-left">
                        <div className="py-1">
                            {categories.map((category) => (
                                <Menu.Item key={`dropdown-${category.slug}`}>
                                    <Link href={`/category/${category.slug}`}>
                                        {returnBorderedItem(categories, category, itemCount++)}
                                    </Link>
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