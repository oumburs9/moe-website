import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const data = [
    {
        id:0,
        name: 'H.E Pr.Brihanu Nega',
        image: 'https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg',
        position: "Minister Of Education",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [1, 2, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        peoplesUnderPosition:'State Ministers, Minister Offices and Corporate Management'
    }
];

const articles = [
    {
      id: 1,
      imageSrc: 'https://moe.gov.et/storage/news/333587917_1158941468123913_6021443852551221056_n_1678947552.jpg',
      alt: 'Image 1',
      content: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
      sub_content:'መጋቢት 4 /2015ዓ.ም (የትምህርት ሚኒስቴር) የወላይታ ሶዶ ዩኒቨርሲቲ በዚህ ዓመት መጨረሻ በሚሰጠው የዩኒቨርሲቲ የመውጫ ፈተና ላይ ትኩረት ሰጥቶ እየሰራ እንደሚገኝ የዩኒቨርስቲው አካዳሚክ ጉዳዮች ም/ፕሬዚዳንት ዶ/ር ሙላቱ ደያ ገልፀዋል፡፡',
      date: 'May 09, 2023',
      category:'Higher Education',
    },
    {
      id: 2,
      imageSrc: 'https://moe.gov.et/storage/news/333124552_912700833215666_4195705766598168699_n_1678947258.jpg',
      alt: 'Image 1',
      content:'“ጠንክረን በተማሪዎቹ ላይ በመስራታችን ለተከታታይ አስር ዓመታት በውጤታማነት መዝለቅ ችለናል” የወላይታ ሊቃ 2ኛ ደረጃ ትምህር ቤት ርዕሰ መምህር አቶ ማቱሳላህ፡፡',
      sub_content: 'የወላይታ ሊቃ 2ኛ ደረጃ ትምህርት ቤት ርእሰ መምህር አቶ ማቱሳላህ ጎና ጠንክረን ተማሪዎች ላይ በመስራታችን ባለፉት አስር ዓመታት በ12ኛ ክፍል ያስፈተናቸውን ተማሪዎች በሙሉ ወደ ዩኒቨርሲቲ በማስገባት በውጤታማነት መዝለቅ መቻላቸውን ገለፁ፡፡',
      date: ' Mar 07, 2023',
      category:'General Education',
    },
    {
      id: 3,
      imageSrc: 'https://moe.gov.et/storage/news/332282065_727188705617235_2661414443791959640_n_1678947162.jpg',
      alt: 'Image 1',
      content:'የአርባምንጭ ዩኒቨርሲቲ ለጋሞ ባይራ አዳሪ ትምህርት ቤት ግብዓት ለማሟላት እየሰራ ነው።',
      sub_content:'የካቲት 27/2015ዓም .(የትምህርት ሚኒስቴር ) የአርባምንጭ ዩኒቨርሲቲ ከ16 ሚሊየን ብር በላይ ወጪ በማድረግ ለጋሞ ባይራ አዳሪ ሁለተኛ ደረጃ ትምህርት ቤት የትምህርት ግብዓቶችን የሟሟላት ስራ እየሰራ እንደሚገኝ ገልጿል፡፡',
      date: ' Mar 06, 2023',
      category:'Higher Education',
    },
  ];

  const Side = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src="https://platform.twitter.com/widgets.js";
      document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    const [profileData] = useState(0)

    return(
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
                    <button className="border border-gray-300 rounded-t-md border-b-0 text-center py-2 px-4 ml-3 bg-[#21618c] text-white"><strong>ARTICLES</strong></button>
                    <button className="border border-gray-300 rounded-t-md border-b-0 text-center py-2 px-4 ml-3 hover:bg-[#21618c] hover:text-white"><strong>INITIATIVES</strong></button>
                </div>
                <div className="border border-gray-300 rounded-md p-4">
                    <div className="flex gap-5 mb-5">
                        <img src={articles[0].imageSrc} alt="avator" className="h-20 w-20 object-cover" />
                        <p>{articles[0].content}</p>
                    </div>
                    <div className="flex gap-5 mb-5">
                        <img src={articles[1].imageSrc} alt="avator" className="h-20 w-20 object-cover" />
                        <p>{articles[1].content}</p>
                    </div>
                    <div className="flex gap-5 mb-5">
                        <img src={articles[2].imageSrc} alt="avator" className="h-20 w-20 object-cover" />
                        <p className="truncate ...">{articles[2].content}</p>
                    </div>
                    <button className="bg-[#21618c] text-white py-3 px-6 rounded-sm shadow-blue-200 shadow-md"><strong>VIEW ALL</strong></button>
                </div>
            </div></>
    )
}

export default Side