import React from "react"
// @ts-ignore
import main from "@/assets/images/main.svg"

function Landing() {

    return (
        <div className="flex flex-col overflow-x-hidden bg-page-bg">
            <h1 className="text-3xl text-center mt-5">Job <span
                className="text-cool-steel-500 font-bold">Tracking</span> App</h1>

            <p className="mt-5 p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>

            <div className="flex items-center justify-around p-4">
                <button className="myBtn w-1/4">register</button>
                <button className="myBtn w-1/4">login</button>
            </div>

            <div className="flex items-center justify-center">
                <img src={main} alt="main" className="mt-5 p-4 h-120 w-fit"/>
            </div>
        </div>
    )
}

export default Landing
