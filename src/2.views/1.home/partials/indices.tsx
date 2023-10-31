"use client";
import { FC } from "react";
import { PopularTokens } from "./popular_tokens";
import GraphImg from "@/src/0.resources/3.files/images/graph.webp";
import Image from "next/image";
import { BiSolidDownArrow, BiSolidDownArrowCircle } from "react-icons/bi";
import { PiCoinsBold } from "react-icons/pi";

interface IndicesProps {
    name: string;
    description: string;
}

const Indices: FC = () => {
    let max = window.innerWidth > 768 ? 4 : 2;
    let items: IndicesProps[] = [
        {
            name: "Crypto 100",
            description: "The top 100 crypto by market cap"
        },
        {
            name: "NFT 10",
            description: "The top 10 NFT projects"
        },
        {
            name: "DeFi 10",
            description: "The top 10 DeFi projects"
        },
        {
            name: "Blue Chips",
            description: "The top 10 blue chips by market cap"
        }
    ]

    return (
        <div className="w-full px-5 lg:px-0 flex items-center justify-center">

            <div className="bg-dark900 w-full md:w-[1000px] h-full rounded-2xl px-6 py-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                    {items.slice(0, max).map((item, index) => (
                        <div key={index}>
                            <Indice item={item} />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );

}

export default Indices;

const Indice: FC<{ item: IndicesProps }> = ({ item }) => {
    return (
        <div className="bg-dark800 rounded-2xl px-6 py-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <div className="bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center">
                        <PiCoinsBold className="text-blue-500 text-lg font-semibold" />
                    </div>
                    <div>
                        <p className="text-white text-md font-semibold">{item.name}</p>
                        <p className="text-dark500 text-sm font-semibold -mt-1">{item.description}</p>
                    </div>
                </div>
                <div>
                    <p className="text-white text-md font-semibold text-end">$1234.56</p>
                    <div className="flex items-center justify-center gap-x-2 -mt-1">
                        <BiSolidDownArrow className="text-green-500 text-xs font-semibold" />
                        <p className="text-green-500 text-sm font-semibold text-end">12.12%</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Image src={GraphImg.src} alt="graph" width={960} height={391} />
            </div>
        </div>
    )
}