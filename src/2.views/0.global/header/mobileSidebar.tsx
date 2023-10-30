"use client";
import React, { useEffect, useState, useContext, FC } from "react";
import { useAccount, useDisconnect } from 'wagmi'
import { ConnectWallet } from "../wallet/connectWallet";
import { FaAngleRight, FaToggleOff, FaToggleOn } from "react-icons/fa6";
import Link from "next/link";
import { useDarkMode } from "@/src/3.components/darkMode";

interface MobileSidebarProps {
    setMobileSidebar: (value: boolean) => void;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ setMobileSidebar }) => {
    let { address } = useAccount();
    const { disconnect } = useDisconnect();
    const { darkMode, toggleDarkMode } = useDarkMode();

    let linksCategories = [
        {
            name: "Premium Domains",
            link: "/category/premium",
            icon: "fa-star"
        },
        {
            name: "Dictionary",
            link: "/category/dictionary",
            icon: "fa-book"
        },
        {
            name: "Numbers",
            link: "/category/numbers",
            icon: "fa-stopwatch-20"
        },
        {
            name: "Names",
            link: "/category/names",
            icon: "fa-users"
        },
        {
            name: "Countries",
            link: "/category/countries",
            icon: "fa-globe"
        },
        {
            name: "Cities",
            link: "/category/cities",
            icon: "fa-city"
        }
    ]

    let linksMarketplace = [
        {
            name: "Domains",
            link: "/marketplace/domains",
            icon: ""
        },
        {
            name: "Membership",
            link: "/marketplace/membership",
            icon: ""
        }
    ]

    let linksAccount = [
        {
            name: "Profile",
            link: address ? `/profile/${address}` : "/profile",
            icon: ""
        },
        {
            name: "Manage",
            link: address ? `/profile/${address}/manage` : "/profile/manage",
            icon: ""
        }
    ]

    return (
        <div style={{ minHeight: window.innerHeight }} className="font-semibold z-50 p-0 pt-6">

            {!address ? (
                <div onClick={() => { setMobileSidebar(false) }} className="mb-6">
                    <ConnectWallet />
                </div>
            ) : (null)}

            <div className="bg-light100 dark:bg-dark flex flex-col gap-6">
                <div className="">
                    <Mapping links={linksCategories} heading={"Categories"} setMobileSidebar={setMobileSidebar} />
                </div>
                <div className="">
                    <Mapping links={linksMarketplace} heading={"Marketplace"} setMobileSidebar={setMobileSidebar} />
                </div>
                <div className="">
                    <Mapping links={linksAccount} heading={"Account"} setMobileSidebar={setMobileSidebar} />
                </div>
                <div>
                    <Link href="/">
                        <p className="text-lg font-semibold text-black dark:text-white">Docs</p>
                    </Link>
                </div>

                <div className="flex items-center justify-between" onClick={() => toggleDarkMode()}>
                    <p className="text-lg font-semibold text-black dark:text-white">Dark Mode</p>
                    {darkMode ? (
                        <FaToggleOn className="text-blue-500 text-4xl" />
                    ) : (
                        <FaToggleOff className="text-dark500 text-4xl" />
                    )}
                </div>
                {address ? (
                    <div>
                        <button onClick={() => disconnect()} className="text-md font-semibold bg-blue-500 text-white px-4 py-2 rounded-full">Logout</button>
                    </div>
                ) : (null)}

            </div>
        </div >
    )

}

export default MobileSidebar;

interface MappingProps {
    links: {
        name: string;
        link: string;
        icon: string;
    }[];
    heading: string;
    setMobileSidebar: (value: boolean) => void;
}

const Mapping: FC<MappingProps> = ({ links, heading, setMobileSidebar }) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <div onClick={() => setVisible(!visible)}>
                <p className="text-lg font-semibold text-black dark:text-white">{heading}</p>
            </div>
            <div className="pt-2">
                {visible && (
                    links.map((link, index) => (
                        <Link href={link.link} key={index} className="pl-0 flex items-center justify-between py-3" onClick={() => setMobileSidebar(false)}>
                            <p className="text-md font-semibold text-light500 dark:text-dark500">{link.name}</p>
                            <FaAngleRight className="text-md text-light500 dark:text-dark500" />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}