import React from "react";
import {Link, useRouteError} from "react-router-dom";
import img from "@/assets/images/not-found.svg"

function Error() {

    const error = useRouteError();

    if(error.status===404){
        return(
        <div className="w-screen h-screen bg-background flex flex-col items-center p-3 justify-between content-between">
            <div className="flex flex-col items-center">
                <h1 className="text-foreground text-3xl">Not Found</h1>
                <img src={img} alt="not found" className="mt-12 size-3/4"/>
            </div>
            <Link to="/dashboard" className="myBtn">
                back to dashboard
            </Link>
        </div>)
    }

    return (
        <div>
            <h1>error</h1>
            <Link to="/">back home</Link>
        </div>
    )
}

export default Error
