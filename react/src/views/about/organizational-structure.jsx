import React, { useState } from 'react'
import Titles from '../../components/title.component'
import { data } from './who-is-who'
import Breadcrumb from '../../components/breadcrumb.component'

const header = {
    title: 'Organizational Structure',
    subtitle: 'Organizational structure of the FDRE Minister of Education'
}

function OrganizationalStructure() {
    const path = [{name: 'Home', link: ''},{name: 'Organizational-Structure'}]
    const minister = data.filter(d => d.id === 0 )[0]
    const getPerson = (id)=>{
        return data.filter(p=>p.id === id)[0]
    }
    console.log(getPerson(1))
    return (
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <div className="px-4 mt-12 mx-auto sm:px-6 lg:px-8 container">
                <Titles title={header.title} subtitle={header.subtitle} />
                <div className="flex flex-col mt-20">
                    <div className='flex flex-col justify-center border-b-2 border-red-500'>
                        <div className='flex justify-center'>
                        <img src={minister.logo} alt="MoE logo" />
                        </div>
                        <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                    </div>
                    <div className='flex justify-between gap-4'>
                        {minister.peoplesUnder.map((id,x) => 
                        <div className='flex flex-col'>
                            <div className='flex flex-col border-b-2 border-yellow-500'>
                                <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                <h2 className={x%2 == 0 ? 'px-4 py-2 bg-[#3C8FC3] w-full mx-auto text-white text-center rounded-md':'px-4 py-2 bg-[#2048A1] w-full mx-auto text-white text-center rounded-md'}>{getPerson(id).department}</h2>
                                <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                            </div>
                            <div className='flex justify-between gap-4 bg-gray-50 p-2 pt-0'>
                               {getPerson(id).peoplesUnder.map((i,index)=> 
                               <div className='flex flex-col'>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                        <div className={index%2==0 ?'flex justify-start':'flex justify-end'}><h3 className='p-2 h-min text-sm bg-white shadow-lg hover:shadow-md'>{getPerson(i).department}</h3></div>
                                        <div className={index%2==0 ?'flex justify-start':'flex justify-end'} ><span className={`h-10 w-[2px] ${getPerson(id).department == 'General Education Development Sector' ? 'bg-[#3C8FC3]':'bg-[#2048A1]'}`}></span></div>
                                    </div>
                                    {getPerson(i).peoplesUnder.map((j)=>
                                    <div className={`${index%2==0 ?'border-l-2':'border-r-2'} ${getPerson(id).department == 'General Education Development Sector' ? 'border-[#3C8FC3]':'border-[#2048A1]'}`}>
                                        <div className='flex flex-col mb-1'>
                                            <div className='flex items-center'>
                                                <span className={index%2==0 ?'h-1 w-3 bg-black':'hidden'}></span>
                                                <p className='p-2 w-full text-sm mx-auto bg-white shadow-lg hover:shadow-md'>{getPerson(j).department}</p>
                                                <span className={index%2==0 ?'hidden':'h-1 w-3 bg-black'}></span>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                                )}
                            </div>
                        </div>)}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrganizationalStructure