"use server";
import { apiUrl } from "../0.resources/2.js/0.functions/prepends";

export async function getPriceEth(): Promise<string> {
    try {
        let result = await fetch(apiUrl + "/price/eth", { next: { revalidate: 60 * 30 } });
        let data = await result.json();
        let price = data.value;

        return price;
    } catch (e) {
        return "0";
    }
}