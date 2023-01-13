import React, { useRef } from 'react'
import Blognav from '../Components/Blognav'
import { BsFillPlusCircleFill } from "react-icons/bs"
import styles from "../styles/Blog.module.css"
import { AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"
import computer from "../public/computer.jpg"
const Blogs = () => {
    const router = useRouter()
    const topics = [
        "HTML",
        "CSS",
        "JS",
        "ReactJs",
        "NextJs",
        "NodeJs",
        "ExpressJs",
        "MongoDb",
        "Python",
        "C",
        "C++",
    ]

    // ref for sidebar
    const sidebarBlogref = useRef()

    const handleToggle = () => {
        if (
            (sidebarBlogref.current.classList.contains('scale-0')
                &&
                (sidebarBlogref.current.classList.contains('h-0')))) {
            sidebarBlogref.current.classList.remove('scale-0')
            sidebarBlogref.current.classList.remove('h-0')
            sidebarBlogref.current.classList.add('scale-1')
            sidebarBlogref.current.classList.add('h-full')
        }
        else if (!
            (sidebarBlogref.current.classList.contains('scale-0')
                &&
                (sidebarBlogref.current.classList.contains('h-0')))) {
            sidebarBlogref.current.classList.add('scale-0')
            sidebarBlogref.current.classList.add('h-0')
            sidebarBlogref.current.classList.remove('scale-1')
            sidebarBlogref.current.classList.remove('h-full')
        }
    }

    return (
        <div className='relative' >
            <Blognav />
            <div className="sidebar-blog flex justify-around items-center flex-col z-20 absolute top-0 h-auto  w-28 p-5 ml-2 transform transition-all ease-in duration-300">
                {/* toggle button */}
                <button id={styles.toggleButton} onClick={handleToggle} className='toggle-btn absolute top-0 left-0 cursor-pointer z-20 m-2 hidden bg-purple-600 w-24 max-lg:flex justify-between items-center text-white font-bold p-2 rounded-full '>Topics<BsFillPlusCircleFill size={28} /></button>

                {/* sidebar ref */}
                <div ref={sidebarBlogref} className="topics transform transition-all ease-in duration-200 max-lg:flex justify-around items-center flex-col ml-1 overflow-y-hidden origin-top scale-0 h-0 p-2 mt-8 max-2xl:hidden">
                    {
                        topics.map((t, index) => {

                            return <span key={index} onClick={handleToggle} className='cursor-pointer m-2 text-center bg-purple-600 w-24 text-white font-bold p-2 rounded-full'>{t}</span>

                        })
                    }
                </div>

            </div>
            <div className='blogs-section  w-full h-full p-2  grid grid-cols-1'>
                <div className="blog-card-section flex justify-center items-center flex-col ">
                    <span className='p-1 cursor-pointer m-3 col-span-4 font-bold text-purple-700 text-xl'>Tag-ReactJs</span>
                    <div className="main-card-section grid grid-cols-4 place-items-center gap-5">


                        <div className="blog card rounded-2xl  shadow-md shadow-purple-700 w-80 p-2 col-span-1 max-xl:col-span-2 max-xl:w-full  max-md:w-4/5 max-md:col-span-4  ">
                            <span className="card-title  w-full block text-center  font-bold text-lg text-purple-700">How to Not To code</span>
                            <div className="card-image relative m-auto mt-2 w-60 h-60 max-md:w-auto">
                                <Image src={computer} className="w-full h-full" alt="image" />
                            </div>
                            <div className="card-desc  m-2 text-justify">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit facere repellendus delectus aliquam iste fugit quae </p>
                            </div>
                            <div className="button-section  flex justify-end items-end ">
                                <button onClick={() => router.push(`blog/${'How to Not To code'}`)} className='font-bold flex justify-center items-center rounded-full hover:text-white transition-all ease-in duration-200 bg-purple-600 shadow-md w-auto p-3 m-2 text-black shadow-purple-600 '>Read Blog <AiOutlineArrowRight size={20} /></button>
                            </div>

                        </div>

                        <div className="blog card max-sm:col-span-4 rounded-2xl shadow-md shadow-purple-700 w-80 p-2 col-span-1 max-xl:col-span-2 max-xl:w-full max-md:w-4/5 max-md:col-span-4 ">
                            <span className="card-title  w-full block text-center  font-bold text-lg text-purple-700">How to Not To code</span>
                            <div className="card-image relative m-auto mt-2 w-60 h-60 max-md:w-auto">
                                <Image src={computer} className="w-full h-full" alt="image" />
                            </div>
                            <div className="card-desc  m-2 text-justify">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit facere repellendus delectus aliquam iste fugit quae </p>
                            </div>
                            <div className="button-section  flex justify-end items-end ">
                                <button className='font-bold flex justify-center items-center rounded-full hover:text-white transition-all ease-in duration-200 bg-purple-600 shadow-md w-auto p-3 m-2 text-black shadow-purple-600 '>Read Blog <AiOutlineArrowRight size={20} /></button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="blog-card-section flex justify-center items-center flex-col ">
                    <span className='p-1 cursor-pointer m-3 col-span-4 font-bold text-purple-700 text-xl'>Tag-ReactJs</span>
                    <div className="main-card-section grid grid-cols-4 place-items-center gap-5">

                        <div className="blog card rounded-2xl  shadow-md shadow-purple-700 w-80 p-2 col-span-1 max-xl:col-span-2 max-xl:w-full  max-md:w-4/5 max-md:col-span-4  ">
                            <span className="card-title  w-full block text-center  font-bold text-lg text-purple-700">How to Not To code</span>
                            <div className="card-image relative m-auto mt-2 w-60 h-60 max-md:w-auto">
                                <Image src={computer} className="w-full h-full" alt="image" />
                            </div>
                            <div className="card-desc  m-2 text-justify">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit facere repellendus delectus aliquam iste fugit quae </p>
                            </div>
                            <div className="button-section  flex justify-end items-end ">
                                <button className='font-bold flex justify-center items-center rounded-full hover:text-white transition-all ease-in duration-200 bg-purple-600 shadow-md w-auto p-3 m-2 text-black shadow-purple-600 '>Read Blog <AiOutlineArrowRight size={20} /></button>
                            </div>

                        </div>
                        <div className="blog card max-sm:col-span-4 rounded-2xl shadow-md shadow-purple-700 w-80 p-2 col-span-1 max-xl:col-span-2 max-xl:w-full max-md:w-4/5 max-md:col-span-4 ">
                            <span className="card-title  w-full block text-center  font-bold text-lg text-purple-700">How to Not To code</span>
                            <div className="card-image relative m-auto mt-2 w-60 h-60 max-md:w-auto">
                                <Image src={computer} className="w-full h-full" alt="image" />
                            </div>
                            <div className="card-desc  m-2 text-justify">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit facere repellendus delectus aliquam iste fugit quae </p>
                            </div>
                            <div className="button-section  flex justify-end items-end ">
                                <button className='font-bold flex justify-center items-center rounded-full hover:text-white transition-all ease-in duration-200 bg-purple-600 shadow-md w-auto p-3 m-2 text-black shadow-purple-600 '>Read Blog <AiOutlineArrowRight size={20} /></button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blogs