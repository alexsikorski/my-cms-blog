const categoriesHeaderWidget = () => {
    return (<>
                <button className='float-right ml-2 lg:ml-4 text-white lg:invisible md:visible sm:visible
                 inline-block bg-amber-500 rounded-lg text-white cursor-pointer drop-shadow w-10 mt-2 text-center p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-current h-4 w-4'
                viewBox="0 0 20 20" stroke='white'>
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </button>
    </>)

}

export default categoriesHeaderWidget;