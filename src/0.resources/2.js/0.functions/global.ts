import * as punycode from 'punycode';

export function shortenaddress(xstr: string): string {
    const myArr = xstr.substring(0, 4);
    const myArrlast = xstr.substring(38, 42);
    const final = myArr + "..." + myArrlast;
    return final;
}

export const delay = (delayInms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

export function toUnicode(string: string): string {
    return punycode.toUnicode(string);
}

export function toASCII(string: string): string {
    return punycode.toASCII(string);
}
