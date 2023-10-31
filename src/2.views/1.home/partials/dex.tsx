import { FC } from "react";
import { PopularTokens } from "./popular_tokens";
import GraphImg from "@/src/0.resources/3.files/images/graph.webp";
import Image from "next/image";
import { FaAngleDown, FaArrowDown } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";

const Dex: FC = () => {

    return (
        <div className="mx-5 lg:mx-0">
            <div className="bg-dark900 w-full lg:w-[1000px] h-full rounded-2xl px-6 py-6">

                <div className="flex gap-x-4">
                    <div className="w-4/12 hidden md:block">
                        <p className="text-white text-md font-semibold">Order Book</p>
                        <div className="mt-4">
                            <div>
                                {Array.from({ length: 9 }).map((_, index) => (
                                    <div key={index} className={`bg-[#73343c] h-5 rounded-full mb-2`} style={{ width: randomWidth() }}>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <div key={index} className={`bg-[#224c45] h-5 rounded-full mb-2`} style={{ width: randomWidth() }}>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-8/12">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-4">
                                <div>
                                    <img src={PopularTokens[0].logoURI} className="w-10 h-10 rounded-lg" />
                                </div>
                                <div>
                                    <p className="text-white text-lg font-semibold">{PopularTokens[0].name}</p>
                                    <p className="text-dark500 text-md font-semibold -mt-1">{PopularTokens[0].symbol}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-white text-xl font-semibold -mt-1 text-end">$1234.56</p>
                                <div className="flex items-center justify-center gap-x-2">
                                    <BiSolidDownArrow className="text-green-500 text-sm font-semibold" />
                                    <p className="text-green-500 text-md font-semibold text-end">12.12%</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 bg-dark800 rounded-xl md:rounded-3xl px-1 py-1">
                            <Image src={GraphImg.src} alt="graph" width={960} height={391} />
                        </div>

                        <div className="w-full mt-4 block md:hidden">
                            <p className="text-white text-md font-semibold">Order Book</p>
                            <div className="mt-4">
                                <div>
                                    {Array.from({ length: 2 }).map((_, index) => (
                                        <div key={index} className={`bg-[#73343c] h-5 rounded-full mb-2`} style={{ width: randomWidth() }}>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {Array.from({ length: 2 }).map((_, index) => (
                                        <div key={index} className={`bg-[#224c45] h-5 rounded-full mb-2`} style={{ width: randomWidth() }}>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-white text-md font-semibold">Positions</p>

                            <div className="mt-2">
                                <Positions items={PopularTokens.slice(0, 3)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}

export default Dex;

const Positions: FC<{ items: typeof PopularTokens }> = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>

                    <div className="mb-4 bg-dark800 rounded-2xl px-4 py-2">
                        <div className="flex items-center gap-x-4">
                            <div>
                                <img src={item.logoURI} className="w-6 h-6 rounded-lg" />
                            </div>
                            <div>
                                <p className="text-white text-md font-semibold">{item.name}</p>
                                <p className="text-dark500 text-sm font-semibold -mt-1">{item.symbol}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const randomWidth = () => {
    //return random width from 20 to 90%
    return Math.floor(Math.random() * 70) + 20 + "%";
}