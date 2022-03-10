import { Categories, PostWidget } from '../components';
import Link from 'next/link';

function Custom404() {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='lg:col-span-8 col-span-1'>
                    <div className="col-span-1 lg:col-span-8 bg-lighter-washed-black rounded-md p-8 text-center">
                        <div className='mb-8 text-white'>
                            <span className="text-center text-3xl font-semibold">404</span>
                            <span className="text-center text-xl"> Not found!</span>
                        </div>
                        <Link href='/'>
                            <a className="transition duration-500 transform hover:-translate-y-1 inline-block bg-amber-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                                Return Home</a>
                        </Link>
                    </div>
                </div>
                <div className='lg:col-span-4 col-span-1'>
                    <div className='lg:sticky relative top-8'>
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Custom404;
