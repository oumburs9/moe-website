import React from 'react';
import Titles from '../../components/title.component';
import Card from '../../components/news-card.component';

const NewsHomepage = () => {
  const imageData = [
    {
      id: 1,
      image: 'https://moe.gov.et/storage/news/333587917_1158941468123913_6021443852551221056_n_1678947552.jpg',
      views: 5678,
      title: 'የወላይታ ሶዶ ዩኒቨርሲቲ የዩኒቨርሲቲ መውጫ ፈተናን ለመስጠት ትኩረት ሰጥቶ እየሰራ እንደሚገኝ ገለፀ፡፡',
      paragraph:'መጋቢት 4 /2015ዓ.ም (የትምህርት ሚኒስቴር) የወላይታ ሶዶ ዩኒቨርሲቲ በዚህ ዓመት መጨረሻ በሚሰጠው የዩኒቨርሲቲ የመውጫ ፈተና ላይ ትኩረት ሰጥቶ እየሰራ እንደሚገኝ የዩኒቨርስቲው አካዳሚክ ጉዳዮች ም/ፕሬዚዳንት ዶ/ር ሙላቱ ደያ ገልፀዋል፡፡',
      date: 'May 09, 2023',
      category:'Higher Education',
    },
    {
      id: 2,
      image: 'https://moe.gov.et/storage/news/333124552_912700833215666_4195705766598168699_n_1678947258.jpg',
      views: 5678,
      title:'“ጠንክረን በተማሪዎቹ ላይ በመስራታችን ለተከታታይ አስር ዓመታት በውጤታማነት መዝለቅ ችለናል” የወላይታ ሊቃ 2ኛ ደረጃ ትምህር ቤት ርዕሰ መምህር አቶ ማቱሳላህ፡፡',
      paragraph: 'የወላይታ ሊቃ 2ኛ ደረጃ ትምህርት ቤት ርእሰ መምህር አቶ ማቱሳላህ ጎና ጠንክረን ተማሪዎች ላይ በመስራታችን ባለፉት አስር ዓመታት በ12ኛ ክፍል ያስፈተናቸውን ተማሪዎች በሙሉ ወደ ዩኒቨርሲቲ በማስገባት በውጤታማነት መዝለቅ መቻላቸውን ገለፁ፡፡',
      date: ' Mar 07, 2023',
      category:'General Education',
    },
    {
      id: 3,
      image: 'https://moe.gov.et/storage/news/332282065_727188705617235_2661414443791959640_n_1678947162.jpg',
      views: 5678,
      title:'የአርባምንጭ ዩኒቨርሲቲ ለጋሞ ባይራ አዳሪ ትምህርት ቤት ግብዓት ለማሟላት እየሰራ ነው።',
      paragraph:'የካቲት 27/2015ዓም .(የትምህርት ሚኒስቴር ) የአርባምንጭ ዩኒቨርሲቲ ከ16 ሚሊየን ብር በላይ ወጪ በማድረግ ለጋሞ ባይራ አዳሪ ሁለተኛ ደረጃ ትምህርት ቤት የትምህርት ግብዓቶችን የሟሟላት ስራ እየሰራ እንደሚገኝ ገልጿል፡፡',
      date: ' Mar 06, 2023',
      category:'Higher Education',
    },
    {
      id: 4,
      image: 'https://moe.gov.et/storage/news/332282065_727188705617235_2661414443791959640_n_1678947162.jpg',
      views: 5678,
      title:'የአርባምንጭ ዩኒቨርሲቲ ለጋሞ ባይራ አዳሪ ትምህርት ቤት ግብዓት ለማሟላት እየሰራ ነው።',
      paragraph:'የካቲት 27/2015ዓም .(የትምህርት ሚኒስቴር ) የአርባምንጭ ዩኒቨርሲቲ ከ16 ሚሊየን ብር በላይ ወጪ በማድረግ ለጋሞ ባይራ አዳሪ ሁለተኛ ደረጃ ትምህርት ቤት የትምህርት ግብዓቶችን የሟሟላት ስራ እየሰራ እንደሚገኝ ገልጿል፡፡',
      date: ' Mar 06, 2023',
      category:'Higher Education',
    },
  ];

  
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

          <div className="grid max-w-md grid-cols-1 mx-auto md:mx-20 mt-12 gap-x-10 gap-y-12 mb-10 sm:max-w-full sm:grid-cols-1 lg:grid-cols-3">
            {imageData.map((jsonData, index) => (
              index <= 2 ?
               (<Card data={jsonData}/>): ''
            ))}
          </div>
        </div>
  
    </>
  );
};

export default NewsHomepage;










