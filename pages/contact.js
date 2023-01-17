import React from 'react'
import { AiOutlineMail, AiOutlineUser, AiOutlineQuestionCircle } from "react-icons/ai"
import Image from 'next/image'
import contactimg from '../public/contactimg.webp'
import { motion } from "framer-motion"

const contact = () => {
    return (
        <div className=" p-2 w-full  flex justify-center max-lg:h-auto items-center max-lg:flex-col h-screen bg-purple-300 ">
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0.5
                }}

                transition={{ duration: 1 }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                className="image-class w-72 h-72 rounded-2xl ">
                <Image src={contactimg} className="w-full h-full rounded-2xl " />
            </motion.div>
            <motion.div
                initial={{
                    y: -200,
                    opacity: 0.5
                }}

                transition={{ duration: 1 }}
                animate={{

                    y: 0,
                    opacity: 1
                }}
                className="signform max-sm:w-full m-2 backdrop-blur-sm bg-white/30 rounded-3xl p-2 max-auto ">
                <h1 className='text-2xl font-bold text-center'>Don't Hesitate To Ask?</h1>
                <h1 className='text-xl font-bold text-center'>We will get in touch as soon as possible</h1>
                <div className='m-2  backdrop-blur-md bg-white/10  flex justify-center items-center gap-5 rounded-full p-2'>
                    <label className="transition-all ease-in duration-150  cursor-pointer hover:text-white" htmlFor="full_name"><AiOutlineUser size={28} /></label>
                    <input
                        className=' bg-transparent placeholder:italic rounded-full p-1 w-96 placeholder-black outline-none '
                        type="text"
                        name="full_name"
                        id="full_name"
                        placeholder='Type Your Full Name'
                    />
                </div>
                <div className='m-2 backdrop-blur-md bg-white/10  flex justify-center items-center gap-5 rounded-full p-2' >
                    <label className="transition-all ease-in duration-150 cursor-pointer hover:text-white" htmlFor="email"><AiOutlineMail size={28} /> </label>
                    <input
                        className=' bg-transparent placeholder:italic rounded-full p-1 w-96 placeholder-black outline-none'
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Type Your Email'
                    />
                </div>
                <div className='m-2 backdrop-blur-md bg-white/10  flex justify-center items-center gap-5 rounded-full p-2'>
                    <label className="transition-all ease-in duration-150  cursor-pointer hover:text-white" htmlFor="password"><AiOutlineQuestionCircle size={28} /> </label>
                    <input
                        className=' bg-transparent placeholder:italic rounded-full p-1 w-96 placeholder-black outline-none'
                        type="text"
                        name="query"
                        id="query"
                        placeholder='Type Your Query...?'
                    />
                </div>
                <div className="btn-class flex justify-around items-center flex-row ">
                    <button className='flex text-white bg-indigo-500 border-0 py-2 transition-all ease-in duration-200  px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Sent Query</button>


                </div>
            </motion.div>

        </div>
    )
}

export default contact