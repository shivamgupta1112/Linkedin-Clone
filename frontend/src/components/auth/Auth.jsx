import React, { useState } from "react";
import Google from "../../assets/icons/Google";
import Microsoft from "../../assets/icons/Microsoft";
import Email from "../../assets/icons/Email";
import Linkedin from "../../assets/icons/Linkedin";
import Phone from "../../assets/icons/Phone";

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [joinMethod, setJoinMethod] = useState("email"); // "email" or "phone"

    return (
        <div className="min-h-screen bg-[#f3f2ef] flex flex-col font-sans">

            {/* Header */}
            <header className="w-full pl-6 md:pl-10 pt-4 mb-2">
                <div className="flex items-center gap-1">
                    <span className="font-bold text-[28px] md:text-[34px] tracking-tight text-[#0a66c2]">
                        Linked
                    </span>
                    <Linkedin
                        className="w-[34px] h-[34px] md:w-[40px] md:h-[40px]"
                        fill="#0a66c2"
                    />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center px-4 flex-1">

                <h1 className="text-[28px] md:text-[32px] text-gray-800 font-light mb-4 text-center w-full max-w-[400px]">
                    Join LinkedIn now — it’s free!
                </h1>

                {/* Form Card */}
                <div className="bg-white rounded-lg shadow-sm md:shadow-md w-full max-w-[400px] p-6 text-gray-800 flex flex-col">

                    <form className="w-full" onSubmit={(e) => e.preventDefault()}>

                        {/* Email / Phone */}
                        <div className="mb-3">
                            <label className="block text-[14px] font-semibold text-gray-700 mb-1">
                                {joinMethod === "email" ? "Email" : "Phone number"}
                            </label>
                            <input
                                className="w-full border border-gray-600 rounded-[4px] px-3 py-2 text-base focus:border-[2px] focus:border-[#0a66c2] outline-none h-[48px] transition-colors"
                                type={joinMethod === "email" ? "email" : "tel"}
                                placeholder={joinMethod === "email" ? "Enter your Email" : "Enter your Phone number"}
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label className="block text-[14px] font-semibold text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="w-full border border-gray-600 rounded-[4px] px-3 py-2 pr-16 text-base focus:border-[2px] focus:border-[#0a66c2] outline-none h-[48px] transition-colors"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your Password"
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0a66c2] font-semibold text-[14px] hover:bg-blue-50 px-2 py-1 rounded-sm"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center mb-4 mt-1">
                            <input
                                type="checkbox"
                                className="w-[18px] h-[18px] rounded-sm mr-2 accent-[#01754f] cursor-pointer"
                                defaultChecked
                            />
                            <label className="text-[14px] text-gray-800 cursor-pointer">
                                Keep me logged in
                            </label>
                        </div>

                        {/* Terms */}
                        <p className="text-[12px] text-gray-500 text-center mb-4 leading-relaxed">
                            By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
                            <a href="#" className="font-semibold text-[#0a66c2] hover:underline">
                                User Agreement
                            </a>,{" "}
                            <a href="#" className="font-semibold text-[#0a66c2] hover:underline">
                                Privacy Policy
                            </a>, and{" "}
                            <a href="#" className="font-semibold text-[#0a66c2] hover:underline">
                                Cookie Policy
                            </a>.
                        </p>

                        {/* Submit */}
                        <button className="w-full bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold rounded-full h-[48px] text-[16px] mb-5">
                            Agree & Join
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center mb-5">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-3 text-gray-600 text-[14px]">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex flex-col gap-3">

                        <button className="flex items-center justify-center w-full border border-gray-500 hover:bg-gray-100 rounded-full h-[48px] px-4 relative">
                            <div className="absolute left-6">
                                <Google className="w-[20px] h-[20px]" />
                            </div>
                            <span className="text-[16px] font-semibold text-gray-700">
                                Continue with Google
                            </span>
                        </button>

                        <button className="flex items-center justify-center w-full border border-gray-500 hover:bg-gray-100 rounded-full h-[48px] px-4 relative">
                            <div className="absolute left-6">
                                <Microsoft className="w-[18px] h-[18px]" />
                            </div>
                            <span className="text-[16px] font-semibold text-gray-700">
                                Continue with Microsoft
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setJoinMethod(joinMethod === "email" ? "phone" : "email")}
                            className="flex items-center justify-center w-full border border-gray-500 hover:bg-gray-100 rounded-full h-[48px] px-4 relative"
                        >
                            <div className="absolute left-6 text-gray-700">
                                {joinMethod === "email" ? (
                                    <Phone className="w-[20px] h-[20px]" />
                                ) : (
                                    <Email className="w-[20px] h-[20px]" />
                                )}
                            </div>
                            <span className="text-[16px] font-semibold text-gray-700">
                                {joinMethod === "email" ? "Join with phone" : "Join with email"}
                            </span>
                        </button>

                    </div>
                </div>

                {/* Footer Link */}
                <div className="mt-5 text-center text-[14px] text-[#000000a6]">
                    Already on LinkedIn?{" "}
                    <a href="#" className="font-semibold text-[#0a66c2] hover:underline">
                        Sign in
                    </a>
                </div>

            </main>
        </div>
    );
};

export default Auth;