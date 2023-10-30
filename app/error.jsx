"use client";

import { FaArrowRight } from "react-icons/fa6";

export default function Error({ error }) {

    console.log("Error", error);
    return (
        <div className="px-4 bg-light dark:bg-dark flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center">
                <h1 className="font-black text-black dark:text-white text-9xl">{error.message == "404" ? "404" : "500"}</h1>

                <p className="text-2xl font-semibold text-black dark:text-white sm:text-4xl mt-6">
                    {error.message == "404" ? "This page is lost" : "Something went wrong"}
                </p>

                <p className="text-lg font-medium text-light500 dark:text-dark500 mt-6 font-semibold">{error.message == "404" ? "We can't find the page you were looking for" : "We're working on getting this fixed as soon as we can."}</p>

                <a href="/" >
                    <button className="mt-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold">
                        Navigate back home
                    </button>
                </a>
                {error.message != "404" ? (
                    <a href="https://twitter.com/wnsdomains" target="_blank" className="text-blue-500 hover:text-blue-400 pt-6 flex items-center justofy-center gap-x-2 font-semibold">Tell us about this error
                        <FaArrowRight className="inline-block" />
                    </a>
                ) : (null)}
            </div>
        </div>
    );
}