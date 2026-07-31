"use client"
import React, {useState} from "react";
import {CgMenuLeft} from "react-icons/cg";
import Image from "next/image";
import logo from "@/public/logo.svg";
import {MdOutlineDomainAdd} from "react-icons/md";
import Link from "next/link";
import { FaSearchengin } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { ImProfile } from "react-icons/im";
import {MyButtonMenuWithIcon} from "@/components/myComponents/MyButtonMenuWithIcon";
import {ThemeToggle} from "@/components/ThemeToggle";


export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {

    const [isOpen , setOpen] = useState(false);

    const handleSetOpen = ()=>{
        setOpen(!isOpen)
    }

    return <div className="h-full w-full flex">

        {/*region sidebar*/}
        <div className={`w-1/6 h-full bg-surface-bg/50 ${isOpen ? "hidden" : ""}`}>
            <div className="flex flex-col items-start">
                <Image src={logo} alt="logo" className="mt-3 mb-3"/>

                <div className="flex items-center justify-center space-x-5 p-3 hover:translate-x-4 transition-all duration-300">
                    <MdOutlineDomainAdd className="size-6 text-button-bg"/>
                    <Link href="/dashboard/add-job" className="">add job</Link>
                </div>

                <div className="flex items-center justify-center space-x-5 p-3 hover:translate-x-4 transition-all duration-300">
                    <FaSearchengin className="size-6 text-button-bg"/>
                    <Link href="/dashboard/all-jobs" className="">all job</Link>
                </div>

                <div className="flex items-center justify-center space-x-5 p-3 hover:translate-x-4 transition-all duration-300">
                    <ImStatsDots className="size-6 text-button-bg"/>
                    <Link href="/dashboard/stats" className="">stats</Link>
                </div>

                <div className="flex items-center justify-center space-x-5 p-3 hover:translate-x-4 transition-all duration-300">
                    <ImProfile className="size-6 text-button-bg"/>
                    <Link href="/dashboard/profile" className="">profile</Link>
                </div>

            </div>
        </div>
        {/*endregion*/}

        {/*region header and content*/}
        <div className="flex flex-col w-full h-full">

            <div className="flex justify-between w-full h-1/10 bg-surface-bg/50 p-4">
                <CgMenuLeft className="size-10 cursor-pointer" onClick={handleSetOpen}/>

                <p className="text-button-text text-2xl font-semibold">dashboard</p>

                <div className="flex items-center space-x-4">
                    <ThemeToggle/>
                <MyButtonMenuWithIcon/>
                </div>
            </div>

            <div className="h-full w-full p-4">
                {children}
            </div>
        </div>
        {/*endregion*/}


    </div>
}