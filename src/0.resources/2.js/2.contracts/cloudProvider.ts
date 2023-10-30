import { ethers } from 'ethers';

export function getCloudProvider(): ethers.providers.JsonRpcProvider {
    // const providerUrl = "https://rpc.ankr.com/eth/c3073884e0602ab1bd642b9cbdce025e0afb67f15a94a661ca001a393869bd86";
    const providerUrl = "https://ethereum-mainnet.core.chainstack.com/b56d8d9b8d522bc39b72133a6876101c";

    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    return provider;
}
