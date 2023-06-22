import React from 'react'
import {images} from '../../assets/index'
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
                <div className='flex flex-col justify-center border-b border-black'>
                    <div className='flex justify-center'>
                        <h1 className='border border-green-500 px-6 py-3 w-fit'>Ministry Of Education</h1>
                    </div>
                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                </div>
                <div className='flex justify-between gap-4'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col border-b border-black'>
                            <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                            <h2 className='px-4 py-2 bg-[#3C8FC3] max-w-fit mx-auto text-white'>General Education Development Sector</h2>
                            <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                        </div>
                        <div className='flex justify-between gap-4'>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-start'><h3 className='border border-yellow-500 p-2 w-min h-min text-sm'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-start'><span className='h-10 w-[1px] bg-black'></span></div>
                                </div>
                                <div className='border-l border-black'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-start'><h3 className='border border-yellow-500 p-2 w-min h-min text-sm'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-start'><span className='h-10 w-[1px] bg-black'></span></div>
                                </div>
                                <div className='border-l border-black'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-end'><h3 className='border border-yellow-500 p-2 w-min h-min text-sm'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-end'><span className='h-10 w-[1px] bg-black'></span></div>
                                </div>
                                <div className='border-r border-black'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-end'><h3 className='border border-yellow-500 p-2 w-min h-min text-sm'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-end'><span className='h-10 w-[1px] bg-black'></span></div>
                                </div>
                                <div className='border-r border-black'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col border-b border-black'>
                            <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                            <h2 className='px-4 py-2 bg-[#3C8FC3] max-w-fit mx-auto text-white'>General Education Development Sector</h2>
                            <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                        </div>
                        <div className='flex justify-between gap-4'>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-start'><h3 className='border border-yellow-500 p-2 w-min h-min text-sm'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-start'><span className='h-10 w-[1px] bg-black'></span></div>
                                </div>
                                <div className='border-l border-black'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-start'><h3 className='border border-yellow-500 p-2 w-min h-min text-sm'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-start'><span className='h-10 w-[1px] bg-black'></span></div>
                                </div>
                                <div className='border-l border-black'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-1 w-3 bg-black'></span>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-end'><h3 className='border border-yellow-500 p-2 w-min h-min text-sm'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-end'><span className='h-10 w-[1px] bg-black'></span></div>
                                </div>
                                <div className='border-r border-black'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'><span className='h-10 w-1 bg-black'></span></div>
                                    <div className='flex justify-end'><h3 className='border border-yellow-500 p-2 w-min h-min text-sm'>Curriculum Development Executive</h3></div>
                                    <div className='flex justify-end'><span className='h-10 w-[1px] bg-black'></span></div>
                                </div>
                                <div className='border-r border-black'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='border border-yellow-500 p-2 w-min text-sm mx-auto'>Curriculum Development Executive</p>
                                            <span className='h-1 w-3 bg-black'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <img src={images.Structure1} alt="higher structure" />
                <img src={images.Structure2} alt="lower structure" />
            </div>
        </div>
        </>
    )
}

export default OrganizationalStructure