"use client";
import Link from 'next/link';
import React, { FC } from 'react';
import LogoLight500 from "@/src/0.resources/3.files/logo/logo_light500.webp";
import LogoDark500 from "@/src/0.resources/3.files/logo/logo_dark500.webp";
import Image from 'next/image';
import { useDarkMode } from '@/src/3.components/darkMode';
import { usePathname } from 'next/navigation';

const Footer: FC = () => {
    const { darkMode } = useDarkMode();
    const pathname = usePathname();

    return (
        <div>
            {/* {pathname != "/" ? (
                null
            ) : (
                <div className="w-full flex justify-center bg-light dark:bg-dark py-8" id="header">
                    <div className="w-full 2xl:w-[1600px] px-5 md:px-10 lg:px-20 2xl:px-10 flex justify-center">
                        <div className='block md:flex justify-between items-center w-full'>
                            <div className='flex items-center justify-center md:justify-start gap-x-6'>
                                <Image src={darkMode ? LogoDark500 : LogoLight500} alt="logo" className='rounded-md w-8 h-8' />
                                <div className='flex items-center gap-x-4'>
                                    <Link href="https://twitter.com/wnsdomains" target='_blank'>
                                        <p className='text-light500 dark:text-dark500 font-semibold text-md cursor-pointer'>Twitter</p>
                                    </Link>
                                    <Link href="https://discord.gg/Kedp5xQxDN" target='_blank'>
                                        <p className='text-light500 dark:text-dark500 font-semibold text-md cursor-pointer'>Discord</p>
                                    </Link>
                                    <Link href="https://t.me/wnsdomain" target='_blank'>
                                        <p className='text-light500 dark:text-dark500 font-semibold text-md cursor-pointer'>Telegram</p>
                                    </Link>
                                </div>

                            </div>
                            <div className='mt-5 md:mt-0 text-center md:text-start'>
                                <p className='text-light500 dark:text-dark500 font-semibold text-md'>contact@w3.one</p>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default Footer;