import { apiUrl, serverURL } from "./prepends";

export function formatinusd(price: number): string {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(price)
}

export function parseUSDToFloat(usdString: string): number {
    // Remove the dollar sign and commas, then convert to float
    return parseFloat(usdString.replace(/[$,]/g, ''));
}

export async function currentEthPrice(): Promise<number> {
    try {
        let result = await fetch(apiUrl + "/price/eth", { next: { revalidate: 60 * 16 } });
        let json = await result.json();
        let ethPrice = json.value;

        return ethPrice;
    } catch (e) {
        return 0;
    }
}


export async function currentEthPriceServer(): Promise<number> {
    try {
        let result = await fetch(serverURL + "/api/price/eth", { next: { revalidate: 60 * 16 } });
        let json = await result.json();
        let ethPrice = json.price;

        return ethPrice;
    } catch (e) {
        return 0;
    }
}

export async function ethToUsd(value: number, param?: string): Promise<string> {
    let ethPrice: number;

    if (param && param == "server") {
        ethPrice = await currentEthPriceServer();
    } else {
        ethPrice = await currentEthPrice();
    }
    let usdprice = parseFloat((ethPrice * value).toFixed(2));
    return formatinusd(usdprice);
}


export async function usdToEth(value: number, param?: string): Promise<string> {
    let ethPrice: number;
    if (param && param == "server") {
        ethPrice = await currentEthPriceServer();
    } else {
        ethPrice = await currentEthPrice();
    }

    let usdprice = calculateZeroes((1 / ethPrice) * value);
    return usdprice;
}

export function calculateZeroes(val: number): string {
    val = val;
    let zeroes = getZeroes(val);
    if (zeroes == 0) {
        val = Math.ceil(val * 100) / 100;
    } else if (zeroes == 1) {
        val = Math.ceil(val * 1000) / 1000;
    } else if (zeroes == 2) {
        val = Math.ceil(val * 10000) / 10000;
    } else if (zeroes == 3) {
        val = Math.ceil(val * 100000) / 100000;
    }
    return (val).toLocaleString('fullwide', { useGrouping: false });
}

function getZeroes(val: number): number {
    try {
        const match = val.toString().match(/\.0*$/);
        if (match) {
            return match[0].length - 1;
        } else {
            return 0;
        }
    } catch (e) {
        return 0;
    }
}

export function getFormatted(price: string): string {
    if (parseFloat(price) < 1 && price.includes(".")) {
        let zeroes = 0;
        let afterDecimal = price.split(".")[1];
        for (let i = 0; i < afterDecimal.length; i++) {
            if (afterDecimal[i] == "0") {
                zeroes++;
            } else {
                break;
            }
        }
        return price.substring(0, zeroes + 5);
    } else {
        return (parseFloat(price)).toFixed(2);
    }
}