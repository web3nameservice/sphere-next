import { FC } from "react";
import Logo from "@/src/0.resources/3.files/logo/logo_color6.png";
import BgImg from "@/src/0.resources/3.files/images/bg.gif";
import Image from "next/image";
import Swap from "./partials/swap";
import Baskets from "./partials/baskets";
import Dex from "./partials/dex";
import Indices from "./partials/indices";
import BgImgDark from "@/src/0.resources/3.files/images/bg-trans2.webp";

interface HomeProps {
    name: string;
    item: JSX.Element;
    color: string;
    desc: string;
}

const Home: FC = () => {

    let items: HomeProps[] = [
        {
            name: "Multi Swap",
            item: <Swap />,
            color: "bg-blue-900",
            desc: "Swap multiple cryptocurrencies in one transaction"
        },
        {
            name: "Baskets",
            item: <Baskets />,
            color: "bg-rose-900",
            desc: "Tradeable ready-made baskets of cryptocurrencies"
        },
        {
            name: "Dex",
            item: <Dex />,
            color: "bg-purple-900",
            desc: "Advanced limit and market orderbook for all ERC-20 tokens on multiple chains"
        },
        {
            name: "Indices",
            item: <Indices />,
            color: "bg-green-900",
            desc: "Tradeable decentralised indices which track the price of a market"
        }
    ]

    return (
        <div className="w-screen min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${BgImgDark.src})`, backgroundPosition: "center", backgroundRepeat: "repeat" }}>
            <div className="w-full h-full 2xl:w-[1600px] px-0 md:px-10 lg:px-20 2xl:px-10">

                {items.map((item: HomeProps, index: number) => (
                    <div className={`${item.color} rounded-0 md:rounded-3xl sticky top-0 mb-0 md:mb-4`} style={{ backgroundImage: `url(${BgImgDark.src})`, backgroundPosition: "center", backgroundRepeat: "repeat" }}>
                        <div className={`py-8`}>
                            <div className="text-white">
                                {/* <p className="text-2xl font-semibold text-center">Sphere is</p> */}
                                <p className="text-8xl font-bold text-center">{item.name}</p>
                                <p className="text-2xl font-semibold text-center px-5">{item.desc}</p>
                            </div>

                            <div className="pt-8 flex items-center justify-center">
                                {item.item}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );

}

export default Home;
