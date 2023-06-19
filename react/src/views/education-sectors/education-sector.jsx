import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import Titles from "../../components/title.component";


export const EducationSector = () => {
    return (
        <section className="relative py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 container">
                <Titles title={"Education Sector"} />
                <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-2 gap-x-16 gap-y-12">
                    <div className="py-4 px-6 rounded-lg shadow-xl shadow-sky/40 hover:shadow-[#3C8FC3]/60 bg-[#3C8FC3] hover:-translate-y-1 transition-transform cursor-pointer">
                        <p className="text-3xl font-semibold mb-4 text-[#fff]">
                            General Education Development Sector
                        </p>
                        <ul className="text-[#fff] space-y-2 px-1">
                            <li className="flex flex-row">
                                <FiArrowDownRight className="mr-2" />
                                Curriculum development executive
                            </li>
                            <li className="flex flex-row">
                                <FiArrowDownRight className="mr-2" />
                                Teachers’ and Educational leaders’ development
                            </li>
                            <li className="flex flex-row">
                                <FiArrowDownRight className="mr-2" />
                                Educational Program and Quality Improvement
                            </li>
                            <li className="flex flex-row">
                                <FiArrowDownRight className="mr-2" />
                                Adult and non formal Education programs
                            </li>
                        </ul>
                    </div>
                    <div className="py-4 px-6 rounded-lg shadow-xl shadow-blue/40 hover:shadow-[#2048A1]/60 bg-[#2048A1] hover:-translate-y-1 transition-transform cursor-pointer">
                        <p className="text-3xl font-semibold mb-4 text-white">
                            Higher Education Development Sector
                        </p>
                        <ul className="text-white space-y-2 px-1">
                            <li className="flex flex-row">
                                <FiArrowDownRight className="mr-2" />
                                Academic Affairs Executive
                            </li>
                            <li className="flex flex-row">
                                <FiArrowDownRight className="mr-2" />
                                Research and Community Engagement Executive
                            </li>
                            <li className="flex flex-row">
                                <FiArrowDownRight className="mr-2" />
                                Governance and Infrastructure executive
                            </li>
                            <li className="flex flex-row">
                                <FiArrowDownRight className="mr-2" />
                                ICT and Digital Education executive
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSector;


