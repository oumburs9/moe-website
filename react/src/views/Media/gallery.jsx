import Side from '../../components/side.component'

const imageData = [
    {
        id:'item-1',
        imageSrc:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        carousel:'active'
    },
    {
        id:'item-2',
        imageSrc:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    },
    {
        id:'item-3',
        imageSrc:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    },
    {
        id:'item-4',
        imageSrc:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    },
    {
        id:'item-5',
        imageSrc:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    }
]

const videoData = [
    {
        id:1,
        imageSrc:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        videoSrc:''
    },
    {
        id:2,
        imageSrc:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
        videoSrc:''
    },
    {
        id:3,
        imageSrc:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
        videoSrc:''
    },
    {
        id:4,
        imageSrc:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
        videoSrc:''
    },
    {
        id:5,
        imageSrc:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
        videoSrc:''
    }
]

function Gallery() {
    return(
        <>
            <nav>
                <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
                    <li className='flex gap-2'>
                        <a href="#">Home</a>
                        <span>{">"}</span>
                    </li>
                    <li>Gallery</li>
                </ol>
            </nav>
            {/* <div className='flex gap-3 p-8 text-[#156584]'>
                <button className='focus:underline'>IMAGES</button>
                <button className='focus:underline'>VIDEOS</button>
            </div> */}
            <div className="grid md:grid-cols-4 bg-white p-8 gap-5 text-[#156584] my-[.67em]">
                <div className="md:col-span-3 pr-4">
                    <div className="grid gap-4">
                        <div>
                            <div id="gallery" className="relative w-full" data-carousel="slide">
                                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                                    {imageData.map((item) => (
                                        <div id={item.id} className="duration-700 ease-in-out" data-carousel-item={item.carousel}>
                                            <img src={item.imageSrc} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                                        </div>
                                    ))}
                                    {/* <div className="duration-700 ease-in-out" data-carousel-item="">
                                        <img src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                                    </div>
                                    <div className="duration-700 ease-in-out" data-carousel-item="active">
                                        <img src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                                    </div>
                                    <div className="duration-700 ease-in-out" data-carousel-item="">
                                        <img src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                                    </div> */}
                                </div>
                                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                        <span class="sr-only">Previous</span>
                                    </span>
                                </button>
                                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                        <span class="sr-only">Next</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            {imageData.map((item) => (
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src={item.imageSrc} alt=""/>
                                </div>
                            ))}
                            {imageData.map((item) => (
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src={item.imageSrc} alt=""/>
                                </div>
                            ))}
                            {imageData.map((item) => (
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src={item.imageSrc} alt=""/>
                                </div>
                            ))}
                            {imageData.map((item) => (
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src={item.imageSrc} alt=""/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="md:col-span-1 pl-4">
                    <Side/>
                </div>
            </div>
        </>
    )
}

export default Gallery