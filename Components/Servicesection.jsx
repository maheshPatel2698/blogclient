import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import Image from 'next/image'
import front from "../public/front.png"
import back from "../public/back.jpg"
import fullstack from "../public/fullstack.png"
import ui from "../public/ui.jpg"

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
        },
        {
            title: "UI Designs",
            content: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms—e.g., voice-controlled interfaces.",
            image: ui
        }
    ]
    return (
        <>
            <div className='text-4xl  text-center m-2 text-purple-700 font-bold'>Our Services</div>
            <div className=' w-full grid grid-cols-1 grid-rows-4 p-2 max-lg:place-items-center '>
                {services.map((service, index) => {
                    return (
                        <div key={index} className="service-card max-lg:grid-cols-1 max-lg:w-3/4 max-md:w-3/4  max-md:h-auto w-auto h-auto m-2 shadow-sm shadow-purple-700 grid grid-cols-3 gap-2 p-2 ">
                            <div className="left-section-information col-span-2 ">
                                <h4 className='text-2xl text-center font-bold text-purple-700'>{service?.title}</h4>
                                <p className='text-xl max-md:text-base capitalize h-40 max-md:h-auto flex justify-center items-center text-center'>{service?.content.slice(0, 550)}...</p>
                                <div className="button-section relative left-0 bottom-0 flex justify-around items-center ">
                                    <button className='font-bold flex justify-center items-center rounded-full hover:text-white transition-all ease-in duration-200 bg-purple-600 shadow-md w-auto p-3 m-2 text-black shadow-purple-600 max-md:text-sm '>Book An Call </button>
                                    <button className='font-bold flex  justify-center items-center rounded-full hover:text-white transition-all ease-in duration-200 bg-purple-600 shadow-md w-auto p-3 m-2 text-black shadow-purple-600 max-md:text-sm max-md:h-auto'>View More About Service  <AiOutlineArrowRight size={20} /> </button>

                                </div>
                            </div>

                            <div className="right-section-image w-80 h-56 m-auto  col-span-1 flex justify-center items-center">
                                <Image src={service?.image} className="w-full h-auto " />
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Servicesection