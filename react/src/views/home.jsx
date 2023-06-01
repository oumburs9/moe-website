

import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import lipImage from '../images/initiative.png';
import { Slider } from './slider/Slider';

const Home = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const imageData = [
    {
      id: 1,
      imageSrc: 'https://moe.gov.et/storage/news/333587917_1158941468123913_6021443852551221056_n_1678947552.jpg',
      alt: 'Image 1',
      content: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
      sub_content:'መጋቢት 4 /2015ዓ.ም (የትምህርት ሚኒስቴር) የወላይታ ሶዶ ዩኒቨርሲቲ በዚህ ዓመት መጨረሻ በሚሰጠው የዩኒቨርሲቲ የመውጫ ፈተና ላይ ትኩረት ሰጥቶ እየሰራ እንደሚገኝ የዩኒቨርስቲው አካዳሚክ ጉዳዮች ም/ፕሬዚዳንት ዶ/ር ሙላቱ ደያ ገልፀዋል፡፡',
      date: 'May 09, 2023',
      category:'Higher Education',
    },
    {
      id: 2,
      imageSrc: 'https://moe.gov.et/storage/news/333124552_912700833215666_4195705766598168699_n_1678947258.jpg',
      alt: 'Image 1',
      content:'“ጠንክረን በተማሪዎቹ ላይ በመስራታችን ለተከታታይ አስር ዓመታት በውጤታማነት መዝለቅ ችለናል” የወላይታ ሊቃ 2ኛ ደረጃ ትምህር ቤት ርዕሰ መምህር አቶ ማቱሳላህ፡፡',
      sub_content: 'የወላይታ ሊቃ 2ኛ ደረጃ ትምህርት ቤት ርእሰ መምህር አቶ ማቱሳላህ ጎና ጠንክረን ተማሪዎች ላይ በመስራታችን ባለፉት አስር ዓመታት በ12ኛ ክፍል ያስፈተናቸውን ተማሪዎች በሙሉ ወደ ዩኒቨርሲቲ በማስገባት በውጤታማነት መዝለቅ መቻላቸውን ገለፁ፡፡',
      date: ' Mar 07, 2023',
      category:'General Education',
    },
    {
      id: 3,
      imageSrc: 'https://moe.gov.et/storage/news/332282065_727188705617235_2661414443791959640_n_1678947162.jpg',
      alt: 'Image 1',
      content:'የአርባምንጭ ዩኒቨርሲቲ ለጋሞ ባይራ አዳሪ ትምህርት ቤት ግብዓት ለማሟላት እየሰራ ነው።',
      sub_content:'የካቲት 27/2015ዓም .(የትምህርት ሚኒስቴር ) የአርባምንጭ ዩኒቨርሲቲ ከ16 ሚሊየን ብር በላይ ወጪ በማድረግ ለጋሞ ባይራ አዳሪ ሁለተኛ ደረጃ ትምህርት ቤት የትምህርት ግብዓቶችን የሟሟላት ስራ እየሰራ እንደሚገኝ ገልጿል፡፡',
      date: ' Mar 06, 2023',
      category:'Higher Education',
    },
    // Add more image data objects here as needed
  ];

    const directorates = [
    'Maternal & Child Health',
    'Disease Prevention & Control'
  ];

  const viewMoreLink = '/site/articles-3-col';

  return (
    <>
{/* <Outlet/> */}
      <Slider/>
      <div className="flex flex-col content-center justify-center">
        <div>
          <h3 className="text-center font-sans text-5xl text-blue-700 leading-tight">ዜና | News</h3>
        </div>
        <br />
        <div className="flex content-center justify-center mx-10">
          {imageData.map((item) => (
            <div key={item.id} className="w-1/3 p-4">
              <span className='p-1  bg-yellow-500'>{item.category}</span>
              <div className="relative">
                <img
                  src={item.imageSrc}
                  alt={item.alt}
                  className="mb-4 h-56"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  
                />
                {hoveredImage === item.id && (
                  <div onMouseLeave={handleMouseLeave} className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-blue-500 bg-opacity-50 transition-transform slide-in-from-top duration-700">
                    <FontAwesomeIcon icon={faFileText} className="text-blue-300 text-4xl" />
                  </div>
                )}
              </div>
              <Link
                to="/"
                className="text-[#21618c] font-medium leading-6 text-2xl font-franklin hover:underline"
              >
                {item.content}
              </Link>
              <p className="text-gray-500 mt-4">
                {item.sub_content}
              </p>
              <div className="mt-4">
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
    <div className="block text-center m-32">
      <Link
        to="/site/articles-3-col"
        className="font-franklin text-[15px] leading-[1.75] bg-[#21618c] p-4 text-xs font-bold uppercase px-14 py-17 text-white shadow-xl"
      >
        View More
      </Link>
    </div>
    <br />


<Ministers/>









     
      
    </div>

    </>
  );
};

export default Home;


import React, {  useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

function Ministers() {
  const slides = [
    {
      id: 1,
      url: 'https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg',
      name: 'H.E Pro. Birhanu Nega',
      title: 'MINISTER',
      desc: 'Description about the minister should be included here ......(H.E Pro. Birhanu Nega)'
    },
    {
      id: 2,
      url: 'https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-45-11_1634042555.jpg',
      name: 'Samuel Kifle (PhD)',
      title: 'State Ministers',
      desc: 'Description about the state minister should be included here ......(Samuel Kifle (PhD))'
    },
    {
      id: 3,
      url: 'https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-33-45_1634042442.jpg',
      name: 'Fanta Mandefro (PhD)',
      title: 'State Ministers',
      desc: 'Description about the minister should be included here ......(Fanta Mandefro (PhD))'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  let interval;

  const goToSlide = (slideIndex) => {
    clearInterval(interval);
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="flex max-md:flex-col justify-center w-full relative group bg-slate-50 h-auto my-10 px-4">
      <div className="md:flex md:flex-col md:w-full w-auto top-4 md:pt-32 md:space-x-4 max-md:mx-12" style={{ fontFamily: 'Libre Franklin, Helvetica Neue, Arial, sans-serif', fontSize: '15px', lineHeight: '1.75', fontWeight: '500', backgroundColor: 'transparent', color: '#21618c' }}>


        <div className="md:flex md:flex-col items-start m-auto">
          <h3 className=" text-xl font-semibold cursor-pointer text-[#21618c]">{slides[currentIndex].name}</h3>
          <span className=''>{slides[currentIndex].title}</span>

          <div className="flex md:flex-row items-start max-md:flex-col max-md:w-full">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="md:w-96 h-80 mr-8 bg-center max-md:w-full bg-cover duration-500 mb-4 max-md:mb-0"
            ></div>
            <div className="flex flex-col items-start ml-8">
              <p className="font-franklin text-lg text-[#21618c] mb-4">{slides[currentIndex].desc}</p>
              <div className="block text-center my-4">
                <Link
                  to="/site/articles-3-col"
                  className="font-franklin text-[15px] leading-[1.75] bg-[#21618c] p-4 text-xs font-bold uppercase px-14 py-17 text-white shadow-xl"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row md:justify-center  md:bg-[#21618c] md:shadow-md max-md:w-full top-4 py-6 text-center max-md:text-left">
          {slides.map((slide, slideIndex) => (
            <ul
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-[16px] cursor-pointer  md:text-white flex m-auto max-md:w-full"
            >
              <li className="flex items-center  max-md:w-full">
                <BsChevronCompactRight className="mr-2" />
                <span>{slide.name}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default Ministers;