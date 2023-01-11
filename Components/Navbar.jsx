import React, { useRef, useref } from 'react'
import { AiOutlineUser } from "react-icons/ai"
import { BsMoonFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"
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
                <span className=' p-1 cursor-pointer font-bold text-purple-700'>
                    <Link href='/'>BlogoForCoder</Link>

                </span>
            </div>
            <div className="max-md:hidden mid flex shadow-md rounded-full h-full justify-around items-center font-bold  w-full">
                <span className='cursor-pointer hover:text-purple-700 transition-all duration-300'>
                    <Link href='/about'>About Us</Link>
                </span>
                <span className='cursor-pointer hover:text-purple-700 transition-all duration-300'>
                    <Link href='/blogs'>Blogs</Link>
                </span>
                <span className='cursor-pointer hover:text-purple-700 transition-all duration-300'>
                    <Link href='/contact'>Contact Us</Link>
                </span>
                <span className='cursor-pointer hover:text-purple-700 transition-all duration-300'>
                    <Link href='/services'>Services</Link>
                </span>
            </div>
            <div className="right  flex shadow-md max-md:shadow-none rounded-full h-full justify-around items-center font-bold w-6/12">
                <span onClick={tggleSidebar} id={styles.burger} className='p-1 cursor-pointer hover:text-purple-700 transition-all duration-300'><GiHamburgerMenu size={26} /> </span>
                <span className='max-md:hidden cursor-pointer hover:text-purple-700 transition-all duration-300'>
                    <Link href="signup">Sign Up</Link>
                </span>
                <span className='max-md:hidden cursor-pointer hover:text-purple-700 transition-all duration-300'>
                    <Link href='/login'>Login</Link>
                </span>
                <span className='max-md:hidden cursor-pointer hover:text-purple-700 transition-all duration-300'><AiOutlineUser size={26} /></span>
                <span className='max-md:hidden cursor-pointer hover:text-purple-700 transition-all duration-300'><BsMoonFill size={26} /></span>
            </div>
            <div ref={sidebarRef} id={styles.sidebar} className="rounded-3xl z-20 bg-purple-300 sidebar absolute top-20 -right-10 flex justify-center items-center flex-col w-full h-auto transform-translate scale-0 ">
                <span className='m-2 cursor-pointer hover:text-white transition-all duration-300'>
                    <Link href='/about'>About Us</Link>
                </span>
                <span className='m-2 cursor-pointer hover:text-white transition-all duration-300'>
                    <Link href='/blogs'>Blogs</Link>
                </span>
                <span className='m-2 cursor-pointer hover:text-white transition-all duration-300'>
                    <Link href='/contact'>Contact</Link>
                </span>
                <span className='cursor-pointer hover:text-white transition-all duration-300 m-2'>
                    <Link href='/services'>Services</Link>
                </span>
                <span className='max-md:hidden cursor-pointer hover:text-purple-700 transition-all duration-300'>
                    Sign Up <Link href="/signup">Sgn Up</Link>
                </span>
                <span className='  m-2 cursor-pointer hover:text-white transition-all duration-300'>
                    <Link href='/login'>Login</Link>
                </span>
                <span className='m-2  cursor-pointer hover:text-white transition-all duration-300'><AiOutlineUser size={26} /></span>
                <span className='m-2  cursor-pointer  transition-all duration-300'><BsMoonFill size={26} /></span>

            </div>
        </div>
    )
}

export default Navbar