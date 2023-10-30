import { apiUrl } from '../0.functions/prepends';

export async function callW3Api(urlpath: string, body?: Record<string, any>, method?: string): Promise<any> {
    let url = apiUrl + urlpath;

    let response = await fetch(url, {
        method: method ? method : "post",
        body: body ? JSON.stringify(body) : null,
        cache: 'no-store',
    });

    let data: Record<string, any> = await response.json();

    return data.value;
}

export async function postW3Api(urlpath: string, body: Record<string, any>): Promise<any> {
    try {
        let url = apiUrl + urlpath;
        let result = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            cache: "no-store"
        });
        let data: Record<string, any> = await result.json();

        return data.value;
    } catch (e) {
        return "error";
    }
}

export async function getWnsDomain(address: string): Promise<string> {
    try {
        let result = await fetch("https://resolver.sphere.site/resolve/address?library=.web3&address=" + address, { next: { revalidate: 60 * 5 } });
        let data: Record<string, string> = await result.json();

        return data.value;
    } catch (e) {
        return "error";
    }
}

export async function getWnsAddress(domain: string): Promise<string> {
    try {
        let result = await fetch("https://resolver.sphere.site/resolve/name?library=.web3&name=" + domain, { next: { revalidate: 60 * 5 } });
        let data: Record<string, string> = await result.json();
        return data.value;
    } catch (e) {
        return "error";
    }
}
