import React, { useState } from 'react'
import Card from '../../../components/card.componet';

const GeneralEducation = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('amharic');

    const translationsGeneralEducations ={ 
        english: [ 
              
          {
          title: 'Educational Programs and Quality Improvement Desk',
          leader:'Full name of the head of the department',
          paragraph:'The function and responsibility of the work unit',
          descriptions: [
            '• Evaluates the development of capacity in the teaching and learning process and provides policy ideas for improvement, provides leadership to implement the improved work, and monitors its performance.',
            '• Develops, approves, and monitors implementation of evaluation criteria to evaluate the implementation of educational programs and quality.',
            '• Designs a strategy for appropriate and standardized school-level assessment processes, provides leadership for implementation, and monitors performance.',
            '• Prepares training documents on the implementation of educational programs and research, provides training, monitors its implementation, and identifies the benefits obtained.',
            '• Accelerated School Transformation provides leadership, coordinates, evaluates performance, provides feedback, and prepares reports for schools to improve their standards by developing strategies that are possible.',
            '• Identifies the focus areas that contribute to the high academic performance of students, and provides guidance for implementation.',
            '• Provides leadership for the preparation of School Mapping, which enables the distribution of school facilities and resources, and ensures its implementation.',
            
          ]
        }, 
          {
          title: 'Financial executive',
          leader:'Full name of the head of the department',
          paragraph:'The function and responsibility of the work unit',
          descriptions: [
           ' • Develops operational systems to help ensure financial transparency and accountability, and monitors\', performance.',
           ' • Prepares cash flow from last year\'s performance and cash requirement, monitors performance.',
           ' • Monitors the cash and bank accounts regularly and makes the financial capacity of the school known.',
           ' • Controls that the office\'s financial activities are used for the intended purpose and properly recorded, and prepares statements that help in planning and budgeting.',
           ' • According to the responsibilities given by the law, the office monitors and ensures that the collected revenues are properly collected and transferred to the bank every day.',
           ' • According to the delegation of authority, the office examines the importance of different payment requests for salary and operation and approves the payment checks and orders with his signature.',
           ' • Ensures the accuracy and correctness of the bank account and records of the manufacturer.',
           ' • Monitors the timely payment of various government agricultural taxes and other accounts payable to the concerned parties.',
           ' • Proclaim accounting activity registration by Finance; Monitors and verifies compliance with regulations and guidelines.',
           ' • Prepare for the audit investigation and respond to inquiries and findings during the audit.',
           ' • Controls the registration of the general ledger and receipt ledgers based on the approved budget.',
           ' • They will receive training so that they can properly use technologically updated financial systems.',
            
            
          ],
        }, 
          {
          title: 'Executive of strategic affairs',
          leader:'Full name of the head of the department',
          paragraph:'The function and responsibility of the work unit',
          descriptions: [
           ' • Generates proposals for policy strategy and program packages and projects; Manages document preparation and revision and distributes approved documents to relevant parties.',
           ' • Updates the institution\'s information management and use system to make it efficient and effective.',
           ' • Designs and implements a result-based measurement system by preparing development indicators for the various departments of the institution.',
           ' • Prepares the office\'s strategic and annual plan; He makes it ready. He is in charge of monitoring and support, evaluation and feedback activities, coordinates, and approves by the supervisor and makes it work.',
           ' • Monitors and supports that the budget allocated for programs and projects is spent for the intended purpose.',
           ' • Monitors, supports and delivers the allocated budget for the intended purpose.',
           ' • Prepares and evaluates budget utilization reports, presents them to relevant parties, and provides feedback.',
           ' • Prepared protocol agreements will be verified by the head of the school and distributed to those concerned.',
           ' • Ensures the accuracy of the project plan document based on the strategic plan of the country\'s development direction and the work characteristics of the work units.',
           ' • Regarding the work of the office, it makes and follows working relationships with governmental and non-governmental development organizations.',
           ' • Evaluates mid-term and final performance of programs and projects.',
           ' • Negotiates, coordinates, monitors and verifies the implementation of project options with development partners.',
            
          ],
        }, 
          {
          title: 'Language and related courses desk',
          leader:'Full name of the head of the department',
          paragraph:'The function and responsibility of the work unit',
          descriptions: [
           ' • Monitors the ethical conduct of research activities.',
           ' • Coordinates the development of policies and strategies for curriculum research',
           ' • Coordinates and monitors indigenous knowledge and values to be included in the curriculum by research and study.',
           ' • Coordinates research to ensure that the curriculum takes into account the country\'s cultural, social and economic trends and needs.',
           ' • it gives training and awareness manuals for teacher education colleges on teacher education curriculum; it prepares them. Coordinates and monitors trainings.',
           ' • Conducts a case study on the relationship between non-formal education of adults and general education, and makes corrective actions.',
           ' • Prepared primary and secondary level learning competencies / Competencies / content flows, programs will be delivered to regional and city administrations.',
           ' • Coordinates and directs the monitoring and evaluation of the implementation of the curriculum in accordance with the curriculum standards set at the federal level.',
           ' • Coordinates to ensure that the prepared textbooks are in accordance with the prepared curriculum.',
           ' • Coordinates quality testing of the prepared textbooks in selected schools before full implementation.',
           ' • Coordinates the quality of the prepared textbooks by involving all ministries, regions and relevant stakeholders.',
            
            
          ],
        }, 
      
       ],
    
        amharic : [ 
              
        {
        title: 'የትምህርት ፕሮግራሞችና ጥራት ማሻሻል ዴስክ',
        leader:'የሥራ ክፍሉ ኃላፊ ሙሉ ስም',
        paragraph:'የሥራ ክፍሉ ተግባርና ኃላፊነት',
        descriptions: [
          '• በመማር ማስተማሩ ሂደት አቅም እየጎለበተ መሄዱን በመገምገም የማሻሻያ የፖሊሲ ሃሰብ ያቀርባል፣ በተሻሻለው መሰራት ተግባራዊ እንዲሆን አመራር ይሰጣል፣ አፈጻጸሙን ይከታተላል፡፡',
          '• የትምህርት ፕሮግራሞችና ጥራት አተገባበር ለመገምገም የሚያስችል የመገምገሚያ መስፈርቶች እንዲዘጋጁ ያደርጋል፣ ያጸድቃል፣ ተግባራዊነቱን ይከታተላል፡፡',
          '• በትምህርት ቤት ደረጃ የሚሰጡ የምዘና ሂደቶች በተገቢው እና ደረጃቸውን የጠበቁ እንዲሆኑ ስልት ይቀይሳል፣ እንዲተገበር አመራር ይሰጣል፣ አፈጻጸሙን ይከታተላል፡፡',
          '• በትምህርት ፕሮግራሞችና ጥናት አተገባባር ዙሪያ የስልጠና ሰነዶች ያዘጋጃል ስልጠና ይሰጣል፣ ተግባራዊነቱን ይከታተላል፣ ያስገኙትን ፋይዳ ይለያል፡፡',
          '• የትምህርት ቤቶችን ደረጃ በተፋጠነ መንገድ ማሻሻል (Accelerated School Transformation) የሚቻልባቸውን ስልቶች በመዘርጋት ትምህርት ቤቶች ደረጃቸውን እንዲያሻሽሉ አመራር ይሰጣል፣ ያስተባብራል፣ አፈጻጸሙን ይገመግማል፣ ግብረ መልስ ይሰጣል፣ ሪፖርት ያዘጋጃል፣',
          '• ለተማሪዎች የትምህርት ውጤት ከፍተኛ መሆን አስተዋፅዖ የሚያደርጉትን የትኩረት ጉዳዮች (Focus Areas) ይለያል፣ እንዲተገበር አመራር ይሰጣል፡፡',
          '• የትምህርት ቤት ፋሲሊቲንና ግብዓቶችን ማሰራጨት የሚያስችል የትምህርት ቤቶችን አቀማመጥ ለመገምገም የሚያስችል መረጃዎች እንዲሆኑ ስልት ይቀይሳል፣ እንዲተገበር አመራር ይሰጣል፣ አፈጻጸሙን ይከታተላል፡፡'
        ]
      }, 
        {
        title: 'የፋይናንስ ሥራ አስፈጻሚ',
        leader:'የሥራ ክፍሉ ኃላፊ ሙሉ ስም',
        paragraph:'የሥራ ክፍሉ ተግባርና ኃላፊነት',
        descriptions: [
         ' • የፋይናንስ ግልጽነትና ተጠያቂነትን ለማረጋገጥ የሚረዱ የአሰራር ሥርዓቶችን ይዘረጋል፣ አፈጻጸሙንም ይቆጣጠራል።',
          '• ካለፈው አመት አፈጻጸም እና የገንዘብ ፍላጎት የገንዘብ ፍሰት ያዘጋጃል፣ አፈፃፀሙን ይቆጣጠራል።',
         ' • የገንዘብ እና የባንክ ሂሳቦችን በየጊዜው ይቆጣጠራል እና የትምህርት ቤቱን የፋይናንስ አቅም ያሳውቃል።',
          '• የጽህፈት ቤቱ የፋይናንስ እንቅስቃሴ ለታለመለት አላማ እና በአግባቡ መመዝገቡን ይቆጣጠራል፣በዕቅድ እና በጀት አወጣጥ ላይ የሚያግዙ መግለጫዎችን ያዘጋጃል።',
         ' • ህጉ በተሰጠው ኃላፊነት መሰረት በየእለቱ የተሰበሰቡ ገቢዎች በአግባቡ ተሰብስቦ ወደ ባንክ እንዲተላለፉ መ/ቤቱ ክትትልና ቁጥጥር ያደርጋል።',
         ' • የባለስልጣኑ ውክልና እንዳለው ጽ/ቤቱ ለደመወዝና ለስራ የሚቀርቡ የተለያዩ የክፍያ ጥያቄዎችን አስፈላጊነት በመመርመር የክፍያ ቼኮችንና ትዕዛዞችን በፊርማው አጽድቋል።',
         ' • የባንክ ሂሳቡን እና የአምራቹን መዝገቦች ትክክለኛነት እና ትክክለኛነት ያረጋግጣል።',
         ' • የተለያዩ የመንግስት የግብርና ታክሶችን እና ሌሎች ለሚመለከታቸው አካላት የሚከፈሉ ሒሳቦችን በወቅቱ አከፋፈል ይከታተላል።',
          '• የሂሳብ እንቅስቃሴ ምዝገባን በፋይናንስ ማወጅ; ደንቦችን እና መመሪያዎችን ማክበርን ይቆጣጠራል እና ያረጋግጣል።',
         '• ለኦዲት ምርመራ መዘጋጀት እና በኦዲት ወቅት ለሚነሱ ጥያቄዎች እና ግኝቶች ምላሽ መስጠት።',
          '• በተፈቀደው በጀት መሰረት የጠቅላላ ደብተር እና ደረሰኝ ደብተሮች ምዝገባን ይቆጣጠራል።',
          '• በቴክኖሎጂ የተሻሻሉ የፋይናንስ ሥርዓቶችን በአግባቡ መጠቀም እንዲችሉ ሥልጠና ያገኛሉ።',
          
        ],
      }, 
        {
        title: 'የስትራቴጂክ ጉዳዮች  ሥራ አስፈጻሚ',
        leader:'የሥራ ክፍሉ ኃላፊ ሙሉ ስም',
        paragraph:'የሥራ ክፍሉ ተግባርና ኃላፊነት',
        descriptions: [
         ' • የፖሊሲ ስትራቴጂና የፕሮግራም የፓኬጆችና የፕሮጀክቶች ሀሳቦች ያመነጫል፤ የዶክመንት ዝግጅትና ማሻሻል ሥራውን በመምራት የጸደቀ ዶክመንት ለሚመለከታቸው አካላት እንዲሰራጭ ያደርጋል፡፡',
         ' • የተቋሙን የመረጃ አያያዝና አጠቃቀም ስርዓት በማዘመን ቀልጣፋና ውጤታማ እንዲሆን ያደርጋል፡፡',
         ' • የተቋሙን የተለያዩ የስራ ክፍሎችን የልማት አመላካቾችን በማዘጋጀት ውጤትን መሰረት ያደረገ የልኬታ ስርዓት ይቀርፃል፣ ይዘረጋል፡፡',
         ' • የመሥሪያ ቤቱን ስትራቴጂክና አመታዊ እቅድ ያዘጋጃል፤ እንዲዘጋጅም ያደርጋል፤ የክትትልና ድጋፍ፣ የግምገማና ግብረ መልስ ሥራዎችን በኃላፊነት ይመራል፣ ያስተባብራል፣ በበላይ ኃላፊው እያፀደቀ ሥራ ላይ እንዲውል ያደርጋል፡፡',
         ' • ለፕሮግራሞችና ለፕሮጀክቶች የተመደበ በጀት ለታለመለት አላማ መዋሉን ይከታተላል፣ድጋፍ ያደርጋል፡፡',
         ' • ለግንባታ የተመደበ በጀት ለታለመለት አላማ መዋሉን ይከታተላል፣ድጋፍ ያደርጋል፣ ርክክብ ይፈፅማል፡፡',
         ' • የበጀት አጠቃቀም ሪፖርት ያዘጋጃል ይገመግማል፣ ለሚመለከተው አካል  ያቀርባል፣ግብረ-መልስ ይሠጣል፡፡',
         ' • የተዘጋጁ የፕሮቶኮል ስምምነቶችን በመ/ቤቱ ሃላፊ እንዲረጋገጥ በማድረግ ለሚመለከታቸው እንዲሰራጩ  ያደርጋል፡፡',
         ' • የአገሪቱን የልማት አቅጣጫ ስትራቴጅክ እቅድና የስራ ክፍሎችን የስራ ባህሪይ መሠረት ያደረጉ የፕሮጀክት እቅድ ሰነድ ትክክለኛነት ያረጋግጣል፡፡',
         ' • የመስሪያ ቤቱን ሥራ በተመለከተ ከመንግስታዊና መንግስታዊ ካልሆኑ ልማት ድርጅቶች የሥራ ግንኙነት  ያደርጋል፣ይከታታላል፡፡',
         ' • የፕሮግራሞችንና የፕሮጀክቶችን የመካከለኛና የማጠቃለያ ዘመን አፈፃፀም ግምገማ ያደርጋል፡፡',
         ' •  የፋይናንስ ድጋፍ በሚገኝባቸው የፕሮጀክት አማራጮች ላይ ከልማት አጋር አካላት ጋር ድርድር  ያካሂዳል፣ያስተባብራል፣አፈፃፀሙን ይከታተላል፣ያረጋግጣል፡፡',
          
        ],
      }, 
        {
        title: 'የቋንቋ እና ተጓዳኝ ትምህርቶች ዴስክ',
        leader:'የሥራ ክፍሉ ኃላፊ ሙሉ ስም',
        paragraph:'የሥራ ክፍሉ ተግባርና ኃላፊነት',
        descriptions: [
         ' • የምርምር ተግባራትን ስነምግባር ይከታተላል።',
          '• የስርዓተ ትምህርት ጥናት ፖሊሲዎችን እና ስትራቴጂዎችን ማዘጋጀት ያስተባብራል።',
         ' • ሀገር በቀል እውቀቶችን እና እሴቶችን በምርምር እና በጥናት በስርዓተ ትምህርቱ እንዲካተቱ ያስተባብራል እና ይቆጣጠራል።',
         ' • ሥርዓተ ትምህርቱ የአገሪቱን ባህላዊ፣ማህበራዊና ኢኮኖሚያዊ አዝማሚያዎችና ፍላጎቶች ያገናዘበ እንዲሆን ጥናትን ያስተባብራል።',
          '• ለመምህራን ትምህርት ኮሌጆች በመምህራን ትምህርት ሥርዓተ ትምህርት ላይ የስልጠና እና የግንዛቤ ማስጨበጫ መመሪያዎችን ይሰጣል። ያዘጋጃቸዋል. ስልጠናዎችን ያስተባብራል እና ይቆጣጠራል።',
         ' • መደበኛ ያልሆነ የአዋቂዎች ትምህርት እና አጠቃላይ ትምህርት ግንኙነት ላይ የጉዳይ ጥናት ያካሂዳል፣ እና የማስተካከያ እርምጃዎችን ያደርጋል።',
         ' • የተዘጋጁ የመጀመሪያና ሁለተኛ ደረጃ የትምህርት ብቃቶች/ብቃቶች/የይዘት ፍሰቶች፣ መርሃ ግብሮች ለክልል እና ከተማ አስተዳደሮች ይደርሳሉ።',
         ' • በፌዴራል ደረጃ በተቀመጠው የስርዓተ ትምህርት ደረጃዎች መሰረት የስርዓተ ትምህርቱን አፈፃፀም ክትትልና ግምገማን ያስተባብራል፣ ይመራል።',
          '• የተዘጋጁት የመማሪያ መጽሀፍት በተዘጋጀው ሥርዓተ ትምህርት መሰረት መሆናቸውን ለማረጋገጥ ያስተባብራል።',
          '• ሙሉ በሙሉ ከመተግበሩ በፊት የተዘጋጁትን የመማሪያ መጽሀፍት በተመረጡ ትምህርት ቤቶች የጥራት ፈተናን ያስተባብራል።',
          '• ሁሉንም ሚኒስቴር መስሪያ ቤቶች፣ ክልሎች እና የሚመለከታቸው ባለድርሻ አካላትን በማሳተፍ የተዘጋጀውን የመማሪያ መጽሀፍት ጥራት ያስተባብራል።',
          
          
        ],
      }, 
    
    ]};

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
      };
    
      const data = translationsGeneralEducations[selectedLanguage];
    
      return (
        <div>
 <div  className='flex pl-14 py-10  bg-[#21618c] text-2xl font-bold text-white'>General Education Development Program Sector</div>

          <div className='flex flex-row content-left justify-evenly mt-4'>
            <button className='text-xs font-mono mb-2' onClick={() => handleLanguageChange('english')}>
              English
            </button>
            <button className='text-xs font-mono mb-2' onClick={() => handleLanguageChange('amharic')}>
              Amharic
            </button>
          </div>
          <Card data={data} />
        </div>
      );
}

export default GeneralEducation;