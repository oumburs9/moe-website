import { useState } from 'react'
import Side from '../../components/side.component'

const partnersData = [
    {
        name:'World Bank',
        link:''
    },
    {
        name:'DVV International',
        link:''
    },
    {
        name:'Link Ethiopia',
        link:''
    },
    {
        name:'Partners in education',
        link:''
    },
    {
        name:'Save the children',
        link:''
    },
    {
        name:'World Vision',
        link:''
    },
    {
        name:'Read II',
        link:''
    },
    {
        name:'Ethiopia Read',
        link:''
    },
    {
        name:'Imagine one day',
        link:''
    },
    {
        name:'UNICEF',
        link:''
    },
    {
        name:'UNESCO',
        link:''
    },
    {
        name:'WFP',
        link:''
    },
    {
        name:'Finland Government',
        link:''
    },
    {
        name:'British Council',
        link:''
    },
    {
        name:'Camara Education',
        link:''
    },
    {
        name:'Amhara Development Association(ADA)',
        link:''
    },
    {
        name:'Oromia Development Association(ODA)',
        link:''
    },
    {
        name:'Menschen für Menschen',
        link:''
    },
    {
        name:'Norway Embassy',
        link:''
    },
    {
        name:'EU delegate',
        link:''
    },
    {
        name:'JICA',
        link:''
    },
    {
        name:'FCDO',
        link:''
    },
    {
        name:'Basic Education network(BEN)',
        link:''
    },
    {
        name:'International Rescue committee',
        link:''
    },
    {
        name:'UNHCR',
        link:''
    },
    {
        name:'Global Education partner(GPE)',
        link:''
    }
]

const stakeholdersData = [
    {
        name:'Ethiopian Teacher Association',
        link:''
    },
    {
        name:"Ethiopian Students' Parents Association",
        link:''
    },
    {
        name:'Federation of Ethiopian Associations of Persons With Disablities',
        link:''
    },
    {
        name:'Ethiopian Private Higher Education & TVET Institutions Association',
        link:''
    },
    {
        name:'Ethiopian Private Schools Association',
        link:''
    },
    {
        name:'Ministry of Labor and Skills',
        link:''
    },
    {
        name:'Ministry of Health',
        link:''
    },
    {
        name:'Ministry of Transport and Logistics',
        link:''
    },
    {
        name:'Ministry of Agriculture',
        link:''
    },
    {
        name:'Ministry of Culture and Sport',
        link:''
    },
    {
        name:'Ministry of Women and Social Affairs',
        link:''
    },
    {
        name:'Ministry of Innovation and Technology',
        link:''
    },
    {
        name:'Federal Democratic Republic of Ethiopia Government communication Service',
        link:''
    },
    {
        name:'Ministry of Water and Energy',
        link:''
    },
    {
        name:'Ministry of Water and Energy',
        link:''
    },
    {
        name:'Ministry of Justice',
        link:''
    },
    {
        name:'Ethiopian Ministry of Industry',
        link:''
    }
]

function PartnersAndStakeholders() {

    const [item] = useState(0)

    return(
        <>
            <nav>
                <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
                    <li className='flex gap-2'>
                        <a href="#">Home</a>
                        <span>{">"}</span>
                    </li>
                    <li>Partners-and-Stakeholders</li>
                </ol>
            </nav>
            <div className="grid md:grid-cols-3 bg-white p-8 gap-5 text-[#156584] my-[.67em]">
                <div className="md:col-span-2 pr-4">
                    <div className=''>
                        <h1 className='text-[50px]'>Main Partners and Stakeholders of Ministry of Education</h1>
                        <div className='mt-[2em]'>
                            <h1 className='text-[30px] mb-5'><span className='underline'>Main Partners</span> (Donors):</h1>
                            <ul className='grid grid-cols-3 gap-10 list-disc ml-5 text-[18px]'>
                                {partnersData.map((partner) => (
                                    <li className='hover:text-[20px] hover:underline'>
                                        <a href={partner.link}>{partner.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='mt-[2em]'>
                            <h1 className='text-[30px] mb-5'><span className='underline'>Main Stakeholders</span>:</h1>
                            <ul className='grid grid-cols-3 gap-10 list-disc ml-5 text-[18px]'>
                                {stakeholdersData.map((stakeholder) => (
                                    <li className='hover:text-[20px] hover:underline'>
                                        <a href={stakeholder.link}>{stakeholder.name}</a>
                                    </li>
                                ))}
                            </ul>
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

export default PartnersAndStakeholders