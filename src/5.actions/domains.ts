"use server"

export async function getWnsDomain(address: string): Promise<string> {
    try {
        let result = await fetch("https://resolver.sphere.site/resolve/address?library=.web3&address=" + address, { next: { revalidate: 60 * 5 } });
        let data = await result.json();

        return data.value;
    } catch (e) {
        return "null";
    }
}

export async function getWnsDomainLatest(address: string): Promise<string> {
    try {
        let result = await fetch("https://resolver.sphere.site/resolve/address?library=.web3&address=" + address + "&salt=1", { cache: "no-store" });
        let data = await result.json();

        return data.value;
    } catch (e) {
        return "null";
    }
}

export async function getWnsAddress(domain: string): Promise<string> {
    try {
        let result = await fetch("https://resolver.sphere.site/resolve/name?library=.web3&name=" + domain, { next: { revalidate: 60 * 5 } });
        let data = await result.json();
        return data.value;
    } catch (e) {
        return "null";
    }
}