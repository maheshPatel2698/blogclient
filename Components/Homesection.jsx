import React from 'react'
import Image from "next/image"
import computer from "../public/computer.jpg"
const Homesection = () => {
    return (
        <div className='homesection grid grid-cols-3 gap-5'>

            {/* title section */}
            <span className='text-4xl col-span-3 text-center m-2 text-purple-700 font-bold'>Welcome To  Blog For Coder</span>

            {/* introsection */}
            <div className="introsection mt-2 mb-2 col-span-2 flex justify-center items-center max-md:col-span-3 max-md:w-full">
                <span className=' indent-5 capitalize text-xl font-bold tracking-wide text-purple-700 text-center'>Welcome To BlogForCoder.com. We are here you to provide some valuable knowlegde about Web Development which we learn through our mistakes and journey and answer some of your question so you can't face the same difficulty that we have faced in our journey....Let's get started!!</span>
            </div>
            {/* imagesection */}
            <div className="imagesection overflow-hidden rounded-2xl  w-96 h-96 max-md:w-auto max-md:h-64 col-span-1 max-md:col-span-3 ">
                <Image priority src={computer} className="rounded-xl transition duration-500 ease-out trasform hover:scale-110  w-full h-full " />
            </div>
        </div>
    )
}

export default Homesection