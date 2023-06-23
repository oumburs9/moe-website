export const Card = ({ data }) => {


    const colors = ['#F8BE15', '#D1503E', '#3C8FC2', '#1F48A2'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const { videoSrc = '', views = '', link = '', title = '', category = '', date = '' } = data;

    let viewsCount = views;
    if (views > 1000) {
        const viewsCountK = Math.ceil(views / 1000);
        viewsCount = viewsCountK + 'K';
    }

    const isCateg = false

    return (
        <>
            <div className="group flex gap-2">
                <a
                    href={link}
                    title=""
                    target="_blank"
                    className="relative block aspect-w-4 aspect-h-3 overflow-hidden group-hover:drop-shadow-md rounded"
                >
                    <video className="object-cover h-40 w-52 group-hover:scale-125 transition-transform delay-0">
                        <source src={videoSrc}/>
                    </video>
                    {
                        category !== '' ? (
                            <span
                                className={`absolute bottom-3 top-auto left-3 inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-xl text-white bg-[${randomColor}]`}
                            >
                                {category}
                            </span>

                        ) : ''
                    }
                </a>

                <div className="md:w-40">
                    <p className="mt-6 text-lg font-semibold">
                        <a
                            href="#"
                            title=""
                            className="text-dark text-sm transition-colors group-hover:text-blue line-clamp-2 pb-1 border-b-2 border-light/40 border-dashed"
                        >
                            {title || 'No Title/Description'}
                        </a>
                    </p>
                    <div className="flex justify-between text-gray-500">
                        <span className="block text-sm tracking-widest uppercase">
                            {date}
                        </span>
                        <span className="flex items-center text-sm gap-x-1">
                            <i className="flex fi fi-rr-eye"></i>
                            {viewsCount}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;