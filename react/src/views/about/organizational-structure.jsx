import React from 'react'
import Titles from '../../components/title.component'

const header = {
    title: 'Organizational Structure',
    subtitle: 'Organizational structure of the FDRE Minister of Education'
}

function OrganizationalStructure() {
    return(
        <>
        <nav>
            <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
            <li className='flex gap-2'>
                <a href="#">Home</a>
                <span>{">"}</span>
            </li>
            <li>Organizational-Structure</li>
            </ol>
        </nav>
        <div  className="px-4 mt-12 mx-auto sm:px-6 lg:px-8 container">
            <Titles title={header.title} subtitle={header.subtitle} />
            <div className="flex flex-col mt-20">
                <div className='flex flex-col justify-center border-b-2 border-red-500'>
                    <div className='flex justify-center'>
                        <img src="https://moe.gov.et/logom.png" alt="MoE logo"/>
                    </div>
                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                </div>
                <div className='flex justify-between gap-4'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col border-b-2 border-yellow-500'>
                            <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                            <h2 className='px-4 py-2 bg-[#3C8FC3] w-full mx-auto text-white text-center rounded-md'>General Education Development Sector</h2>
                            <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                        </div>
                        <div className='flex justify-between gap-4 bg-gray-50 p-2 pt-0'>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-start'><h3 className='p-2 w-min h-min text-sm bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-start'><span className='h-10 w-[2px] bg-[#3C8FC3]'></span></div>
                                </div>
                                <div className='border-l-2 border-[#3C8FC3]'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-start'><h3 className='p-2 w-min h-min text-sm bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-start'><span className='h-10 w-[2px] bg-[#3C8FC3]'></span></div>
                                </div>
                                <div className='border-l-2 border-[#3C8FC3]'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-end'><h3 className='p-2 w-min h-min text-sm bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-end'><span className='h-10 w-[2px] bg-[#3C8FC3]'></span></div>
                                </div>
                                <div className='border-r-2 border-[#3C8FC3]'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-end'><h3 className='p-2 w-min h-min text-sm bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-end'><span className='h-10 w-[2px] bg-[#3C8FC3]'></span></div>
                                </div>
                                <div className='border-r-2 border-[#3C8FC3]'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col border-b-2 border-yellow-500'>
                            <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                            <h2 className='px-4 py-2 bg-[#2048A1] w-full mx-auto text-white text-center rounded-md'>Higher Education Development Sector</h2>
                            <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                        </div>
                        <div className='flex justify-between gap-4 bg-gray-50 p-2 pt-0'>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-start'><h3 className='p-2 w-min h-min text-sm bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-start'><span className='h-10 w-[2px] bg-[#2048A1]'></span></div>
                                </div>
                                <div className='border-l-2 border-[#2048A1]'>
                                    <div className='flex flex-col gap-5'>
                                    <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-start'><h3 className='p-2 w-min h-min text-sm bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-start'><span className='h-10 w-[2px] bg-[#2048A1]'></span></div>
                                </div>
                                <div className='border-l-2 border-[#2048A1]'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-end'><h3 className='p-2 w-min h-min text-sm bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-end'><span className='h-10 w-[2px] bg-[#2048A1]'></span></div>
                                </div>
                                <div className='border-r-2 border-[#2048A1]'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-end'><h3 className='p-2 w-min h-min text-sm bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-end'><span className='h-10 w-[2px] bg-[#2048A1]'></span></div>
                                </div>
                                <div className='border-r-2 border-[#2048A1]'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='p-2 w-min text-sm mx-auto bg-white shadow-lg hover:shadow-md'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OrganizationalStructure