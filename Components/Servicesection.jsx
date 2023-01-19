import React from 'react'
import Image from 'next/image'
import front from "../public/front.png"
import back from "../public/back.jpg"
import fullstack from "../public/fullstack.png"
import { motion } from 'framer-motion'

const Servicesection = () => {
    const services = [
        {
            title: "Front End Development",
            content: "Everything you see on a website, like buttons, links, animations, and more, were created by a front end web developer. It is the front end developer's job to take the vision and design concept from the client and implement it through code",
            image: front
        },
        {
            title: "Back End Development",
            content: "What is back-end development? Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.",
            image: back
        },
        {
            title: "Full Stack Web Development",
            content: "A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)",
            image: fullstack
        }
    ]
    return (
        <>
            <div className='text-4xl  text-center m-2 text-[#6461B6] font-bold'>Our Services</div>
            <div className=' w-full grid grid-cols-1 grid-rows-3 p-2 max-lg:place-items-center '>
                {services.map((service, index) => {
                    return (
                        <motion.div
                            initial={{
                                y: -50,
                                opacity: 0
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            key={index} className="service-card max-lg:grid-cols-1 max-lg:w-3/4 max-md:w-3/4  max-md:h-auto w-auto h-auto m-2 shadow-sm shadow-purple-700 grid grid-cols-3 gap-2 p-2 ">
                            <div className="left-section-information col-span-2 ">
                                <h4 className='text-2xl text-center font-bold text-[#6461B6]'>{service?.title}</h4>
                                <p className='text-lg max-md:text-base capitalize h-40 max-md:h-auto flex justify-center items-center text-center'>{service?.content.slice(0, 550)}...</p>
                                <div className="button-section relative left-0 bottom-0 flex justify-around items-center ">
                                    <button className='font-bold flex justify-center items-center rounded-full hover:text-white transition-all ease-in duration-200 bg-[#6461B6] shadow-md w-auto p-3 m-2 text-white shadow-purple-600 max-md:text-sm '>Book An Call </button>

                                </div>
                            </div>
                            <div className="right-section-image max-md:w-full max-md:h-full max-sm:w-full w-80 h-56 m-auto col-span-1 flex justify-center items-center max-md:m-auto">
                                <Image src={service?.image} className="w-full h-auto " alt='image' />
                            </div>
                        </motion.div>
                    )
                })}

            </div>
        </>
    )
}

export default Servicesection