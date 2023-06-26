import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../views/Media/news";
import { data } from "../views/about/who-is-who"


const Side = ({ currentId }) => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    const minister = data.filter(d => d.id === 0 )[0]

    const articles = newsData.filter(data => data.id !== currentId)
    console.log(articles[0])
    const [profileData] = useState(0)

    return (
        <><div className="">
            <div className="text-center">
                <div className="h-[250px] w-full rounded-md overflow-hidden">
                    <img className="h-[400px] w-full object-cover" src={minister.image} alt="avator" />
                </div>
                <div className="text-center text-gray-500">
                    <span><strong>{minister.name}</strong></span><br />
                    <span><strong>{minister.position}</strong></span>
                </div>
                <Link to={'/about/who-is-who'}><strong>Read more</strong></Link>
            </div>
        </div>
            <div className="my-[3em]">
                <section className="twitterContainer">
                    <div className="twitter-embed">
                        <a className="twitter-timeline" data-height="600" href="https://twitter.com/fdremoe?ref_src=twsrc%5Etfw">
                            Tweets by MOE
                        </a>
                    </div>
                </section>
            </div>
            <div className="">
                <div className="flex text-[16px]">
                    <button className="border border-gray-300 rounded-t-md border-b-0 text-center py-2 px-4 ml-3 bg-[#21618c] text-white"><strong>ARTICLES</strong></button>
                    <button className="border border-gray-300 rounded-t-md border-b-0 text-center py-2 px-4 ml-3 hover:bg-[#21618c] hover:text-white"><strong>INITIATIVES</strong></button>
                </div>
                <div className="border border-gray-300 rounded-md p-4">
                    {articles.slice(0, 3).map(article =>
                        <div onClick={() => window.location.reload()} >
                            <Link to={`/media/news/${article.id}`}>
                                <div className="flex gap-5 mb-5">
                                    <img src={article.image} alt="avator" className="h-[78px] w-[78px] object-cover" />
                                    <p className="line-clamp-3">{article.title}</p>
                                </div>
                            </Link>
                        </div>
                    )}
                    <Link to={'/media/news'}>
                        <button className="bg-[#21618c] text-white py-3 px-6 rounded-sm shadow-blue-200 shadow-md"><strong>VIEW ALL</strong></button>
                    </Link>
                </div>
            </div></>
    )
}

export default Side