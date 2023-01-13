import React from 'react'
import Image from "next/image"
import { AiOutlineArrowRight } from "react-icons/ai"
import { GrReactjs } from "react-icons/gr"

import html from "../public/html.png"
import css from "../public/css.png"
import js from "../public/js.jpg"
import reactjs from "../public/reactjs.png"
import nextjs from "../public/nextjs.png"
import nodejs from "../public/nodejs.png"
import expressjs from '../public/expressjs.png'
import mongo from "../public/mongodb.png"
import python from "../public/python.png"
import Link from 'next/link'
const Blogsection = () => {

    const blogTopics = [

        {
            topic: 'HTML',
            image: html,
            about: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
        },
        {
            topic: 'CSS',
            image: css,
            about: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
        },
        {
            topic: 'JS',
            image: js,
            about: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
        },
        {
            topic: 'React.Js',
            image: reactjs,
            about: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
        },
        {
            topic: 'Next.Js',
            image: nextjs,
            about: "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.",
        },
        {
            topic: 'NodeJs',
            image: nodejs,
            about: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser. ",
        },
        {
            topic: 'ExpressJs',
            image: expressjs,
            about: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. ",

        },
        {
            topic: 'MongoDB',
            image: mongo,
            about: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions.",
        },
        {
            topic: 'Python',
            image: python,
            about: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming",
        }

    ]
    return (
        <div>
            <div className='text-4xl  text-center m-2 text-purple-700 font-bold  '>Topics</div>
            <div className='blogsection grid grid-cols-3 grid-rows-2 place-items-center max-xl:grid-cols-2 max-md:grid-cols-1'>
                {blogTopics.slice(0, 6).map((blog, index) => {
                    return (
                        <div key={index} className="tpoic-card rounded-lg m-2 max-md:w-3/4  w-96 p-3 shadow-md shadow-purple-600">
                            {/*   card title      */}
                            <div className='title flex justify-between items-center mt-2 mb-2 text-xl'>
                                <span className='font-bold text-purple-700 ml-2'>{blog.topic}</span>
                                <span className='flex justify-center items-center gap-2 mr-1 font-bold text-purple-700'><GrReactjs size={25} /> 19</span>
                            </div>
                            {/* Image section */}
                            <div className="Image section max-md:w-80 max-sm:w-60 flex justify-center items-center w-80 h-80  m-auto  ">
                                <Image priority src={blog?.image} className="w-full h-auto" alt="blog image" />
                            </div>
                            <div className="about-card mt-2">
                                <p className='text-purple-900 font-semibold text-center text-xl h-36 max-md:h-30 overflow-y-hidden'>{blog?.about.slice(0, 250)}... </p>
                            </div>
                            <div className="button-section  flex justify-end items-end ">
                                <Link href={`blogs/${blog?.topic}`}> <button className='font-bold flex justify-center items-center rounded-full hover:text-white transition-all ease-in duration-200 bg-purple-600 shadow-md w-auto p-3 m-2 text-black shadow-purple-600 '>
                                    View Blogs <AiOutlineArrowRight size={20} /> </button></Link>
                            </div>

                        </div>
                    )
                })}
            </div>
            <div className=" flex justify-center items-center">

                <Link href='/blogs' className='w-full'> <button className='font-bold text-md flex justify-center items-center rounded-full hover:text-white transition-all ease-in duration-200 bg-purple-600 shadow-md w-full p-3 text-black shadow-purple-600 '>
                    View All Blogs<AiOutlineArrowRight size={20} /> </button></Link>

            </div>
        </div>
    )
}

export default Blogsection