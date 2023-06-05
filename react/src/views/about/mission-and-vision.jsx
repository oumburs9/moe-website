import Side from '../../components/side.component'

function Mission(){
  return (
    <>
      <nav>
        <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
          <li className='flex gap-2'>
            <a href="#">Home</a>
            <span>{">"}</span>
          </li>
          <li>Mission-and-Vision</li>
        </ol>
      </nav>
      <div className="grid md:grid-cols-3 bg-white p-8 gap-5 text-[#21618c] my-[.67em]">
        <div className="md:col-span-2 pr-4">
          <div>
            <div>
              <h1 className="text-[50px]">Mission, Vision and Values</h1>
            </div>
            <div className="">
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
        <div className="md:col-span-1 pl-4">
          <Side/>
        </div>
      </div>
     
    </>
  )
}

export default Mission
