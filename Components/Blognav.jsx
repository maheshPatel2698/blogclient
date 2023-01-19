import React from 'react'

const Blognav = () => {
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
    return (
        <div className='p-4 m-2 h-14 sticky top-16 z-20 left-0  backdrop-blur-sm bg-white/50 rounded-full shadow-md max-lg:hidden shadow-purple-600 flex justify-around items-center'>
            {
                topics.map((t, index) => {
                    return <span key={index} className='cursor-pointer  text-center bg-[#6461B6] w-24 text-white font-bold p-2 rounded-full block '>{t}</span>
                })
            }
        </div>

    )
}

export default Blognav