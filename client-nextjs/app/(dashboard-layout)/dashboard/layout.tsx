"use client"
import React, {useState} from "react";
import {CgMenuLeft} from "react-icons/cg";
import Image from "next/image";
import logo from "@/public/logo.svg";
import {MdOutlineDomainAdd} from "react-icons/md";
import Link from "next/link";
import {FaSearchengin} from "react-icons/fa6";
import {ImStatsDots} from "react-icons/im";
import {ImProfile} from "react-icons/im";
import {MyButtonMenuWithIcon} from "@/components/myComponents/MyButtonMenuWithIcon";
import {ThemeToggle} from "@/components/ThemeToggle";


function SideBar(props: { open: boolean ,onLinkClick?: () => void}) {

    return <div className={`bg-surface-bg/50 p-4 ${props.open ? "block  rounded-md" : "hidden"}`}>
        <div className="flex flex-col items-start">
            <Image src={logo} alt="logo" className={`mt-3 mb-3 ${props.open ? "text-center flex justify-center items-center" : ""}`}/>

            <div onClick={props.onLinkClick} className="flex items-center justify-center space-x-5 p-3 hover:translate-x-4 transition-all duration-500">
                <MdOutlineDomainAdd className="size-6 text-button-bg transition-all duration-500"/>
                <Link href="/dashboard/add-job" className="text-text-two transition-all duration-500">add job</Link>
            </div>

            <div onClick={props.onLinkClick} className="flex items-center justify-center space-x-5 p-3 hover:translate-x-4 transition-all duration-500">
                <FaSearchengin className="size-6 text-button-bg transition-all duration-500"/>
                <Link href="/dashboard/all-jobs" className="text-text-two transition-all duration-500">all job</Link>
            </div>

            <div onClick={props.onLinkClick} className="flex items-center justify-center space-x-5 p-3 hover:translate-x-4 transition-all duration-500">
                <ImStatsDots className="size-6 text-button-bg transition-all duration-500"/>
                <Link href="/dashboard/stats" className="text-text-two transition-all duration-500">stats</Link>
            </div>

            <div onClick={props.onLinkClick} className="flex items-center justify-center space-x-5 p-3 hover:translate-x-4 transition-all duration-500">
                <ImProfile className="size-6 text-button-bg"/>
                <Link href="/dashboard/profile" className="text-text-two">profile</Link>
            </div>

        </div>
    </div>;
}

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {

    const [isOpen, setOpen] = useState(false);
    const handleSetOpen = () => {
        setOpen(!isOpen)
    }

    const [isOpenMiddleMenu , setIsOpenMiddleMenu] = useState(false)

    const handleSetIsOpenMiddleMenu = () => {
      setIsOpenMiddleMenu(!isOpenMiddleMenu);
    }

    return <div className="h-full w-full flex">

        {/*region sidebar*/}
        <SideBar open={isOpen}/>
        {/*endregion*/}


        {/*region header and content*/}
        <div className="flex flex-col w-full h-full">

            <div className="flex justify-between w-full h-1/10 bg-surface-bg/50 p-5">
                <CgMenuLeft className="size-10 cursor-pointer max-md:hidden" onClick={handleSetOpen}/>

                <CgMenuLeft className="size-10 text-text-two cursor-pointer hidden max-md:block"
                            onClick={handleSetIsOpenMiddleMenu}/>

                <p className="text-button-text text-2xl font-semibold">dashboard</p>

                <div className="flex items-center space-x-4">
                    <ThemeToggle/>
                    <MyButtonMenuWithIcon/>
                </div>
            </div>

            <div className="h-full w-full flex items-center justify-center relative">
                {isOpenMiddleMenu && <MiddleMenu isOpenMiddleMenu={isOpenMiddleMenu} isOpenSideBar={isOpen} onClose={() => setIsOpenMiddleMenu(false)}/>}
                <div
                    className={`w-full h-full flex items-center justify-center transition-all duration-300 ${isOpenMiddleMenu ? "blur-2xl z-0" : "z-50"}`}>
                    {children}
                </div>
            </div>
        </div>
        {/*endregion*/}


    </div>
}

export const MiddleMenu = ({isOpenMiddleMenu, isOpenSideBar, onClose}: {isOpenMiddleMenu: boolean, isOpenSideBar: boolean, onClose: () => void}) => {
    return <div className={`absolute w-1/2 max-md:w-3/4 bg-surface-bg rounded-md ${isOpenMiddleMenu ? "z-50 rounded-md" : "z-0"}`}>
        <SideBar open={true} onLinkClick={onClose}/>
    </div>
}