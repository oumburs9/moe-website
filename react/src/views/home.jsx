import { useState } from "react";
import React from "react";

import OurMinisters from "./about/ministers";

import EducationSector from "./education-sectors/education-sector";
import Slider from "../components/slider.component";
import News from "./Media/news-homepage";
import Services from "../components/services.component";


const Home = () => {
  
    const viewMoreLink = "/site/articles-3-col";

    return (
        <>
            <div className="flex flex-col content-center justify-center">
                <Slider />

                <News />

                <OurMinisters/>
               <EducationSector/>
               <Services/>
            
            </div>
        </>
    );
};

export default Home;



