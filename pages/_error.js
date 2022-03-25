import { Categories, PostWidget } from '../components';
import Link from 'next/link';

function Error({ statusCode }) {
    return (
        <div className='container mx-auto px-24 mb-4'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-12'>
                <div className='lg:col-span-8 col-span-1'>
                    <div className="col-span-1 lg:col-span-8 bg-lighter-washed-black rounded-md p-8 text-center">
                        <div className='mb-4 text-white'>
                            <span className="text-center text-3xl font-semibold">{statusCode}</span>
                            <span className="text-center text-xl"> An error occured!</span>
                        </div>
                        <Link href='/'>
                            <a className="transition duration-400 transform hover:-translate-y-1 inline-block bg-amber-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                                Return Home</a>
                        </Link>
                    </div>
                </div>
                <div className='lg:col-span-4 col-span-1'>
                    <div className='lg:sticky relative '>
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
