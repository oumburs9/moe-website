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
                    <div className="md:col-span-8">
                        <ContactForm />
                    </div>
                    <div className="md:col-span-4">
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
        <div className="flex flex-col pl-5">
            <div className="p-3 flex">
                <p className="text-[45px] text-blue-600 capitalize font-bold ">
                    Contact us
                </p>
            </div>

            <form className='flex flex-col pl-5 w-[60%]'>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FullName</label>
                    <input type="text" id="email" class="shadow-sm bg-gray-50 border border-green-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light " placeholder="yourName" required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="password" class="shadow-sm bg-gray-50 border border-green-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-green-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>

                <div className="mb-6">

                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-green-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEND</button>
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