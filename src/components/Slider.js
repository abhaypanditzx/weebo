import React from "react";
// Import Swiper React components
import img1 from "../assets/demon_slayer.jpg";
import img2 from "../assets/mie icon.jpg";
import img3 from "../assets/Zom 100_ Bucket List of the Dead.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="gradient ">
          <img src={img1} alt="img" className="block h-full  w-full" />
          <div className="absolute top-[10rem] max-[426px]:top-[6rem] left-10 max-[426px]:left-2 max-[426px]:4-[20rem] block w-full p-2 text-start">
            <h5 className="text-[#c3c3c3] text-[1.7rem]  max-[426px]:text-[1.2rem]">
              #1 spotlight
            </h5>
            <h2 className="text-[#fff] lato font-bold tracking-wide w-[50rem] max-[426px]:w-[20rem] max-[426px]:text-[2rem] text-[5rem]">
              DEMON SLAYER SEASON -3
            </h2>
            <h3 className=" max-[426px]:text-[0.6rem] text-[0.8em]  text-white w-[70rem] ">
              After their battle with Gyutaro and Daki, the Upper Rank Six
              siblings, Tanjiro, Zenitsu, Inosuke, and Nezuko are found by the
              Kakushi <span className="font-bold text-[1rem] "> more...</span>{" "}
              <p className="max-[426px]:hidden">
                {" "}
                . In the Infinity Castle, Muzan Kibutsuji summons the remaining
                five Upper Rank demons– Akaza, Upper Five Gyokko, Upper Four
                Hantengu, Upper Two Doma, and Upper One Kokushibo. He admonishes
                them for their failure to kill the Ubuyashiki family and find
                the Blue Spider Lily. When Gyokko provides new information, he
                is sent on a joint mission with Hantengu. While Zenitsu and
                Inosuke are summoned to individual missions, Tanjiro continues
                his rehabilitation.{" "}
              </p>
            </h3>
            <button className="bg-[#C90000] mt-10 max-[426px]:mt-5 w-auto max-[426px]:w-[7.2rem]  max-[426px]:text-[0.8rem] hover:bg-[#A50000] flex items-center py-2 max-[426px]:py-1 max-[426px]:px-2 px-3.5 ml-2 inter rounded-2xl space-x-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
              <span>watch now </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="gradient">
          <img src={img2} alt="img" className="block h-full  w-full" />
          <div className="absolute top-[10rem] max-[426px]:top-[6rem] left-10 max-[426px]:left-2 max-[426px]: block w-full text-start p-2">
            <h5 className="text-[#c3c3c3] text-[1.7rem]  max-[426px]:text-[1.2rem]">
              #2 spotlight
            </h5>
            <h2 className="text-[#fff] lato font-bold tracking-wide w-[50rem] max-[426px]:w-[20rem] max-[426px]:text-[2rem] text-[5rem]">
              the girl i like forgot her glasses
            </h2>
            <h3 className="max-[426px]:text-[0.6rem] text-[0.8em]  text-white w-[70rem]">
              As the deskmate of Ai Mie, Kaede Komura always has his attention
              fixed on her. Attracted by her cute charms,<span>more...</span>{" "}
              <p className="max-[426px]:hidden">
                {" "}
                all he wishes for is that she would look at him with those
                beautiful eyes beneath her glasses. But just a few days after
                making her acquaintance, Kaede notices something different about
                Ai: her eyes are squinting and her glasses are missing.
                Nonetheless, he still finds her adorable.
              </p>
            </h3>
            <button className="bg-[#C90000] mt-10 max-[426px]:mt-5 w-auto max-[426px]:w-[7.2rem]  max-[426px]:text-[0.8rem] hover:bg-[#A50000] flex items-center py-2 max-[426px]:py-1 max-[426px]:px-2 px-3.5 ml-2 inter rounded-2xl space-x-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
              <span>watch now </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="gradient">
          <img src={img3} alt="img" className="block h-full  w-full" />
          <div className="absolute top-[10rem] max-[426px]:top-[6rem] left-10 max-[426px]:left-2 max-[426px]: block w-full text-start p-2">
            <h5 className="text-[#c3c3c3] text-[1.7rem]  max-[426px]:text-[1.2rem] ">
              #3 spotlight
            </h5>
            <h2 className="text-[#fff] lato font-bold tracking-wide w-[50rem] max-[426px]:w-[20rem] max-[426px]:text-[2rem] text-[5rem]">
              Zom 100: Bucket List of the Dead
            </h2>
            <h3 className="max-[426px]:text-[0.6rem] text-[0.8em]  text-white w-[70rem] ">
              Akira Tendo is a young office worker who hates his job. Three
              years ago, an excited Akira
              <span className="font-bold text-[1rem] "> more...</span>{" "}
              <p className="max-[426px]:hidden ">
                came to Tokyo to work after graduation but increasingly becomes
                disillusioned after learning his company ruthlessly exploits
                their employees. Despite being depressed, he continues to stay
                due to his coworker, Saori Ohtori, the only one who treats him
                with kindness but is unable to confess his feelings since Ohtori
                is also the CEO's mistress
              </p>
            </h3>
            <button className="bg-[#C90000] mt-10 max-[426px]:mt-5 w-auto max-[426px]:w-[7.2rem]  max-[426px]:text-[0.8rem] hover:bg-[#A50000] flex items-center py-2 max-[426px]:py-1 max-[426px]:px-2 px-3.5 ml-2 inter rounded-2xl space-x-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
              <span>watch now </span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
