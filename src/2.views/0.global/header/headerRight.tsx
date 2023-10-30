"use client";
import { ConnectWallet } from "../wallet/connectWallet";
import { useDarkMode } from "@/src/3.components/darkMode";
import { MdLightMode } from "react-icons/md";
import Link from "next/link";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FC } from "react";

interface HeaderRightProps {
    setMobileSidebar: (value: boolean) => void;
}

const HeaderRight: FC<HeaderRightProps> = ({ setMobileSidebar }) => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className="flex gap-x-4 items-center">
            {/* <Link href="/cart" onClick={() => setMobileSidebar(false)} className="cursor-pointer w-12 h-12 flex justify-center items-center bg-light200 dark:bg-dark800 border-0 border-light100 dark:border-dark900 hover:bg-light300 dark:hover:bg-dark700 rounded-full">
                <FaShoppingBag className="text-light500 dark:text-dark500 text-xl" />
            </Link> */}
            <div className="cursor-pointer w-12 h-12 hidden md:flex justify-center items-center bg-light200 dark:bg-dark800 border-0 border-light100 dark:border-dark900 hover:bg-light300 dark:hover:bg-dark700 rounded-full" onClick={() => toggleDarkMode()}>
                <MdLightMode className="text-light500 dark:text-dark500 text-xl" />
            </div>

            <div className="hidden md:block flex items-center mt-1">
                <ConnectWallet />
            </div>
        </div>
    );

}


export default HeaderRight;
