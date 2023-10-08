import React from "react";
import { FaChevronRight } from "react-icons/fa";

function TopAiring() {
  return (
    <div className=" bg-[#272727] max-[321px]:w-[17.5rem]  text-white  w-[20rem] max-[376px]:w-[21rem]  max-[321px]:h-fit relative max-[426px]:w-[20rem] h-fit">
      <div className="h-fit w-full text-[#d70d0d] drop-shadow-sm capitalize text-[1.4rem] bg-[#2f2f2f] py-3 flex justify-start px-5 items-center lato">
        top airing
      </div>

      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px] border-b-[#343438]">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img
            alt="anime-related-img"
            src="https://static.bunnycdn.ru/i/cache/images/4/42/422670a855efae8d8d8fafb59d43c197.jpg"
            className=" "
          />
        </div>

  
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[0.9rem] poppins max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
              ONE PIECE
          </div>
        </div>
      </div>

      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px] border-b-[#343438]">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img
            alt="anime-related-img"
            src="https://static.bunnycdn.ru/i/cache/images/c/c2/c2c8b3ae50a1b5e71d792ce9cff52431.jpg"
            className=" "
          />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[0.9rem] poppins max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
              JUJUTSU KAISEN Season 2
          </div>
        </div>
      </div>

      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px] border-b-[#343438]">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img
            alt="anime-related-img"
            src="https://static.bunnycdn.ru/i/cache/images/6/60/60e274fbab2fd7bad475860afec3a20d.jpg"
            className=" "
          />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[0.9rem] poppins max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
            Zom 100: Bucket List of the Dead
          </div>
        </div>
      </div>

      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px] border-b-[#343438]">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img
            alt="anime-related-img"
            src="https://static.bunnycdn.ru/i/cache/images/6/61/617851794bd4f8e40c4a63a35f8bf215.jpg"
            className=" "
          />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[0.9rem] poppins max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
              The Eminence in Shadow Season 2
          </div>
        </div>
      </div>

      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 ">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img
            alt="anime-related-img"
            src="https://static.bunnycdn.ru/i/cache/images/b/b5/b5503f3fd73f0390dfe14d902aeda96d.jpg"
            className=" "
          />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[0.9rem] poppins max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
             Frieren: Beyond Journey’s End
          </div>
        </div>
      </div>
      <div className="w-full h-[3rem] border-opacity-50 justify-center hover:bg-[#3f4044] bg-[#38393d]  flex items-center p-4 ">
        <span>View More</span>
        <FaChevronRight />
      </div>
    </div>
  );
}

export default TopAiring;
