import { useEffect, useState } from "react";
import Hunter from "../assets/animes/hunterXhunter.jpeg";
import Mushoku from "../assets/animes/Mushoku-Tensei.jpg";
import sweetReincarnation from "../assets/animes/SweetReincarnation.jpg";
import JUJUTSU from "../assets/animes/JUJUTSU_KAISEN_Season_2.jpg";
import JUJUTSU1 from "../assets/animes/JUJUTSU_KAISEN_Season_1.jpg";
import bleach from "../assets/animes/BLEACH.jpg";
import one_piece from "../assets/animes/one_piece.jpg";
import am_i_strongest from "../assets/animes/am_i_strongest.jpg";
import zom from "../assets/animes/zom.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Trending() {
  function left() {
    let elem = document.getElementById("trending");
    elem.scrollLeft -= 50;
  }
  function right() {
    let elem = document.getElementById("trending");
    elem.scrollLeft += 50;
  }

  return (
    <div className="text-[3rem] mt-[7rem] bg-[#171717] items-center justify-center flex flex-col  relative w-full h-[34rem]   text-white">
      <button
        onClick={left}
        className="absolute text-sm left-0 bg-[#2f2f2f] h-[4rem] w-[2rem] max-sm:w-[1.5rem] translate-y-[-50%] top-[50%] "
      >
        <FaChevronLeft className="text-3xl max-[426px]:text-xl" />
      </button>
      <div className="w-full  h-[5rem] absolute top-0 flex items-center text-[#C90000] text-[1.9rem] px-5 inter font-bold">
        Trending
      </div>
      <div
        id="trending"
        className=" overflow-x-scroll scroll-none h-full w-full flex items-center px-5  space-x-10  "
      >
        <div className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-105 duration-100 justify-center items-center">
          <img
            alt="anime"
            className=" w-full object-cover  h-full "
            src={Mushoku}
          />
          <div className=" flex  h-fit w-fit  items-center ">
            <h2 className=" text-[1rem] lato h-fit capitalize  w-max ">
              Mushoku Tensei
            </h2>
            <h1 className="text-[2rem] text-[#C90000] p-2">01</h1>
          </div>
        </div>

        <div className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-105 duration-100 justify-center items-center ">
          <img
            alt="anime"
            className=" w-full object-cover  h-full "
            src={zom}
          />
          <div className=" flex  h-fit w-fit  items-center ">
            <h2 className=" text-[1rem] lato h-fit capitalize  w-max ">
              Zom 100: Bucket Lis...
            </h2>
            <h1 className="text-[2rem] text-[#C90000] p-2">02</h1>
          </div>
        </div>

        <div className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-105 duration-100 justify-center items-center ">
          <img
            alt="anime"
            className=" w-full object-cover  h-full "
            src={JUJUTSU}
          />
          <div className=" flex  h-fit w-fit  items-center ">
            <h2 className=" text-[1rem] lato h-fit capitalize  w-max ">
              JUJUTSU KAISEN Se...
            </h2>
            <h1 className="text-[2rem] text-[#C90000] p-2">03</h1>
          </div>
        </div>

        <div className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-105 duration-100 justify-center items-center ">
          <img
            alt="anime"
            className=" w-full object-cover  h-full "
            src={bleach}
          />
          <div className=" flex  h-fit w-fit  items-center ">
            <h2 className=" text-[1rem] lato h-fit capitalize  w-max ">
              BLEACH: Thousa...
            </h2>
            <h1 className="text-[2rem] text-[#C90000] p-2">04</h1>
          </div>
        </div>

        <div className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-105 duration-100 justify-center items-center">
          <img
            alt="anime"
            className=" w-full object-cover  h-full "
            src={sweetReincarnation}
          />
          <div className=" flex  h-fit w-fit  items-center ">
            <h2 className=" text-[1rem] lato h-fit capitalize  w-max ">
              Sweet Reincarnation
            </h2>
            <h1 className="text-[2rem] text-[#C90000] p-2">05</h1>
          </div>
        </div>

        <div className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-105 duration-100 justify-center items-center">
          <img
            alt="anime"
            className=" w-full object-cover  h-full "
            src={Hunter}
          />
          <div className=" flex  h-fit w-fit  items-center ">
            <h2 className=" text-[1rem] lato h-fit capitalize  w-max ">
              hunter X hunter
            </h2>
            <h1 className="text-[2rem] text-[#C90000] p-2">06</h1>
          </div>
        </div>

        <div className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-105 duration-100 justify-center items-center">
          <img
            alt="anime"
            className=" w-full object-cover  h-full "
            src={am_i_strongest}
          />
          <div className=" flex  h-fit w-fit  items-center ">
            <h2 className=" text-[1rem] lato h-fit capitalize  w-max ">
              Am I Actually the S...
            </h2>
            <h1 className="text-[2rem] text-[#C90000] p-2">07</h1>
          </div>
        </div>

        <div className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-105 duration-100 justify-center items-center">
          <img
            alt="anime"
            className=" w-full object-cover  h-full "
            src={one_piece}
          />
          <div className=" flex  h-fit w-fit  items-center ">
            <h2 className=" text-[1rem] lato h-fit capitalize  w-max ">
              One peice
            </h2>
            <h1 className="text-[2rem] text-[#C90000] p-2">08</h1>
          </div>
        </div>
      </div>
      <button
        onClick={right}
        className="absolute text-sm right-0 bg-[#2f2f2f] h-[4rem] w-[2rem] max-sm:w-[1.5rem] translate-y-[-50%] top-[50%] "
      >
        <FaChevronRight className="text-3xl max-[426px]:text-xl" />
      </button>
    </div>
  );
}
export default Trending;
