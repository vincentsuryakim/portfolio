import { FC, ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
    children: ReactNode
}
const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div
            className="w-full flex justify-center"
        >
            <div
                className="w-full max-w-[1560px] px-6 md:px-16 flex flex-col gap-y-12"
            >
                <Navbar />
                <main className="flex flex-col gap-y-16 md:gap-y-24">
                    { children }
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
