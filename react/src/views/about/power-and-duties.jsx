import Breadcrumb from '../../components/breadcrumb.component'
import Side from '../../components/side.component'
import Titles from '../../components/title.component'

const header = {
    title: 'Power and Duties',
    subtitle: 'Power and Duties of FDRE Ministry of Education'
}

function PowerAndDuties() {
    const path = [{name: 'Home', link: ''},{name: 'Power-and-Duties'}]
    return(
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <div className="grid md:grid-cols-3 bg-white p-8 gap-5 text-[#21618c] my-[.67em]">
                <div className="md:col-span-2 pr-4">
                    <div className=''>
                        <Titles title={header.title} subtitle={header.subtitle} />
                    </div>
                </div>
                <div className="md:col-span-1 pl-4">
                    <Side/>
                </div>
            </div>
        </>
    )
}

export default PowerAndDuties