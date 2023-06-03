import image  from "../images/Pr.Brihanu.nega.png";
import image2  from "../images/initiative.png";
function Side(){
    return(
        <><div className="">
            <div className="text-center">
                <div className="rounded-md overflow-hidden">
                    <img src={image} alt="Dr.Lia Taddesse" />
                </div>
                <div className="text-center text-gray-500">
                    <span><strong>Pr.Birhanu Nega</strong></span><br />
                    <span><strong>Ministry of Education</strong></span>
                </div>
                <a href="http://"><strong>Read more</strong></a>
            </div>
        </div><div className="my-[3em]">
                <section className="twitterContainer">
                    <div className="twitter-embed">
                        <a
                            className="twitter-timeline"
                            data-width="400"
                            data-height="600"
                            href="https://twitter.com/fdremoe?ref_src=twsrc%5Etfw"
                        >
                            Tweets by MOE
                        </a>
                    </div>
                </section>
            </div><div className="">
                <div className="flex text-[16px]">
                    <button className="border border-gray-300 rounded-t-md border-b-0 text-center py-2 px-4 ml-3 hover:bg-[#21618c] hover:text-white"><strong>INITIATIVES</strong></button>
                    <button className="border border-gray-300 rounded-t-md border-b-0 text-center py-2 px-4 ml-3 hover:bg-[#21618c] hover:text-white"><strong>ARTICLES</strong></button>
                </div>
                <div className="border border-gray-300 rounded-md p-4">
                    <div className="flex gap-5 mb-5">
                        <img src={image2} alt="" className="h-20 w-20" />
                        <p>Continouse professional development</p>
                    </div>
                    <div className="flex gap-5 mb-5">
                        <img src={image2} alt="" className="h-20 w-20" />
                        <p>Continouse professional development</p>
                    </div>
                    <div className="flex gap-5 mb-5">
                        <img src={image2} alt="" className="h-20 w-20" />
                        <p>Continouse professional development</p>
                    </div>
                    <button className="bg-[#21618c] text-white py-3 px-6 rounded-sm shadow-blue-200 shadow-md"><strong>VIEW ALL</strong></button>
                </div>
            </div></>
    )
}

export default Side