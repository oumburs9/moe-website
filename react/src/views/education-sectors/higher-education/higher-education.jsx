import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../../components/education-card.componet';
import { fetchHigherEducations } from '../../../redux/education/higherEducationSlice ';
import Spinner from '../../../components/base/spinner';

const HigherEducation = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('amharic');
    const { higherEducations, loading, error } = useSelector(state => state.higherEducation);

    const dispatch  = useDispatch()

    useEffect(() => {
      dispatch(fetchHigherEducations())
    },[])


    const translationsHigherEducations ={ 
        english: [ 
              
          {
          title: 'Higher Education Curriculum and Programs Desk',
          leader:'Full name of the head of the department',
          paragraph:'The function and responsibility of the work unit',
          descriptions: [
            '• Monitors and evaluates the implementation of programs and curricula based on higher education policy research.',
            '• Coordinates the preparation of curricula in which indigenous knowledge is included, and monitors its implementation.',
            '• Identifies, coordinates, directs and monitors implementation of programs and curricula based on the needs of the market and industry.',
            '• It conducts scientific research to ensure that higher education programs and curriculum delivery methods are implemented in a manner that takes into account the current situation and brings about appropriate competence.',
            '• Coordinates and directs the preparation of bachelor\'s, master\'s and doctoral degree standards for higher education programs.',
            '• Ensures the registration of programs opened and newly opened in higher education institutions.',
            '• Higher education programs and curricula are evaluated by internal and external experts.',
            '• Coordinates higher education programs and curriculum to be aligned with the National Higher Education Qualification Framework.',
            '• Ensures that higher education programs and curriculum design follows the criteria of the Accreditation Strategy.',
            '• Generates policy ideas by conducting studies to make the work of programs and curriculum effective, and monitors its implementation.',
            '• Applied science universities will jointly design and implement a dual degree curriculum with the industry and coordinate research and development.',
            '• It prepares a strategy for our country\'s higher education institutions to jointly open programs of social and economic importance to the country with famous foreign institutions.',
            '• Develops guidelines for applied science universities to jointly design and implement a joint degree curriculum with industry.',
            '• The curricula of each program will develop learning competencies standards based on the needs of the industry.',
            '• Develops training guidelines for implementation of teaching modalities of higher education programs and curricula, provides training.',
            '• Ensures the design, provides necessary monitoring and support, and provides feedback.',
            '• Monitors and supports the timely registration of all programs opened and opened in higher education institutions.',
             
          ]
        }, 
         
      
       ],
      
        amharic : [ 
              
        {
        title: 'የከፍተኛ ትምህርት ሥርዓተ-ትምህርትና ኘሮግራሞች ዴስክ',
        leader:'የሥራ ክፍሉ ኃላፊ ሙሉ ስም',
        paragraph:'የሥራ ክፍሉ ተግባርና ኃላፊነት',
        descriptions: [
         ' • የከፍተኛ ትምህርት ፖሊሲ ጥናትና ምርምርን መሰረት በማድረግ የፕሮግራሞችን እና የስርዓተ-ትምህርት አፈጻጸሞችን ይከታተላል እና ይገመግማል።',
         ' • አገር በቀል ዕውቀት የተካተተበትን ሥርዓተ ትምህርት ዝግጅት ያስተባብራል፣ አተገባበሩንም ይከታተላል።',
         ' • የገበያ እና የኢንዱስትሪ ፍላጎቶችን መሰረት በማድረግ የፕሮግራሞችን እና ስርአተ ትምህርቶችን ይለያል፣ ያስተባብራል፣ ይመራል እና ይከታተላል።',
         ' • የከፍተኛ ትምህርት መርሃ ግብሮች እና የስርዓተ ትምህርት አሰጣጥ ዘዴዎች ወቅታዊውን ሁኔታ ባገናዘበ መልኩ እንዲተገበሩ እና ተገቢውን ብቃት እንዲያመጡ ሳይንሳዊ ጥናቶችን ያደርጋል።',
         ' • ለከፍተኛ ትምህርት መርሃ ግብሮች የባችለር፣ ማስተርስ እና የዶክትሬት ዲግሪ ደረጃዎችን በማዘጋጀት ያስተባብራል፣ ይመራል።',
         ' • በከፍተኛ ትምህርት ተቋማት የተከፈቱ እና አዲስ የተከፈቱ ፕሮግራሞችን መመዝገቡን ያረጋግጣል።',
         ' • የከፍተኛ ትምህርት መርሃ ግብሮች እና ስርአተ ትምህርቶች የሚገመገሙት በውስጥ እና በውጭ ባለሙያዎች ነው።',
         ' • የከፍተኛ ትምህርት ፕሮግራሞችን እና ስርአተ ትምህርትን ከሀገራዊ የከፍተኛ ትምህርት የብቃት ማዕቀፍ ጋር እንዲጣጣሙ ያስተባብራል።',
         ' • የከፍተኛ ትምህርት ፕሮግራሞች እና የስርዓተ-ትምህርት ንድፎች የእውቅና ስትራቴጂ መስፈርቶችን የተከተሉ መሆናቸውን ያረጋግጣል።',
         ' • የፕሮግራሞችን እና የስርዓተ ትምህርቱን ስራ ውጤታማ ለማድረግ ጥናቶችን በማካሄድ የፖሊሲ ሃሳቦችን ያመነጫል፣ አተገባበሩንም ይከታተላል።',
         ' • የተግባር ሳይንስ ዩኒቨርሲቲዎች ከኢንዱስትሪው ጋር ባለሁለት ዲግሪ ሥርዓተ ትምህርት ቀርጾ ወደ ተግባር ገብተው ምርምርና ልማትን ያስተባብራሉ፤',
         ' • የሀገራችን ከፍተኛ የትምህርት ተቋማት ለሀገር ማህበራዊና ኢኮኖሚያዊ ጠቀሜታ ያላቸውን ታዋቂ የውጭ ተቋማት በጋራ የሚከፍቱበትን ስትራቴጂ አዘጋጅቷል።',
         ' • የተግባር ሳይንስ ዩኒቨርሲቲዎች ከኢንዱስትሪ ጋር በጋራ የዲግሪ ሥርዓተ ትምህርትን በጋራ ለመንደፍ እና ለመተግበር መመሪያዎችን ያወጣል።',
         ' • የእያንዳንዱ ፕሮግራም ሥርዓተ-ትምህርት የኢንዱስትሪውን ፍላጎት መሰረት በማድረግ የመማር ብቃት ደረጃዎችን ያዳብራል።',
         ' • የከፍተኛ ትምህርት ፕሮግራሞችን የማስተማር ዘዴዎችን እና ሥርዓተ ትምህርትን ተግባራዊ ለማድረግ የሥልጠና መመሪያዎችን ያዘጋጃል፣ ሥልጠና ይሰጣል፡-',
         ' • ዲዛይኑን ያረጋግጣል፣ አስፈላጊውን ክትትል እና ድጋፍ ይሰጣል እንዲሁም ግብረመልስ ይሰጣል።',
         ' • በከፍተኛ ትምህርት ተቋማት የተከፈቱ እና የተከፈቱ ፕሮግራሞችን በወቅቱ እንዲመዘገቡ ይከታተላል እና ይደግፋል።',
         
        ]
      },    
      
      ]};
   

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
      };
      const educationData = higherEducations[0]?.[selectedLanguage] || []

      const data = educationData;
      // const data = translationsHigherEducations[selectedLanguage];
    
      return (
        <><nav>
          <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
            <li className='flex gap-2'>
              <a href="#">Home</a>
              <span>{">"}</span>
            </li>
            <li>Higher-Education</li>
          </ol>
        </nav><div>
            <div className='flex pl-14 py-10  bg-[#21618c] text-2xl font-bold text-white'>Higher Education Development Program Sector</div>
            <div className='flex flex-row content-left justify-evenly mt-4'>
              <button className='text-xs font-mono mb-2' onClick={() => handleLanguageChange('english')}>
                English
              </button>
              <button className='text-xs font-mono mb-2' onClick={() => handleLanguageChange('amharic')}>
                Amharic
              </button>
            </div>
            {loading ? (
              <div className='flex items-center justify-center'>
                <Spinner className="w-16 h-16" />
              </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
            <Card data={data} />
      )}
          </div></>
      );
}

export default HigherEducation;