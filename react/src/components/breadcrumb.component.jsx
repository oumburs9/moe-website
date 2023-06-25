import React from "react";

const Breadcrumb = (props) => {

    const {path} = props;

    return (
        <>
            <ol className="bg-gray-100 flex items-center justify-end p-5 text-md text-[#156584]">
                {path.map((item, index) => (
                    <li className="flex items-center">
                        <a href={item.link} className={item.link ? "text-gray-600 dark:text-gray-200 hover:text-red-500" : "text-gray-600 dark:text-gray-200"}>
                            {item.name}
                        </a>
                        { index != path.length - 1 ?
                            <span class="mx-3 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </span> : ''
                        }
                    </li>
                ))}
            </ol>
        </>
    )
}

export default Breadcrumb