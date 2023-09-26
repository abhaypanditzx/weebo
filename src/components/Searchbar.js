import { useState } from "react";
function Searchbar() {
  const [searchDisplay , setSearchDisplay] = useState("block")
  const [searchDisplay2 , setSearchDisplay2] = useState("hidden")

  const OnHandleDisplay =()=>{
  setSearchDisplay("hidden")
  setSearchDisplay2("block")
  }
  
  return (
<>
{/* MOBILE-DEVICE  */}
<div className=" justify-center  max-[426px]:block hidden items-center">
    <div className={`${searchDisplay2} `}>
<div className="flex  ">
<input
        type="text"
        className="w-auto outline-none p-1 max-[426px]:w-[7rem]  max-[426px]: max-[426px]:text-xs"
        placeholder="search anime..."
      />
      <div className="bg-[#2F2F2F] h-full w-[3.5rem] max-[321px]:w-[2rem]  max-[426px]:w-[2.7rem] flex justify-center items-center  p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 max-[426px]:w-4  max-[426px]:h-4  text-white h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
     </div>
    </div>

  <svg onClick={OnHandleDisplay}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 ${searchDisplay}  text-white h-6 `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
  
   </div>
{/* DESKTOP-DEVICE  */}
<div className="flex max-[426px]:hidden w-auto ">
<input
        type="text"
        className="w-auto outline-none p-1 max-[426px]:w-[7rem]  max-[426px]:text-sm"
        placeholder="search anime..."
      />
      <div className="bg-[#2F2F2F]   h-full w-[3.5rem] max-[321px]:w-[2rem] flex justify-center items-center  p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 text-white h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
</div>
</>
  );
}
export default Searchbar;
