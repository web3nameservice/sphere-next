"use client";
import Link from "next/link";
import { FC, useRef } from "react";
import { FaCoins, FaLayerGroup, FaStore, FaUser } from "react-icons/fa6";
import { useAccount } from "wagmi";
import { BiCoinStack, BiSolidBook } from "react-icons/bi";
import { FaHome, FaShoppingBasket, FaUserCircle } from "react-icons/fa";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { TbCoins } from "react-icons/tb";
import { usePathname } from "next/navigation";
const HeaderLinks: FC = () => {
    const { address } = useAccount();
    const pathname = usePathname()

    let links = {
        "Categories": [
            { "name": "Premium Domains", "link": "/category/premium", "icon": "fa-star" },
            { "name": "Dictionary", "link": "/category/dictionary", "icon": "fa-book" },
            { "name": "Numbers", "link": "/category/numbers", "icon": "fa-stopwatch-20" },
            { "name": "Names", "link": "/category/names", "icon": "fa-users" },
            { "name": "Countries", "link": "/category/countries", "icon": "fa-globe" },
            { "name": "Cities", "link": "/category/cities", "icon": "fa-city" }
        ],
        "Marketplace": [
            { "name": "Domains", "link": "/marketplace/domains", "icon": "" },
            { "name": "Membership", "link": "/marketplace/membership", "icon": "" }
        ],
        "Account": [
            { "name": "Profile", "link": address ? `/profile/${address}` : "/profile", "icon": "" },
            { "name": "Manage", "link": address ? `/profile/${address}/manage` : "/profile/manage", "icon": "" },
        ]
    }

    let css = {
        tabs: `cursor-pointer font-semibold text-md text-light500 dark:text-dark500 flex items-center gap-x-2 hover:bg-light200 dark:hover:bg-dark800 px-6 py-3 rounded-full`
    }

    return (
        <div className="flex gap-x-2 justify-center items-center w-full">
            {/* <MenuItem name="Categories" items={links.Categories} width="200%" left="-50%" />
            <MenuItem name="Marketplace" items={links.Marketplace} width="150%" left="-25%" />
            <MenuItem name="Account" items={links.Account} width="170%" left="-35%" /> */}
            <Link href="/" className={[css.tabs, `${pathname == "/" ? "bg-light200 dark:bg-dark800" : ""}`].join(" ")}>
                <FaHome className="text-lg" />
                Home
            </Link>
            <Link href="/swap" className={[css.tabs, `${pathname == "/swap" ? "bg-light200 dark:bg-dark800" : ""}`].join(" ")}>
                <MdSwapHorizontalCircle className="text-xl" />
                Swap
            </Link>
            <Link href="/tokens" className={[css.tabs, `${pathname.includes("token") ? "bg-light200 dark:bg-dark800" : ""}`].join(" ")}>
                <FaCoins className="text-md" />
                Tokens
            </Link>
            <Link href="/baskets" className={[css.tabs, `${pathname == "/baskets" ? "bg-light200 dark:bg-dark800" : ""}`].join(" ")}>
                <FaShoppingBasket className="text-lg" />
                Baskets
            </Link>
        </div>

    );

}


export default HeaderLinks;

interface MenuItemProps {
    name: string;
    items: {
        name: string;
        link: string;
        icon?: string;
    }[];
    width?: string;
    left?: string;
}

export const MenuItem: FC<MenuItemProps> = ({ name, items, width, left }) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseOver = () => {
        if (divRef.current) {
            divRef.current.style.display = "block";
        }
    }

    const onMouseOut = () => {
        if (divRef.current) {
            divRef.current.style.display = "none";
        }
    }

    return (
        <div className="dropdown" onMouseOver={handleMouseOver} onMouseOut={onMouseOut}>
            <Link href={items[0].link} className={`cursor-pointer font-semibold text-md text-light500 dark:text-dark500 flex items-center gap-x-2 hover:bg-light200 dark:hover:bg-dark800 px-5 py-2 rounded-full`}>
                {name == "Categories" ? (
                    <FaLayerGroup className="text-lg" />
                ) : name == "Marketplace" ? (
                    <FaStore className="text-lg" />
                ) : name == "Account" ? (
                    <FaUserCircle className="text-xl" />
                ) : (
                    null
                )}
                <p>{name}</p>
            </Link>

            <div className="pt-3 z-40 absolute" style={{ width: width, left: left, display: "none" }} ref={divRef}>
                <div className="bg-light100 dark:bg-dark900 border border-light200 dark:border-dark800  rounded-xl">
                    <p className="text-light500 dark:text-dark500 px-6 py-3 text-sm font-semibold border-b border-light200 dark:border-dark800">Explore {name}</p>
                    <div className="">
                        {items.map((item, index) => (
                            <Link key={index} href={item.link} className="border-b-2 border-b-dark800">
                                <div className="px-4 py-3 flex items-center hover:bg-light200 dark:hover:bg-dark800 my-2 mx-2 rounded-lg cursor-pointer">
                                    <div style={{ width: "85%" }}>
                                        <p className="font-semibold text-md text-black dark:text-white">{item.name}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}