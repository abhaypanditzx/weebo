import React, { useState } from "react";
import MostViewedDay from "./MostViewedDay";
import MostVIewedWeek from "./MostVIewedWeek";
import MostViewedMonth from "./MostViewedMonth";

function MostViewed() {
  const [dwm, setDwm] = useState(<MostViewedDay />);
  const settimeLine1 = () => {
    let day = document.getElementById("day");
    let week = document.getElementById("week");
    let month = document.getElementById("month");

    day.style.backgroundColor = "#38393d";
    week.style.backgroundColor = "#2f2f2f";
    month.style.backgroundColor = "#2f2f2f";
    
    setDwm(<MostViewedDay />);
  };
  const settimeLine2 = () => {
    let day = document.getElementById("day");
    let week = document.getElementById("week");
    let month = document.getElementById("month");

    week.style.backgroundColor = "#38393d";
    day.style.backgroundColor = " #2f2f2f";
    month.style.backgroundColor = "#2f2f2f";
    setDwm(<MostVIewedWeek />);
  };

  const settimeLine3 = () => {
    let day = document.getElementById("day");
    let week = document.getElementById("week");
    let month = document.getElementById("month");
    month.style.backgroundColor = "#38393d";
    day.style.backgroundColor = "#2f2f2f";
    week.style.backgroundColor = "#2f2f2f";
    setDwm(<MostViewedMonth />);
  };

  return (
    <div className="h-fit  w-[40rem] max-[426px]:w-[23rem] max-[769px]:w-[25rem] max-[321px]:w-[17rem] bg-[#171717]">
      <div className="h-fit w-full text-[#a50000] drop-shadow-sm capitalize text-[1.4rem] bg-[#030909] py-3 flex justify-start px-5 items-center lato">
        MostViewed
      </div>
      <div className="h-[3rem]  w-full text-[#a50000]  max-[769px]:h-[3rem] max-[769px]:text-[1.1rem] drop-shadow-sm capitalize text-[1.4rem] bg-[#2f2f2f]  flex justify-start  items-center inter">
        <button
          onClick={settimeLine1}
          id="day"
          className=" w-full h-full bg-[#38393d]"
        >
          Day
        </button>
        <button onClick={settimeLine2} id="week" className=" w-full h-full ">
          Week
        </button>
        <button onClick={settimeLine3} id="month" className=" w-full h-full">
          Month
        </button>
      </div>
      {dwm}
    </div>
  );
}

export default MostViewed;
