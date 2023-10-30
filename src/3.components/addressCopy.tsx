"use client";
import React, { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa6';
import { shortenaddress } from '../0.resources/2.js/0.functions/global';

interface AddressCopyProps {
    address: string;
}

const AddressCopy: React.FC<AddressCopyProps> = ({ address }) => {
    const [copy, setCopy] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(address);
            console.log('Text copied to clipboard!');
            setCopy(true);
            await new Promise(r => setTimeout(r, 1000));
            setCopy(false);
        } catch (err) {
            console.error('Unable to copy text: ', err);
        }
    };

    return (
        <div className="bg-light200 dark:bg-dark800 hover:bglight-200 dark:hover:bg-dark800 px-4 py-2 rounded-full flex items-center gap-x-2 mt-2 cursor-pointer" onClick={copyToClipboard}>
            <p className="text-light500 dark:text-dark500 text-md font-semibold">@{shortenaddress(address)}</p>
            {copy ? (
                <FaCheck className="text-light500 dark:text-dark500 text-md cursor-pointer" />
            ) : (
                <FaCopy className="text-light500 dark:text-dark500 text-md cursor-pointer" />
            )}
        </div>
    );
}

export default AddressCopy;