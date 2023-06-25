import { useState } from "react"
import Titles from "../../components/title.component"
import { FileList } from "./policies-and-strategies"
import Breadcrumb from "../../components/breadcrumb.component"

const pageHeader = {
    title:'Plans And Reports',
    subtitle:'Read Plans and Report of Moe'
}
function PlansAndReports() {

    const path = [{name: 'Home', link: ''},{name:'Plans-And-Reports'}]
    const [page, setpage] = useState(1)

    const pageSize = 5
    const totalPages = Math.floor(FileList.length / pageSize) + 1

    const paginatedData = FileList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
    return (
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <div class="container px-4 mx-auto">
                <div class="sm:flex sm:items-center sm:justify-between p-4">
                    <Titles title={pageHeader.title} subtitle={pageHeader.subtitle} />

                    <div class="flex items-center mt-4 gap-x-3">
                        <button class="w-1/2 px-5 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-white dark:border-gray-700">
                            Download all
                        </button>

                        <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3098_154395)">
                                    <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3098_154395">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span>Upload</span>
                        </button>
                    </div>
                </div>

                <div class="flex flex-col mt-6">
                    <div class="flex -mx-4 -my-2 overflow-x-auto">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table class=" min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-[#21618C] dark:bg-gray-800 text-white">
                                        <tr>
                                            <th scope="col" class="text-white font-semibold py-3.5 px-4 text-sm text-left rtl:text-right dark:text-gray-400">
                                                <div class="flex items-center gap-x-3">
                                                    {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/> */}
                                                    <span>Description</span>
                                                </div>
                                            </th>

                                            <th scope="col" class="text-white font-semibold px-12 py-3.5 text-sm text-left rtl:text-right dark:text-gray-400">
                                                Formate
                                            </th>

                                            <th scope="col" class="text-white font-semibold px-12 py-3.5 text-sm text-left rtl:text-right dark:text-gray-400">
                                                File size
                                            </th>

                                            <th scope="col" class="text-white font-semibold px-4 py-3.5 text-sm text-left rtl:text-right dark:text-gray-400">
                                                Date uploaded
                                            </th>

                                            <th scope="col" class="text-white font-semibold px-4 py-3.5 text-sm text-left rtl:text-right dark:text-gray-400">
                                                DownLoad
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {paginatedData.map(p => <tr key={p} className="hover:bg-neutral-100 transition-all delay-100">
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap ">
                                                <div class="inline-flex items-center gap-x-3">
                                                    {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/> */}
                                                    <div class="flex items-center gap-x-2">
                                                        <div class="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                            </svg>
                                                        </div>

                                                        <div>
                                                            <h2 class="font-normal text-gray-800 dark:text-white ">{p.Description}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                                {p.Format}
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{p.Size}</td>
                                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{p.Date}</td>
                                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap cursor-pointer">
                                                <a href="">
                                                    <svg class="h-5 w-5 text-blue-400" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
                                                        viewBox="0 0 512 512" enable-background="new 0 0 512 512"  space="preserve">
                                                        <path d="M442.2,186.2H302.5V0h-93.1v186.2H69.8L256,418.9L442.2,186.2z M0,465.5V512h512v-46.5H0z" />
                                                    </svg>
                                                </a>
                                            </td>

                                        </tr>)}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center gap-3  mt-6">

                    <div class="items-center hidden md:flex gap-x-3 list-none">
                        <li className={`px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60 cursor-pointer ${page === 1 ? 'pointer-events-none' : ''}`} onClick={() => setpage(p => p - 1)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </li>
                        {Array.from(Array(totalPages).keys()).map((num) => num + 1).map(pg => <li onClick={() => setpage(p => pg)} className={`px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60 cursor-pointer ${page === pg ? 'bg-neutral-800 text-white' : ''}`} >{pg}</li>)}
                        <li className={`px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60 cursor-pointer ${page === totalPages ? 'pointer-events-none' : ''}`} onClick={() => setpage(p => p + 1)}>
                            <span class="sr-only">Next Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </li>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PlansAndReports