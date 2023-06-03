import img1 from '../../images/structure.jpg'
import img2 from '../../images/structure2.jpg'

function OrganizationalStructure() {
    return(
        <>
        <nav>
            <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
            <li className='flex gap-2'>
                <a href="#">Home</a>
                <span>{">"}</span>
            </li>
            <li>Organizational-Structure</li>
            </ol>
        </nav>
        <div className="">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
        </div>
        </>
    )
}

export default OrganizationalStructure