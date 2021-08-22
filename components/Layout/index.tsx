import React from "react";

import Navbar from "../Navbar";

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center font-sans relative">
                <div className="w-full max-w-[1536px]">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;