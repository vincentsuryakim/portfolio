import React from "react";

import Navbar from "../Navbar";

export interface LayoutProps { locAboutMe:number, locResume:number, locProjects:number, locContactMe:number, scrollMotionData:string }

export const Layout: React.FC<LayoutProps> = ({ children, locAboutMe, locResume, locProjects, locContactMe, scrollMotionData }) => {
    return (
        <>
            <Navbar locAboutMe={locAboutMe} locResume={locResume} locProjects={locProjects} locContactMe={locContactMe} scrollMotionData={scrollMotionData} />
            
            <div className="w-full flex justify-center font-sans relative">
                <div className="w-full max-w-[1536px]">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;