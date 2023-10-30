"use client";
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from "react";

export default function Reload({ tag }) {
    const router = useRouter()
    const pathname = usePathname()

    // setTimeout(async () => {
    //     console.log(pathname);
    //     await fetch("/api/test?path=" + pathname);
    //     router.refresh();
    // }, 5000);

    useEffect(() => {
        async function reload() {
            console.log(tag);
            if (tag == "test2") {
                //wait 2 seconds
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
            await fetch("/api/test?tag=" + tag);
            router.refresh();
        }
        reload();
    }, [pathname, tag])

    return (
        <div>

        </div>
    )
}