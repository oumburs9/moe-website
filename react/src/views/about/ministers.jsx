import React from 'react';

import samuelImage from '../../assets/whoiswho/samuel.jpg';
import Titles from '../../components/title.component';


//   import ministersData from './ministers.json';

const ministersData = {
    "ministers": [
      {
        "image": "https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg",
        "title": "Minister",
        "name": "H.E Pro. Birhanu Nega",
        "department": "Ministry of Education"
      },
      {
        "image": samuelImage,
        "title": "STATE MINISTER",
        "name": "H.E. Dr. Samuel Kifle (PhD)",
        "department": "Higher Education Sector"
      },
      {
        "image": "https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-33-45_1634042442.jpg",
        "title": "STATE MINISTER",
        "name": "H.E Dr. Fanta Mandefro (PhD)",
        "department": "General Education Sector"
      }
    ]
  }
  // ...
  
  const OurMinisters = () => {
    return (
      <div className="relative py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 container max-w-9xl">
          <Titles title={"Our Ministers"} />
          <div className="grid mx-auto md:mx-10 max-w-md grid-cols-1 mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 lg:gap-x-28 gap-y-10 ">
            {ministersData.ministers.map((minister, index) => (
              <div key={index} className="rounded flex flex-col mx-auto">
                <div className="rounded-xl overflow-hidden w-96 md:w-80 lg:96 relative drop-shadow-xl">
                  <img
                    src={minister.image}
                    alt=""
                    className="object-center object-cover h-[30rem] md:w-80 lg:96"
                  />
                </div>
                <div className="px-2">
                  <p className="text-left text-xs font-bold text-blue-600 uppercase mt-4 tracking-wider">
                    {minister.title}
                  </p>
                  <p className="text-left text-xl font-bold">
                    {minister.name}
                  </p>
                  <p className="text-left text-gray/90 text-xs tracking-wider">
                    {minister.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default OurMinisters;
    