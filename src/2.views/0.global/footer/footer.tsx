"use client";
import Link from 'next/link';
import React, { FC } from 'react';
import LogoLight500 from "@/src/0.resources/3.files/logo/logo_light500.webp";
import LogoDark500 from "@/src/0.resources/3.files/logo/logo_dark500.webp";
import Image from 'next/image';
import { useDarkMode } from '@/src/3.components/darkMode';
import { usePathname } from 'next/navigation';
import { FaDiscord, FaEnvelope, FaTelegram, FaTwitter } from 'react-icons/fa6';

const Footer: FC = () => {
    const { darkMode } = useDarkMode();
    const pathname = usePathname();

    return (
        <div>
            {pathname != "/" ? (
                null
            ) : (
                <div className="w-full flex justify-center bg-light dark:bg-dark py-4" id="header">
                    <div className="w-full 2xl:w-[1600px] px-5 md:px-10 lg:px-20 2xl:px-10 flex justify-center">
                        <div className='block md:flex justify-between items-center w-full'>
                            <div className='flex items-center justify-center md:justify-start gap-x-6'>
                                <Image src={LogoDark500} alt="logo" className='rounded-md w-8 h-8 hidden md:block' />
                                <div className='flex items-center gap-x-4'>
                                    <Link href="https://twitter.com/spheresite" target='_blank' className='flex items-center gap-x-2 bg-dark900 rounded-full px-4 py-2 cursor-pointer'>
                                        <FaTwitter className='text-light500 dark:text-dark500 text-md' />
                                        <p className='text-light500 dark:text-dark500 font-semibold text-md cursor-pointer'>Twitter</p>
                                    </Link>
                                    <Link href="https://discord.gg/Kedp5xQxDN" target='_blank' className='flex items-center gap-x-2 bg-dark900 rounded-full px-4 py-2 cursor-pointer'>
                                        <FaDiscord className='text-light500 dark:text-dark500 text-md' />
                                        <p className='text-light500 dark:text-dark500 font-semibold text-md cursor-pointer'>Discord</p>
                                    </Link>
                                    <Link href="https://t.me/wnsdomain" target='_blank' className='flex items-center gap-x-2 bg-dark900 rounded-full px-4 py-2 cursor-pointer'>
                                        <FaTelegram className='text-light500 dark:text-dark500 text-md' />
                                        <p className='text-light500 dark:text-dark500 font-semibold text-md cursor-pointer'>Telegram</p>
                                    </Link>
                                </div>

                            </div>
                            <div className='mt-5 md:mt-0 text-center md:text-start flex items-center gap-x-2 bg-dark900 rounded-full px-4 py-2 w-fit'>
                                <FaEnvelope className='text-light500 dark:text-dark500 text-md' />
                                <p className='text-light500 dark:text-dark500 font-semibold text-md'>contact@w3.one</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Footer;