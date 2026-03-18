import React from 'react';
import Edit from '../../assets/icons/Edit';
import User from "../../assets/icons/User";

const ProfileContent = () => {
    const user = {
        name: "Shivam Gupta",
        designation: "Full stack developer",
        company: "JIMS, Rohini",
        connections: "500+",
        location: "New Delhi, Delhi, India",
        image: "https://ui-avatars.com/api/name=Shivam+Gupta&background=000&color=fff&rounded=true&size=152",
        // coverImage: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80"
    };

    return (
        <div className="bg-white md:rounded-lg shadow flex flex-col overflow-hidden font-sans border-t border-r border-l border-b-2 sm:border-b border-gray-200">
            {/* Cover Photo */}
            <div className="w-full h-[150px] sm:h-[180px] md:h-[200px] relative bg-gray-300 flex-shrink-0">
                {user.coverImage && (
                    <img src={user.coverImage} alt="Cover" className="w-full h-full object-cover" />
                )}
                <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full text-[#0a66c2] hover:bg-gray-100 shadow-sm transition-colors z-10 flex items-center justify-center border border-gray-200">
                    <Edit className="w-5 h-5" />
                </button>
            </div>

            {/* Profile Info Section */}
            <div className="px-6 pb-6 relative z-10 bg-white flex flex-col w-full h-full">

                {/* Top Avatar Wrapper Row */}
                <div className="flex justify-between items-start mb-2 sm:mb-4">
                    <div className="relative -mt-[60px] sm:-mt-[110px] md:-mt-[112px]">
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-[124px] h-[124px] sm:w-[152px] sm:h-[152px] rounded-full border-[4px] border-white object-cover bg-white shadow-md cursor-pointer hover:shadow-lg transition-all"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%236b7280%22%3E%3Cpath%20d%3D%22M12%202C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010%2010-4.48%2010-10S17.52%202%2012%202zm0%203c1.66%200%203%201.34%203%203s-1.34%203-3%203-3-1.34-3-3%201.34-3%203-3zm0%2014.2c-2.5%200-4.71-1.28-6-3.22.03-1.99%204-3.08%206-3.08%201.99%200%205.97%201.09%206%203.08-1.29%201.94-3.5%203.22-6%203.22z%22%2F%3E%3C%2Fsvg%3E";
                                }}
                            />
                        ) : (
                            <div className="w-[124px] h-[124px] sm:w-[152px] sm:h-[152px] rounded-full border-[4px] border-white bg-gray-100 shadow-md flex items-center justify-center">
                                <User className="w-[40px] h-[40px] sm:w-[100px] sm:h-[100px] text-gray-400" />
                            </div>
                        )}
                    </div>
                    {/* Floating Right Edit */}
                    <button className="mt-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 flex items-center justify-center">
                        <Edit className="w-6 h-6" />
                    </button>
                </div>

                {/* Info Text & Company Badge Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start">
                    {/* Left details */}
                    <div className="flex-grow max-w-[600px]">
                        <h1 className="text-[22px] sm:text-[24px] font-semibold text-gray-900 leading-tight">
                            {user.name}
                        </h1>
                        <div className="text-[15px] sm:text-[16px] text-gray-900 mt-1 leading-snug">
                            {user.designation}
                        </div>
                        <div className="text-[13px] sm:text-[14px] text-gray-500 mt-2 flex items-center gap-x-2">
                            <span>{user.location}</span>
                            <span className="hidden sm:inline">&middot;</span>
                            <span className="text-[#0a66c2] font-semibold hover:underline cursor-pointer">
                                Contact info
                            </span>
                        </div>
                        <div className="text-[13px] sm:text-[14px] font-semibold text-[#0a66c2] mt-[10px] hover:underline cursor-pointer">
                            {user.connections} connections
                        </div>
                    </div>

                    {/* Right Company Badge (hidden on mobile, standard LinkedIn layout) */}
                    {user.company && (
                        <div className="hidden sm:flex items-center gap-2 max-w-[220px] cursor-pointer hover:underline text-[14px] font-semibold text-gray-900 mt-2">
                            <div className="w-[32px] h-[32px] bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-gray-600 rounded shadow-sm border border-gray-300">
                                {user.company.charAt(0).toUpperCase()}
                            </div>
                            <span className="line-clamp-2 leading-tight pr-4">{user.company}</span>
                        </div>
                    )}
                </div>

                {/* Actions Row */}
                <div className="flex flex-nowrap items-center gap-2 mt-4 sm:mt-5 w-full overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                    <button className="px-5 h-[32px] bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold rounded-full transition-colors text-[14px] sm:text-[15px] shadow-sm flex-shrink-0">
                        Open to
                    </button>
                    <button className="px-5 h-[32px] border border-[#0a66c2] text-[#0a66c2] font-semibold rounded-full hover:bg-blue-50 transition-colors text-[14px] sm:text-[15px] border-[1.5px] shadow-sm flex-shrink-0">
                        Add profile section
                    </button>
                    <button className="px-4 h-[32px] border border-gray-500 text-gray-600 font-semibold rounded-full hover:bg-gray-100 transition-colors text-[14px] sm:text-[15px] border-[1.5px] flex-shrink-0">
                        Enhance profile
                    </button>
                    <button className="px-4 h-[32px] border border-gray-500 text-gray-600 font-semibold rounded-full hover:bg-gray-100 transition-colors text-[14px] sm:text-[15px] border-[1.5px] flex-shrink-0">
                        Resources
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProfileContent;
