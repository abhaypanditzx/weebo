import Searchbar from "./Searchbar";
import {RxHamburgerMenu} from "react-icons/rx"
function Nav() {
  
  const func =()=>{
   let icon = document.getElementById("hamburger-icon")
   let sidebar = document.getElementById("sidebar")
   if(icon.style.display !=="none"){
    icon.style.display ="none"
    sidebar.style.display ="block"
  }
  else{
    console.error("internal error")
  }

  }
  return (
    <div className="w-full flex z-50 h-[3.5rem] sticky top-0  items-center bg-[#00000039]">
      <div className="w-full p-1">
        <RxHamburgerMenu onClick={func} id="hamburger-icon" className="w-9 hover:text-gray-200 cursor-pointer block text-white h-9"/>
        
      </div>
      <div className="w-full flex justify-end items-center ">
        <Searchbar />
      </div>
      <div className="w-full flex  justify-end px-3">
        <button className=" text-white bg-[#111111]  p-1 w-[5rem] inter text-[0.8rem] max-[426px]:text-[8px]   max-[426px]:w-[3.5rem] max-[426px]:h-[1.3rem]  flex justify-center tracking-wide items-center max-[426px]:p-0   ">
          login
        </button>
      </div>
    </div>
  );
}
export default Nav;
