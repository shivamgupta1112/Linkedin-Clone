import React from 'react';
import { Link, useNavigate } from 'react-router';

const ProfileDropdown = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("auth");
        navigate("/auth?redirect-auth=signup");
    }

    // Default user object if not provided or missing properties
    const safeUser = {
        name: user?.name || "LinkedIn Member",
        designation: user?.designation,
        company: user?.company,
        image: user?.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User Name")}&background=random&rounded=true`,
        isPremium: Boolean(user?.isPremium),
        isVerified: Boolean(user?.isVerified)
    };

    return (
        <div className="absolute top-[48px] right-0 md:-right-4 w-[280px] bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-gray-200 z-50 overflow-hidden flex flex-col font-sans text-left cursor-default" onClick={(e) => e.stopPropagation()}>

            {/* Profile Section */}
            <div className="p-4 flex flex-col items-start hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 mb-3 w-full">
                    <img
                        src={safeUser.image}
                        alt={safeUser.name}
                        className="w-[56px] h-[56px] rounded-full object-cover shadow-sm bg-gray-200 flex-shrink-0"
                    />
                    <div className="flex flex-col justify-center flex-grow overflow-hidden">
                        <div className="flex items-center text-[16px] font-semibold text-gray-900 leading-tight">
                            <span className="truncate max-w-[150px]">{safeUser.name}</span>
                            {safeUser.isVerified && (
                                <svg className="w-4 h-4 ml-1 text-gray-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-4-4 1.41-1.41L11 13.67l6.59-6.59L19 8.5l-8 8z" />
                                </svg>
                            )}
                        </div>
                        {safeUser.designation && (
                            <div className="text-[14px] text-gray-600 leading-snug mt-1 truncate w-full">
                                {safeUser.designation}
                            </div>
                        )}
                    </div>
                </div>
                <Link to={`/profile?url=${"shivamgupta1112"}`} className="w-full h-[32px] flex items-center justify-center rounded-full border border-[#0a66c2] text-[#0a66c2] text-[15px] font-semibold hover:bg-blue-50 transition-colors border-[1.5px]">
                    View profile
                </Link>
            </div>

            <div className="w-full h-[1px] bg-gray-200"></div>

            {/* Account Section */}
            <div className="py-2 flex flex-col">
                <h3 className="px-4 py-1 text-[16px] font-semibold text-gray-900">Account</h3>
                {safeUser.isPremium ? (
                    <div className="px-4 py-1 hover:underline cursor-pointer flex items-center text-[14px] font-semibold text-gray-600">
                        <span className="w-3.5 h-3.5 bg-gradient-to-br from-[#f8c77e] to-[#c78200] rounded-sm mr-2 shadow-sm inline-block flex-shrink-0"></span>
                        My Premium features
                    </div>
                ) : (
                    <div className="px-4 py-1 hover:underline cursor-pointer flex items-center text-[14px] font-semibold text-gray-600">
                        <span className="w-3.5 h-3.5 bg-gradient-to-br from-[#f8c77e] to-[#c78200] rounded-sm mr-2 shadow-sm inline-block flex-shrink-0"></span>
                        Redeem Premium free trial
                    </div>
                )}
                <div className="px-4 py-1 hover:underline cursor-pointer text-[14px] text-gray-600">
                    Settings & Privacy
                </div>
                <div className="px-4 py-1 hover:underline cursor-pointer text-[14px] text-gray-600">
                    Help
                </div>
                <div className="px-4 py-1 hover:underline cursor-pointer text-[14px] text-gray-600">
                    Language
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200"></div>

            {/* Manage Section */}
            <div className="py-2 flex flex-col">
                <h3 className="px-4 py-1 text-[16px] font-semibold text-gray-900">Manage</h3>
                <div className="px-4 py-1 hover:underline cursor-pointer text-[14px] text-gray-600">
                    Posts & Activity
                </div>
                {safeUser.company && (
                    <div className="px-4 py-1 hover:underline cursor-pointer text-[14px] text-gray-600 truncate">
                        Company: {safeUser.company}
                    </div>
                )}
                <div className="px-4 py-1 hover:underline cursor-pointer text-[14px] text-gray-600">
                    Job Posting Account
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200"></div>

            {/* Sign out */}
            <div className="py-2 mb-1">
                <button onClick={handleLogout} className="px-4 py-1 hover:underline cursor-pointer text-[14px] text-gray-600">
                    Sign out
                </button>
            </div>

        </div >
    );
};

export default ProfileDropdown;
