import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../views/Media/news";

const data = [
    {
        id: 0,
        name: 'H.E Pr.Brihanu Nega',
        image: 'https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg',
        position: "Minister Of Education",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [1, 2, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        peoplesUnderPosition: 'State Ministers, Minister Offices and Corporate Management'
    }
];



const Side = ({ currentId }) => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    const articles = newsData.filter(data => data.id !== currentId)
    console.log(articles[0])
    const [profileData] = useState(0)

    return (
        <><div className="">
            <div className="text-center">
                <div className="h-[250px] w-full rounded-md overflow-hidden">
                    <img className="h-[400px] w-full object-cover" src='https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg' alt="avator" />
                </div>
                <div className="text-center text-gray-500">
                    <span><strong>{data[profileData].name}</strong></span><br />
                    <span><strong>{data[profileData].position}</strong></span>
                </div>
                <Link to={'/about/who-is-who'}><strong>Read more</strong></Link>
            </div>
        </div><div className="my-[3em]">
                <section className="twitterContainer">
                    <div className="twitter-embed">
                        <a className="twitter-timeline" data-height="600" href="https://twitter.com/fdremoe?ref_src=twsrc%5Etfw">
                            Tweets by MOE
                        </a>
                    </div>
                </section>
            </div><div className="">
                <div className="flex text-[16px]">
                    <button className="border border-gray-300 rounded-t-md border-b-0 text-center py-2 px-4 ml-3 bg-[#21618c] text-white"><strong>ARTICLES</strong></button>
                    <button className="border border-gray-300 rounded-t-md border-b-0 text-center py-2 px-4 ml-3 hover:bg-[#21618c] hover:text-white"><strong>INITIATIVES</strong></button>
                </div>
                <div className="border border-gray-300 rounded-md p-4">
                    {articles.map(article =>
                        <div className="flex gap-5 mb-5" onClick={() => window.location.reload()} >
                            <Link to={`/media/news/${article.id}`}>
                                <img src={article.image} alt="avator" className="h-[78px] w-[78px] object-cover" />
                                <p className="line-clamp-3">{article.title}</p>
                            </Link>
                            
                        </div>)}

                    <button className="bg-[#21618c] text-white py-3 px-6 rounded-sm shadow-blue-200 shadow-md"><strong>VIEW ALL</strong></button>
                </div>
            </div></>
    )
}

export default Side