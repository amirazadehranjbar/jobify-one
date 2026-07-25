import React from "react";
import {Outlet} from "react-router-dom";
import {ModeToggle} from "@/components/mode-toggle";
// @ts-ignore
import logo from "@/assets/images/logo.svg"

function HomeLayout() {
    return (
        <div className="h-screen w-screen">
            <div className="flex items-center justify-between bg-surface-bg p-4">
                <img src={logo} alt="logo"/>
                <ModeToggle/>
            </div>

            <Outlet/>
        </div>
    )
}

export default HomeLayout
