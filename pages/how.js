import React from 'react'
import computer from "../public/computer.jpg"
import { AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'

const how = () => {
    return (
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
    )
}

export default how