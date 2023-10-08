import React from "react";
import {  FaChevronRight } from "react-icons/fa";

function NewAdded() {
  return (
    <div className=" bg-[#272727] max-[321px]:w-[17.5rem]  text-white  w-[20rem] max-[376px]:w-[21rem]  max-[321px]:h-fit relative max-[426px]:w-[20rem] h-fit">
            <div className='h-fit w-full text-[#d70d0d] drop-shadow-sm capitalize text-[1.4rem] bg-[#2f2f2f] py-3 flex justify-start px-5 items-center lato'>
            New Added
        </div>
      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px] border-b-[#343438]">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img
            alt="anime-related-img"
            src="https://static.bunnycdn.ru/i/cache/images/1/10/108b00f09f7a6888cb0ff360087d222a.jpg"
            className=" "
          />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[0.9rem] poppins max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
            Let Me Check The Walkthrough First
          </div>
        </div>
      </div>

      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px] border-b-[#343438]">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img
            alt="anime-related-img"
            src="https://static.bunnycdn.ru/i/cache/images/3/36/362ab6e920a3b3262c22a4dbd71a9efa.jpg"
            className=" "
          />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[0.9rem] poppins max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
            B-PROJECT Passion*Love Call
          </div>
        </div>
      </div>

      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px] border-b-[#343438]">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img
            alt="anime-related-img"
            src="https://static.bunnycdn.ru/i/cache/images/0/03/03c0904e644bf3416b32e98ae217c685.jpg"
            className=" "
          />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[0.9rem] poppins max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
            Castlevania: Nocturne
          </div>
        </div>
      </div>

      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px] border-b-[#343438]">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img
            alt="anime-related-img"
            src="https://static.bunnycdn.ru/i/cache/images/4/49/49a7dd61e3771beb68821bf565e9a69b.jpg"
            className=" "
          />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[0.9rem] poppins max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
            Aoshi Jiu Chong Tian
          </div>
        </div>
      </div>

      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 ">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img
            alt="anime-related-img"
            src="https://static.bunnycdn.ru/i/cache/images/5/5c/5c63fe38e034b16ff3cf41e25bb0bd00.jpg"
            className=" "
          />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[0.9rem] poppins max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
            Ninja Bugeichou Pilot Film
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

export default NewAdded;
