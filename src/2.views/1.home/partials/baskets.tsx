"use client";
import { FC } from "react";
import { PopularTokens } from "./popular_tokens";

type TokenProps = typeof PopularTokens[0];

interface BasketProps {
    tokens: TokenProps[];
}

const Baskets: FC = () => {
    let max = window.innerWidth > 1024 ? 12 : window.innerWidth > 768 ? 9 : 4;
    let items: BasketProps[] = []

    for (let i = 0; i < max; i++) {
        items.push({
            tokens: getRandomItemsFromArray(PopularTokens, 6)
        })
    }

    return (
        <div className="mx-5 md:mx-0">

            <div className="bg-dark900 w-full h-full rounded-2xl px-5 md:px-10 py-6">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 md:gap-x-10 gap-y-2 md:gap-y-4">
                    {items.map((item, index) => (
                        <div key={index}>
                            <Basket item={item} />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );

}

export default Baskets;

const Basket: FC<{ item: BasketProps }> = ({ item }) => {

    let colors = [
        "bg-blue", "bg-red", "bg-green", "bg-yellow", "bg-pink", "bg-purple"
    ]

    let tags = [
        "DeFi", "NFT", "DAO", "Gaming", "Metaverse", "Social", "Infrastructure", "Privacy", "Cross-chain", "Oracles", "L2", "DEX", "Stablecoins", "Lending", "Insurance", "Yield Aggregators", "Analytics", "Wallets", "Payments", "Marketplaces", "Gaming", "DAO", "NFT", "Infrastructure", "Social", "Metaverse", "Privacy", "Cross-chain", "Oracles", "L2", "DEX", "Stablecoins", "Lending", "Insurance", "Yield Aggregators", "Analytics", "Wallets", "Payments", "Marketplaces", "Gaming", "DAO", "NFT", "Infrastructure", "Social", "Metaverse", "Privacy", "Cross-chain", "Oracles", "L2", "DEX", "Stablecoins", "Lending", "Insurance", "Yield Aggregators", "Analytics", "Wallets", "Payments", "Marketplaces"
    ]

    return (
        <div className="mt-4 bg-dark800 px-2 py-1 rounded-2xl">
            <div className={`grid grid-cols-3 gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 px-2 md:px-4 py-2 md:py-4 rounded-2xl ${getRandomItem(colors)}-950`}>
                {item.tokens.map((token, index) => (
                    <div key={index}>
                        <img src={token.logoURI} className="w-8 h-8 rounded-lg" />
                    </div>
                ))}
            </div>
            <div className="mt-2 pl-2">
                <p className="text-white text-sm font-semibold">Top 10</p>
                <p className="text-white text-lg font-semibold">{getRandomItem(tags)}</p>
            </div>
        </div>
    )
}

function getRandomItem(array: any[]) {
    const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
    return shuffledArray[0];
}

function getRandomItemsFromArray(array: any[], numberOfItems: number) {
    if (numberOfItems >= array.length) {
        return array;
    } else {
        const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
        return shuffledArray.slice(0, numberOfItems);
    }
}
