// import React from 'react'

// const Test = () => {
//   return (
//     <>
    
// <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table className="w-28 text-sm text-left text-gray-500 dark:text-gray-400 ">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th colSpan={2} className="py-2 text-center">
//                     General Education
//                 </th>
        
//             </tr>
//         </thead>
//         <tbody>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Governmental Schools
//                 </th>
             
//                 <td className="px-6 py-2">
//                     48051
//                 </td>
//             </tr>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Non Governmental Schools
//                 </th>
             
//                 <td className="px-6 py-2">
//                     8176
//                 </td>
//             </tr>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Primary Schools
//                 </th>
             
//                 <td className="px-6 py-2">
//                     37148
//                 </td>
//             </tr>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Secondary Schools
//                 </th>
             
//                 <td className="px-6 py-2">
//                     3778
//                 </td>
//             </tr>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         ABE Program
//                 </th>
             
//                 <td className="px-6 py-2">
//                     4288
//                 </td>
//             </tr>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Kindergarten
//                 </th>
             
//                 <td className="px-6 py-2">
//                     11013
//                 </td>
//             </tr>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Total
//                 </th>
             
//                 <td className="px-6 py-2">
//                     56227
//                 </td>
//             </tr>
          
//         </tbody>
//     </table>
// </div>
// </>
//   )
// }

// export default Test

import React from 'react';

const SliderTable = ({data}) => {
//   const tableData = [
//     { category: 'Governmental Schools', value: 48051 },
//     { category: 'Non Governmental Schools', value: 8176 },
//     { category: 'Primary Schools', value: 37148 },
//     { category: 'Secondary Schools', value: 3778 },
//     { category: 'ABE Program', value: 4288 },
//     { category: 'Kindergarten', value: 11013 },
//     { category: 'Total', value: 56227 },
//   ];
const tableData = data;
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-28 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th colSpan={2} className="py-2 text-center">
                {}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.category}
                </th>
                <td className="px-6 py-2">{data.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SliderTable;
