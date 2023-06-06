import Side from '../../components/side.component'
import React from "react";

function FactSheet(){
  return (
    <>
      <nav>
        <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
          <li className='flex gap-2'>
            <a href="#">Home</a>
            <span>{">"}</span>
          </li>
          <li>Fact-Sheets</li>
        </ol>
      </nav>
      <div className="grid md:grid-cols-3 bg-white p-8 gap-5 text-[#156584] my-[.67em]">
        <div className="md:col-span-2 pr-4">
          <div>
            <div>
              <h1 className="text-[50px]">Fact Sheets</h1>
              <h2 className='text-[30px]'>Fact Sheets - Ministry of Education (MoE) Ethiopia</h2>
            </div>
            <div className="">
              <div className="mt-[1.5em]">
                <h3 className="text-2xl"><strong>Brief History</strong></h3>
                <p>The Ethiopian Federal Ministry of Ministry of Education (MoE)  was established in 1935,EFY</p>
              </div>
              <div className="mt-[1em]">
                <h3 className="text-2xl"><strong>Location</strong></h3>
                <p>The Ethiopian Federal Ministry of Education Headquarter is located in Arada. Sub-city, Addis Ababa.</p>
              </div>
              <div className="mt-[2em]">
                <h3 className="text-2xl"><strong>Education and Training System in Ethiopia</strong></h3>
                <div className='mt-[0.5em]'>
                    <h4 className='text-xl font-bold'>Early Childhood Care and Education</h4>
                    <p>Pre-school programs, known as pre-primary education, are delivered through three modalities in Ethiopia:</p>
                    <ol className='list-decimal ml-5'>
                        <li>Kindergarten (3 years): Predominantly operated by Non-Governmental Organizations (NGOs), communities, 
                            private institutions, and faith based organizations. Of the three modalities, children who attend 
                            kindergarten are most likely to be sufficiently prepared for primary.
                        </li>
                        <li>Child to Child (1 year): Older children play with younger siblings or other children in the neighborhood, 
                            supervised by qualified teachers, to teach basic skills such as counting, differentiating colors, and 
                            identifying letters before joining primary school.
                        </li> 
                        <li>'O' Class (1 year): Reception class based in Government primary schools for children aged 6, before 
                            starting formal schooling at age 7.
                        </li>
                    </ol>
                </div>
                <div className='mt-[0.5em]'>
                    <h4 className='text-xl font-bold'>Primary & Middle Education</h4>
                    <p>
                        The current Education system of Ethiopia consists of 6 grades in Primary (Grades 1-6) and 2 grades in Middle level 
                        education (Grades 7-8). The official age for Primary and Middle school is 7 to 14 years old. As outlined in the 
                        Education and Training Roadmap of Ethiopia (2019) and according to the General Education new curriculum framework, 
                        “Primary education has six years’ duration and Middle school with 2 years, offering basic and general primary 
                        education to prepare students for further general secondary education and training”.
                    </p> 
                </div>
                <div className='mt-[0.5em]'>
                    <h4 className='text-xl font-bold'>Secondary Education</h4>
                    <p>
                        Secondary education covers from Grade 9 to 12. The official secondary school age is from 15 to 18 years old. 
                        Currently, with the new Education Road Map, Grades 9 and 10 are the level in which General Courses will be given 
                        to all students, whereas starting Grade 11 students are able to choose either Natural or Social Science Stream 
                        for their future learning. Students take a national exam (Ethiopian General Secondary Education Certificate Examination) 
                        at Grade 12, which certifies completion of secondary general education, and selects students who qualify for university 
                        level of education.
                    </p>
                    <div className='mt-[0.5em] ml-5'>
                        <h5 className='text-lg font-bold'>Grade 12 Examination</h5>
                        <p>
                            Starting from 2012 E.C. (2019/20), there is only one national examination in the country, The Ethiopian Higher Education 
                            Entrance Certificate Examination (EHEECE), given <span className='text-red-700'>at Grade 12</span>. While the national examination at Grade 10 has been terminated 
                            by the new education road map, a regional examination is continued to be given <span className='text-red-700'>at Grade 8</span> throughout the country.
                        </p><br />
                        <p>The total number of examinees in 2014 E.C. (2021/22) EHEECE has been increased drastically due to the additions of students came from the 2012 E.C. Grade 10 batches.</p>
                    </div> 
                    <div className='mt-[0.5em] ml-5'>
                        <h5 className='text-lg font-bold'>Number of Schools</h5>
                        <p>
                            The total number of secondary schools for this year is 3,481, with 37% of the schools are from Oromia. With respect to ownership, Government schools, 
                            similar to primary, took the highest share with 89.3%. In Addis Ababa and Dire Dawa, exceptionally, Non-Government schools are higher in number than Government.
                        </p>
                    </div> 
                </div>
              </div>
              <div className='mt-[2em]'>
                <h3 className='text-2xl font-bold'>Adult & Non formal Education</h3>
                <p>
                    Governments have used Adult and Non-Formal Education to assist development in other sectors of the country’s economy. Adult and Non-Formal Education enables 
                    adult learners to develop problem solving abilities and to change their mode of life. Provision of Adult and Non-Formal Education /ANFE/ programs improves 
                    the participation of communities in the national development and poverty reduction struggle and makes adult learners more productive and self-reliant. 
                    In several countries of the world, including Ethiopia, Adult and Non-`Formal Education programs have been given for adults who are over 15 years of age.
                </p>
              </div>
              <div className='mt-[2em]'>
                <h3 className='text-2xl font-bold'>Special Needs Education</h3>
                <p>
                    The educational environment must be adjusted to meet the needs of all learners (UNESCO, 2005). That means, Inclusive Education is based on an assumption 
                    that all children can learn if they are given the right learning environment and support. Special needs education is a type of education which provides appropriate 
                    modifications in curricula, educational resources medium of communication or the learning environment in order to cater for individual differences in learning. 
                    This may include everything from special schools, through special classes, to inclusive education Special Needs Education provides additional support for short 
                    or long periods, for those who encounter problems in learning (students with difficulties, disabilities, giftedness, etc.) for a variety of reasons sometimes 
                    during their educational career. Inclusive Education is an approach where by students with special educational needs regardless of age, form of disability, gender 
                    religion or culture are provided with appropriate education within regular schools. An inclusive school for all must put flexibility and variation at the center, 
                    structurally as well as in terms of content, with the goal of offering every individual a relevant education and optimal opportunities for development (UNESCO,2005).
                </p>
              </div>
              <div className='mt-[2em]'>
                <h3 className='text-2xl font-bold'>Number of Schools and Clusters</h3>
                <p>
                    The total number of primary schools for this year is 36,492, with a 1.4 percentage points increment from last year. Oromia has the largest number of primary schools 
                    with 15,044; naturally acceptable to serve the larger population accordingly. 92.2% of primary schools are government owned across the country, with the exception of 
                    Addis Ababa in which Non-Government primary schools are higher in number than Government.
                </p>
              </div>
              <div className='mt-[2em]'>
                <h3 className='text-2xl font-bold'>Textbooks and School Facilities</h3>
                <div className='mt-[0.5em]'>
                    <h4 className='text-xl font-bold'>Text books</h4>
                    <p>
                        The total number of textbooks in Primary and Middle schools is over 58 million, with 49% of which are being categorized as language textbooks. 
                        Total number of textbooks has decreased by more than 13 million from last year.
                    </p>
                </div>
                <div className='mt-[0.5em]'>
                    <h4 className='text-xl font-bold'>School Facilities</h4>
                    <p>
                        Nationally, only 30.4% of Primary and Middle schools have access to electricity among the respondent schools for the item; however, there are significant 
                        differences between regions. This result might be affected by low response rates, incompleteness and number mismatch between related items. Among schools 
                        with electricity available, 68% of them use hydropower, while those do not respond for the source of electricity accounts to 22%.
                    </p>
                    <p>
                        On the other hand, radios are available in 34% of Primary and Middle schools, 14% have tape recorders and 17% have video recorders, 
                        with functionality of the equipment still under question.
                    </p>
                </div>
              </div>
              <div className='mt-[2em]'>
                <h3 className='text-2xl font-bold'>Higher Education</h3>
                <div className='mt-[0.5em]'>
                    <h4 className='text-xl font-bold'>The objectives of higher education are to:</h4>
                    <ul className='list-disc ml-5'>
                        <li><p>
                            To prepare sufficient knowledge, skilled, and attitudinally mature graduates in relevant disciplines with competence to support Peace, Democracy and 
                            National Development that can make the country internationally competitive.
                        </p></li>
                        <li><p>
                            Promote and enhance research focusing on knowledge and technology transfer consistent with the country`s priority needs.
                        </p></li>
                        <li><p>
                            Establish a System to create and enhance Institution who can be emulated as Center of Excellence for Mission attainment and Good Governance.
                        </p></li>
                    </ul>
                </div>
                <div className='mt-[0.5em]'>
                    <p className='text-xl font-semibold'>As of 2021/2022, (2014 EFY) there are 46 public universities in Ethiopia.</p>
                </div>
                <div className='mt-[1em]'>
                    <h4 className='text-xl font-bold'>Differentiation of Universities on their focus area</h4>
                    <div className="mt-[1em] ml-5">
                        <h4 className="text-lg mb-5"><strong>Research Universities</strong></h4>
                        <div className="ml-4 grid grid-cols-3 gap-10">
                            <ul className="list-disc">
                                <li>Addis Ababa University</li>
                                <li>Jimma University</li>
                                <li> University of Gondar</li>
                                <li>Hawassa University </li>
                            </ul>
                            <ul className="list-disc">
                                <li>Bahirdar University</li>
                                <li>Haramaya University</li>
                                <li>Mekelle University</li>
                                <li>Arbaminch University</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-[1em] ml-5">
                        <h4 className="text-lg mb-5"><strong>Applied Science Universities</strong></h4>
                        <div className="ml-4 grid grid-cols-3 gap-10">
                            <ul className="list-disc">
                                <li>Ambo University</li>
                                <li>Arsi University</li>
                                <li>Asossa University</li>
                                <li>Aksum University</li>
                                <li>Dila University</li>
                            </ul>
                            <ul className="list-disc">
                                <li>Diredawa University</li>
                                <li>Debrebrihan University</li>
                                <li>Debre Markos University</li>
                                <li>Kotebe Education University</li>
                                <li>Jigjiga University</li>
                            </ul>
                            <ul className="list-disc">
                                <li>Semera University</li>
                                <li>Wolaita Sodo University</li>
                                <li>Wolkite University</li>
                                <li>Wollega University</li>
                                <li>Wollo University</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-[1em] ml-5">
                        <h4 className="text-lg mb-5"><strong>Comprehensive Universities</strong></h4>
                        <div className="ml-4 grid grid-cols-3 gap-10">
                            <ul className="list-disc">
                                <li>Adigrat University</li>
                                <li>Bonga University</li>
                                <li>Bule Hora University</li>
                                <li>Injibara University </li>
                                <li>Debre Tabor University</li>
                                <li>Dembi Dolo University</li>
                                <li>Gambella University</li>
                            </ul>
                            <ul className="list-disc">
                                <li>Jinka University</li>
                                <li>Kebri Dehar University</li>
                                <li>Mada Walabu University</li>
                                <li>Mekdela Amba University</li>
                                <li>Metu University</li>
                                <li>Mizan-Tepi University</li>
                                <li>Oda Bultum University</li>
                            </ul>
                            <ul className="list-disc">
                                <li>Raya University</li>
                                <li>Wachamo University</li>
                                <li>Warabe University</li>
                                <li>Wodiya University</li>
                                <li>Selale University</li>
                                <li>Borena University</li>
                                <li>Debark University</li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>    
            </div>
          </div>
        </div>
        <div className="md:col-span-1 pl-4">
          <Side/>
        </div>
      </div>
     
    </>
  )
}

export default FactSheet