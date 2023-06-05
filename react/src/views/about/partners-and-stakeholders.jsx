import Side from '../../components/side.component'

function PartnersAndStakeholders() {
    return(
        <>
            <nav>
                <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
                    <li className='flex gap-2'>
                        <a href="#">Home</a>
                        <span>{">"}</span>
                    </li>
                    <li>Partners-and-Stakeholders</li>
                </ol>
            </nav>
            <div className="grid md:grid-cols-3 bg-white p-8 gap-5 text-[#21618c] my-[.67em]">
                <div className="md:col-span-2 pr-4">
                
                </div>
                <div className="md:col-span-1 pl-4">
                    <Side/>
                </div>
            </div>
        </>
    )
}

export default PartnersAndStakeholders