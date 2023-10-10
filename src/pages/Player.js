import {
  FaBackward,
  FaExpand,
  FaForward,
  FaMicrophoneAlt,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import sampleVideo from "../assets/samplevideos/Chainsaw Man - S1E08 (82).mp4"
import Comments from "../components/Comments";
import RelatedAnime from "../components/RelatedAnime";


function Player(props) {

  const handelOnPlay = () => {
    let play = document.getElementById("play");
    let video = document.getElementById("video");
    let pause = document.getElementById("pause");
    if(video.paused|| video.ended){
      pause.style.display = "block";
      video.play();
      play.style.display = "none";
    }
    else{
          
    pause.style.display = "none";
    play.style.display = "block";
    video.pause()
    }

  };
  
  const handelOnBackward =()=>{
    let video = document.getElementById("video");
    video.currentTime -=5;
  }
  const handelOnForward =()=>{
    let video = document.getElementById("video");
    video.currentTime +=5;

  }
  const handelOnExpand =()=>{
    let video = document.getElementById("video");
video.requestFullscreen()
  }
  return (
    <div className="h-full space-y-10 w-full    ">
      <div className=" max-lg:space-y-5 p-5 bg-[#171717] space-y-0 h-fit max-lg:h-[100%] max-lg:p-10 max-[426px]:h-[100%] max-lg:flex-col flex-row  w-full flex text-white items-center max-[426px]:justify-normal justify-around">
        {/* ABOUT SERIES */}
        <div className="bg-[#111111]  h-[100%]  max-[321px]:w-[18rem]  max-lg:w-[40rem] max-[426px]:w-[20rem]  max-sm:w-[28rem]  w-[20rem]">
          <div className="w-full h-fit p-4">
            <img
              alt="img"
              className="h-[8rem] max-lg:h-[6rem]"
              src={props.AnimeImg}
            />
            <h5 className="capitalize lato max-[426px]:text-[0.8rem] text-[1.5rem] my-1">
              {props.name}
            </h5>
            <h5 className="text-[0.75rem] max-[426px]:text-[0.6rem]   font-extralight">
              {props.about}
            </h5>
          </div>
          <div className="w-full  p-5">
            <div>
              <span className=" text-[0.8rem] max-[426px]:text-[0.65rem] text-[#A0A0A0]">
                Type:
              </span>
              <span className=" max-[426px]:text-[0.65rem] text-[0.9rem] p-1 text-[#fff]">
                TV
              </span>
            </div>
            <div>
              <span className=" text-[0.8rem] max-[426px]:text-[0.65rem] text-[#A0A0A0]">
                Status:
              </span>
              <span className=" max-[426px]:text-[0.65rem] text-[0.9rem] p-1 text-[#fff]">
                {props.status}{" "}
              </span>
            </div>
            <div>
              <span className=" text-[0.8rem] max-[426px]:text-[0.65rem] text-[#A0A0A0]">
                Genres:
              </span>
              <span className=" max-[426px]:text-[0.65rem] text-[0.9rem] p-1 text-[#fff]">
                {props.Genres}
              </span>
            </div>
            <div>
              <span className=" text-[0.8rem] max-[426px]:text-[0.65rem] text-[#A0A0A0]">
                Country:{" "}
              </span>
              <span className=" max-[426px]:text-[0.65rem] text-[0.9rem] p-1 text-[#fff]">
                {props.Country}
              </span>
            </div>
            <div>
              <span className=" text-[0.8rem] max-[426px]:text-[0.65rem] text-[#A0A0A0]">
                Premiered:
              </span>
              <span className=" max-[426px]:text-[0.65rem] text-[0.9rem] p-1 text-[#fff]">
                {props.Premiered}
              </span>
            </div>
            <div>
              <span className=" text-[0.8rem] max-[426px]:text-[0.65rem] text-[#A0A0A0]">
                TV Date aired:
              </span>
              <span className=" max-[426px]:text-[0.65rem] text-[0.9rem] p-1 text-[#fff]">
                {props.aired}
              </span>
            </div>
            <div>
              <span className=" text-[0.8rem] max-[426px]:text-[0.65rem] text-[#A0A0A0]">
                {" "}
                Producers:
              </span>
              <span className=" max-[426px]:text-[0.65rem] text-[0.9rem] p-1 text-[#fff]">
                {props.Producers}
              </span>
            </div>
            <div>
              <span className=" text-[0.8rem] max-[426px]:text-[0.65rem] text-[#A0A0A0]">
                {" "}
                Episodes:{" "}
              </span>
              <span className=" max-[426px]:text-[0.65rem] text-[0.9rem] p-1 text-[#fff]">
                {props.Episodes}
              </span>
            </div>
            <div>
              <span className=" text-[0.8rem] max-[426px]:text-[0.65rem] text-[#A0A0A0]">
                Studios:{" "}
              </span>
              <span className=" max-[426px]:text-[0.65rem] text-[0.9rem] p-1 text-[#fff]">
                {" "}
                {props.Studios}
              </span>
            </div>
          </div>
        </div>
        {/* VIDEO Player */}

        <div className="bg-[#111111] h-[30rem] flex-col  w-[50rem] max-[426px]:h-[15rem] max-[321px]:w-[18rem]  max-sm:w-[28rem] max-lg:h-[25rem] max-lg:w-[40rem]  max-[426px]:w-[20rem] relative  flex">
          <video id="video" className="w-full h-full">
            <source src={sampleVideo}/>
          </video>
<button onClick={handelOnPlay}>
<FaPlay
            // onClick={handelOnPlay}
            id="play"
            className="w-[4rem] cursor-pointer max-lg:h-[3rem] max-lg:w-[3rem] hover:text-gray-200 h-[4rem]  absolute top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
          <FaPause
            // onClick={handelOnPause}
            id="pause"
            className="w-[4rem]  hidden max-lg:h-[3rem] max-lg:w-[3rem] hover:text-gray-200 cursor-pointer h-[4rem]  absolute top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
</button>

          <div className="flex w-full  items-center bg-[#2F2F2F]   absolute bottom-0 max-lg:h-[3rem] h-[4rem] ">
            <div className="flex w-[50%] max-lg:w-[50%] space-x-5 max-[321px]:space-x-1 max-[426px]:space-x-2 p-5 max-lg:p-2 items-center">
              <div className="flex w-fit">
                <p className="text-[#C0C0C0] capitalize  w-max max-[426px]:text-[0.6rem]  ext-[0.9rem] font-semibold">
                  current episode :
                </p>
                <span className="text-white  text-[0.9rem] max-[426px]:text-[0.6rem]   ml-2">
                  2
                </span>
              </div>
              <div className="flex capitalize items-center ">
                <p>
                  <FaMicrophoneAlt  className="text-[#C90000] max-[426px]:text-[0.65rem]" />
                </p>
                <span className="text-[0.7rem] max-[426px]:text-[0.6rem] ">
                  dub
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-[#C0C0C0] capitalize max-[426px]:text-[0.6rem] w-max text-[0.9rem] font-semibold ">
                  duration :
                </p>
                <span className="text-white text-[0.7rem] max-[426px]:text-[0.6rem]  w-max  mt-[0.2rem] p-1">
                  24 min
                </span>
              </div>
            </div>
            <div className="flex w-[50%] justify-end space-x-10 max-lg:space-x-5 px-2  items-center">
              <div className="flex space-x-3">
                <FaBackward onClick={handelOnBackward} className="h-5 hover:text-gray-200 cursor-pointer max-[426px]:h-3 max-[426px]:w-3 w-5" />
                <FaForward  onClick={handelOnForward}  className="h-5 hover:text-gray-200 cursor-pointer max-[426px]:h-3 max-[426px]:w-3 w-5" />
              </div>
              <FaExpand onClick={handelOnExpand} className="h-6 w-6 hover:text-gray-200 cursor-pointer max-[426px]:h-3 max-[426px]:w-3 w" />
            </div>
          </div>
        </div>
        {/* EPISODES */}
        <div className="bg-[#111111] p-4   h-[30rem]  max-lg:h-[25rem] max-[321px]:w-[18rem] max-sm:w-[28rem] max-[426px]:w-[20rem] max-lg:w-[30rem]  w-[20rem]">
          <div className="parent">
            <h4 className="text-sm lato ">List of episodes :</h4>
            <div className="flex items-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="text-sm  text-center">1-25</span>
            </div>
          </div>
          <div className=" grid  grid-cols-4 max-[426px]:w-[18rem] max-[321px]:w-[15rem]  max-[426px]:grid-cols-5  max-lg:grid-cols-7 max-lg:w-[25rem] max-lg:h-[15rem]  flow-row  mt-10 gap-2 w-[18rem]   h-[20rem] ">
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              01
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  bg-[#a50000] h-[2rem] text-center julius flex items-center justify-center">
              02
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              03
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              04
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              05
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              06
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              07
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              08
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              09
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              10
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              11
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              12
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              13
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              14
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              15
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              16
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              17
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              18
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              19
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              20
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              21
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              22
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              23
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              24
            </span>
            <span className=" w-[3rem] rounded-md max-[321px]:w-[2.2rem] max-[321px]:text-[0.7rem] hover:bg-[#3d3d3d] cursor-pointer  h-[2rem] text-center julius flex items-center justify-center bg-[#2f2f2f]">
              25
            </span>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-around items-center max-lg:justify-normal max-lg:space-y-10 max-lg:flex-col flex-row  bg-[#171717] h-full p-5 w-full">
        <Comments />
        <RelatedAnime />
      </div>
    </div>
  );
}
export default Player;
