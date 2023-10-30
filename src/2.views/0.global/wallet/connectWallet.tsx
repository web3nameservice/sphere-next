"use client";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, useEffect, useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import makeBlockie from 'ethereum-blockies-base64';
import { shortenaddress } from '@/src/0.resources/2.js/0.functions/global';
import { zeroAddress } from '@/src/0.resources/2.js/0.functions/prepends';
import { FaArrowRightFromBracket, FaUser, FaXmark } from 'react-icons/fa6';
import UserBlockie from '@/src/3.components/userBlockie';
import Link from 'next/link';
import { getWnsDomain } from '@/src/5.actions/domains';

export const ConnectWallet: FC<{}> = () => {
    const [accountModalOpen, setAccountModalOpen] = useState<boolean>(false);
    const { address } = useAccount()
    const [domain, setDomain] = useState<string>("");

    async function init() {
        localStorage.setItem("walletConnected", true.toString());
        let result: string = await getWnsDomain(address ? address : zeroAddress);
        if (result != "null") {
            setDomain(result);
        }

    }

    useEffect(() => {
        if (address != null && address != undefined) {
            init();
        }
    }, [address])

    return (
        <div>
            <ConnectButton.Custom >
                {({
                    account,
                    chain,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                }) => {
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus ||
                            authenticationStatus === 'authenticated');

                    return (
                        <div
                            {...(!ready && {
                                'aria-hidden': true,
                                'style': {
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                },
                            })}
                        >
                            {(() => {
                                if (!connected) {
                                    return (
                                        <button onClick={openConnectModal} type="button" className='bg-blue-500 text-white rounded-full p-3 px-4 font-bold text-sm whitespace-nowrap'>
                                            Connect Wallet
                                        </button>
                                    );
                                } else {
                                    return (
                                        <button onClick={() => setAccountModalOpen(true)} type="button" className='w-12 h-12 bg-light100 rounded-full'>
                                            <UserBlockie address={address ? address : zeroAddress} className="w-12 h-12 rounded-xl" />
                                        </button>
                                    );
                                }
                            })()}
                        </div>
                    );
                }}

            </ConnectButton.Custom>
            <AccountModal accountModalOpen={accountModalOpen} setAccountModalOpen={setAccountModalOpen} domain={domain} />
        </div>
    );
};

interface AccountModalProps {
    accountModalOpen: boolean;
    setAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    domain: string;
}

export const AccountModal: FC<AccountModalProps> = ({ accountModalOpen, setAccountModalOpen, domain }) => {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()


    function closeModal() {
        setAccountModalOpen(false)
    }

    async function disconnectWallet() {
        localStorage.clear();
        sessionStorage.clear();
        disconnect();
        setAccountModalOpen(false);
        window.location.href = "/";
    }

    return (
        <>
            <Transition appear show={accountModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-light100 dark:bg-dark900 border border-light200 dark:border-dark800 p-6 text-left align-middle shadow-xl transition-all z-50">
                                    <div className='flex justify-end'>
                                        <div className='w-8 h-8 bg-light200 dark:bg-dark800 hover:bg-light300 dark:hover:bg-dark700 rounded-full flex justify-center items-center cursor-pointer' onClick={() => setAccountModalOpen(false)}>
                                            <FaXmark className="text-dark500 " />
                                        </div>
                                    </div>
                                    <div className='px-4'>
                                        <div className='flex flex-col items-start mt-0'>
                                            {/* <img src={UserImg} className='w-[80px] h-[80px] rounded-full' /> */}

                                            {/* <img src={makeBlockie(address ? address : zeroAddress)} className="w-28 h-28 rounded-2xl" /> */}
                                            <UserBlockie address={address ? address : zeroAddress} className="w-28 h-28 rounded-2xl" />
                                            <p className='pt-6 font-bold text-4xl text-black dark:text-white'>{address != null ? domain == "" ? shortenaddress(address) : domain : ""}</p>
                                            {/* <p className='pt-2 text-md text-light500 dark:text-dark500'>{"Balance: " + parseFloat(data?.formatted).toFixed(3)} {data?.symbol}</p> */}

                                            <div className='mt-8'>
                                                <div>
                                                    <p className='font-semibold text-lg text-black dark:text-white'>Address</p>
                                                </div>
                                                <div>
                                                    <p className='text-md text-light500 dark:text-dark500 break-all font-semibold'>{address}</p>
                                                </div>
                                            </div>

                                            <div className='mt-8'>
                                                <div>
                                                    <p className='font-semibold text-lg text-black dark:text-white'>Username</p>
                                                </div>
                                                <div>
                                                    <p className='text-md text-light500 dark:text-dark500 font-semibold'>{domain != "" ? domain : "Not registered"}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='w-full pt-10' >
                                            <Link className='w-full flex justify-center items-center bg-blue-500 hover:bg-blue-600 m-1 py-4 rounded-full cursor-pointer gap-x-3' href={'/profile/' + address} onClick={() => setAccountModalOpen(false)}>
                                                <FaUser style={{ color: '#fff', fontSize: "100%" }} />
                                                <p className='text-md text-white font-semibold'>Profile</p>
                                            </Link>
                                            <div className='w-full flex justify-center items-center m-1 mt-4 py-2 rounded-full cursor-pointer gap-x-2 text-blue-500 hover:text-blue-600' onClick={() => disconnectWallet()}>
                                                <FaArrowRightFromBracket className="" />
                                                <p className='text-md font-semibold'>Disconnect</p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export const BlockiesGif: FC<{}> = () => {
    const [address, setAddress] = useState<string>(zeroAddress);

    useEffect(() => {
        let interval = setInterval(() => {
            let add = "0x";
            for (let i = 0; i < 40; i++) {
                add += Math.floor(Math.random() * 16).toString(16);
            }
            setAddress(add);
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="w-24 h-24 flex justify-center items-center">
            <img src={makeBlockie(address ? address : zeroAddress)} className="w-24 h-24 rounded-2xl" />
        </div>
    )
}
