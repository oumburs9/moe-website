import React from 'react';
import ethiopia from "../../assets/images/ethiopia.png";






// Footer Component
const Footer = () => {
  return (
    <footer className="relative footer bg-gradient-to-br from-white via-white to-blue-600/40 text-gray-500 dark:text-gray-200 px-4 h-[90vp]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-3 md:col-span-12">
                  <div className="relative flex flex-col h-40 justify-center">
                    <div className="absolute inset-0 w-40 flex items-end rotate-90">
                      <div className="bg-yellow-500 h-3.5 w-3/12 rounded-l-full"></div>
                      <div className="bg-red-500 h-3.5 w-4/12"></div>
                      <div className="bg-sky-500 h-3.5 w-2/12"></div>
                      <div className="bg-blue-500 h-3.5 w-3/12 rounded-r-full"></div>
                    </div>
                    {/* logo */}
                    <img
                    src="https://moe.gov.et/logom.png"
                    className="h-36  w-44 pl-8"
                    alt="Moe Logo" />
                  </div>
                  <p className="mt-6 text-gray-600 max-w-xs">
                    FDRE Ministry of Education is a Governmental Organization
                    Headquartered in Arada sub-city, Addis Ababa, Ethiopia
                  </p>
                  <SocialLinks /> 
                </div>

                <div className="lg:col-span-3 md:col-span-4 mt-5">
                  <h5 className="tracking-[1px] text-gray-600 font-semibold ml-1">Menu</h5>
                  <ul className="list-none footer-list mt-6">
                    <FooterLink name="Home" link="#" />
                    <FooterLink name="Mission, Vision & Values" link="#" />
                    <FooterLink name="Organizational Structure" link="#" />
                    <FooterLink name="Power and Duties" link="#" />
                    <FooterLink name="Who Is Who" link="#" />
                    <FooterLink name="Partners & Stakeholders" link="#" />
                    <FooterLink name="History" link="#" />
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4 mt-5">
                  <h5 className="tracking-[1px] text-gray-600 font-semibold">Useful Links</h5>
                  <ul className="list-none footer-list mt-6">
                    <FooterLink name="Policies & Strategies" link="#" />
                    <FooterLink name="Guidelines & Standards" link="#" />
                    <FooterLink name="Plans & Reports" link="#" />
                    <FooterLink name="Annual Abstract" link="#" />
                    <FooterLink name="Digital Library & E-learning" link="#" />
                    <FooterLink name="Notices" link="#" />
                    <FooterLink name="News" link="#" />
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4 mt-5">
                  <h5 className="tracking-[1px] text-gray-600 font-semibold">Contact Us</h5>
                  <p className="mt-6 text-gray-500">
                    We value your input and want to hear from you. If you have any questions or feedback about our services, please contact us.
                  </p>
                  <p className="mt-6 text-gray-600 font-semibold">Working Hours</p>
                  <p className="text-gray-500">Monday to Friday <br/> 2:30 - 11:00 local time</p>

                  {/* Assuming the user is not authenticated */}
                  <a href="/contact-us" class="grid grid-cols-1 mt-5">
                                <button type="button" id="submitsubscribe" name="send"
                                    class="py-3 btn bg-[#2048A1] hover:bg-[#2048A1] border-[#2048A1] hover:border-[#2048A1] text-white rounded-xl shadow-lg hover:shadow-[#2048A1]">
                                    Contact Us
                                </button>
                    </a>
                  {/* Assuming the user is authenticated */}
                  {/* <a href="/register" className="grid grid-cols-1 mt-5">
                    <button
                      type="button"
                      id="submitsubscribe"
                      name="send"
                      className="py-3 btn bg-red- hover:bg-red-500 border-red hover:border-red-500 text-white rounded-xl shadow-lg hover:shadow-red-500"
                    >
                      Dashboard
                    </button>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-0 backdrop:blur-lg border-t border-light/40 ">
          <div className="py-[10px] container mx-auto">
            <p className="text-sm flex mb-0 w-full justify-center lg:justify-end items-center">
              © {new Date().getFullYear()} FDRE Ministry of Education
              <span>
                <img src={ethiopia} alt="ethiopian flag" srcSet="" className="w-5 mx-1" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// FooterLink Component
const FooterLink = ({ name, link }) => {
  return (
    <li className="mt-[10px]">
      <a
        href={link}
        className="flex items-center text-gray-500 hover:text-red hover:font-bold transition duration-500 ease-in-out"
      >
        <i className="flex fi fi-rr-angle-small-right mr-1"></i>
        {name}
      </a>
    </li>
  );
};

// SocialLinks Component
const SocialLinks = () => {
  return (
    <ul className="list-none mt-6 flex space-x-2 items-center">
      <li className="inline hover:-translate-y-1 transition-all saturate-50 hover:saturate-100">
        <a
          href="#"
          target="_blank"
          className="btn btn-icon btn-sm rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
            alt="Facebook"
            title="Facebook"
            width="64"
            height="64"
            className="lzy lazyload--done w-10"
            srcSet="https://cdn-icons-png.flaticon.com/128/5968/5968764.png 4x"
          />
        </a>
      </li>
      {/* Add similar code for other social links */}
      {/* {{-- Telegram --}} */}
    <li class="inline hover:-translate-y-1 transition-all saturate-50 hover:saturate-100">
        <a href="#" target="_blank"
            class="btn btn-icon btn-sm rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968804.png"
                data-src="https://cdn-icons-png.flaticon.com/128/5968/5968804.png" alt="Telegram " title="Telegram "
                width="64" height="64" class="lzy lazyload--done w-10"
                srcset="https://cdn-icons-png.flaticon.com/128/5968/5968804.png 4x"/>
        </a>
    </li>

    {/* {{-- Youtube --}} */}
    <li class="inline hover:-translate-y-1 transition-all saturate-50 hover:saturate-100">
        <a href="#" target="_blank" class="">
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
                data-src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="Youtube " title="Youtube "
                width="64" height="64" class="lzy lazyload--done w-10"
                srcset="https://cdn-icons-png.flaticon.com/128/1384/1384060.png 4x"/>
        </a>
    </li>

    {/* {{-- Tiktok --}} */}
    <li class="inline hover:-translate-y-1 transition-all saturate-50 hover:saturate-100">
        <a href="#" target="_blank"
            class="btn btn-icon btn-sm rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
            <img src="https://cdn-icons-png.flaticon.com/128/2504/2504942.png"
                data-src="https://cdn-icons-png.flaticon.com/128/2504/2504942.png" alt="Tiktok " title="Tiktok "
                width="64" height="64" class="lzy lazyload--done w-9"
                srcset="https://cdn-icons-png.flaticon.com/128/2504/2504942.png 4x"/>
        </a>
    </li>

    {/* {{-- Twitter --}} */}
    <li class="inline hover:-translate-y-1 transition-all saturate-50 hover:saturate-100">
        <a href="#" target="_blank"
            class="btn btn-icon btn-sm rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
            <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
                data-src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Twitter " title="Twitter "
                width="64" height="64" class="lzy lazyload--done w-10"
                srcset="https://cdn-icons-png.flaticon.com/128/733/733579.png 4x"/>
        </a>
    </li>
    </ul>
  );
};

export default Footer;
