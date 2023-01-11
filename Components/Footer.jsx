import React from 'react'
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineInstagram, AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = () => {
    return (
        <div className='w-full mt-2 font-bold border-purple-700 h-auto p-1 relative bottom-0 left-0 grid grid-cols-3 gap-2  max-md:grid-cols-2  '>
            {/* sitemap section */}
            <div className='sitemap max-md:cols-span-1 flex h-40 shadow-lg justify-center items-start flex-col max-md:items-center  '>
                <span className=' cursor-pointer hover:text-purple-700 text-lg  transition-all duration-300'>Sitemap</span>
                <span className='  cursor-pointer hover:text-purple-700  transition-all duration-300'>About Us</span>
                <span className=' cursor-pointer hover:text-purple-700  transition-all duration-300'>Contact Us</span>
                <span className='  cursor-pointer hover:text-purple-700  transition-all duration-300'>Sitemap</span>
                <span className='  cursor-pointer hover:text-purple-700  transition-all duration-300'>Blogs</span>
            </div>

            {/* socialmedia section */}
            <div className='socialmedia max-md:col-span-1  flex h-40 shadow-lg justify-center items-start flex-col max-md:items-center '>
                <span className=' cursor-pointer hover:text-purple-700 text-lg transition-all duration-300'>Social</span>
                <span className=' cursor-pointer hover:text-purple-700  transition-all duration-300 flex justify-center items-center'><AiOutlineLinkedin size={28} /> Linkedin</span>
                <span className=' cursor-pointer hover:text-purple-700  transition-all duration-300 flex justify-center items-center'><AiOutlineFacebook size={28} />Facebook </span>
                <span className=' cursor-pointer hover:text-purple-700  transition-all duration-300 flex justify-center items-center'><AiOutlineInstagram size={28} />Instagram</span>
                <span className=' cursor-pointer hover:text-purple-700  transition-all duration-300 flex justify-center items-center'><AiOutlineTwitter size={28} />Twitter</span>
            </div>

            {/* services */}
            <div className='Services max-md:col-span-3 flex h-40 shadow-lg justify-center items-start flex-col max-md:items-center '>
                <span className=' cursor-pointer hover:text-purple-700 text-lg transition-all duration-300'>Services</span>
                <span className=' cursor-pointer hover:text-purple-700  transition-all duration-300 flex justify-center items-center'> Front End Development</span>
                <span className=' cursor-pointer hover:text-purple-700  transition-all duration-300 flex justify-center items-center'>Back End Development </span>
                <span className=' cursor-pointer hover:text-purple-700  transition-all duration-300 flex justify-center items-center'>Full Stack Web Development</span>
                <span className=' cursor-pointer hover:text-purple-700  transition-all duration-300 flex justify-center items-center'>UI Designs</span>
            </div>

            {/* copyrightsection */}
            <div className=' col-span-3 z-10 flex justify-center items-center max-md:flex-col'>
                <span className='max-md:text-sm z-10 text-lg cursor-pointer flex justify-center gap-2 items-center text-gray-400 p-2'>Copyright <AiOutlineCopyrightCircle /> Blogoforcoder.com </span>
                <span className='max-md:text-sm z-10 text-lg cursor-pointer flex justify-center  items-center text-gray-400 p-2'>
                    All Rights Reserved
                </span>
            </div>

        </div>
    )
}

export default Footer