import React from 'react'
import Image from "next/image"
import computer from "../public/computer.jpg"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Homesection = () => {
    const [text, count] = useTypewriter({
        words: ["Let Get Started!!", "Let's Code!!"],
        delaySpeed: 2000,
        loop: true,

    })
    return (
        <div className="homesection grid grid-cols-3 gap-5  ">
            {/* title section */}
            <span className='text-4xl col-span-3 text-center m-2 font-bold'>Welcome To  Blog For Coder</span>
            {/* introsection */}
            <div className="introsection mt-2 mb-2 col-span-2 flex justify-center items-center max-lg:col-span-3 max-lg:w-full   ">
                <p className=' m-2 max-sm:text-center max-sm:mb-5 max-sm:h-auto capitalize text-xl text-justify font-bold tracking-wide  '>Welcome To BlogForCoder.com. We are here you to provide some valuable knowlegde about Web Development which we learn through our mistakes and journey and answer some of your question so you can't face the same difficulty that we have faced in our journey.... <span className='text-2xl font-extrabold'>{text}<Cursor cursorColor='pruple' cursorBlinking /> </span> </p>
            </div>
            {/* imagesection */}
            <div className="imagesection overflow-hidden mb-1 rounded-2xl w-full h-96 max-lg:w-96 max-lg:h-64 col-span-1 max-lg:col-span-3 max-lg:mx-auto max-sm:w-auto ">
                <Image priority src={computer} className="rounded-xl transition duration-500 ease-out trasform hover:scale-110  w-full h-full" alt="homeimage" />
            </div>
        </div >
    )
}

export default Homesection