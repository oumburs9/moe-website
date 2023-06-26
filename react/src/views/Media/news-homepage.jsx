import React from 'react';
import Titles from '../../components/title.component';
import Card from '../../components/news-card.component';
import { newsData } from './news';

const NewsHomepage = () => {

  const jsonData1 = {
    image: 1234,
    views: 5678,
    title: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
    paragraph: 'መጋቢት 4 /2015ዓ.ም (የትምህርት ሚኒስቴር) የወላይታ ሶዶ ዩኒቨርሲቲ በዚህ ዓመት መጨረሻ በሚሰጠው የዩኒቨርሲቲ የመውጫ ፈተና ላይ ትኩረት ሰጥቶ እየሰራ እንደሚገኝ የዩኒቨርስቲው አካዳሚክ ጉዳዮች ም/ፕሬዚዳንት ዶ/ር ሙላቱ ደያ ገልፀዋል፡፡',
    word: 'Local',
    category: 'local',
    date: {
      month: 'June',
      year: '2023',
    },
  };
  const jsonData2 = {
    title: 'ዜና | News',
    subtitle: 'This is a sample subtitle.',
    
  };

  
  return (
    <>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 container">
          
          <Titles title={jsonData2.title} subtitle={jsonData2.subtitle}/>

          <div className="grid max-w-md grid-cols-1 mx-auto md:mx-20 mt-12 gap-x-10 gap-y-8 mb-10 sm:max-w-full sm:grid-cols-1 lg:grid-cols-3">
            {newsData.map((jsonData, index) => (
              index <= 2 ?
               (<Card data={jsonData}/>): ''
            ))}
          </div>
        </div>
  
    </>
  );
};

export default NewsHomepage;










