import React from 'react'
import Image from 'next/image'
import user from "../public/user.webp"
import { FiEdit } from "react-icons/fi"
import { AiOutlineDelete, AiOutlineMail, AiOutlineUser } from "react-icons/ai"
import { motion } from 'framer-motion'
const profile = () => {
    return (
        <div className='profile max-sm:p-2 grid grid-cols-2 max-md:grid-cols-1 max-md:h-auto  mt-2 h-auto place-items-center bg-purple-300 '>
            <div className="profile-card-section w-96 h-auto backdrop-blur-sm bg-white/30 rounded-3xl m-3 max-sm:w-full max-sm:ml-1 max-sm:mr-1">
                <div className="user-image flex justify-center items-center flex-col m-3 ">
                    <motion.img
                        initial={{
                            y: -400,
                            opacity: 0.5,
                        }}
                        transition={{
                            duration: 1.1
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,

                        }}

                        src={user.src} className="w-36 h-36 m-2 rounded-full shadow-xl" />
                    <div className='user-name-email-section flex justify-center items-center flex-col mt-2 gap-2'>
                        <span className='flex gap-2 justify-center items-center text-xl text-slate-900'><AiOutlineUser className='text-slate-700' size={22} />Mahesh Patel</span>
                        <span className='flex gap-2 justify-center items-center text-lg text-slate-900'><AiOutlineMail className='text-slate-700' size={22} /> a@gamil.com</span>
                    </div>
                </div>

                <div className="user-details mt-2 flex justify-around items-center m-2">
                    <div className="liked-post-count flex justify-center items-center flex-col shadow-xl font-bold p-2 w-16 rounded-full bg-indigo-500 text-white">
                        <span>10</span>
                        <span>Liked</span>
                    </div>
                    <div className="saved-post-count flex justify-center items-center flex-col shadow-xl font-bold p-2 w-16 rounded-full bg-indigo-500 text-white">
                        <span>12</span>
                        <span>Saved</span>
                    </div>
                </div>
                <div className="btn-class font-bold flex justify-around items-center m-3">
                    <button className='bg-indigo-500 gap-2 text-white flex justify-center items-center shadow-md rounded-3xl m-2 px-8 py-2'>
                        <FiEdit size={20} />Edit</button>
                    <button className='bg-indigo-500 gap-2 text-white flex justify-center items-center shadow-md rounded-3xl  m-2 px-8 py-2'>
                        <AiOutlineDelete size={22} />Delete</button>
                </div>

            </div>
            <div className="blogs-section-card  w-full h-full p-2 grid grid-cols-1 grid-rows-2 gap-2 ">
                <div className="liked-blogs-section">
                    <h1 className='text-xl text-center text-bold'>Your Liked Blogs</h1>
                    <div className="liked-blogs  p-2 grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center m-2 scrollbar scrollbar-thumb-purple-700 scrollbar-track-purple-400 scrollbar-w-3 scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-56 snap-y snap-mandatory ">
                        <div className="blog-card snap-center  flex justify-center items-center flex-col rounded-3xl shadow-xl max-sm:w-full">
                            <h3 className="card-title font-bold">How to not to code</h3>
                            <Image src={user} className="image-class  w-32 h-32 " />
                            <div className="btn-class font-bold flex justify-around items-center m-3">
                                <button className='bg-indigo-500 gap-2 text-white flex justify-center items-center shadow-md rounded-3xl  px-8 py-2'> Read Blog</button>
                            </div>
                        </div>
                        <div className="blog-card  snap-center  flex justify-center items-center flex-col rounded-3xl shadow-xl max-sm:w-full">
                            <h3 className="card-title font-bold">How to not to code</h3>
                            <Image src={user} className="image-class w-32 h-32 " />
                            <div className="btn-class font-bold flex justify-around items-center m-3">
                                <button className='bg-indigo-500 gap-2 text-white flex justify-center items-center shadow-md rounded-3xl  px-8 py-2'> Read Blog</button>
                            </div>
                        </div>
                        <div className="blog-card   snap-center flex justify-center items-center flex-col rounded-3xl shadow-xl max-sm:w-full">
                            <h3 className="card-title font-bold">How to not to code</h3>
                            <Image src={user} className="image-class w-32 h-32 " />
                            <div className="btn-class font-bold flex justify-around items-center m-3">
                                <button className='bg-indigo-500 gap-2 text-white flex justify-center items-center shadow-md rounded-3xl  px-8 py-2'> Read Blog</button>
                            </div>
                        </div>
                        <div className="blog-card  snap-center  flex justify-center items-center flex-col rounded-3xl shadow-xl max-sm:w-full">
                            <h3 className="card-title font-bold">How to not to code</h3>
                            <Image src={user} className="image-class w-32 h-32 " />
                            <div className="btn-class font-bold flex justify-around items-center m-3">
                                <button className='bg-indigo-500 gap-2 text-white flex justify-center items-center shadow-md rounded-3xl  px-8 py-2'> Read Blog</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="saved-blogs-section">
                    <h1 className='text-xl text-center text-bold'>Your Liked Blogs</h1>
                    <div className="liked-blogs p-2 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-5  place-items-center m-2  scrollbar scrollbar-thumb-purple-700 scrollbar-track-purple-400 scrollbar-w-3 scrollbar-thumb-rounded-full scrollbar-track-rounded-full  h-56 snap-y snap-mandatory ">
                        <div className="blog-card snap-center  flex justify-center items-center flex-col rounded-3xl shadow-xl max-sm:w-full">
                            <h3 className="card-title font-bold">How to not to code</h3>
                            <Image src={user} className="image-class w-32 h-32 " />
                            <div className="btn-class font-bold flex justify-around items-center m-3">
                                <button className='bg-indigo-500 gap-2 text-white flex justify-center items-center shadow-md rounded-3xl  px-8 py-2'> Read Blog</button>
                            </div>
                        </div>
                        <div className="blog-card  snap-center  flex justify-center items-center flex-col rounded-3xl shadow-xl max-sm:w-full">
                            <h3 className="card-title font-bold">How to not to code</h3>
                            <Image src={user} className="image-class w-32 h-32 " />
                            <div className="btn-class font-bold flex justify-around items-center m-3">
                                <button className='bg-indigo-500 gap-2 text-white flex justify-center items-center shadow-md rounded-3xl  px-8 py-2'> Read Blog</button>
                            </div>
                        </div>
                        <div className="blog-card   snap-center flex justify-center items-center flex-col rounded-3xl shadow-xl max-sm:w-full">
                            <h3 className="card-title font-bold">How to not to code</h3>
                            <Image src={user} className="image-class w-32 h-32 " />
                            <div className="btn-class font-bold flex justify-around items-center m-3">
                                <button className='bg-indigo-500 gap-2 text-white flex justify-center items-center shadow-md rounded-3xl  px-8 py-2'> Read Blog</button>
                            </div>
                        </div>
                        <div className="blog-card  snap-center  flex justify-center items-center flex-col rounded-3xl shadow-xl max-sm:w-full">
                            <h3 className="card-title font-bold">How to not to code</h3>
                            <Image src={user} className="image-class w-32 h-32 " />
                            <div className="btn-class font-bold flex justify-around items-center m-3">
                                <button className='bg-indigo-500 gap-2 text-white flex justify-center items-center shadow-md rounded-3xl  px-8 py-2'> Read Blog</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default profile