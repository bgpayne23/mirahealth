import Link from "next/link";
import React, { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex justify-center min-h-screen bg-white">
            <div className="w-full min-h-screen bg-purple-300 flex flex-col">
                <div className="flex justify-center h-16 shadow-lg align-middle">

                    <Link href="/">
                        <img src="/logo.png" alt="MiraHealth Logo" className="h-10 rounded-full mt-3 mb-3" /> 
                    </Link>

                    <Link href="/">
                        <span className="block py-5 px-4 rounded transition duration-200 
                        hover:bg-purple-500 hover:text-white cursor-pointer text-purple-950">
                            Home
                        </span>
                    </Link>
                 

                    <Link href="/inputs/Patient">
                        <span className="block py-5 px-4 rounded transition duration-200 
                        hover:bg-purple-500 hover:text-white cursor-pointer text-purple-950">
                            Patient Portal
                        </span>
                    </Link>
                    <Link href="/inputs/Provider">
                        <span className="block py-5 px-4 rounded transition duration-200 
                        hover:bg-purple-500 hover:text-white cursor-pointer text-purple-950">
                            Provider Portal
                        </span>
                    </Link>
                    <Link href="/alerts/PredictionsPage">
                        <span className="block py-5 px-4 rounded transition duration-200 
                        hover:bg-purple-500 hover:text-white cursor-pointer text-purple-950">
                            Predictions
                        </span>
                    </Link>
                    <Link href="/alerts/Recommendations">
                        <span className="block py-5 px-4 rounded transition duration-200 
                        hover:bg-purple-500 hover:text-white cursor-pointer text-purple-950">
                            Recommendations
                        </span>
                    </Link>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
