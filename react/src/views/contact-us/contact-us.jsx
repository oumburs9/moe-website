import { images } from '../../assets'
export const ContactUs = () => {

    return (
        <><nav>
            <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
                <li className='flex gap-2'>
                    <a href="#">Home</a>
                    <span>{">"}</span>
                </li>
                <li>Contact Us</li>
            </ol>
        </nav>
        <div className="flex flex-col mt-4">

                <iframe style={{ height: "70vh", width: "100%", border: 0, padding: '10px' }} src="https://www.google.com/maps/embed/v1/place?q=Ministry+of+Education,+Constitution+Road,+Bridgetown,+Barbados&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>

                <div className="grid md:grid-cols-12 pt-5">
                    <div className="md:col-span-9">
                        <ContactForm />
                    </div>
                    <div className="md:col-span-3">
                        <div className="flex flex-col gap-3 p-2">
                            <div className='mx-auto mb-3 contact-icon w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                                <img src={images.World} alt="" className='w-[70%] h-[70%]' />
                            </div>
                            <h2 className='text-3xl text-blue-700 font-semibold'>
                                Contact Info
                            </h2>
                            <h3>
                                Ministry of Education - Ethiopia.
                            </h3>
                        </div>
                        <ContactInfo image={images.Map} content={"1234 Sudan Street"} content_={"Addis Ababa, Ethiopia"} />
                        <ContactInfo image={images.Phone} content={"(0251) 115517011"} />
                        <ContactInfo image={images.Save} content={"00251 11 551-9366"} />
                        <ContactInfo image={images.Mail} content={"info@moe.gov.et"} />
                    </div>
                </div>
            </div></>
    )
}

export const ContactForm = () => {
    return (
        <div className="">
            <div className="p-3 flex">
                <p className="text-[50px] text-blue-600 capitalize">
                    Contact us
                </p>
            </div>
            <form action="" className="flex flex-col p-2 gap-3">
                <div className="flex flex-col p-2 items-start gap-2">
                    <label className="text-sm capitalize text-gray-500 font-bold">your name</label>
                    <input type="text" name="" id="" className="w-[90%] hover:shadow focus:shadow bg-gray-100" /></div>
                <div className="flex flex-col p-2 items-start gap-2">
                    <label className="text-sm capitalize text-gray-500 font-bold">your email</label>
                    <input type="email" name="" id="" className="w-[90%] hover:shadow focus:shadow bg-gray-100" /></div>
                <div className="flex flex-col p-2 items-start gap-2">
                    <label className="text-sm capitalize text-gray-500 font-bold">subject</label>
                    <input type="text" name="" id="" className="w-[90%] hover:shadow focus:shadow bg-gray-100" /></div>
                <div className="flex flex-col p-2 items-start gap-2">
                    <label className="text-sm capitalize text-gray-500 font-bold">message</label>
                    <textarea rows={5} name="" id="" className="w-[90%] hover:shadow focus:shadow bg-gray-100" /></div>
                <div className="flex justify-end mr-24">
                    <button className="btn-color-gb py-3 px-4 text-white font-bold text-sm flex items-center uppercase hover:shadow">
                        <p>Send message</p>
                    </button>
                </div>
            </form>
        </div>
    )
}

export const ContactInfo = ({ image, content, content_ }) => {
    return (
        <div className="flex gap-4 p-3 items-center">
            <div className='contact-icon w-[60px] h-[60px] rounded-full flex items-center justify-center'>
                <img src={image} alt="" className='w-[50%] h-[50%]' />
            </div>
            <div className="flex flex-col items-start">
                <p className="text-lg text-gray-400">
                    {content}
                </p>
                <p className="text-lg text-gray-400">
                    {content_}
                </p>
            </div>
        </div>
    )

}

export const NewsLetter = ()=>{
    return (
        <div className="gird md:grid-cols-6">
            <div className="flex gap-[50%] md:col-span-1">
                <div className='contact-icon w-[50px] h-[50px] flex items-center justify-center'>
                    <img src={images.Mail} alt="" className='w-[100%] h-[100%] text-black' />
                </div>
            </div>
            <div className="flex flex-col p-2 items-start gap-2 md:col-span-4">
                <input type="text" name="" id="" className="w-[90%] hover:shadow focus:shadow bg-gray-100" />
            </div>

        </div>
    )
}