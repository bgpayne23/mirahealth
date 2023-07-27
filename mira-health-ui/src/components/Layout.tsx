import Link from 'next/link'
import React, { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className='flex justify-center min-h-screen bg-white'>
            <div className="w-full min-h-screen bg-white flex flex-col">
                <div className="flex justify-center h-12 shadow-lg">
                    <Link href="/inputs/Provider">
                        <span className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100 hover:text-blue-500 cursor-pointer">Provider Portal</span>
                    </Link>
                    <Link href="/inputs/Patient">
                        <span className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100 hover:text-blue-500 cursor-pointer">Patient Portal</span>
                    </Link>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout