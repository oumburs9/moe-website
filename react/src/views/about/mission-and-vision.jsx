import image  from "../../images/Pr.Brihanu.nega.png";
import image2  from "../../images/initiative.png";
import React, { useEffect } from "react";

const Mission = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src="https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <>
 
      <div className="grid md:grid-cols-12 bg-white px-8 gap-5 text-[#21618c] my-[.67em]">
        <div className="md:col-span-9 pr-4">
          <div>
            <div>
              <h1 className="text-[50px]">Mission, Vision and Values</h1>
            </div>
            <div className="text-gray-700">
              <p className="mt-[1.5em]">
                <h4 className="text-lg"><strong>Our Vision</strong></h4>
                Sustainably building an education and training system that ensures quality and 
                equitable education for all citizens and that continuously produces a competent 
                and competitive workforce fueling the country’s economic development. <br />
              </p>
              <p className="mt-[2em]">
                <h4 className="text-lg"><strong>Our Mission</strong></h4>
                Ensuring effective, quality and equitable education and training system through 
                building the implementation capacity of the education sector at all levels, designing 
                and regulating standards of efficiency, expanding standardized education throughout the country, 
                as well as complementing and leveraging education sector development interventions with strategic 
                communications and public awareness.
              </p>
              <p className="mt-[2em]">
                <h4 className="text-center text-lg mb-5"><strong>Our Values</strong></h4>
                <div className="ml-4 flex justify-around">
                  <ul className="list-disc">
                    <li>Effectiveness and Efficiency</li>
                    <li>Quality</li>
                    <li>Equity</li>
                    <li>Participatory</li>
                    <li>Exemplary</li>
                  </ul>
                  <ul className="list-disc">
                    <li>Commitment</li>
                    <li>Excellence</li>
                    <li>Professionalism</li>
                    <li>Change/innovation</li>
                    <li>Compassion</li>
                  </ul>
                </div>
              </p>    
            </div>
          </div>
        </div>
        <div className="md:col-span-3 pl-4">
          <div className="">
            <div className="text-center">
              <div className="rounded-md overflow-hidden">
                <img src = {image} alt="Dr.Lia Taddesse" />
              </div>
              <div className="text-center text-gray-500">
                <span><strong>Pr.Birhanu Nega</strong></span><br />
                <span><strong>Ministry of Education</strong></span>
              </div>
              <a href="http://"><strong>Read more</strong></a>
            </div>
          </div>
          <div className="my-[3em]">
            <section className="twitterContainer">
              <div className="twitter-embed">
                <a
                  className="twitter-timeline"
                  data-width="263" 
                  data-height="600" 
                  href="https://twitter.com/fdremoe?ref_src=twsrc%5Etfw"
                >
                  Tweets by MOE
                </a>
              </div>
            </section>
          </div>
          <div className="">
            <div className="flex text-[16px]">
              <button className="border border-gray-300 rounded-t-md border-b-0 text-center py-2 px-4 ml-3 hover:bg-[#21618c] hover:text-white"><strong>INITIATIVES</strong></button>
              <button className="border border-gray-300 rounded-t-md border-b-0 text-center py-2 px-4 ml-3 hover:bg-[#21618c] hover:text-white"><strong>ARTICLES</strong></button>
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <div className="flex gap-5 mb-5">
                <img src= {image2} alt="" className="h-20 w-20" />
                <p>Continouse professional development</p>
              </div>
              <div className="flex gap-5 mb-5">
                <img src= {image2} alt="" className="h-20 w-20" />
                <p>Continouse professional development</p>
              </div>
              <div className="flex gap-5 mb-5">
                <img src= {image2} alt="" className="h-20 w-20" />
                <p>Continouse professional development</p>
              </div>
              <button className="bg-[#21618c] text-white py-3 px-6 rounded-sm shadow-blue-200 shadow-md"><strong>VIEW ALL</strong></button>
            </div>
          </div>
          <div>
            <h2 className="border-b border-gray-300 text-[25px] py-2 my-[1em]">Projects</h2>
            <div className="">
              <div className="flex gap-5 mb-5">
                <img src= {image2} alt="" className="h-20 w-20" />
                <p>Continouse professional development</p>
              </div>
              <div className="flex gap-5 mb-5">
                <img src= {image2} alt="" className="h-20 w-20" />
                <p>Continouse professional development</p>
              </div>
              <div className="flex gap-5 mb-5">
                <img src= {image2} alt="" className="h-20 w-20" />
                <p>Continouse professional development</p>
              </div>
              <button className="bg-[#21618c] text-white py-3 px-6 rounded-sm shadow-blue-200 shadow-md"><strong>VIEW ALL</strong></button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Mission
