import { useState } from "react"
// import Card from "../../../components/video-details.component"
import Breadcrumb from "../../../components/breadcrumb.component";
import { videoData } from "./video-gallery";
import { useParams } from "react-router-dom";
import Card from "../../../components/video-card.component";

function VideoDetails() {

    const param = parseInt(useParams('id').id)
    const currentVideo = videoData.filter(vid => vid.id === param)[0]
    const videoTitle = currentVideo.title

    const path = [{name: 'Home', link: ''},{name: 'Gallery'},{name:'Video Gallery'},{name: videoTitle, link: ''}]
    return (
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <div className="grid md:grid-cols-7 bg-white p-8 pr-0 gap-4 text-[#21618c] my-[.67em]">
                <div className="md:col-span-5 pr-4 flex flex-col gap-5">
                    <h1 className="text-3xl">{currentVideo.category} Video</h1>
                    <div className="flex flex-col gap-5">
                        <video className="bg-gray-700 rounded-md h-[28rem] object-contain" controls>
                            <source src={currentVideo.videoSrc} type="video/mp4" />
                        </video>
                        <h2 className="text-5xl pb-2 border-b-2 border-light/40 border-dashed">{currentVideo.title}</h2>
                        <div className="flex items-center gap-5">
                            <p>Views: <span className="text-gray-500">{currentVideo.views}</span></p>
                            <p className="text-gray-500">{currentVideo.date}</p>
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