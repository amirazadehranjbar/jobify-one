import React from "react";
import MySharedHeader from "@/components/myComponents/MySharedHeader";

export default function SharedLayout({
                                         children,
                                     }: {
    children: React.ReactNode
}) {
    return <div>
        <MySharedHeader/>
        {children}
    </div>
}