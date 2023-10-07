import React, { useState } from 'react';
import {FaChevronDown , FaChevronUp} from "react-icons/fa";
function Genre() {
    const [genreDisplay,setGenreDisplay] =  useState("flex");
    const [chevron,setChevron] = useState(<FaChevronDown/>);
function HandelGenreDisplayOnClick(){
    if(genreDisplay==="flex"){
        setGenreDisplay("hidden");
        setChevron(<FaChevronUp/>);
    }
    else{
        setGenreDisplay("flex");
        setChevron(<FaChevronDown/>);
    }
}
  return (
    <div className='w-full h-fit p-3 mt-[2rem]  items-center justify-center  hidden max-sm:flex max-sm:flex-col'>
        <ul className={` flex-wrap shadowInner rounded-sm ${genreDisplay} w-full bg-[#171717] `}>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Action</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Adventure</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Comedy</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Drama</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Slice of Life</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Fantasy</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Magic</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Supernatural</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Horror</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Mystery</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Psychological</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Romance</li>
            <li className=' bg-[#2f2f2f] max-[321px]:text-[0.8rem] max-[426px]:text-[0.86rem] m-2 w-fit h-fit p-1 rounded-md text-white'> Sci-Fi</li>
            <li className='  m-2 text-[0.7rem] w-fit h-fit p-0.5 rounded-md text-white'> More+</li>
        </ul>
        <button  onClick={HandelGenreDisplayOnClick} className='m-2 text-2xl text-white'>
            {chevron}
        </button>
    </div>
  )
}

export default Genre