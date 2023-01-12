import React, { useRef } from 'react'
import Blognav from '../Components/Blognav'
import { BsFillPlusCircleFill } from "react-icons/bs"
import styles from "../styles/Blog.module.css"
const Blogs = () => {
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
                <button id={styles.toggleButton} onClick={handleToggle} className='toggle-btn absolute top-0 left-0 cursor-pointer z-20 m-2 max-2xl:hidden bg-purple-600 w-24 max-lg:flex justify-between items-center   text-white font-bold p-2 rounded-full '>Topics<BsFillPlusCircleFill size={28} /></button>
                <div ref={sidebarBlogref} className="topics transform transition-all ease-in duration-300 max-lg:flex justify-around items-center flex-col ml-1 overflow-y-hidden scale-0 h-0 p-2 mt-8 max-2xl:hidden">
                    {
                        topics.map((t, index) => {

                            return <span key={index} onClick={handleToggle} className='cursor-pointer m-2 text-center bg-purple-600 w-24 text-white font-bold p-2 rounded-full'>{t}</span>

                        })
                    }
                </div>

            </div>
            {/* <div className='blogs w-full h-full border-2 border-black'>Blogs</div> */}
        </div>
    )
}

export default Blogs