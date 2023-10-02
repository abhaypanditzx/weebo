import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import sweetReincarnation from "../assets/animes/SweetReincarnation.jpg";
import Akuma from "../assets/animes/Akuma-kun.jpg";
import synduality from "../assets/animes/synduality.jpg";
import Ayakashi from "../assets/animes/ayakashi.jpg";
import blueOrchestra from "../assets/animes/blue-orchestra.jpg";
import darkGathering from "../assets/animes/dark-gathering.jpg";
import zom from "../assets/animes/zom.jpg";
import theDUke from "../assets/animes/theDukeOfDeath.jpg";

function RecentlyUpdated(props) {
  function left() {
    let elem = document.getElementById("top-airing");
    elem.scrollLeft -= 50;
  }
  function right() {
    let elem = document.getElementById("top-airing");
    elem.scrollLeft += 50;
  }
  
  return (
    <div className="text-[3rem] mt-[7rem]  bg-[#171717] items-center justify-center flex flex-col  relative w-full h-[34rem] max-[426px]:h-[30rem]   text-white">
      <button
        onClick={left}
        className="absolute text-sm left-0 bg-[#2f2f2f] h-[4rem] w-[2rem] z-50 max-sm:w-[1.5rem] translate-y-[-50%] top-[50%] "
      >
        <FaChevronLeft className="text-3xl max-[426px]:text-xl" />
      </button>
      {/* HEADING */}
      <div className="w-full max-[426px]:text-[1.5rem] h-[5rem]  absolute top-0 flex items-center text-[#C90000] text-[1.9rem] px-5 inter font-bold">
        Latest Episode
      </div>

      {/* CARDS */}
      <div
        id="top-airing"
        className=" overflow-x-scroll scroll-none  h-full w-full flex items-center px-5  space-x-10  "
      >

        <Link to="Player">
          <div onClick={props.sweetRein} className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-[102%] duration-100 justify-center items-center ">
            <img
              alt="anime"
              className=" w-full  h-full "
              src={sweetReincarnation}
            />
            <div className=" flex flex-col  h-fit py-1 w-full px-3 items-center ">
              <div className=" text-[1rem] hover:text-gray-200 lato h-fit capitalize  w-full flex justify-start  ">
                sweet Reincarnation
              </div>
              <div className="flex space-x-3 w-full  items-center text-gray-300 text-[0.8rem]">
                <span>TV </span>
                <div className="h-[0.6rem] bg-gray-400 rounded-full w-[0.6rem]"></div>
                <span>jul 4 ,2023</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="Player">
          <div onClick={props.ayakashi} className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-[102%] duration-100 justify-center items-center ">
            <img alt="anime" className=" w-full  h-full " src={Ayakashi} />
            <div className=" flex flex-col  h-fit py-1 w-full px-3 items-center ">
              <div className=" text-[1rem] hover:text-gray-200 lato h-fit capitalize  w-full flex justify-start  ">
                Ayakashi Triangle
              </div>
              <div className="flex space-x-3 w-full  items-center text-gray-300 text-[0.8rem]">
                <span>TV </span>
                <div className="h-[0.6rem] bg-gray-400 rounded-full w-[0.6rem]"></div>
                <span>jan 10 ,2023</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="Player">
          <div onClick={props.akuma} className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-[102%] duration-100 justify-center items-center ">
            <img alt="anime" className=" w-full  h-full " src={Akuma} />
            <div className=" flex flex-col  h-fit py-1 w-full px-3 items-center ">
              <div className=" text-[1rem] hover:text-gray-200 lato h-fit capitalize  w-full flex justify-start  ">
                Akuma-kun
              </div>
              <div className="flex space-x-3 w-full  items-center text-gray-300 text-[0.8rem]">
                <span>TV </span>
                <div className="h-[0.6rem] bg-gray-400 rounded-full w-[0.6rem]"></div>
                <span>apr 15 ,1989</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="Player ">
          <div  onClick={props.zom} className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-[102%] duration-100 justify-center items-center ">
            <img alt="anime" className=" w-full  h-full " src={zom} />
            <div className=" flex flex-col  h-fit py-1 w-full px-3 items-center ">
              <div className=" text-[1rem] hover:text-gray-200 lato h-fit capitalize  w-full flex justify-start  ">
                Zom 100: Bucket List ...
              </div>
              <div className="flex space-x-3 w-full  items-center text-gray-300 text-[0.8rem]">
                <span>TV </span>
                <div className="h-[0.6rem] bg-gray-400 rounded-full w-[0.6rem]"></div>
                <span>jul 9 ,2023</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="Player">
          <div  onClick={props.synduality} className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-[102%] duration-100 justify-center items-center ">
            <img alt="anime" className=" w-full  h-full " src={synduality} />
            <div className=" flex flex-col  h-fit py-1 w-full px-3 items-center ">
              <div className=" text-[1rem] hover:text-gray-200 lato h-fit capitalize  w-full flex justify-start  ">
                synduality noir
              </div>
              <div className="flex space-x-3 w-full  items-center text-gray-300 text-[0.8rem]">
                <span>TV </span>
                <div className="h-[0.6rem] bg-gray-400 rounded-full w-[0.6rem]"></div>
                <span>jul 11 ,2023</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="Player">
          <div  onClick={props.darkGathering} className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-[102%] duration-100 justify-center items-center ">
            <img alt="anime" className=" w-full  h-full " src={darkGathering} />
            <div className=" flex flex-col  h-fit py-1 w-full px-3 items-center ">
              <div className=" text-[1rem] hover:text-gray-200 lato h-fit capitalize  w-full flex justify-start  ">
                dark gathering
              </div>
              <div className="flex space-x-3 w-full  items-center text-gray-300 text-[0.8rem]">
                <span>TV </span>
                <div className="h-[0.6rem] bg-gray-400 rounded-full w-[0.6rem]"></div>
                <span>jul 08 ,2023</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="Player">
          <div onClick={props.blueOrchestra} className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-[102%] duration-100 justify-center items-center ">
            <img alt="anime" className=" w-full  h-full " src={blueOrchestra} />
            <div className=" flex flex-col  h-fit py-1 w-full px-3 items-center ">
              <div className=" text-[1rem] hover:text-gray-200 lato h-fit capitalize  w-full flex justify-start  ">
                blue orchestra
              </div>
              <div className="flex space-x-3 w-full  items-center text-gray-300 text-[0.8rem]">
                <span>TV </span>
                <div className="h-[0.6rem] bg-gray-400 rounded-full w-[0.6rem]"></div>
                <span>apr 09 ,2023</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="Player">
          <div  onClick={props.Duke} className="flex flex-col capitalize bg-[#2F2F2F] shrink-0 w-[13rem]  h-[21.5rem] max-[426px]:w-[11rem] max-[426px]:h-[18.7rem] overflow-hidden rounded-sm hover:scale-[102%] duration-100 justify-center items-center ">
            <img alt="anime" className=" w-full  h-full " src={theDUke} />
            <div className=" flex flex-col  h-fit py-1 w-full px-3 items-center ">
              <div className=" text-[1rem] hover:text-gray-200 lato h-fit capitalize  w-full flex justify-start  ">
                The Duke of Death ...
              </div>
              <div className="flex space-x-3 w-full  items-center text-gray-300 text-[0.8rem]">
                <span>TV </span>
                <div className="h-[0.6rem] bg-gray-400 rounded-full w-[0.6rem]"></div>
                <span>jul 08 ,2023</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <button
        onClick={right}
        className="absolute text-sm right-0 bg-[#2f2f2f] h-[4rem]  z-50 w-[2rem] max-sm:w-[1.5rem] translate-y-[-50%] top-[50%] "
      >
        <FaChevronRight className="text-3xl  max-[426px]:text-xl" />
      </button>
    </div>
  );
}
export default RecentlyUpdated;
