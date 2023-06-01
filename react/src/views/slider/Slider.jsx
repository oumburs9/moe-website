import { images } from "../../assets"

export const Slider = () => {
    return (
        <div className="flex flex-col">
            <div className="flex relative">
                <img className="w-full h-[500px]" src="https://image-prod.iol.co.za/resize/650x366/Grade-12-pupils-are-set-to-write-their-first-paper-for-the-2021-National-Senior-Certificate-examinations-on-November-1-Picture-Timothy-Bernard-African-News-Agency-ANA-Archives?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/08df94c7-ca12-59a3-8fc1-c1d4142403f4&operation=CROP&offset=0x103&resize=2343x1318" alt="" />
                <div className="absolute flex w-[80px] h-[60px] top-[70%] left-10 contact-icon px-4 py-2 rounded-lg items-center justify-center">
                    <img src={images.Prev} alt="" className="w-[50%] h-[50%]" />
                </div>
                <div className="absolute flex w-[80px] h-[60px] top-[70%] right-10 contact-icon px-4 py-2 rounded-lg items-center justify-center">
                    <img src={images.Next} alt="" className="w-[50%] h-[50%]" />
                </div>
                <Card />
            </div>
            <div className="grid md:grid-cols-7 w-[100%]">
                <div className="flex md:col-span-2 contact-icon p-5">
                    <button className="w-full capitalize">
                        Events
                    </button>
                </div>
                <div className="flex md:col-span-3 bg-blue-700 p-5">
                    <button className="w-full capitalize">
                        Education
                    </button>
                </div>
                <div className="flex md:col-span-2 contact-icon p-5">
                    <button className="w-full capitalize">
                        programes
                    </button>
                </div>
            </div>
        </div>

    )
}

export const Card = () => {
    return (
        <div className="flex flex-col absolute top-[10%] left-[10%] w-[40%]  contact-icon p-3 rounded-lg text-white items-center justify-center">
            <div className="flex  p-2 text-white">
                <p className="text-[48px] font-bold">
                    Education
                </p>
            </div>
            <div className="flex p-2 text-white font-semibold">
                <p className="">
                    We are committed to transforming Ethiopian education through innovative and inclusive programs, empowering every student with the knowledge, skills, and opportunities.
                </p>
            </div>
            <div className="border-gray-200 border-[1px] mt-5 px-4 py-2 hover:cursor-pointer rounded-lg uppercase font-semibold">
                View details
            </div>
        </div>
    )
}