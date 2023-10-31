'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { argentWallet, trustWallet, ledgerWallet, safeWallet, } from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { merge } from 'lodash';
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [jsonRpcProvider({
        rpc: (chain) => ({
            http: "https://rpc.ankr.com/eth/c3073884e0602ab1bd642b9cbdce025e0afb67f15a94a661ca001a393869bd86",
        }),
    }), publicProvider()]
);

const projectId = '7cbae94146e340a42c8fe9be4e6602a6';

const { wallets } = getDefaultWallets({
    appName: 'Sphere',
    projectId,
    chains,
});

const demoAppInfo = {
    appName: 'Sphere',
};

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: 'Other',
        wallets: [
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains })
        ],
    },
]);



const myDarkTheme = merge(darkTheme({
    fontStack: "system",
    borderRadius: "medium"
}), {
    colors: {
        accentColor: "#3B81F6",
        modalBackground: "#0F0F10",
    }
});

export function Providers({ children }) {
    const [mounted, setMounted] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (localStorage.getItem("walletConnected") == null) {
            setWalletConnected(false);
        } else {
            setWalletConnected(true);
        }
    }, []);

    const wagmiConfig = createConfig({
        autoConnect: walletConnected,
        connectors,
        publicClient,
        webSocketPublicClient,
    });

    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} appInfo={demoAppInfo} theme={myDarkTheme} >
                {mounted && children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}