import React from "react";
import RightSider from "./header/RightSider";
import LeftSider from "./header/LeftSider";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="mx-auto px-[80px] h-[52px] flex items-center justify-between">
                {/* Left Sider */}
                <LeftSider />

                {/* Right Sider */}
                <RightSider />
            </div>
        </header>
    )
}

export default Header;
