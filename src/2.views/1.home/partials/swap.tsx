import { FC } from "react";
import { PopularTokens } from "./popular_tokens";

const Swap: FC = () => {
    return (
        <div className="w-full mx-5 md:mx-0 flex items-center justify-center">

            <div className="bg-dark900 w-full md:w-[450px] h-[500px] rounded-2xl px-6 py-6">

                <div className="w-full">
                    <p className="text-dark500 text-md font-semibold">You sell</p>

                    <div className="mt-2 w-full">
                        <TokenDiv items={PopularTokens.slice(0, 2)} />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-dark500 text-md font-semibold">You buy</p>

                    <div className="mt-2">
                        <TokenDiv items={PopularTokens.slice(2, 5)} />
                    </div>
                </div>

                <div className="mt-8">
                    <div className="bg-blue-500 rounded-full px-4 py-3">
                        <p className="text-white text-md font-semibold text-center">Swap</p>
                    </div>

                </div>
            </div>


        </div>
    );

}

export default Swap;

const TokenDiv: FC = ({ items }) => {

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="w-full flex items-center justify-between bg-dark800 rounded-2xl px-6 py-1 mb-3">
                    <div className="flex items-center gap-x-4">
                        <img src={item.logoURI} className="w-8 h-8 rounded-lg" />
                        <div>
                            <p className="text-white text-md font-semibold">{item.name}</p>
                            <p className="text-dark500 text-sm font-semibold -mt-1">{item.symbol}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-white text-md font-semibold text-end">1.23 {item.symbol}</p>
                        <p className="text-dark500 text-sm font-semibold -mt-1 text-end">≈ $123.45</p>
                    </div>
                </div>
            ))}
        </div>
    )

}
