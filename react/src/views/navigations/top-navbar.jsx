// const imd = import ;
import * as SomeModule from 'react-icons/fa';
import * as SomeModule2 from 'react-icons/bs';

function TopNavBar() {
  return (

    <nav className="flex items-center justify-between flex-wrap  bg-[#156584] w-full py-2">

      <div className="menu w-full flex flex-grow items-center justify-evenly lg:w-auto lg:px-3 px-8">
        <div className="flex align-middle items-center justify-center text-md font-bold text-blue-700"> 
          <a href="#responsive-header" className="flex items-center mt-4 lg:inline-block lg:mt-0 py-3 px-2 rounded ">
            <SomeModule.FaFacebookF  className='text-[rgba(255,255,255,0.70)] hover:text-white hover:animate-bounce_1s_ease-in-ease-out font-black h-2/3 text-[18px] rounded'/>
          </a>
          <a href="#responsive-header" className="flex items-center mt-4 lg:inline-block lg:mt-0 py-2 rounded  px-2">
            <SomeModule.FaTwitter  className='text-[rgba(255,255,255,0.70)] hover:text-white hover:animate-bounce_1s_ease-in-ease-out font-black h-2/3 text-[18px] rounded'/>
          </a>
          <a href="#responsive-header" className="flex items-center mt-4 lg:inline-block lg:mt-0 py-2 rounded  px-2">
            <SomeModule2.BsYoutube  className='text-[rgba(255,255,255,0.70)] hover:text-white hover:animate-bounce_1s_ease-in-ease-out font-black h-2/3 text-[18px] rounded'/>
          </a>          
        </div>

        <div className="flex align-middle justify-center text-md font-bold text-blue-700 items-center">
          <a href="#responsive-header" className="flex mt-4 lg:mt-0 py-2 rounded justify-center items-center">
            <SomeModule.FaPhoneAlt  className='text-[rgba(255,255,255,0.70)] hover:text-white hover:animate-bounce_1s_ease-in-ease-out h-2/3 text-[13px] rounded'/>
            <span className='text-[rgba(255,255,255,0.90)] hover:text-white hover:animate-bounce_1s_ease-in-ease-out  h-2/3 text-[13px] rounded px-2'>+251 988 99 85</span>
          </a>

          <a href="#responsive-header" className="flex mt-4 lg:mt-0 py-2 pl-2 rounded justify-center items-center hover:text-white">
            <SomeModule.FaRegClock  className='text-[rgba(255,255,255,0.99)]  font-bold flex justify-center self-center hover:animate-bounce_1s_ease-in-ease-out h-2/3 text-[13px] rounded'/>
            <span className='text-[rgba(255,255,255,0.90)] hover:animate-bounce_1s_ease-in-ease-out  h-2/3 text-[13px] rounded px-2'>+ Mon-Fri: 9am-6pm </span>
          </a>     
        </div>
        <div className="flex align-middle justify-cente text-md text-[13] text-white">
          <a href="#responsive-header" className="flex align-middle justify-cente text-md text-[13] text-white">
          <span className='text-[rgba(255,255,255,0.90)] hover:animate-bounce_1s_ease-in-ease-out  h-2/3 text-[13px] rounded'>En</span>
            
          </a>
          <span className='text-[rgba(255,255,255,0.90)] hover:animate-bounce_1s_ease-in-ease-out  h-2/3 text-[13px] rounded px-[1px]'>|</span>
          <a href="#responsive-header" className="flex align-middle justify-cente text-md text-[13] text-white">
          <span className='text-[rgba(255,255,255,0.90)] hover:animate-bounce_1s_ease-in-ease-out  h-2/3 text-[13px] rounded px-[1px]'>አማ</span>
            
          </a>
               
        </div>

        <div className="flex align-middle justify-cente text-md font-bold text-white">
          <a href="#responsive-header">
            <img src="https://www.moh.gov.et/site/sites/default/files/2021-10/donations.png" width="220px"/>
          </a>
        </div>
 
      <div className="flex align-middle justify-cente text-md font-bold text-white">
        <svg className="text-[white] self-center h-4 w-4 fill-current font-black" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
          {/* </button> */}
          <input
            className="border-b-[1px]  border-gray-500 bg-transparent h-10 pl-2 pr-8  text-sm focus:outline-none"
            type="search"
            name="search"

            placeholder="Search..."
          />
               
      </div>

      </div>
    </nav>
  );
}

export default TopNavBar;