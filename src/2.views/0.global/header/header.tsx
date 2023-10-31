"use client";
import Logo from "@/src/0.resources/3.files/logo/logo_color6.png";
import LogoBlack from "@/src/0.resources/3.files/logo/logo_color5.png";
import Image from "next/image";
import Link from "next/link";
import HeaderSearch from "./headerSearch";
import HeaderLinks from "./headerLinks";
import HeaderRight from "./headerRight";
import { FaSearch } from "react-icons/fa";
import MobileSidebar from "./mobileSidebar";
import { FC, useState } from "react";
import { FaBars, FaCircle, FaClock } from "react-icons/fa6";
import { useDarkMode } from "@/src/3.components/darkMode";
// import SearchModal from "../search/search";

const Header: FC = () => {
    const { darkMode } = useDarkMode();
    const [mobileSidebar, setMobileSidebar] = useState<boolean>(false);
    const [searchModal, setSearchModal] = useState<boolean>(false);

    const isBrowser = typeof window !== 'undefined';
    const windowWidth = isBrowser ? window.innerWidth : 1000;

    return (
        <div className="w-full block">
            <div className="py-4 px-4 flex items-center justify-between gap-x-4 w-full">
                <div className="flex flex-none" onClick={() => { setMobileSidebar(false); }}>
                    <Link href="/" className="cursor-pointer rounded-xl flex items-center gap-x-1">
                        <Image src={darkMode ? Logo : LogoBlack} className="rounded-full" width={32} height={32} alt="logo" priority={true} />
                        <p className="font-semibold text-2xl text-black dark:text-white">Sphere</p>
                    </Link>
                </div>
                {/* <div className="hidden lg:block px-4">
                    <HeaderLinks />
                </div>
                <div className="flex items-center gap-x-4 w-full pl-2">
                    <div className="hidden md:block w-full">
                        <HeaderSearch setSearchModal={setSearchModal} />
                    </div>
                    <div className="flex md:hidden w-full justify-end">
                        <div className="flex items-center justify-center cursor-pointer w-12 h-12 bg-light200 dark:bg-dark800 border-0 border-light100 dark:border-dark900 hover:bg-light300 dark:hover:bg-dark700 rounded-full" onClick={() => { setSearchModal(true); setMobileSidebar(false); }}>
                            <FaSearch className="text-light500 dark:text-dark500 text-xl" />
                        </div>
                    </div>
                </div>

                <HeaderRight setMobileSidebar={setMobileSidebar} />
                <div className="block md:hidden">
                    <FaBars className="text-light500 dark:text-dark500 text-xl cursor-pointer" onClick={() => { setMobileSidebar(!mobileSidebar) }} />
                </div> */}

                <div className="flex items-center gap-x-2 bg-dark900/50 rounded-full px-4 py-2">
                    <FaClock className="text-light500 dark:text-dark500 text-sm" />
                    <p className="text-dark500 text-md font-semibold">Launching soon</p>
                </div>
            </div>
            {/* <div className="w-full items-center justify-start md:justify-center flex hidden md:flex lg:hidden overflow-x-scroll pb-2 noscrollbars">
                <div className="">
                    <HeaderLinks />
                </div>
            </div>

            <div style={{ width: "100%" }} className={windowWidth < 1000 ? (mobileSidebar ? "slider slide-in block lg:hidden static top-[58px] " : "slider slide-out block lg:hidden static top-[58px]") : ""}>
                {mobileSidebar ? (
                    <MobileSidebar setMobileSidebar={setMobileSidebar} />
                ) : (<div />)}
            </div> */}
            {/* <SearchModal modalOpen={searchModal} setModalOpen={setSearchModal} /> */}

        </div>
    )

}

export default Header;