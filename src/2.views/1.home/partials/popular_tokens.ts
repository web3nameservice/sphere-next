import { ethAddress } from "@/src/0.resources/2.js/0.functions/prepends";

export const PopularTokens = [{
    name: "Ethereum",
    symbol: "ETH",
    logoURI: `https://tokens.1inch.io/${ethAddress.toLowerCase()}.png`,
    address: ethAddress.toLowerCase(),
    decimals: 18
}, {
    name: "Wrapped ETH",
    symbol: "WETH",
    logoURI: "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    decimals: 18
}, {
    name: "Tether USD",
    symbol: "USDT",
    logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    decimals: 6
}, {
    name: "USD Coin",
    symbol: "USDC",
    logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    decimals: 6
}, {
    name: "Dai Stablecoin",
    symbol: "DAI",
    logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    decimals: 18
}, {
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    logoURI: "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    decimals: 8
}, {
    name: "Chainlink",
    symbol: "LINK",
    logoURI: "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
    address: "0x514910771af9ca656af840dff83e8264ecf986ca",
    decimals: 18
}, {
    name: "Uniswap",
    symbol: "UNI",
    logoURI: "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
    address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    decimals: 18
}
]