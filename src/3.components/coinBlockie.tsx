import { FC } from "react";
import { BiCoin } from "react-icons/bi";

interface CoinBlockieProps {
    address: string;
    className?: string;
}

const CoinBlockie: FC<CoinBlockieProps> = ({ address, className }) => {
    let colors = [
        "bg-blue-500",
        "bg-red-500",
        "bg-yellow-500",
        "bg-green-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-indigo-500",
        "bg-amber-500",
        "bg-teal-500",
        "bg-lime-500",
        "bg-emerald-500",
        "bg-sky-500",
        "bg-rose-500"
    ]

    const random_item = (address: string, items: string[]): string => {
        //return an item from items array that is always the same for the address
        var index = parseInt(address.slice(2, 5), 16) % items.length;

        return items[index];
    }

    return (
        <div className={`flex justify-center items-center ${random_item(address, colors)} ${className}`}>
            <BiCoin className="text-white text-2xl" />
        </div>
    )
}

export default CoinBlockie;
