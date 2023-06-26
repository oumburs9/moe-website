import Breadcrumb from '../../components/breadcrumb.component'
import Side from '../../components/side.component'
import Titles from '../../components/title.component'

const ListItem = ({ content }) => {
  return (
    <>
      <li class="flex justify-stretch items-baseline">
        <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        {content}
      </li>
    </>
  )
}

const header = {
  title: 'Mission, Vision and Values',
  subtitle: 'Mission, Vision and Values of FDRE Ministery of Education'
}

const contents = [
  {
    title: 'Our Vision',
    paragraph: 'Sustainably building an education and training system that ensures quality and equitable education for all citizens and that continuously produces a competentand competitive workforce fueling the country’s economic development.'
  },
  {
    title: 'Our Mission',
    paragraph: 'Ensuring effective, quality and equitable education and training system through building the implementation capacity of the education sector at all levels, designing and regulating standards of efficiency, expanding standardized education throughout the country, as well as complementing and leveraging education sector development interventions with strategic communications and public awareness.'
  },
  {
    title: 'Our Values',
    list: [
      'Effectiveness and Efficiency',
      'Quality',
      'Equity',
      'Participatory',
      'Exemplary',
      'Commitment',
      'Quality',
      'Excellence',
      'Professionalism',
      'Change/innovation',
      'Compassion'
    ]
  }
]

function Mission() {
  const path = [{name: 'Home', link: ''},{name: 'Mission-and-Vision'}]
  return (
    <>
      <nav>
        <Breadcrumb path={path} />
      </nav>
      <div className="grid md:grid-cols-3 bg-white p-20 gap-5 text-[#156584] my-[.67em]">
        <div className="md:col-span-2 pr-4">
          <div>
            <Titles title={header.title} subtitle={header.subtitle} />
            <div className="">
              {contents.map(content => (
                <div className="mt-[3em]">
                  <h4 className="text-2xl font-bold mb-3">{content.title}</h4>
                  <p className='mb-3'>{content.paragraph}</p>
                  <ul className='grid md:grid-cols-2 gap-x-10 gap-y-2'>
                    {content.list ? content.list.map(c => <ListItem content={c} />) : ''}
                  </ul>
                </div>
              ))}
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
