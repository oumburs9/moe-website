import { motion } from "framer-motion";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { images } from "../assets";
import { useState } from "react";

import SliderTable from "./base/slider-table.component";

const data = [
    {
        title: "Students",
        imageSrc: images.Students,
    },
    {
        title: "Teacher",
        imageSrc: images.StudentswithTeacher,
    },
    {
        title: "General Education",
        imageSrc: images.Students,
    },
    {
        title: "Higher Education",
        imageSrc: images.StudentswithTeacher,
    },
];
      const generalEdu = [
        { category: 'Governmental Schools', value: 48051 },
        { category: 'Non Governmental Schools', value: 8176 },
        { category: 'Primary Schools', value: 37148 },
        { category: 'Secondary Schools', value: 3778 },
        { category: 'ABE Program', value: 4288 },
        { category: 'Kindergarten', value: 11013 },
        { category: 'Total', value: 56227 },
      ];
      const higherEdu = [
        { category: 'Public Universties ', value: 50 },
        { category: 'Science and Technology Universties', value: 2 },
        { category: 'Research Universties', value: 7 },
        { category: 'Applied Universties', value: 10 },
        { category: 'Comprehensive Universties', value: 21 },
        { category: 'Total Private Higher Educations', value: 325 },
        { category: 'Private Universties', value: 5 },
        { category: 'Private University Colleges' , value: 10 },
        { category: 'Private Colleges' , value: 310 },
        { category: 'Total', value: '' },
      ];

const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div className="h-5/6">
            <AutoplaySlider
                transitionDelay={0}
                animation="cubeAnimation"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                onFirstMount={() => setActiveSlideIndex(0)} // Set the initial active slide index
                onTransitionEnd={({ currentIndex }) => {
                    if (currentIndex === activeSlideIndex) {
                        const nextIndex = (activeSlideIndex + 1) % data.length;
                        setActiveSlideIndex(nextIndex);
                    }
                }}
                bullets={false}
            >
                {data.map((slide, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${slide.imageSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* Render the Card component with the title */}

                        <motion.div
                            key={index}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 20, opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 1,
                                ease: "easeIn",
                                repeat: Infinity,
                                repeatDelay: 6,
                            }}
                            className="flex flex-col contact-icon absolute top-[10%] left-[10%] w-[40%] p-3 rounded-lg text-white items-center justify-center duration-75"
                        >
                            <div className="flex p-2 text-white">
                                <p className="text-[40px] font-semibold">
                                    {slide.title}
                                </p>
                            </div>
                            <div className="flex px-2 text-white font-semibold">
                               {slide.title === 'General Education'?
                               <SliderTable data={generalEdu}/> : (slide.title === 'Higher Education'? <SliderTable data={higherEdu}/> :
                                <p className="">
                                    We are committed to transforming Ethiopian
                                    education through innovative and inclusive
                                    programs, empowering every student with the
                                    knowledge, skills, and opportunities.
                                </p>
                               )}
                            </div>
                            <div className="border-gray-200 border-[1px] mt-5 px-4 py-2 hover:cursor-pointer rounded-lg uppercase font-semibold">
                                View details
                            </div>
                        </motion.div>

                        {/* Add the provided div at the bottom */}
                        <div className="flex w-full mx-auto z-10 absolute bottom-0 left-0 h-10">
                            <div className="bg-[#F8BE15] h-full w-3/12"></div>
                            <div className="bg-[#D1503E] h-full w-4/12"></div>
                            <div className="bg-[#3C8FC2] h-full w-2/12"></div>
                            <div className="bg-[#1F48A2] h-full w-3/12"></div>
                        </div>
                    </div>
                ))}
            </AutoplaySlider>
        </div>
    );
};

export default Slider;
