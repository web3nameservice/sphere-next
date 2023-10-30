import * as punycode from 'punycode';

function normalise(name: string): string {
    try {
        if (name) {
            return punycode.toUnicode(name).toLowerCase();
        } else {
            return "";
        }
    } catch (e) {
        return "";
    }
}

function denormalise(name: string): string {
    try {
        if (name) {
            return punycode.toASCII(name);
        } else {
            return "";
        }
    } catch (e) {
        return "";
    }
}

function isASCII(str: string): boolean {
    return /^[\x00-\x7F]*$/.test(str);
}

const BASE58: string = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

function isIPFSHash(hash: string): boolean {
    if (hash.length !== 46 || hash.slice(0, 2) !== 'Qm') {
        return false;
    }

    for (let char of hash) {
        if (!BASE58.includes(char)) {
            return false;
        }
    }

    return true;
}

export { normalise, denormalise, isASCII, isIPFSHash };
