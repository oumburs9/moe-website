import { useState } from "react";
import React from "react";

import OurMinisters from "./about/ministers";

import EducationSector from "./education-sectors/education-sector";
import Slider from "../components/slider.component";
import News from "./Media/news";

const Home = () => {
  
    const viewMoreLink = "/site/articles-3-col";

    return (
        <>
            <div className="flex flex-col content-center justify-center">
                <Slider />

                <News />

                <OurMinisters/>
            
               <EducationSector/>
            </div>
        </>
    );
};

export default Home;



