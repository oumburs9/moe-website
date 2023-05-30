import image  from "./images/Dr.Lia.png";
import image2  from "./images/initiative.png";
function App() {

  return (
    <>
      <div className="grid md:grid-cols-12 bg-white px-8 text-[#21618c] my-[.67em]">
        <div className="md:col-span-9">
          <div>
            <div>
              <h1 className="text-[50px]">Mission, Vision and Values</h1>
            </div>
            <div className="text-gray-500">
              <p className="mt-[1.5em]">
                <strong>Our Vision</strong><br />
                To see healthy, productive and prosperous Ethiopians. <br />
                <strong>Our Mission</strong><br />
                “To promote the health and well-being of the society through providing and regulating a 
                comprehensive package of health services of the highest possible quality in an equitable manner.”
              </p>
              <p className="mt-[2em]">
                <strong>Our Values</strong><br />
                <ul className="list-disc ml-4">
                  <li>Community First</li>
                  <li>Integrity, loyalty, honesty</li>
                  <li>Transparency, accountability, and confidentiality</li>
                  <li>Impartiality</li>
                  <li>Respect for law</li>
                  <li>Being a role model</li>
                  <li>Collaboration</li>
                  <li>Professionalism</li>
                  <li>Change/innovation</li>
                  <li>Compassion</li>
                </ul>
              </p>
              <p className="mt-[3em]">
                <strong>Objectives</strong>
              </p>
              <p className="mt-[2em]">
                <strong>The overarching objective of HSTP-II is to improve the health status of
                  the population by realizing these four objectives:</strong>
                <ol className="list-decimal ml-4">
                  <li className="pl-2">Accelerate progress towards universal health coverage</li>
                  <li className="pl-2">Protect people from health emergencies</li>
                  <li className="pl-2">Woreda transformation</li>
                  <li className="pl-2">Improve health system responsiveness</li>
                </ol>   
              </p>
              <p className="mt-[2em]">
                <strong>Powers and Duties of the Ministry according to proclamation no. 1097/2018: </strong>
                <ol className="list-decimal ml-4">
                  <li className="pl-2">Formulate the country's health sector development program; follow up and evaluate the implementation of same;</li>
                  <li className="pl-2">Prepare the country's health services coverage map; provide support for the expansion of health infrastructure;</li>
                  <li className="pl-2">Support the expansion of health services coverage; follow up and coordinate the implementation of health programs;</li>
                  <li className="pl-2">Provide appropriate support to promote research activities intended to provide solutions for the country's health problems and for improving health service delivery;</li>
                  <li className="pl-2">Follow up and coordinate the implementation of national nutrition strategies; </li>
                  <li className="pl-2">Devise and follow up the implementation of strategies for the prevention of epidemic and communicable diseases;</li>
                  <li className="pl-2">Take preventive measures against events that threaten the public health; in the events of an emergency situation coordinate measures of other stakeholders to expeditiously and effectively tackle the problem;</li>
                  <li className="pl-2">Expand health education through various appropriate means;</li>
                  <li className="pl-2">Formulate the country's health sector development program; follow up and evaluate the implementation of same;</li>
                  <li className="pl-2">Prepare the country's health services coverage map; provide support for the expansion of health infrastructure;</li>
                  <li className="pl-2">Support the expansion of health services coverage; follow up and coordinate the implementation of health programs;</li>
                  <li className="pl-2">Provide appropriate support to promote research activities intended to provide solutions for the country's health problems and for improving health service delivery;</li>
                  <li className="pl-2">Ensure adequate supply and proper utilization of essential drugs and medical equipment in the country; </li>
                  <li className="pl-2">Prepare the country's health services coverage map; provide support for the expansion of health infrastructure;</li>
                  <li className="pl-2">Support the expansion of health services coverage; follow up and coordinate the implementation of health programs;</li>
                  <li className="pl-2">Provide appropriate support to promote research activities intended to provide solutions for the country's health problems and for improving health service delivery;</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 p-4">
          <div className="">
            <div className="text-center">
              <div className="rounded-md overflow-hidden">
                <img src = {image} alt="Dr.Lia Taddesse" />
              </div>
              <div className="text-center text-gray-500">
                <span><strong>Dr.Lia Taddesse</strong></span><br />
                <span><strong>Ministry of Health</strong></span>
              </div>
              <a href="http://"><strong>Read more</strong></a>
            </div>
          </div>
          <div className="my-[3em]">
            <div className="">
              <a href="https://twitter.com/FMoHealth?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3AFMoHealth%7Ctwcon%5Es2">
                  <div className="border border-gray-300 rounded-t-xl text-black text-[20px] p-2 hover:bg-blue-50">
                    <strong>Tweets from @FMoHealth</strong>
                  </div>
              </a>
              <iframe src="https://twitter.com/FMoHealth/status/1663538568114110467?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3AFMoHealth%7Ctwcon%5Es1" frameborder="1"
                className="border border-gray-300 border-t-0 rounded-b-xl h-[85vh] w-full overflow-y-scroll">
                Tweets by MOH
              </iframe>
            </div>
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
            <h2 className="border-b border-gray-300 text-[25px] py-2 my-[1em]">Main navigation</h2>
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

export default App
