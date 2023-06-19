import { useState } from "react"
import Side from "../../components/side.component"

const newsData = [
    {
      id: 1,
      image: 'https://moe.gov.et/storage/news/333587917_1158941468123913_6021443852551221056_n_1678947552.jpg',
      views: 5678,
      like: 5000,
      dislike: 10,
      title: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
      paragraph:'መጋቢት 4 /2015ዓ.ም (የትምህርት ሚኒስቴር) የወላይታ ሶዶ ዩኒቨርሲቲ በዚህ ዓመት መጨረሻ በሚሰጠው የዩኒቨርሲቲ የመውጫ ፈተና ላይ ትኩረት ሰጥቶ እየሰራ እንደሚገኝ የዩኒቨርስቲው አካዳሚክ ጉዳዮች ም/ፕሬዚዳንት ዶ/ር ሙላቱ ደያ ገልፀዋል፡፡',
      date: 'May 09, 2023',
      category:'Higher Education',
      time: '1 minute'
    }
]

function DetailNews (){
    const [detailData] = useState(0)
    return (
        <>
            <nav>
                <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
                    <li className='flex gap-2'>
                        <a href="#">Home</a>
                        <span>{">"}</span>
                    </li>
                    <li className='flex gap-2'>
                        <a href="#">News</a>
                        <span>{">"}</span>
                    </li>
                    <li>{newsData[detailData].title}</li>
                </ol>
            </nav>
            <div className="grid md:grid-cols-4 bg-white p-8 gap-5 text-[#21618c] my-[.67em]">
                <div className="md:col-span-3 pr-4 flex flex-col gap-5">
                   <h1 className="text-3xl">{newsData[detailData].category} News</h1>
                   <h2 className="text-5xl">{newsData[detailData].title}</h2>
                   <div className="flex items-center gap-10">
                        <p className="text-gray-500">{newsData[detailData].date}</p>
                        <p>Time to read: <span className="text-gray-500">{newsData[detailData].time}</span></p>
                   </div>
                   <div className="flex flex-col gap-5">
                        <img src={newsData[detailData].image} alt="" className="rounded-md"/>
                        <div className="flex items-center gap-5">
                            <p>Views: <span className="text-gray-500">{newsData[detailData].views}</span></p>
                            <p>Likes: <span className="text-gray-500">{newsData[detailData].like}</span></p>
                            <p>Dislikes: <span className="text-gray-500">{newsData[detailData].dislike}</span></p>
                        </div>
                   </div>
                   <div>
                    <p>{newsData[detailData].paragraph}</p>
                   </div>
                </div>
                <div className="md:col-span-1 pl-4">
                    <Side/>
                </div>
            </div>
        </>
    )
}

export default DetailNews