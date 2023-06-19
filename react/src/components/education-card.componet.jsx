import React, { useState } from 'react';

const Card = ({ data }) => {
  return (
    <>
      {data.map((cardData, index) => (
        <CardItem key={index} cardData={cardData} />
      ))}
    </>
  );
};

const CardItem = ({ cardData }) => {
  const [showAllDescriptions, setShowAllDescriptions] = useState(false);
  const limitedDescriptions = showAllDescriptions
    ? cardData.descriptions
    : cardData.descriptions.slice(0, 2);

  const toggleAllDescriptions = () => {
    setShowAllDescriptions((prev) => !prev);
  };

  return (
    <div className="bg-white shadow-2xl hover:shadow-lg rounded-xl m-6 p-6">
      <h1 className="text-2xl font-bold mb-2 text-[#21618c]">{cardData.title}</h1>
      <h2 className="text-lg font-medium mb-4 text-[#21618c]">{cardData.leader}</h2>
      <h2 className="text-lg font-medium mb-4 text-[#21618c]">{cardData.paragraph}</h2>

      <div className="mt-4 ml-2 md:ml-14">
        {limitedDescriptions.map((description, index) => (
          <p key={index} className="block text-[#21618c] mb-2">
            {description}
          </p>
        ))}
        {cardData.descriptions.length > 2 && (
          <div className="flex justify-end mt-4 ml-2 md:ml-14">
            <button
              className="text-sm text-slate-600 hover:text-slate-800 focus:outline-none"
              onClick={toggleAllDescriptions}
            >
              {showAllDescriptions ? 'See Less' : 'See More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;


