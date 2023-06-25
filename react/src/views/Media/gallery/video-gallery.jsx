import React from "react";
import Titles from '../../../components/title.component';
import Card from '../../../components/video-card.component';
import Breadcrumb from "../../../components/breadcrumb.component";

const VideoGallery = () => {
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

    const header = {
        title: 'Video Gallery',
        subtitle: 'This is a sample subtitle.',
    };

    const path = [{name: 'Home', link: ''},{name: 'Gallery'},{name:'Video Gallery'}]


    return (
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <div className="px-4 mt-12 mx-auto sm:px-6 lg:px-8 container">
                <Titles title={header.title} subtitle={header.subtitle} />

                <div className="grid max-w-md grid-cols-1 mx-auto mt-12 gap-x-10 gap-y-8 mb-10 sm:max-w-full sm:grid-cols-1 lg:grid-cols-3">
                    {videoData.map((jsonData) => (
                        <Card data={jsonData} />
                    ))}
                </div>
            </div>


        </>
    );
};

export default VideoGallery;










