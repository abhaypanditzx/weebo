import { Link } from "react-router-dom";
import {BsChevronLeft} from "react-icons/bs"

function Sidebar() {
  const func2 = () => {
    let icon = document.getElementById("hamburger-icon");
    let sidebar = document.getElementById("sidebar");
    if(icon.style.display ==="none"){
      icon.style.display = "block";
      sidebar.style.display = "none";
    }
  
    else{
      console.error("internal error")
    }
  };
  return (
    <div
      id="sidebar"
      className="fixed bg-[#111111] hidden h-screen top-0 max-[426px]:w-[80%]   text-white py-5    z-50 w-[18rem]"
    >
      <button
        onClick={func2}
        className="bg-[#1B1B1B] flex  julius h-[1.8rem] w-[8rem] ml-2 justify-center  items-center  rounded-full"
      >
       <BsChevronLeft/>
        <span className=" font-extralight lato tracking-wider text-xs ">Close menu</span>
      </button>

      <ul className="p-4 inter mt-5">
       <Link to="/">
       <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3"> Home </span>
        </li>
        </Link>
       <Link to="/TrendingPage">
       <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3">Trending </span>
        </li>
        </Link>
        <Link to="/Movies">
        <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3"> Movies</span>
        </li>
        </Link>
        <Link to="/TVseries">
        <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3">TV Series </span>
        </li>
        </Link>
    <Link to="/Ova">
    <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3"> OVAs</span>
        </li>
    </Link>
        <Link to="/Ona">
        <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3">ONAs </span>
        </li>
        </Link>
      </ul>
      <ul className="flex flex-wrap max-sm:hidden items-center  w-[100%] justify-start p-3">
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Adventure</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Action</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Comedy</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Slice of Life</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Drama</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Fantasy</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Supernatural</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Magic</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Mystery</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Horror</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Psychological</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Sci-Fi</li>
      <li className="p-1  rounded-md text-[0.8rem] cursor-pointer  m-2 hover:text-gray-300">Romance</li>
      </ul>
    </div>
  );
}
export default Sidebar;
