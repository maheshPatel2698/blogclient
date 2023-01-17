import React from 'react'

import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import Image from 'next/image'
import loginimage from '../public/loginimage.webp'
import { motion } from "framer-motion"
const login = () => {
    return (
        <div className=" p-2 w-full  flex justify-center max-lg:h-auto items-center max-lg:flex-col h-screen bg-purple-200 ">

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
                <h1 className='text-2xl font-bold text-center'>Log In</h1>
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
                    <label className="transition-all ease-in duration-150  cursor-pointer hover:text-white" htmlFor="password"><RiLockPasswordLine size={28} /> </label>
                    <input
                        className=' bg-transparent placeholder:italic rounded-full p-1 w-96 placeholder-black outline-none'
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Type Your Password'
                    />
                </div>
                <div className="btn-class flex justify-around items-center flex-row ">
                    <button className='flex text-white bg-indigo-500 border-0 py-2 transition-all ease-in duration-200  px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Google</button>
                    <button className='flex text-white bg-indigo-500 border-0 py-2 transition-all ease-in duration-200  px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Login</button>

                </div>
            </motion.div>
            <motion.div
                initial={{
                    x: 200,
                    opacity: 0.5
                }}

                transition={{ duration: 1 }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                className="image-class w-72 h-72 rounded-2xl ">
                <Image src={loginimage} className="w-full h-full rounded-2xl " alt="image" />
            </motion.div>

        </div>
    )
}


export default login