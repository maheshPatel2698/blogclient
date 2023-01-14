import React from 'react'
import { useRouter } from "next/router"
import computer from '../../public/computer.jpg'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { BiCommentAdd } from "react-icons/bi"
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai"
import Image from "next/image"

const Title = () => {
    const router = useRouter()
    return (
        <div className='mt-2'>
            <div className="blog-title  w-auto">
                <h1 className='text-2xl m-2 text-purple-700 text-center font-bold'>{router.query.title}</h1>
            </div>
            <div className="blog-photos-section m-2 grid grid-cols-4 place-content-center relative">
                <div className="left-btn  ml-2 cursor-pointer  flex justify-start w-9  items-center col-span-1">
                    <BsFillArrowLeftCircleFill size={28} className="transition-all ease-in duration-200 hover:-translate-x-1 hover:text-purple-700" />
                </div>
                <div className="blog-image max-lg:w-auto max-lg:h-auto w-full h-full  flex justify-center items-center col-span-2">
                    <Image src={computer} className="w-full h-full cursor-pointer" objectFit='contain' />
                </div>
                <div className="right-btn cursor-pointer flex justify-end w-9 absolute right-2 top-0 h-full items-center col-span-1">
                    <BsFillArrowRightCircleFill size={28} className="transition-all ease-in duration-200 hover:translate-x-1 hover:text-purple-700" />
                </div>

            </div>
            <div className="blog-content-section flex justify-center items-center flex-col m-3" >
                <p className='text-justify m-3 w-3/5 h-auto max-lg:w-full max-lg:indent-8 max-lg:p-2' >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequuntur iusto, saepe facilis tenetur voluptatum id culpa nulla quo tempora perferendis, voluptas architecto voluptatem eligendi dolorem nisi, animi ratione. Commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloremque, in minima, nemo repellat tempora quo quaerat velit neque ullam illo id obcaecati voluptatibus similique voluptates qui consequatur reprehenderit delectus! Provident quod aspernatur iure at id, debitis fugit necessitatibus quibusdam assumenda. Qui sunt sed aut labore neque vero odio fugit.
                </p>
                <p className='text-justify m-3 w-3/5 h-auto max-lg:w-full max-lg:indent-8 max-lg:p-2' >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequuntur iusto, saepe facilis tenetur voluptatum id culpa nulla quo tempora perferendis, voluptas architecto voluptatem eligendi dolorem nisi, animi ratione. Commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloremque, in minima, nemo repellat tempora quo quaerat velit neque ullam illo id obcaecati voluptatibus similique voluptates qui consequatur reprehenderit delectus! Provident quod aspernatur iure at id, debitis fugit necessitatibus quibusdam assumenda. Qui sunt sed aut labore neque vero odio fugit.
                </p>
                <p className='text-justify m-3 w-3/5 h-auto max-lg:w-full max-lg:indent-8 max-lg:p-2' >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequuntur iusto, saepe facilis tenetur voluptatum id culpa nulla quo tempora perferendis, voluptas architecto voluptatem eligendi dolorem nisi, animi ratione. Commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloremque, in minima, nemo repellat tempora quo quaerat velit neque ullam illo id obcaecati voluptatibus similique voluptates qui consequatur reprehenderit delectus! Provident quod aspernatur iure at id, debitis fugit necessitatibus quibusdam assumenda. Qui sunt sed aut labore neque vero odio fugit.
                </p>

            </div>
            <div className="blog-like-dislike-section flex justify-start items-center relative mt-2 gap-5">
                <span className='flex justify-center items-center cursor-pointer p-2'><AiOutlineLike size={28} />Like {123}</span>
                <span className='flex justify-center items-center cursor-pointer p-2'><AiOutlineDislike size={28} />Dislike {101}</span>
                <div className='absolute right-0 top-2' >Comments {0}</div>
            </div>
            <div className="blog-comment-section  mt-2 p-2">
                <h1 className='text-2xl m-2 text-purple-700 text-center font-bold'>Add Your View </h1>
                <div className='add-comment '>
                    <div className="input flex justify-center items-center p-2 gap-5 ">
                        <input type="text" name="comment" id="comment" className='bg-transparent rounded-full bg-gray-200 p-2 w-96 outline-none placeholder-black' placeholder='Add Your View...' />
                        <BiCommentAdd size={28} className="cursor-pointer transition-all ease-in duration-200 hover:text-purple-700" />
                    </div>
                </div>
                <div className="comments  p-2 mt-2 flex justify-center items-center flex-col">
                    {/* usercomments  */}
                    <div className="user-comment h-auto m-2 shadow-md rounded-xl shadow-purple-700 w-2/5 grid grid-cols-3 p-2 max-lg:w-auto max-lg:h-60">
                        <div className="user-image m-auto  col-span-1 max-lg:h-16 max-lg:w-16 w-20 h-20 rounded-full shadow-sm shadow-gray-500">
                            <Image src={computer} className="w-full h-full rounded-full" />
                        </div>
                        <div className="user-details   col-span-2 flex justify-start items-start flex-col gap-2">
                            <span className=' h-10 w-full'>Mahesh patel</span>
                            <p className=' h-auto text-justify w-full max-lg:h-44 max-lg:overflow-y-scroll'>Nice Blog Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quam debitis dolores rem quos voluptas repudiandae quas nostrum, quo possimus, magnam iusto? Ab quo totam doloremque, placeat facilis eum tenetur fugiat illo nihil impedit doloribus quod exercitationem sed modi quibusdam velit. Ex enim, distinctio accusamus labore voluptates animi? Voluptatum, aperiam!</p>
                        </div>
                    </div>
                    <div className="user-comment h-auto m-2 shadow-md rounded-xl shadow-purple-700 w-2/5 grid grid-cols-3 p-2 max-lg:w-auto max-lg:h-60">
                        <div className="user-image m-auto  col-span-1 w-16 h-16 rounded-full shadow-sm shadow-gray-500">
                            <Image src={computer} className="w-full h-full rounded-full" />
                        </div>
                        <div className="user-details   col-span-2 flex justify-start items-start flex-col gap-2">
                            <span className=' h-10 w-full'>Mahesh patel</span>
                            <p className=' h-auto text-justify w-full max-lg:h-44 max-lg:overflow-y-scroll'>Nice Blog Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quam debitis dolores rem quos voluptas repudiandae quas nostrum, quo possimus, magnam iusto? Ab quo totam doloremque, placeat facilis eum tenetur fugiat illo nihil impedit doloribus quod exercitationem sed modi quibusdam velit. Ex enim, distinctio accusamus labore voluptates animi? Voluptatum, aperiam!</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Title