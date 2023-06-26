import { useState } from "react"
import Side from "../../components/side.component"
import Breadcrumb from "../../components/breadcrumb.component"
import { newsData } from "./news"
import { useParams } from "react-router-dom"

function DetailNews (){
    const param = parseInt(useParams('id').id)
    const detailData = newsData.filter(d => d.id === param)[0]
    const title = detailData.title
    const path = [{name: 'Home', link: ''},{name: 'News', link: ''},{name: title, link: ''}]
    return (
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <div className="grid md:grid-cols-4 bg-white p-8 gap-5 text-[#21618c] my-[.67em]">
                <div className="md:col-span-3 pr-4 flex flex-col gap-5">
                   <h1 className="text-3xl">{detailData.category} News</h1>
                   <h2 className="text-5xl">{detailData.title}</h2>
                   <div className="flex items-center gap-10">
                        <p className="text-gray-500">{detailData.date}</p>
                        <p>Time to read: <span className="text-gray-500">{detailData.time}</span></p>
                   </div>
                   <div className="flex flex-col gap-5">
                        <img src={detailData.image} alt="" className="rounded-md"/>
                        <div className="flex items-center gap-5">
                            <p>Views: <span className="text-gray-500">{detailData.views}</span></p>
                            <p>Likes: <span className="text-gray-500">{detailData.like}</span></p>
                            <p>Dislikes: <span className="text-gray-500">{detailData.dislike}</span></p>
                        </div>
                   </div>
                   <div>
                    <p>{detailData.paragraph}</p>
                   </div>
                </div>
                <div className="md:col-span-1 pl-4">
                    <Side currentId = {param}/>
                </div>
            </div>
        </>
    )
}

export default DetailNews