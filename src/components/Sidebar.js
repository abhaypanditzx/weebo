import { Link } from "react-router-dom";

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
      className="fixed bg-[#111111] hidden h-screen top-0 max-[426px]:w-[80%]   text-white py-5    z-50 w-[25rem]"
    >
      <button
        onClick={func2}
        className="bg-[#1B1B1B] flex  julius h-[1.8rem] w-[8rem] ml-2 justify-center  items-center  rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4  h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <span className=" font-extralight lato tracking-wider text-xs ">Close menu</span>
      </button>

      <ul className="p-4 inter mt-5">
        <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3"> Home </span>
        </li>
        <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3">Trending </span>
        </li>
        <Link to="/Movies">
        <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3"> Movies</span>
        </li>
        </Link>
        <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3">TV Series </span>
        </li>
        <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3"> OVAs</span>
        </li>
        <li className="border-b-[1px] h-[3.5rem] w-full   flex justify-start items-center border-[#747474c0]">
          <span className="ml-2 mt-3">ONAs </span>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
