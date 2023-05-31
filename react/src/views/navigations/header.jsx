import { useState } from "react";
import { Link } from "react-router-dom";


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
    <li
    onMouseLeave={handleDropdownOff}
    >

      {sideBar ? <a href="#"  className="border-b-2 w-full flex py-2 text-[#21618c]"
      
      id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        // className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
        onMouseEnter={handleDropdownOn}
      > <span className=""> {name} </span> </a> :<button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="flex items-center font-Helvetica text-[13px] font-medium uppercase justify-between w-full py-1.5 pl-3 pr-4 rounded text-[#21618c]"
        onMouseEnter={handleDropdownOn}
        // onMouseLeave={handleDropdownToggle}
      >
        {name}
         <span className=" h-full ml-1 font-black text-[16px]">+</span>
      </button> }

      {isDropdownOpen && (
        <div 
          className = "h-min overflow-hidden ">
        <div
          id="dropdownNavbar"
          className= {`${
            sideBar ? 'md:w-full md:absolute md:left-[105%] md:top-0 md:z-10' : 'md:absolute md:z-10'
          } max-md:w-full  font-normal text-[#21618c] bg-transparent divide-y divide-red-700 text-left dark:bg-gray-700 dark:divide-gray-600`}
          
        >
          <ul
            className="md:relative py-2 text-sm dark:text-gray-400 text-[#21618c] font-bold animate-wiggle bg-white " 
            aria-labelledby="dropdownLargeButton"
          >
            {items.map((item, index) => (
            <li key = {index}> 
              <Link
                to = {item.link}
                className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
              >
                {item.hasDropDown || item.name}
               {item.hasDropDown ?  <Dropdown isMenuOpen = {isMenuOpen}   name = {item.name} items = {[{name: "Who is whoadfafadf", hasDropDown: true,} ]} sideBar = {true}/> : <div> </div>}
              </Link>
            </li>

            ))}
            
          </ul>
          
        </div>
        </div>
      )}
    </li>
  );
};


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const aboutItems = [
    {name: "Mission, Vision and Objectives", link: "/test", hasDropDown: false, },
    {name: "Organizational Structure", link: "google.com", hasDropDown : false},
    {name: "Who is who", link: "google.com", hasDropDown: true},
    {name: "Directorates", link: "google.com", hasDropDown: false},
    {name: "Health Service Providers (Facilities)", link: "google.com", hasDropDown: false},
    {name: "Fact Sheets", link: "google.com", hasDropDown: false},
    {name: "Our Digital Health Systems", link: "google.com", hasDropDown: false},
    {name: "Development Partners", link: "google.com", hasDropDown: false},
    {name: "Regional Health Bureaus", link: "google.com", hasDropDown: false},
    {name: "Agencies", link: "google.com", hasDropDown: false},
    {name: "Professional Associations", link: "google.com", hasDropDown: false},
    {name: "Multisectoral Collaboration", link: "google.com", hasDropDown: false}];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white  w-full m-0 shadow-md">
      <div className=" w-full max-w-screen-xl flex flex-wrap justify-between h-min mx-auto py-3.5 px-16">
        <a href="#" className="flex items-center justify-center text-justify h-full py-2">
          <img
            src="https://www.moh.gov.et/site/sites/default/files/logomohnewww.png"
            className="h-full max-w-full align-middle self-center"
            alt="Moe Logo"
          />
        </a>
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
          // className="hidden w-full md:block md:w-auto"
          // id="navbar-dropdown"
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-min py-3.5`}
          id="navbar-dropdown"
        >
          <div className="flex self-end">
          <ul className="flex flex-col items-end justify-end text-end h-full font-medium border border-red-500 rounded-lg bg-gray-50 md:flex-row  md:border-0 md:bg-white md:w-min  dark:border-gray-700">
            <Dropdown isMenuOpen = {isMenuOpen}   name = "About" items = {aboutItems} sideBar = {false} />
            <Dropdown isMenuOpen = {isMenuOpen}  name = "Programs" items = {aboutItems} sideBar = {false}/>
            <Dropdown isMenuOpen = {isMenuOpen} name = "Pilliars" items = {aboutItems} sideBar = {false}/>
            <Dropdown isMenuOpen = {isMenuOpen} name = "Resources" items = {aboutItems} sideBar = {false}/>
            <Dropdown isMenuOpen = {isMenuOpen} name = "News" items = {aboutItems} sideBar = {false}/>
            
            <li>
            <button className="block p-4 text-gray-900 rounded md:w-max align-middle text-center md:shadow-[#8bbfe2] md:shadow-lg md:py-3 md:px-8 text-white md:bg-[#21618c]">
                # Contact
            </button>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;