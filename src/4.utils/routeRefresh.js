"use client";
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from "react";

export default function RouteRefresh({ }) {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        router.refresh();
    }, [pathname])

    return (
        <div>

        </div>
    )
}