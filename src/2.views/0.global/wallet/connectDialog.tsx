import UserBlockie from "@/src/3.components/userBlockie";
import { FaCheck } from "react-icons/fa6";
import { ConnectWallet } from "./connectWallet";
import { zeroAddress } from "@/src/0.resources/2.js/0.functions/prepends";
import { FC } from "react";

const ConnectDialog: FC = () => {

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col justify-start items-start bg-gray-100 dark:bg-dark800 w-[550px] mx-5 md:mx-0 py-20 px-10 md:px-20 rounded-2xl" style={{}}>
                <UserBlockie address={zeroAddress} className="w-28 h-28 rounded-lg" />
                <div className="pt-10">
                    <p className="text-2xl font-bold text-black dark:text-white">Hey there! Connect your wallet to get started</p>
                    <p className="text-md mt-3 text-light500 dark:text-dark500">By connecting your wallet, you can:</p>
                    <div className="mt-4">
                        <div className="flex items-center gap-x-2 rounded-full px-0 py-1 bg-gray-100 dark:bg-dark800 w-fit mt-2 cursor-pointer">
                            <div className="bg-light300 dark:bg-dark700 w-5 h-5 flex justify-center items-center rounded-full">
                                <FaCheck className="text-light500 dark:text-dark500 text-xs" />
                            </div>
                            <p className="text-md text-light500 dark:text-dark500">Register new .web3 names</p>
                        </div>
                        <div className="flex items-center gap-x-2 rounded-full px-0 py-1 bg-gray-100 dark:bg-dark800 w-fit mt-2 cursor-pointer">
                            <div className="bg-light300 dark:bg-dark700 w-5 h-5 flex justify-center items-center rounded-full">
                                <FaCheck className="text-light500 dark:text-dark500 text-xs" />
                            </div>
                            <p className="text-md text-light500 dark:text-dark500">View and manage names in your collection</p>
                        </div>
                        <div className="flex items-center gap-x-2 rounded-full px-0 py-1 bg-gray-100 dark:bg-dark800 w-fit mt-2 cursor-pointer">
                            <div className="bg-light300 dark:bg-dark700 w-5 h-5 flex justify-center items-center rounded-full">
                                <FaCheck className="text-light500 dark:text-dark500 text-xs" />
                            </div>
                            <p className="text-md text-light500 dark:text-dark500">Edit your profile (primary name)</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <ConnectWallet />
                </div>
            </div>
        </div>
    );
}


export default ConnectDialog;