import { images } from '../../assets'
import Breadcrumb from '../../components/breadcrumb.component'
import Titles from '../../components/title.component'
export const ContactUs = () => {

    const path = [{name: 'Home', link: ''},{name: 'Contact Us'}]

    return (
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <div className="flex flex-col mt-4">

                <iframe style={{ height: "70vh", width: "100%", border: 0, padding: '10px' }} src="https://www.google.com/maps/embed/v1/place?q=Ministry+of+Education,+Constitution+Road,+Bridgetown,+Barbados&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                <div className='p-10 pb-0'>
                    <Titles title={'Contact Us'} subtitle={'You can share us your thoughts and suggestions'}/>
                </div>
                <div className="grid md:grid-cols-3 p-10">
                    <div className="md:col-span-2">
                        <ContactForm />
                    </div>
                    <div className="md:col-span-1">
                        <div className="flex flex-col gap-3 p-2">
                            <div className='mb-3 contact-icon w-[60px] h-[60px] rounded-full flex items-center justify-center'>
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
            <form className='flex flex-col p-5 w-[80%]'>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">FullName</label>
                    <input type="text" id="email" className="shadow-lg border border-gray-300 p-4  text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow-sm hover:shadow-sm block w-full" placeholder="Your Name" required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" id="email" className="shadow-lg border border-gray-300 p-4  text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow-sm hover:shadow-sm block w-full" placeholder="Your Email" required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Subject</label>
                    <input type="text" id="email" className="shadow-lg border border-gray-300 p-4  text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow-sm hover:shadow-sm block w-full" placeholder="subject" required />
                </div>
                <div className="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea id="message" rows="4" className="shadow-lg border border-gray-300 p-4  text-gray-900 text-sm rounded-lg focus:outline-none focus:shadow-sm hover:shadow-sm block w-full" placeholder="Write your thoughts here..."></textarea>
                </div>
                <button type="submit" class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">SEND</button>
            </form>
        </div>
    )
}

export const ContactInfo = ({ image, content, content_ }) => {
    return (
        <div className="flex gap-4 p-3 items-center">
            <div className='contact-icon w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                <img src={image} alt="" className='w-[50%] h-[50%]' />
            </div>
            <div className="flex flex-col items-start">
                <p className="text-lg text-blue-700 font-medium">
                    {content}
                </p>
                <p className="text-lg text-blue-700 font-medium">
                    {content_}
                </p>
            </div>
        </div>
    )

}

export const NewsLetter = () => {
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