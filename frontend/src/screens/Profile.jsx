import React from 'react';
import Header from '../components/Header';
import ProfileContent from '../components/profile/ProfileContent';

const Profile = () => {
    return (
        <div className="min-h-screen bg-[#f3f2ef] flex flex-col font-sans">
            <Header />

            <main className="flex-grow pt-4 md:pt-6 pb-12 w-full max-w-[1128px] mx-auto px-0 md:px-4 flex gap-6 justify-center">
                <div className="w-full md:w-[782px] flex flex-col gap-4">
                    <ProfileContent />
                </div>
                <div className="hidden lg:block w-[300px] flex-shrink-0">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-[80px]">
                        <div className="flex justify-between items-center cursor-pointer">
                            <h2 className="text-[16px] font-semibold text-gray-900">Profile language</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600">
                                <path d="M21.13,2.86a3,3,0,0,0-4.24,0l-13,13A1,1,0,0,0,3.61,16.5l-1,4a1,1,0,0,0,1.21,1.21l4-1a1,1,0,0,0,.35-.15l13-13A3,3,0,0,0,21.13,2.86ZM7.44,18.78l-3,.75.75-3L14.73,7l2.25,2.25ZM18.42,7.84l-2.25-2.25L17.59,4.2a1,1,0,0,1,1.41,0l.84.85a1,1,0,0,1,0,1.41Z" />
                            </svg>
                        </div>
                        <p className="text-[14px] text-gray-500 mt-1">English</p>

                        <div className="h-[1px] bg-gray-200 w-full my-4"></div>

                        <div className="flex justify-between items-center cursor-pointer">
                            <h2 className="text-[16px] font-semibold text-gray-900">Public profile & URL</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600">
                                <path d="M21.13,2.86a3,3,0,0,0-4.24,0l-13,13A1,1,0,0,0,3.61,16.5l-1,4a1,1,0,0,0,1.21,1.21l4-1a1,1,0,0,0,.35-.15l13-13A3,3,0,0,0,21.13,2.86ZM7.44,18.78l-3,.75.75-3L14.73,7l2.25,2.25ZM18.42,7.84l-2.25-2.25L17.59,4.2a1,1,0,0,1,1.41,0l.84.85a1,1,0,0,1,0,1.41Z" />
                            </svg>
                        </div>
                        <p className="text-[14px] text-gray-500 mt-1 hover:underline text-[#0a66c2] cursor-pointer">www.linkedin.com/in/shivam-gupta</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;