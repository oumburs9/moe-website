import { useState } from "react"
import Card from "../../../components/video-details.component"

const videoData = [
    {
        id: 1,
        videoSrc: 'https://player.vimeo.com/external/610751704.hd.mp4?s=4b3fc16fde4780ea1e126e5e963513335dbf19dc&profile_id=174&oauth2_token_id=57447761',
        views: 5678,
        title: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
        date: 'May 09, 2023',
        category: 'Higher Education',
    },
    {
        id: 2,
        videoSrc: "https://player.vimeo.com/progressive_redirect/playback/802203839/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=af1c5c9653cdfb00adae9e35da155625cc4d8dbf0200cff08f62b3051ccc66a4",
        views: 5678,
        title: 'ሰበር - ፕ_ር ብርሀኑ እውነታውን አፈረጡት!_እኛም ስናየው በጣም ደንግጠናል_ለወደቁ ተማሪዎች አዲስ መላ __ Ethiopia',
        date: 'May 09, 2023',
        category: 'Higher Education',
    },
    {
        id: 3,
        videoSrc: 'https://player.vimeo.com/progressive_redirect/playback/825266048/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=d6e58f75956ca8ab28c2e8a27da2c2713de73201ff08fe8fb4893b85d07a8c60',
        views: 5678,
        title: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
        date: 'May 09, 2023',
        category: 'Higher Education',
    },
    {
        id: 4,
        videoSrc: 'https://player.vimeo.com/progressive_redirect/playback/824814926/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=92f350bb5b4d1455f72954041a05499d90724afb4ded1763b0e860ea7e84c3dc',
        views: 5678,
        title: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
        date: 'May 09, 2023',
        category: 'Higher Education',
    },
    {
        id: 5,
        videoSrc: 'https://player.vimeo.com/external/610751704.hd.mp4?s=4b3fc16fde4780ea1e126e5e963513335dbf19dc&profile_id=174&oauth2_token_id=57447761',
        views: 5678,
        title: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
        date: 'May 09, 2023',
        category: 'Higher Education',
    },
    {
        id: 6,
        videoSrc: "https://player.vimeo.com/progressive_redirect/playback/802203839/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=af1c5c9653cdfb00adae9e35da155625cc4d8dbf0200cff08f62b3051ccc66a4",
        views: 5678,
        title: 'ሰበር - ፕ_ር ብርሀኑ እውነታውን አፈረጡት!_እኛም ስናየው በጣም ደንግጠናል_ለወደቁ ተማሪዎች አዲስ መላ __ Ethiopia',
        date: 'May 09, 2023',
        category: 'Higher Education',
    },
    {
        id: 7,
        videoSrc: 'https://player.vimeo.com/progressive_redirect/playback/825266048/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=d6e58f75956ca8ab28c2e8a27da2c2713de73201ff08fe8fb4893b85d07a8c60',
        views: 5678,
        title: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
        date: 'May 09, 2023',
        category: 'Higher Education',
    },
    {
        id: 8,
        videoSrc: 'https://player.vimeo.com/progressive_redirect/playback/824814926/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=92f350bb5b4d1455f72954041a05499d90724afb4ded1763b0e860ea7e84c3dc',
        views: 5678,
        title: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
        date: 'May 09, 2023',
        category: 'Higher Education',
    },
];

function VideoDetails() {
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
                        <a href="#">Videos</a>
                        <span>{">"}</span>
                    </li>
                    <li>{videoData[detailData].title}</li>
                </ol>
            </nav>
            <div className="grid md:grid-cols-7 bg-white p-8 pr-0 gap-4 text-[#21618c] my-[.67em]">
                <div className="md:col-span-5 pr-4 flex flex-col gap-5">
                    <h1 className="text-3xl">{videoData[detailData].category} Video</h1>
                    <div className="flex flex-col gap-5">
                        <video className="bg-gray-700 rounded-md h-[28rem] object-contain" controls>
                            <source src={videoData[detailData].videoSrc} type="video/mp4" />
                        </video>
                        <h2 className="text-5xl pb-2 border-b-2 border-light/40 border-dashed">{videoData[detailData].title}</h2>
                        <div className="flex items-center gap-5">
                            <p>Views: <span className="text-gray-500">{videoData[detailData].views}</span></p>
                            <p className="text-gray-500">{videoData[detailData].date}</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 md:pt-14">
                    <div className="flex flex-col gap-5">
                        {videoData.map((jsonData) => (
                            <Card data={jsonData} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoDetails