import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg"
import {ArrowLeft} from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <div className="h-full flex flex-col items-center justify-between">

        <div className=" flex items-center justify-between w-full h-20 bg-surface-bg/50 shadow-2xl p-4">

            <Link href="/public">
                <ArrowLeft className="text-text-two cursor-pointer"/>
            </Link>

        </div>

        <div className="h-full w-full">
            {children}
        </div>
    </div>
}