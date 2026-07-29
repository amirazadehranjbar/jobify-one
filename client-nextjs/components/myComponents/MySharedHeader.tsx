import React from 'react'
import logo from "@/public/logo.svg"
import {ThemeToggle} from "@/components/ThemeToggle";
import Image from "next/image";

function MySharedHeader() {
    return (
        <div className="flex items-center justify-between bg-surface-bg p-4 shrink-0">
            <Image src={logo} alt="logo" loading="eager"/>
            <ThemeToggle/>
        </div>
    )
}

export default MySharedHeader
