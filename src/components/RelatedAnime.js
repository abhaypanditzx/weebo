import React from "react";
import sweetReincarnation from "../assets/animes/SweetReincarnation.jpg";
import Akuma from "../assets/animes/Akuma-kun.jpg";
import Ayakashi from "../assets/animes/ayakashi.jpg";
import BlueOrchestra from "../assets/animes/blue-orchestra.jpg";
import TheDUke from "../assets/animes/theDukeOfDeath.jpg";
import { FaPlayCircle } from "react-icons/fa";
function RelatedAnime() {
  return (
    <div className=" bg-[#272727] max-[321px]:w-[17.5rem]  w-[22rem] max-[376px]:w-[21rem]  max-[321px]:h-fit relative max-[426px]:w-[20rem] h-[30rem]">
      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px]  border-b-gray-400">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img alt="anime-related-img" src={sweetReincarnation} className=" " />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[1.1rem] inter max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
            sweet Reincarnation
          </div>
          <FaPlayCircle className="hover:text-gray-200" />
        </div>
      </div>

      <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px]  border-b-gray-400">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img alt="anime-related-img" src={Ayakashi} className=" " />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[1.1rem] inter max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
            Ayakashi Triangle
          </div>
          <FaPlayCircle className="hover:text-gray-200" />
        </div>
      </div>

         <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px]  border-b-gray-400">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img alt="anime-related-img" src={Akuma} className=" " />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[1.1rem] inter max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
            Akuma-kun
          </div>
          <FaPlayCircle className="hover:text-gray-200" />
        </div>
      </div>

         <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px]  border-b-gray-400">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img alt="anime-related-img" src={BlueOrchestra} className=" " />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[1.1rem] inter max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
           Blue Orchestra
          </div>
          <FaPlayCircle className="hover:text-gray-200" />
        </div>
      </div>

         <div className="w-full h-[5rem] border-opacity-50  flex items-center p-4 border-b-[2px]  border-b-gray-400">
        <div className="h-[3rem] w-[3rem]  rounded-sm overflow-hidden">
          <img alt="anime-related-img" src={TheDUke} className=" " />
        </div>
        <div className="flex items-center justify-between w-[100%] ">
          <div className=" px-3 text-[1.1rem] inter max-[426px]:text-[0.9rem] max-[426px]:ml-3 max-[426px]:px-1 hover:text-gray-200 cursor-pointer">
           The Duke Of Death ...
          </div>
          <FaPlayCircle className="hover:text-gray-200" />
        </div>
      </div>      
    </div>
  );
}

export default RelatedAnime;
