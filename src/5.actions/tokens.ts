"use server"
import { apiUrl, zeroAddress } from "../0.resources/2.js/0.functions/prepends";
import { denormalise } from "../0.resources/2.js/0.functions/small";
import CloudContracts from "../0.resources/2.js/2.contracts/cloudContracts";
import { Variables } from "../0.resources/2.js/2.contracts/variables";

interface TokenOwnerParams {
    contractAddress: string;
    token_id: string | number;
}

export async function getTokenOwner({ contractAddress, token_id }: TokenOwnerParams): Promise<string> {
    try {
        let item: string;

        if (contractAddress.toLowerCase() == Variables().wnsErc721Addr.toLowerCase()) {
            let result = await fetch(apiUrl + "/tokens/owner?token_id=" + token_id, { next: { revalidate: 1 } });
            let json = await result.json();
            item = json.value;
        } else {
            let result = await CloudContracts().wnsMembershipContract.ownerOf(token_id);
            item = result;
        }

        return item;
    } catch (e) {
        return zeroAddress;
    }
}

export async function isRegistered(name: string): Promise<string> {
    try {
        let result = await fetch(apiUrl + "/tokens/isRegistered?name=" + denormalise(name.split(".")[0]) + ".web3", { next: { revalidate: 1 } });
        let json = await result.json();

        return json.value;
    } catch (e) {
        return "false";
    }
}