"use client";
import React from "react";

interface RootLayoutProps {
    children: React.ReactNode;
}

const LayoutClient: React.FC<RootLayoutProps> = ({ children }) => {

    return (
        <div className={`w-full flex flex-none justify-center md:sticky top-0 z-40`}>
            <div className="w-full flex items-center justify-center">
                {children}
            </div>
            {/* <div className={darkMode ? "overlay" : "overlay-light"} /> */}
        </div>
    )
}

export default LayoutClient;