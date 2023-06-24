import Side from '../../components/side.component'
import React from "react";
import Titles from '../../components/title.component';
import { list } from 'postcss';

const header = {
    title: 'Fact Sheets',
    subtitle: 'Fact Sheets - Ministry of Education (MoE) Ethiopia'
}

const ListItem = ({ content }) => {
    return (
        <>
            <li class="flex justify-stretch items-baseline">
                <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                {content}
            </li>
        </>
    )
}

const contents = [
    {
        mainTitle: 'Brief History',
        paragraph1: 'The Ethiopian Federal Ministry of Ministry of Education (MoE)  was established in 1935,EFY'
    },
    {
        mainTitle: 'Location',
        paragraph1: 'The Ethiopian Federal Ministry of Education Headquarter is located in Arada. Sub-city, Addis Ababa.'
    },
    {
        mainTitle: 'Education and Training System in Ethiopia',
        paragraphList: [
            {
                subtitle: 'Early Childhood Care and Education',
                paragraph: 'Pre-school programs, known as pre-primary education, are delivered through three modalities in Ethiopia:',
                list: [
                    'Kindergarten (3 years): Predominantly operated by Non-Governmental Organizations (NGOs), communities, private institutions, and faith based organizations. Of the three modalities, children who attend kindergarten are most likely to be sufficiently prepared for primary.',
                    'Child to Child (1 year): Older children play with younger siblings or other children in the neighborhood, supervised by qualified teachers, to teach basic skills such as counting, differentiating colors, and identifying letters before joining primary school.',
                    "'O' Class (1 year): Reception class based in Government primary schools for children aged 6, before starting formal schooling at age 7."
                ],
            },
            {
                subtitle: 'Primary & Middle Education',
                paragraph: 'The current Education system of Ethiopia consists of 6 grades in Primary (Grades 1-6) and 2 grades in Middle level education (Grades 7-8). The official age for Primary and Middle school is 7 to 14 years old. As outlined in the Education and Training Roadmap of Ethiopia (2019) and according to the General Education new curriculum framework, “Primary education has six years’ duration and Middle school with 2 years, offering basic and general primary education to prepare students for further general secondary education and training”.',
            },
            {
                subtitle: 'Secondary Education',
                paragraph: 'Secondary education covers from Grade 9 to 12. The official secondary school age is from 15 to 18 years old. Currently, with the new Education Road Map, Grades 9 and 10 are the level in which General Courses will be given to all students, whereas starting Grade 11 students are able to choose either Natural or Social Science Stream for their future learning. Students take a national exam (Ethiopian General Secondary Education Certificate Examination) at Grade 12, which certifies completion of secondary general education, and selects students who qualify for university level of education.',
                paragraphList: [
                    {
                        subtitle: 'Grade 12 Examination',
                        paragraph: 'Starting from 2012 E.C. (2019/20), there is only one national examination in the country, The Ethiopian Higher Education Entrance Certificate Examination (EHEECE), given at Grade 12. While the national examination at Grade 10 has been terminated by the new education road map, a regional examination is continued to be given at Grade 8 throughout the country.',
                        paragraph2: 'The total number of examinees in 2014 E.C. (2021/22) EHEECE has been increased drastically due to the additions of students came from the 2012 E.C. Grade 10 batches.'
                    },
                    {
                        subtitle: 'Number of Schools',
                        paragraph: 'The total number of secondary schools for this year is 3,481, with 37% of the schools are from Oromia. With respect to ownership, Government schools, similar to primary, took the highest share with 89.3%. In Addis Ababa and Dire Dawa, exceptionally, Non-Government schools are higher in number than Government.'
                    }
                ]
            },
            {
                subtitle: 'Adult & Non formal Education',
                paragraph: 'Governments have used Adult and Non-Formal Education to assist development in other sectors of the country’s economy. Adult and Non-Formal Education enables adult learners to develop problem solving abilities and to change their mode of life. Provision of Adult and Non-Formal Education /ANFE/ programs improves the participation of communities in the national development and poverty reduction struggle and makes adult learners more productive and self-reliant. In several countries of the world, including Ethiopia, Adult and Non-`Formal Education programs have been given for adults who are over 15 years of age.'
            },
            {
                subtitle: 'Special Needs Education',
                paragraph: 'The educational environment must be adjusted to meet the needs of all learners (UNESCO, 2005). That means, Inclusive Education is based on an assumption that all children can learn if they are given the right learning environment and support. Special needs education is a type of education which provides appropriate modifications in curricula, educational resources medium of communication or the learning environment in order to cater for individual differences in learning. This may include everything from special schools, through special classes, to inclusive education Special Needs Education provides additional support for short or long periods, for those who encounter problems in learning (students with difficulties, disabilities, giftedness, etc.) for a variety of reasons sometimes during their educational career. Inclusive Education is an approach where by students with special educational needs regardless of age, form of disability, gender religion or culture are provided with appropriate education within regular schools. An inclusive school for all must put flexibility and variation at the center, structurally as well as in terms of content, with the goal of offering every individual a relevant education and optimal opportunities for development (UNESCO,2005).'
            },
            {
                subtitle: 'Number of Schools and Clusters',
                paragraph: 'The total number of primary schools for this year is 36,492, with a 1.4 percentage points increment from last year. Oromia has the largest number of primary schools with 15,044; naturally acceptable to serve the larger population accordingly. 92.2% of primary schools are government owned across the country, with the exception of Addis Ababa in which Non-Government primary schools are higher in number than Government.'
            }
        ]
    },
    {
        mainTitle: 'Textbooks and School Facilities',
        paragraphList: [
            {
                subtitle: 'Text books',
                paragraph: 'The total number of textbooks in Primary and Middle schools is over 58 million, with 49% of which are being categorized as language textbooks. Total number of textbooks has decreased by more than 13 million from last year.'
            },
            {
                subtitle: 'School Facilities',
                paragraph: 'Nationally, only 30.4% of Primary and Middle schools have access to electricity among the respondent schools for the item; however, there are significant differences between regions. This result might be affected by low response rates, incompleteness and number mismatch between related items. Among schools with electricity available, 68% of them use hydropower, while those do not respond for the source of electricity accounts to 22%.',
                paragraph2: 'On the other hand, radios are available in 34% of Primary and Middle schools, 14% have tape recorders and 17% have video recorders, with functionality of the equipment still under question.'
            }
        ]
    },
    {
        mainTitle: 'Higher Education',
        subtitle: 'Differentiation of Universities on their focus area',
        paragraph1: 'The objectives of higher education are to:',
        list: [
            'To prepare sufficient knowledge, skilled, and attitudinally mature graduates in relevant disciplines with competence to support Peace, Democracy and National Development that can make the country internationally competitive.',
            'Promote and enhance research focusing on knowledge and technology transfer consistent with the country`s priority needs.',
            'Establish a System to create and enhance Institution who can be emulated as Center of Excellence for Mission attainment and Good Governance.'
        ],
        paragraph2: 'As of 2021/2022, (2014 EFY) there are 46 public universities in Ethiopia.',
        paragraphList: [
            {
                subtitle: 'Research Universities',
                universityList: [
                    'Addis Ababa University',
                    'Jimma University',
                    'University of Gondar',
                    'Hawassa University',
                    'Bahirdar University',
                    'Haramaya University',
                    'Mekelle University',
                    'Arbaminch University'
                ]
            },
            {
                subtitle: 'Applied Science Universities',
                universityList: [
                    'Ambo University',
                    'Arsi University',
                    'Asossa University',
                    'Aksum University',
                    'Dila University',
                    'Diredawa University',
                    'Debrebrihan University',
                    'Debre Markos University',
                    'Kotebe Education University',
                    'Jigjiga University',
                    'Wolaita Sodo University',
                    'Wolkite University',
                    'Wollega University',
                    'Wollo University'
                ]
            },
            {
                subtitle: 'Comprehensive Universities',
                universityList: [
                    'Adigrat University',
                    'Bonga University',
                    'Bule Hora University',
                    'Injibara University',
                    'Debre Tabor University',
                    'Dembi Dolo University',
                    'Gambella University',
                    'Jinka University',
                    'Kebri Dehar University',
                    'Mada Walabu University',
                    'Mekdela Amba University',
                    'Metu University',
                    'Mizan-Tepi University',
                    'Oda Bultum University',
                    'Raya University',
                    'Wachamo University',
                    'Warabe University',
                    'Wodiya University',
                    'Selale University',
                    'Borena University',
                    'Debark University'
                ]
            }
        ]

    }
]

