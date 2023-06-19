// const imd = import ;
import * as SomeModule from 'react-icons/fa';
import * as SomeModule2 from 'react-icons/bs';

function TopNavBar() {
  return (

    <nav className="flex items-center justify-between flex-wrap py-1 bg-[#156584] w-full  max-sm:hidden">
      <div className="menu w-full mx-10 flex flex-grow items-center justify-between lg:w-auto lg:px-3 px-8">
        <div className="md:ml-40 text-md font-bold text-white">
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
            <input
              className="border-b md:w-72 border-white bg-transparent pl-2 pr-8  text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search..."
            />    
        </div>
        <div className="flex align-middle justify-cente text-md text-[13] text-white">
          <a href="#responsive-header" className="flex align-middle justify-cente text-md text-[13] text-white">
            <span className='text-[rgba(255,255,255,0.90)] hover:animate-bounce_1s_ease-in-ease-out  h-2/3 text-[13px] rounded'>Eng</span> 
          </a>
            <span className='text-[rgba(255,255,255,0.90)] hover:animate-bounce_1s_ease-in-ease-out  h-2/3 text-[13px] rounded px-[1px]'>|</span>
          <a href="#responsive-header" className="flex align-middle justify-cente text-md text-[13] text-white">
            <span className='text-[rgba(255,255,255,0.90)] hover:animate-bounce_1s_ease-in-ease-out  h-2/3 text-[13px] rounded px-[1px]'>አማር</span> 
          </a>
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;