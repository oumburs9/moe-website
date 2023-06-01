

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
      imageSrc: lipImage,
      alt: 'Image 1',
      content:
        'A technical working group has been formed to assist in the construction and operationalization of the National Reference Laboratory Complex',
      date: 'May 09, 2023',
    },
    {
      id: 2,
      imageSrc: lipImage,
      alt: 'Image 1',
      content:
        'A technical working group has been formed to assist in the construction and operationalization of the National Reference Laboratory Complex',
      date: 'May 09, 2023',
    },
    {
      id: 3,
      imageSrc: lipImage,
      alt: 'Image 1',
      content:
        'A technical working group has been formed to assist in the construction and operationalization of the National Reference Laboratory Complex',
      date: 'May 09, 2023',
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
              <div className="relative">
                <img
                  src={item.imageSrc}
                  alt={item.alt}
                  className="mb-4"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  
                />
                {hoveredImage === item.id && (
                  <div onMouseLeave={handleMouseLeave} className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-blue-500 bg-opacity-50 transition-transform slide-in-from-top duration-700">
                    <FontAwesomeIcon icon={faFileText} className="text-red-500 text-4xl" />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores suscipit, quo voluptatem
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


<div className="flex flex-row justify-center content-center shadow-2xl pt-14 pb-4 bg-white mb-4 mx-28">
      <div className="p-4">
        <h3 className="font-bold text-blue-400 text-lg">Directorates</h3>
        <ul className="list-disc pl-6 text-blue-400">
          {directorates.map((director) => (
            <li key={director}>{director}</li>
          ))}
        </ul>
        <div className="mt-4">
          <Link
            to={viewMoreLink}
            className="font-franklin text-[15px] leading-[1.75] text-blue-400"
          >
            ... View More
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-blue-400 text-lg">Directorates</h3>
        <ul className="list-disc pl-6 text-blue-400">
          {directorates.map((director) => (
            <li key={director}>{director}</li>
          ))}
        </ul>
        <div className="mt-4">
          <Link
            to={viewMoreLink}
            className="font-franklin text-[15px] leading-[1.75] text-blue-400"
          >
            ... View More
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-blue-400 text-lg">Directorates</h3>
        <ul className="list-disc pl-6 text-blue-400">
          {directorates.map((director) => (
            <li key={director}>{director}</li>
          ))}
        </ul>
        <div className="mt-4">
          <Link
            to={viewMoreLink}
            className="font-franklin text-[15px] leading-[1.75] text-blue-400"
          >
            ... View More
          </Link>
        </div>
      </div>
    </div>

    <br />



<div className="flex flex-col">
  <div className="relative h-screen ">
    <div className="h-full bg-[#f6f8f9] absolute inset-0" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }}></div>
  </div>
<div className='bg-[#f6f8f9] mb-4'>
  <div className="relative h-screen ">
    <div className="h-full bg-[#21618c] absolute inset-0 " style={{clipPath: 'polygon(0px 30%, 100% 46%, 100% 100%, 0px 100%)'}}>
      This is another div at the bottom
    </div>
  </div>
</div>

</div>

<br />

<div className="flex flex-col">
  <div className=''>
    
  </div>
</div>










     
      
    </div>

    </>
  );
};

export default Home;
