
export let setupPrepend: string = `Welcome to W3 Mail!\n\nSign this message to set up your account on the platform.\n\nThis request will not trigger a blockchain transaction from your wallet or cost any gas fees.\n\nParameters: `;
export let privateKeyEncryptPrepend: string = `W3 Mail\n\nSign this message to encrypt your account.\n\nThis request will not trigger a blockchain transaction from your wallet or cost any gas fees.`;
export let loginPrepend: string = `W3 Mail\n\nSign this message to login to your account.\n\nThis request will not trigger a blockchain transaction from your wallet or cost any gas fees.`;
export let sendPrepend: string = "W3 Mail\n\nSign this message to send the email.\n\nThis request will not trigger a blockchain transaction from your wallet or cost any gas fees.\n\nParameters: ";

export let zeroAddress: string = "0x0000000000000000000000000000000000000000";
export let domainsApiUrl: string = "";
export const serverURL: string = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000";
export let apiUrl = "http://localhost:8080"
// export let apiUrl: string = "https://api.domains.w3.one"

export let ethAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
