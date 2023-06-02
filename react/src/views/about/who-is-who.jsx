import {images} from '../../assets/index'
import * as SomeModule from 'react-icons/fa';
import * as SomeModule2 from 'react-icons/bs';
import { useState } from 'react';
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
        peoplesUnder: [1, 2],
        peoplesUnderPosition:'State Ministers'
    },

    {
        id:1,
        name: 'Dr.Samuel Kifle (PhD)',
        image: "https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-45-11_1634042555.jpg",
        position: "Higher Education Minister",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [3, 4, 5, 6],
        peoplesUnderPosition:'Executives'
    },
    {
        id:2,
        name: 'Dr.Fanta Mandefro (PhD)',
        image: 'https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-33-45_1634042442.jpg',
        position: "General Education Minister",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [7, 8, 9, 10],
        peoplesUnderPosition:'Executives'
    },

    {
        id:3,
        name: 'Eba Mijena (PhD)',
        image: images.EbaMijena,
        position: "CEO of Acadamic Affairs",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [11, 12, 13, 14],
        peoplesUnderPosition:'Desks'
    },
    {
        id:4,
        name: 'Solomon Benor (PhD)',
        image: images.Solomon2,
        position: "CEO of Research and Community Engagement",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [15, 16, 17, 18],
        peoplesUnderPosition:'Desks'
    },
    {
        id:5,
        name: 'Solomon Abrha (PhD)',
        image: images.Solomon1,
        position: "CEO of Governance and Infrastructure",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:'Desks'
    },
    {
        id:6,
        name: 'Zelalem Asefa (PhD)',
        image: images.Zelalem1,
        position: "CEO of ICT and Digital Education",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:'Desks'
    },

    {
        id:7,
        name: 'Mr.Tesfaye Negawo',
        image: images.Tesfaye,
        position: "Head of Curriculum Development",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:'Desks'
    },
    {
        id:8,
        name: 'Muluken Nigatu (Phd)',
        image: images.Muluken,
        position: "CEO of Teacher's and Educational Leader's Development",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:'Desks'
    },
    {
        id:9,
        name: 'Mr.Yohannes Wogaso',
        image: images.Yohannes,
        position: "CEO of Educational Program and Quality Improvement",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:'Desks'
    },
    {
        id:10,
        name: 'Mr.Yoseph Abera',
        image: images.Yoseph,
        position: "CEO of Adult and Non-Formal Education Programe",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:'Desks'
    },

    {
        id:11,
        name: 'Mr.Seid Mohammed',
        image: images.Seid,
        position: "Competency and Quality Improvement Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:12,
        name: 'Mr.Tesfaye Negawo',
        image: images.Tesfaye,
        position: "Head of Curriculum and Program Desk",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:'Desks'
    },
    {
        id:13,
        name: 'Mr.Beyene Tezera',
        image: images.Beyene,
        position: "Teachers and Students Development Head ",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:14,
        name: 'Eyob Ayenew',
        image: images.Eyob,
        position: "Private Higher Education Institutions Service Desk Head ",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    
    {
        id:15,
        name: 'Serawit Handiso (PhD)',
        image: images.Serawit,
        position: "Research and Extension Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:16,
        name: 'Abule Takele (PhD)',
        image: images.Abule,
        position: "Research Ethics Desk",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:17,
        name: 'Mr. Teshome Daniel',
        image: images.Teshome,
        position: "Institutional Linkage and Technology Transfer Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:18,
        name: 'Mrs. Selam Alemu',
        image: images.Selam,
        position: "Community Engagement and Indigenous Knowledge Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },

    {
        id:19,
        name: 'Mr.Abdonasir Haji',
        image: images.Abdonasir,
        position: "Administration Affairs Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:20,
        name: 'Mrs.Selam Alemu',
        image: images.Eyob,
        position: "Community Engagement and Indigenous Knowledge Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:21,
        name: 'Mr.Zewdu Kassa',
        image: images.Zewdu,
        position: "Infrastructure and Supply Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:22,
        name: 'Idossa Terfassa (PhD)',
        image: images.Idossa,
        position: "Scholarship and Internalization Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },

    {
        id:23,
        name: 'Mr.Elias Gebre Mariam',
        image: images.Elias,
        position: "Head  Of Education Multimedia Program Production Desk",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:24,
        name: 'Solomon Wondimu',
        image: images.Solomon3,
        position: "Head of  Scool Net and ICT desk",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:25,
        name: 'Mr.Zewdu Kassa',
        image: images.Zewdu,
        position: "Infrastructure and Supply Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:26,
        name: 'Idossa Terfassa ( PhD)',
        image: images.Idossa,
        position: "Scholarship and Internalization Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    
]


export const PeopleUnder = ({data,action}) => {
    const {name,image,position} = data

    return (
        <div className="text-center">
            <div className="rounded-md overflow-hidden mr-10">
                <img src={image} alt={name} />
            </div>
            <div className="text-center text-gray-700">
                <span><strong>{name}</strong></span><br />
                <span className='text-light'>{position}</span>
            </div>
            <p href="" className='text-[#156584] hover:cursor-pointer' onClick={action}><strong>See more...</strong></p>
        </div>
    )
}

export const PeoplesUnder = () =>{
    const [profileData, setProfileData] = useState(0)
    return (
        <>
        {data[profileData].peoplesUnder.map((index) => {
            <PeopleUnder data={data[data[profileData].peoplesUnder[index]]} action={()=>setProfileData(data[data[profileData].peoplesUnder[index]].id)}/>
            console.log(data[data[profileData].peoplesUnder[index]])
        }
        )
        }
        </>
    )
}

function WhoIsWho() {

    const [profileData, setProfileData] = useState(0)

    return (
        <>
            <h1 className="text-[50px] text-[#156584] my-5 ml-10">Who is Who at MOE</h1>
            <div className="mx-20">
                <h2 className='text-[30px] mb-5'><span className='border-b-2 border-[#156584]'>{data[profileData].position}</span></h2>
                <div className="grid grid-cols-5">
                    <div className='flex gap-10 col-span-3 items-center'>
                        <div className='w-[300px] h-[300px] rounded-full overflow-hidden border border-gray-700'>
                            <img src={data[profileData].image} alt="" />
                        </div>
                        <div className='text-gray-700'>
                            <h2 className='text-lg font-bold'>{data[profileData].name}</h2>
                            <span className='text-base font-light'>{data[profileData].position}</span>
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
                <h2 className='text-[30px] mb-5'><span className='border-b-2 border-[#156584]'>{data[profileData].peoplesUnderPosition}</span></h2>
                <div className='grid md:grid-cols-3'>
                    <PeopleUnder data={data[data[profileData].peoplesUnder[0]]} action={()=>setProfileData(data[data[profileData].peoplesUnder[0]].id)}/>
                    <PeopleUnder data={data[data[profileData].peoplesUnder[1]]} action={()=>setProfileData(data[data[profileData].peoplesUnder[1]].id)}/>
                    {/* <PeopleUnder data={data[data[profileData].peoplesUnder[2]]} action={()=>setProfileData(data[data[profileData].peoplesUnder[2]].id)}/>
                    <PeopleUnder data={data[data[profileData].peoplesUnder[3]]} action={()=>setProfileData(data[data[profileData].peoplesUnder[3]].id)}/> */}
                </div>
            </div>
        </>
    )
}

export default WhoIsWho

