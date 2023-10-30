"use client";

import { FaArrowRight } from "react-icons/fa6";

export default function Error({ error }) {

    return (
        <div className="px-4 bg-light dark:bg-dark flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center">
                <h1 className="font-black text-black dark:text-white text-9xl">{"404"}</h1>

                <p className="text-2xl font-semibold text-black dark:text-white sm:text-4xl mt-6">This page is lost</p>

                <p className="text-lg font-medium text-light500 dark:text-dark500 mt-6 font-semibold">{"We can't find the page you were looking for"}</p>

                <a href="/" >
                    <button className="mt-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold">
                        Navigate back home
                    </button>
                </a>
            </div>
        </div>
    );
}