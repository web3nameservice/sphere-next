"use client";
import React, { FC, useCallback, useEffect, useState } from "react";
import { FaSearch, FaCircleNotch } from "react-icons/fa";
import { FaAngleRight, FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface HeaderSearchProps {
    setSearchModal: (value: boolean) => void;
}

const HeaderSearch: FC<HeaderSearchProps> = ({ setSearchModal }) => {
    const router = useRouter();
    return (
        <div id="" className="w-full relative flex justify-end">
            <div className="border border-light200 dark:border-dark800 bg-light200 dark:bg-dark800 hover:bg-light300 dark:hover:bg-dark700 rounded-full flex justify-between items-center w-full px-6 z-20 cursor-pointer" id="headerSearch" onClick={() => setSearchModal(true)}>
                <div className="flex items-center gap-x-4">
                    <FaSearch className="text-light500 dark:text-dark500 text-md" />
                    <p className="text-light500 dark:text-dark500 text-md font-semibold py-3">Search tokens</p>
                </div>
                <div className="w-8 h-8 rounded-lg hover:bg-light200 dark:hover:bg-dark800 flex items-center justify-center cursor-pointer">
                    <FaAngleRight className="text-light500 dark:text-dark500 text-md" />
                </div>
            </div>
        </div >
    );

}

export default HeaderSearch;
