import type {Metadata} from "next";
import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip"
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";

export const metadata: Metadata = {
    title: "Jobify",
    description: "find your job",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="h-full antialiased"
            suppressHydrationWarning
        >
        <body className="min-h-full flex flex-col">
        <TooltipProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider></TooltipProvider>
        </body>
        </html>
    );
}
