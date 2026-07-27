import React from "react";
import {Outlet} from "react-router-dom";
import {ModeToggle} from "@/components/mode-toggle";
// @ts-ignore
import logo from "@/assets/images/logo.svg"

function HomeLayout() {
    return (
        <div className="h-full w-full flex flex-col ">
            <div className="flex items-center justify-between bg-surface-bg p-4 shrink-0">
                <img src={logo} alt="logo"/>
                <ModeToggle/>
            </div>

            <div className="flex-1 min-h-0">
                <Outlet/>
            </div>
        </div>
    )
}

export default HomeLayout
