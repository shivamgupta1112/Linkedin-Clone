import React from "react";
import HomeIcon from "../../assets/icons/HomeIcon";
import Network from "../../assets/icons/Network";
import Jobs from "../../assets/icons/Jobs";
import Messaging from "../../assets/icons/Messaging";
import Notifications from "../../assets/icons/Notifications";

const NavItem = ({ Icon, text, active, badge }) => (
    <div className={`flex flex-col items-center justify-center cursor-pointer min-w-[50px] md:min-w-[80px] h-full border-b-[2px] transition-colors ${active ? 'text-black border-black/90' : 'text-gray-500 border-transparent hover:text-black'}`}>
        <div className="relative mt-1">
            <Icon className={`w-6 h-6 ${active ? 'text-black' : 'text-gray-600'}`} />
            {badge && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold px-[5px] py-[1px] rounded-full border-2 border-white leading-none">
                    {badge}
                </span>
            )}
        </div>
        <span className={`text-[12px] mt-[2px] hidden md:block ${active ? 'text-black font-semibold' : ''}`}>{text}</span>
    </div>
);

const RightSider = () => {
    return (
        <nav className="flex items-center gap-1 md:gap-2 h-full">
            <NavItem Icon={HomeIcon} text="Home" active={true} />
            <NavItem Icon={Network} text="My Network" />
            <NavItem Icon={Jobs} text="Jobs" />
            <NavItem Icon={Messaging} text="Messaging" />
            <NavItem Icon={Notifications} text="Notifications" badge="3" />

            <div className="flex flex-col items-center justify-center cursor-pointer min-w-[50px] md:min-w-[70px] h-full text-gray-500 hover:text-black border-b-[2px] border-transparent">
                <img src="https://ui-avatars.com/api/?name=User&background=random&rounded=true" alt="Profile" className="w-6 h-6 rounded-full mt-1" />
                <div className="flex items-center text-[12px] mt-[2px] hidden md:flex">
                    <span>Me</span>
                    <svg className="w-3 h-3 ml-[2px] fill-current" viewBox="0 0 24 24"><path d="M7 9l5 5 5-5z"></path></svg>
                </div>
            </div>

            <div className="hidden md:block h-[38px] border-l border-gray-200 mx-2"></div>

            <div className="hidden md:flex flex-col items-center justify-center cursor-pointer min-w-[70px] h-full text-gray-500 hover:text-black border-b-[2px] border-transparent">
                <svg className="w-6 h-6 text-gray-600 mt-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zM3 10h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zM3 17h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4z"></path>
                </svg>
                <div className="flex items-center text-[12px] mt-[2px]">
                    <span>For Business</span>
                    <svg className="w-3 h-3 ml-[2px] fill-current" viewBox="0 0 24 24"><path d="M7 9l5 5 5-5z"></path></svg>
                </div>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center cursor-pointer min-w-[70px] h-full text-gray-500 hover:text-black border-b-[2px] border-transparent">
                <svg className="w-6 h-6 text-gray-600 mt-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2A10 10 0 1022 12 10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-13a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm0-5a2 2 0 102 2 2 2 0 00-2-2z"></path>
                </svg>
                <div className="flex items-center text-[12px] mt-[2px]">
                    <span>Advertise</span>
                </div>
            </div>
        </nav>
    );
}

export default RightSider;
