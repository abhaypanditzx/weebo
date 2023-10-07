import React from 'react'
import {FaPencilAlt} from "react-icons/fa"
import Default_pfp from "../assets/animes/Default_pfp.svg.png"
function Comments() {
  return (
    <div >
        <div className=' bg-[#272727] w-[60rem] max-[769px]:w-[40rem] max-lg:w-[45rem] max-md:w-[30rem]  max-[321px]:h-[13rem] max-[376px]:w-[21rem]  max-[426px]:h-[19rem] max-[321px]:w-[17.5rem]  flex flex-col relative max-[426px]:w-[24rem] max-md:p-2 h-[30rem] p-5'>
          
            <div className='flex h-fit w-full  p-2 items-center space-x-3 max-[426px]:text-[1rem]  max-[321px]:text-[1rem] inter text-xl'>
             <h1> Comments</h1>
             <FaPencilAlt className='text-base max-[321px]:text-[0.9rem] max-[426px]:text-[0.9rem]'/>
            </div>
          
            <div className='flex h-[6rem] max-[321px]:h-[3rem] max-[426px]:mt-2 max-[376px]:h-[3.5rem]  p-2 justify-start mt-10  max-[321px]:mt-2 items-center space-x-4'>
              <div className='h-[3.5rem] max-[321px]:h-[2.3rem] max-[376px]:h-[2rem] max-[376px]:w-[2rem]  max-[321px]:w-[2.3rem] w-[3.5rem] max-[426px]:w-[2.8rem] max-[426px]:h-[2.8rem]  bg-gray-200 rounded-full overflow-hidden'>
                <img alt="default_profile" src={Default_pfp}/>
              </div>
              <input type='text' placeholder=' write your comment here...' className='max-[321px]:h-[2rem]  max-[376px]:h-[2rem] text-black  max-[321px]:placeholder::text-[0.7rem] max-[376px]:placeholder:text-[0.8rem] max-[376px]:w-[14rem] w-[40rem] max-md:w-[25rem] max-[426px]:h-[2.6rem] max-[426px]:w-[17rem]  max-[321px]:w-[12rem]  h-[3rem] placeholder:p-2  outline-none'/>
            </div>
            <div className='h-[2px] w-[80%] mt-10 max-[426px]:mt-5 bg-gray-500 opacity-[70%]  place-self-center'></div>
            <div className='w-full text-center max-[426px]:text-[0.9rem] text-[#c5c5c5] p-2 text-lg'>
              0 comments
            </div>
        </div>

    </div>
  )
}

export default Comments