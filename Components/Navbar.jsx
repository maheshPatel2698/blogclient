import React, { useRef, useref } from 'react'
import { AiOutlineUser } from "react-icons/ai"
import { BsMoonFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {

    const sidebarRef = useRef()

    const tggleSidebar = () => {

        if (sidebarRef.current.classList.contains('scale-0')) {
            sidebarRef.current.classList.add('scale-1')
            sidebarRef.current.classList.remove('scale-0')
        }
        else if (!sidebarRef.current.classList.contains('scale-0')) {
            sidebarRef.current.classList.add('scale-0')
            sidebarRef.current.classList.remove('scale-1')
        }

    }
    return (
        <div className='relative top-0 left-0 w-full h-14  flex justify-between items-center gap-3  max-md:shadow-md rounded-full max-md:w-3/4 m-auto max-md:flex-col max-md:h-auto'>
            <div className="left  shadow-md rounded-full h-full flex justify-around items-center  w-6/12 max-md:shadow-none">
                <span className=' p-2 cursor-pointer font-bold text-purple-700'>
                    BlogoForCoder

                </span>
            </div>
            <div className="max-md:hidden mid flex shadow-md rounded-full h-full justify-around items-center font-bold  w-full">
                <span className='cursor-pointer hover:text-purple-700 transition-all duration-300'>About Us</span>
                <span className='cursor-pointer hover:text-purple-700 transition-all duration-300'>Blogs</span>
                <span className='cursor-pointer hover:text-purple-700 transition-all duration-300'>Contact</span>
            </div>
            <div className="right flex shadow-md max-md:shadow-none rounded-full h-full justify-around items-center font-bold w-6/12">
                <span onClick={tggleSidebar} id={styles.burger} className='p-1 cursor-pointer hover:text-purple-700 transition-all duration-300'><GiHamburgerMenu size={26} /> </span>
                <span className='max-md:hidden cursor-pointer hover:text-purple-700 transition-all duration-300'>Sign Up</span>
                <span className='max-md:hidden cursor-pointer hover:text-purple-700 transition-all duration-300'>Login</span>
                <span className='max-md:hidden cursor-pointer hover:text-purple-700 transition-all duration-300'><AiOutlineUser size={26} /></span>
                <span className='max-md:hidden cursor-pointer hover:text-purple-700 transition-all duration-300'><BsMoonFill size={26} /></span>
            </div>
            <div ref={sidebarRef} id={styles.sidebar} className=" shadow-md sidebar absolute top-20 -right-16 flex justify-center items-center flex-col w-36 h-auto transform-translate scale-0 ">
                <span className='m-2 cursor-pointer hover:text-purple-700 transition-all duration-300'>About Us</span>
                <span className='m-2 cursor-pointer hover:text-purple-700 transition-all duration-300'>Blogs</span>
                <span className='m-2 cursor-pointer hover:text-purple-700 transition-all duration-300'>Contact</span>
                <span className='max-md:hidden cursor-pointer hover:text-purple-700 transition-all duration-300'>Sign Up</span>
                <span className='  m-2 cursor-pointer hover:text-purple-700 transition-all duration-300'>Login</span>
                <span className='m-2  cursor-pointer hover:text-purple-700 transition-all duration-300'><AiOutlineUser size={26} /></span>
                <span className='m-2  cursor-pointer hover:text-purple-700 transition-all duration-300'><BsMoonFill size={26} /></span>
            </div>
        </div>
    )
}

export default Navbar