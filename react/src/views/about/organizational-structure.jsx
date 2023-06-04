import {images} from '../../assets/index'

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
            <img src={images.Structure1} alt="higher structure" />
            <img src={images.Structure2} alt="lower structure" />
        </div>
        </>
    )
}

export default OrganizationalStructure