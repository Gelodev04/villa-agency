"use client";
import { CalendarIcon } from "@heroicons/react/24/solid";


const ScheduleButton = () => {
  return (
    <button className="flex items-center bg-myblack text-white px-6 py-4 rounded-full relative overflow-hidden backdrop-filter backdrop-smooth group cursor-pointer">
      
      <span className="absolute left-0 size-13 bg-main rounded-full flex items-center justify-center ">
        <CalendarIcon className="size-6 text-white " />
      </span>

      
      <span className="ml-10 text-sm group-hover:text-main duration-100 ease-out">Schedule a visit</span>
    </button>
  );
};

export default ScheduleButton;