function FactSheet() {
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
            <div className="grid md:grid-cols-3 bg-white p-10 gap-5 text-[#156584] my-[.67em]">
                <div className="md:col-span-2 pr-4">
                    <div>
                        <Titles title={header.title} subtitle={header.subtitle} />
                        <div className="">
                            {contents.map(content => (
                                <div className="mt-[3em]">
                                    <h2 className="text-2xl font-bold">{content.mainTitle}</h2>
                                    <p className='mb-3'>{content.paragraph1}</p>
                                    <ul className=''>
                                        {content.list ? content.list.map((list) => (
                                            <ListItem content={list} />
                                        )) : ''}
                                    </ul>
                                    <p>{content.paragraph2}</p>
                                    <h3 className='text-xl font-bold mb-3'>{content.subtitle}</h3>
                                    {content.paragraphList ? content.paragraphList.map(paragraph => (
                                        <div className='mt-[1em] ml-3'>
                                            <h3 className='text-xl font-bold mb-3'>{paragraph.subtitle}</h3>
                                            <p className='mb-3'>{paragraph.paragraph}</p>
                                            <p className='mb-3'>{paragraph.paragraph2}</p>
                                            <ul className=''>
                                                {paragraph.list ? paragraph.list.map((list) => (
                                                    <ListItem content={list} />
                                                )) : ''}
                                            </ul>
                                            <ul className='grid md:grid-cols-3 gap-x-10 gap-y-2'>
                                                {paragraph.universityList ? paragraph.universityList.map(c => <ListItem content={c} />) : ''}
                                            </ul>
                                            {paragraph.paragraphList ? paragraph.paragraphList.map(p => (
                                                <div className='mt-[1em] ml-6'>
                                                    <h4 className='text-lg font-bold mb-3'>{p.subtitle}</h4>
                                                    <p>{p.paragraph}</p><br />
                                                    <p>{p.paragraph2}</p>
                                                </div>
                                            )):''}
                                        </div>
                                    )) : ''
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="md:col-span-1 pl-4">
                    <Side />
                </div>
            </div>

        </>
    )
}

export default FactSheet