import { useState } from "react";
import { Link } from "react-router-dom";
import {  BsFillEnvelopeFill } from 'react-icons/bs';



const Dropdown = ( props) => {
  const { isMenuOpen, name, items, sideBar } = props; 
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownOff = () => {
    setDropdownOpen(false);
  };
  const handleDropdownOn = () => {
    setDropdownOpen(true);
  };

  return (
    <>
    <li
      onMouseLeave={handleDropdownOff}
    >

      {sideBar ? <a href="#" className="border-b-2 w-full flex py-2 text-[#156584]"

        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        onMouseEnter={handleDropdownOn}
      > <span className=""> {name} </span> </a> : <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="flex items-center font-Helvetica text-[13px] font-medium uppercase justify-between w-full py-1.5 pl-3 pr-4 rounded text-[#156584] whitespace-nowrap"
        onMouseEnter={handleDropdownOn}
      >
        {name}
      </button>}

      {isDropdownOpen && (
        <div
          className="h-min overflow-hidden">
          <div
            id="dropdownNavbar"
            className={`${sideBar ? 'md:w-full md:absolute md:left-[105%] md:top-0 md:z-10' : 'md:absolute md:z-10'} max-md:w-full  font-normal text-[#21618c] bg-transparent divide-y divide-red-700 text-left dark:bg-gray-700 dark:divide-gray-600`}

          >
            <ul
              className="md:relative py-2 text-sm dark:text-gray-400 text-[#21618c] font-bold animate-wiggle bg-white shadow-sm"
              aria-labelledby="dropdownLargeButton"
            >
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    onClick={handleDropdownOff}
                    to={item.link}
                    className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white shadow-sm hover:shadow-none"
                  >
                    {item.hasDropDown || item.name}
                    {item.hasDropDown ? <Dropdown isMenuOpen={isMenuOpen} name={item.name} items={[{ name: "Who is who", hasDropDown: true, }]} sideBar={true} /> : <div> </div>}
                  </Link>
                </li>

              ))}

            </ul>

          </div>
        </div>
      )}
    </li>
    </>
  );
};


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const aboutItems = [
    {name: "Mission, Vision and Values", link: "/about/mission-and-vision", hasDropDown: false, },
    {name: "Organizational Structure", link: "/about/moe's-organizational-structure", hasDropDown : false},
    {name: "Who is who", link: "/about/who-is-who", hasDropDown: false},
    {name: "Power and Duties", link: "/about/power-and-duties", hasDropDown: false},
    {name: "Partners and Stakeholders", link: "/about/partners-and-stakeholders", hasDropDown: false},
    {name: "Fact Sheets", link: "/about/fact-sheets", hasDropDown: false},
    {name: "History", link: "/about/history", hasDropDown: false}];
  
  const educationSectorItems = [
    {name: "Higher Education", link: "/educations/higher-education", hasDropDown: false},
    {name: "General Education", link: "/educations/general-education", hasDropDown : false}];
  
  const announcementItems = [
    {name: "Job Vacancies", link: "/resources/policies-and-strategies", hasDropDown: false, },
    {name: "Notices", link: "google.com", hasDropDown : false},
    {name: "Tender", link: "google.com", hasDropDown: false}];

  const resourceItems = [
    {name: "Policies-and-strategies", link: "/resources/policies-and-strategies", hasDropDown: false, },
    {name: "Guidlines and Standards", link: "google.com", hasDropDown : false},
    {name: "Plans and Reports", link: "google.com", hasDropDown: false},
    {name: "Annual Abstracts", link: "google.com", hasDropDown: false},
    {name: "Digital Library", link: "google.com", hasDropDown: false},
    {name: "E Learning", link: "google.com", hasDropDown: false},
    {name: "Others", link: "google.com", hasDropDown: false}];
  
  const mediaItems = [
    {name: "News", link: "/media/news", hasDropDown: false},
    {name: "Magazines", link: "/media/magazines", hasDropDown : false},
    {name: "Press Releases", link: "/media/press-release", hasDropDown: false},
    {name: "Gallery", link: "/media/gallery/image", hasDropDown: false}];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <nav className="bg-white w-full m-0 py-4 shadow-md z-30 sticky top-0">
      <div className=" w-full max-w-screen-xl flex flex-wrap justify-between h-min mx-auto px-16">
        <Link to='/' className="flex items-center justify-center text-justify h-full py-2">
          <img
            src="https://moe.gov.et/logom.png"
            className="h-16 max-w-full align-middle self-center"
            alt="Moe Logo" />
          <a className="flex flex-col text-[#21618c] font-black font-serif pl-4">
            <span id="text" className="flex">ትምህርት ሚኒስቴር</span>
            <span id="text" className="flex">Ministry Of Education</span>
          </a>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-min py-3.5`}
          id="navbar-dropdown"
        >
          <div className="flex self-center">
            <ul className="flex flex-col items-center justify-center text-end h-full font-medium border border-red-500 rounded-lg bg-gray-50 md:flex-row  md:border-0 md:bg-white md:w-min  dark:border-gray-700">
              <Dropdown isMenuOpen={isMenuOpen} name="About" items={aboutItems} sideBar={false} />
              <Dropdown isMenuOpen={isMenuOpen} name="Education sector" items={educationSectorItems} sideBar={false} />
              <Dropdown isMenuOpen={isMenuOpen} name="Announcement" items={announcementItems} sideBar={false} />
              <Dropdown isMenuOpen={isMenuOpen} name="Resources" items={resourceItems} sideBar={false} />
              <Dropdown isMenuOpen={isMenuOpen} name="Media" items={mediaItems} sideBar={false} />

              <li>
                <Link to={'/contact'}>
                  <button className="flex p-4 ml-5 rounded md:w-max align-middle text-center md:shadow-[#8bbfe2] md:shadow-lg md:py-3 md:px-8 text-white md:bg-[#21618c]">
                    <span className=" flex items-center justify-between ml-1 font-white "><BsFillEnvelopeFill /><span className="px-2"> Contact</span></span>
                  </button>
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;