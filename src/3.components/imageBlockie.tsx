"use client";
import { zeroAddress } from "../0.resources/2.js/0.functions/prepends";
import ImageSvg from "@/src/0.resources/3.files/images/image.png";
import Image from "next/image";
import { FC } from 'react';

interface ImageBlockieProps {
    address: string;
    className?: string;
}

const ImageBlockie: FC<ImageBlockieProps> = ({ address, className }) => {
    let colors = ["bg-rose-500"];

    const random_item = (address: string, items: string[]): string => {
        const index = parseInt(address.slice(2, 5), 16) % items.length;
        return items[index];
    }

    return (
        <div className={`flex justify-center items-center ${random_item(address, colors)} ${className}`}>
            <Image src={ImageSvg} alt="user-image" loading="lazy" />
        </div>
    )
}

export default ImageBlockie;

// Since you have an empty props, we don't necessarily need an interface for this.
export const BlockiesGif: FC = () => {
    return (
        <div className="w-24 h-24 flex justify-center items-center">
            <ImageBlockie address={zeroAddress} className="w-24 h-24 rounded-lg" />
        </div>
    )
}