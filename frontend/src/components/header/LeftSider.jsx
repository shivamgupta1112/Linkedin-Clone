import React from "react";
import Linkedin from "../../assets/icons/Linkedin";

const LeftSider = () => {
  return (
    <div className="flex items-center">
      <Linkedin className="w-[38px] h-[38px] text-[#0a66c2]" />
      <div className="relative hidden sm:block ml-2">
        <div className="absolute inset-y-0 left-0 pl-[14px] flex items-center pointer-events-none">
          <svg className="w-[14px] h-[14px] text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#eef3f8] text-[#000000E6] text-[14px] font-normal leading-normal rounded-[4px] pl-[38px] pr-[8px] w-[280px] focus:w-[380px] transition-all duration-300 outline-none border-0 focus:ring-[2px] focus:ring-black placeholder:text-gray-600 h-[34px]"
        />
      </div>
    </div>
  )
}

export default LeftSider;
