import { getWalletClient } from '@wagmi/core'
import { providers } from 'ethers'

export function walletClientToSigner(walletClient) {
    const { account, chain, transport } = walletClient
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts?.ensRegistry?.address,
    }
    const provider = new providers.Web3Provider(transport, network)
    const signer = provider.getSigner(account.address)
    return signer
}

/** Action to convert a viem Wallet Client to an ethers.js Signer. */
export async function getEthersSigner() {
    const walletClient = await getWalletClient({ chainId: 1 })
    if (!walletClient) return undefined
    return walletClientToSigner(walletClient)
}
