import { useEffect, useState } from "react"
import { images } from "../../assets"
import {motion,AnimatePresence, transform} from "framer-motion"
const data = [
    {
        title:'Students',
        image:images.Students
    },
    {
        title:'Teacher',
        image:images.StudentswithTeacher
    }
]
export const Slider = () => {
    const imgs = [images.Students,images.StudentswithTeacher]
    const [index,setIndex] = useState(0)
    
    useEffect(()=>{
       const interval = setInterval(() => {
            setIndex(p=>(p+1)%(imgs.length))
            return  ()=>clearInterval(interval)
        }, 5000);
    },[])

    return (
        <AnimatePresence>
            <div className="flex flex-col mt-5">
            <motion.div
            
             className="flex relative w-[100%] h-[500px] " style={{backgroundImage:`url(${data[index].image})`,backgroundSize:'cover'}}>
                <div className="absolute flex w-[80px] h-[60px] top-[70%] left-10 contact-icon px-4 py-2 rounded-lg items-center justify-center" onClick={()=>setIndex(p=> p > 0 ?(p-1)%imgs.length:imgs.length-1)}>
                    <img src={images.Prev} alt="" className="w-[50%] h-[50%]" />
                </div>
                <div className="absolute flex w-[80px] h-[60px] top-[70%] right-10 contact-icon px-4 py-2 rounded-lg items-center justify-center" onClick={()=>setIndex(p=>(p+1)%imgs.length)}>
                    <img src={images.Next} alt="" className="w-[50%] h-[50%]" />
                </div>
                <Card title={"hello"}/> 
            </motion.div>
            <SlideButtons/>
        </div>
        </AnimatePresence>
        

    )
}
export const SlideButtons = ()=>{
    return (
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
    )
}
export const Card = ({title}) => {

    return (
        <motion.div
        initial={{ y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{
            duration:5,
            delay:1,
            ease:'easeIn',
            repeat:Infinity,
            repeatDelay:5,
            
        }}
         className="flex flex-col contact-icon absolute top-[10%] left-[10%] w-[40%] p-3 rounded-lg text-white items-center justify-center duration-75">
            <div className="flex  p-2 text-white">
                <p className="text-[48px] font-bold">
                    {title}
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
        </motion.div>
    )
}