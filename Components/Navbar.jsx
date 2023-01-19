import React, { useRef } from 'react'
import { AiOutlineUser } from "react-icons/ai"
import { BsMoonFill } from "react-icons/bs"
import { BsFillSunFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import { useTheme } from 'next-themes'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
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
    const handleDarkMode = () => {
        setTheme(theme === 'dark' ? "light" : "dark")
    }
    return (
        <div className={`sticky  max-sm:gap-0 top-0 left-0 w-full h-14 z-50 flex justify-between items-center gap-3  max-md:shadow-md max-md:${theme === "dark" ? "shadow-purple-600" : "shadow-purple-300"} rounded-full max-md:w-4/5 m-auto max-md:flex-col max-md:h-auto`}>
            {/* left section */}
            <div className={`left backdrop-blur-md ${theme === 'dark' ? "bg-[#252525]" : "backdrop-blur-md"} shadow-md rounded-full max-sm:bg-transparent h-full ${theme === "dark" ? "max-sm:bg-transparent" : "max-sm:backdrop-blur-0"} flex justify-around items-center  w-6/12 max-md:shadow-none`}>
                <span onClick={tggleSidebar} className=' p-1 max-sm:text-xl cursor-pointer font-bold text-[#6461B6]'>
                    <Link href='/'>BlogoForCoder</Link>
                </span>
            </div>

            {/* mid section */}
            <div
                className={`max-md:hidden ${theme === 'dark' ? "bg-[#252525]" : "backdrop-blur-md"}   max-md:bg-white/50 text-md font-semibold mid shadow-md rounded-full h-full  flex  justify-around items-center  w-full`}>
                <Link href='/about'> <span className='cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    About Us
                </span></Link>
                <Link href='/blogs'>  <span className='cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    Blogs
                </span></Link>
                <Link href='/how'>      <span className='cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    How To...?
                </span></Link>
                <Link href='/contact'><span className='cursor-pointer hover:text-purple-500 transition-all duration-300'>Contact Us</span>
                </Link>
            </div>

            {/* rightsection */}
            <div className={`righ ${theme === 'dark' ? "bg-[#252525]" : "backdrop-blur-md"} max-md:w-auto  text-md font-semibold shadow-md max-md:shadow-none ${theme === "dark" ? "max-sm:bg-transparent" : "max-sm:backdrop-blur-0"}  rounded-full h-full  flex  justify-around items-center  w-6/12`}>
                <span onClick={tggleSidebar} id={styles.burger} className='p-1 cursor-pointer hover:text-purple-500 transition-all duration-300'><GiHamburgerMenu size={26} /> </span>
                <Link href="signup">   <span className='max-md:hidden cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    Sign Up
                </span></Link>
                <Link href='/login'>   <span className='max-md:hidden cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    Login
                </span></Link>
                <Link href='/profile'>
                    <span className='max-md:hidden cursor-pointer hover:text-purple-500 transition-all duration-300'><AiOutlineUser size={26} /></span>
                </Link>
                <span onClick={handleDarkMode} className='max-md:hidden cursor-pointer hover:text-purple-500 transition-all duration-300'>{theme === "dark" ? <BsFillSunFill size={26} /> : <BsMoonFill size={26} />}</span>
            </div>
            <div ref={sidebarRef} id={styles.sidebar} className={`rounded-3xl origin-top  sidebar absolute top-20 -right-10 flex justify-center shadow-md shadow-purple-700 items-center flex-col w-full h-auto transform-translate scale-0 max-sm:-right-7 ${theme === 'dark' ? "bg-[#252525]" : "bg-white"} `}>
                <span onClick={tggleSidebar} className='m-2 cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    <Link href='/about'>About Us</Link>
                </span>
                <span onClick={tggleSidebar} className='m-2 cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    <Link href='/blogs'>Blogs</Link>

                </span>
                <span onClick={tggleSidebar} className='m-2 cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    <Link href='/how'>How To...?</Link>
                </span>
                <span onClick={tggleSidebar} className='m-2 cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    <Link href='/contact'>Contact Us</Link>
                </span>
                <span onClick={tggleSidebar} className=' m-2 cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    <Link href="/signup"> Sign Up </Link>
                </span>
                <span onClick={tggleSidebar} className='  m-2 cursor-pointer hover:text-purple-500 transition-all duration-300'>
                    <Link href='/login'>Login</Link>
                </span>

                <span onClick={tggleSidebar} className='m-2  cursor-pointer hover:text-purple-500 transition-all duration-300'><Link href='/profile'><AiOutlineUser size={26} />  </Link></span>
                <span onClick={handleDarkMode} className='m-2 cursor-pointer hover:text-purple-500 transition-all duration-300'>{theme === "dark" ? <BsFillSunFill size={26} /> : <BsMoonFill size={26} />}</span>

            </div>
        </div>
    )
}

export default Navbar