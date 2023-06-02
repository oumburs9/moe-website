import img1 from '../../images/Pr.Brihanu.nega.png'
import * as SomeModule from 'react-icons/fa';
import * as SomeModule2 from 'react-icons/bs';
import { useState } from 'react';
const data = [
    {
        id:0,
        name: 'H.E Pr.Brihanu Nega',
        image: 'https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg',
        position: "minister",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [1, 2]
    },
    {
        id:1,
        name: 'Dr.Samuel Kifle (Phd)',
        image: "https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-45-11_1634042555.jpg",
        position: "Higher Education Minister",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [0, 2]
    },

    {
        id:2,
        name: 'Dr.Fanta Mandefro (Phd)',
        image: 'https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-33-45_1634042442.jpg',
        position: "General Education Minister",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [0, 1]
    }
]


export const PeoplesUnder = ({data,action}) => {
    const {id,name,image,position} = data

    return (
        <div className="text-center">
            <div className="rounded-md overflow-hidden h-[300px] w-[500px]">
                <img src={image} alt="Dr.Samuel Kifle" />
            </div>
            <div className="text-center text-gray-700">
                <span><strong>{name}</strong></span><br />
                <span className='text-light'>{position}</span>
            </div>
            <p href="" className='text-[#156584] hover:cursor-pointer' onClick={action}><strong>See more...</strong></p>
        </div>
    )
}

function WhoIsWho() {

    const [profileData, setProfileData] = useState(0)

    return (
        <>
            <h1 className="text-[50px] text-[#156584] my-5 mx-4">Who is Who at MOE</h1>
            <div className="mx-20">
                <h2 className='text-[30px] mb-5'><span className='border-b-2 border-[#156584]'>{data[profileData].position}</span></h2>
                <div className="grid grid-cols-5">
                    <div className='flex gap-10 col-span-3 items-center'>
                        <div className='w-[300px] h-[300px] rounded-full overflow-hidden border border-gray-700'>
                            <img src={data[profileData].image} alt="" />
                        </div>
                        <div className='text-gray-700'>
                            <h2 className='text-lg font-bold'>{data[profileData].name}</h2>
                            <span className='text-base font-light'>Minister of education</span>
                        </div>
                    </div>
                    <div className='border-l border-gray-300 ml-10'>
                        <ul className='ml-5 whitespace-nowrap'>
                            <li><a href="">Higher Education Minister</a></li>
                            <li><a href="">General Education Minister</a></li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-5 mt-10'>
                    <p className='col-span-3'>
                        {data[profileData].story}
                    </p>
                </div>
                <div className="flex items-center gap-5 my-10">
                    <a href={data[profileData].facebookLink} className="px-12 py-[6px] bg-[#156584] rounded-sm">
                        <SomeModule.FaFacebookF className='text-white text-xl' />
                    </a>
                    <a href={data[profileData].twitterLink} className="px-12 py-[6px] bg-[#156584] rounded-sm">
                        <SomeModule.FaTwitter className='text-white text-xl' />
                    </a>
                    <a href={data[profileData].youtubeLink} className="px-12 py-[6px] bg-[#156584] rounded-sm">
                        <SomeModule2.BsYoutube className='text-white text-xl' />
                    </a>
                </div>
                <h2 className='text-[30px] mb-5'><span className='border-b-2 border-[#156584]'>State</span> Ministers</h2>
                <div className='grid grid-cols-2'>
                    <PeoplesUnder data={data[data[profileData].peoplesUnder[0]]} action={()=>setProfileData(data[data[profileData].peoplesUnder[0]].id)}/>
                    <PeoplesUnder data={data[data[profileData].peoplesUnder[1]]} action={()=>setProfileData(data[data[profileData].peoplesUnder[1]].id)}/>
                </div>
            </div>
        </>
    )
}

export default WhoIsWho

