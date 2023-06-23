import Side from '../../components/side.component'

const ListItem = ({content})=>{
  return (
    <>
    <li class="flex items-center">
      <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      {content}
    </li>
    </>
  )
}
function Mission() {
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
      <div className="grid md:grid-cols-3 bg-white p-8 gap-5 text-[#156584] my-[.67em]">
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
                <h4 className="text-lg"><strong>Our Values</strong></h4>
                <div className="m-4 grid grid-cols-3 gap-10">

                  {/* <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2> */}
                  <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">   
                      {['Effectiveness and Efficiency','Quality','Equity','Participatory','Exemplary'].map(c => <ListItem content={c}/>)}
                  </ul>

                  <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  {['Commitment','Quality','Excellence','Professionalism','Change/innovation','Compassion'].map(c => <ListItem content={c}/>)}
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 pl-4">
          <Side />
        </div>
      </div>

    </>
  )
}

export default Mission
