import img1 from '../../images/Pr.Brihanu.nega.png'
import * as SomeModule from 'react-icons/fa';
import * as SomeModule2 from 'react-icons/bs';

function WhoIsWho() {
    return(
        <>
        <div className="mx-20">
            <h1 className="text-[50px] text-[#156584] my-5">Who is Who at MOE</h1>
            <h2 className='text-[30px] mb-5'><span className='border-b-2 border-[#156584]'>Minis</span>ter</h2>
            <div className="grid grid-cols-5">
                <div className='flex gap-10 col-span-3 items-center'>
                    <div className='w-[300px] h-[300px] rounded-full overflow-hidden border border-gray-700'>
                        <img src='https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg' alt="" />
                    </div>
                    <div className='text-gray-700'>
                        <h2 className='text-lg font-bold'>H.E Pr.Brihanu Nega</h2>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laboriosam ipsam error eligendi eaque cumque modi alias 
                    architecto non quis unde. Vitae, autem! Distinctio officia 
                    facilis voluptatem commodi, illum numquam! Doloribus. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laboriosam ipsam error eligendi eaque cumque modi alias 
                    architecto non quis unde. Vitae, autem! Distinctio officia 
                    facilis voluptatem commodi, illum numquam! Doloribus.
                </p>
            </div>
            <div className="flex items-center gap-5 my-10"> 
                <a href="" className="px-12 py-[6px] bg-[#156584] rounded-sm">
                    <SomeModule.FaFacebookF  className='text-white text-xl'/>
                </a>
                <a href="" className="px-12 py-[6px] bg-[#156584] rounded-sm">
                    <SomeModule.FaTwitter  className='text-white text-xl'/>
                </a>
                <a href="" className="px-12 py-[6px] bg-[#156584] rounded-sm">
                    <SomeModule2.BsYoutube  className='text-white text-xl'/>
                </a>          
            </div>
            <h2 className='text-[30px] mb-5'><span className='border-b-2 border-[#156584]'>State</span> Ministers</h2>
            <div className='grid grid-cols-2'>
                <div className="text-center">
                    <div className="rounded-md overflow-hidden h-[300px] w-[500px]">
                        <img src ='https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-45-11_1634042555.jpg' alt="Dr.Samuel Kifle" />
                    </div>
                    <div className="text-center text-gray-700">
                        <span><strong>Dr.Samuel Kifle (Phd)</strong></span><br />
                        <span className='text-light'>Higher Education Minister</span>
                    </div>
                    <a href="" className='text-[#156584]'><strong>See more...</strong></a>
                </div>
                <div className="text-center">
                    <div className="rounded-md overflow-hidden h-[300px] w-[500px]">
                        <img src ='https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-33-45_1634042442.jpg' alt="Dr.Fanta Mandefro" />
                    </div>
                    <div className="text-center text-gray-700">
                        <span><strong>Dr.Fanta Mandefro (Phd)</strong></span><br />
                        <span className='text-light'>General Education Minister</span>
                    </div>
                    <a href="" className='text-[#156584]'><strong>See more...</strong></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default WhoIsWho