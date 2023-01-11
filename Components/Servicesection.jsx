import React from 'react'
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
        <div className='border-2 border-black w-full grid grid-cols-1 grid-rows-4 p-2'>
            <div className="service-card w-full h-44 border-2 border-red-900">

            </div>
        </div>
    )
}

export default Servicesection