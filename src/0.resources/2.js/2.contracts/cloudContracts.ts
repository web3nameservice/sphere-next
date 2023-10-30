import { ethers } from "ethers";
import { getCloudProvider } from "./cloudProvider";
import { Variables } from "./variables";

interface Contracts {
    wnsRegistryContract: ethers.Contract,
    wnsRegistrarContract: ethers.Contract,
    wnsResolverContract: ethers.Contract,
    wnsErc721Contract: ethers.Contract,
    wnsMembershipContract: ethers.Contract,
    wethContract: ethers.Contract,
    wnsResolverV2Contract: ethers.Contract,
    wnsTxtRecordsContract: ethers.Contract,
    wnsPricesOracleContract: ethers.Contract,
    sphereSwapContract: ethers.Contract
}

const CloudContracts = (): Contracts => {
    const provider = getCloudProvider();
    const vars = Variables();

    return {
        wnsRegistryContract: new ethers.Contract(vars.wnsRegistryAddr, vars.wnsRegistryAbi, provider),
        wnsRegistrarContract: new ethers.Contract(vars.wnsRegistrarAddr, vars.wnsRegistrarAbi, provider),
        wnsResolverContract: new ethers.Contract(vars.wnsResolverAddr, vars.wnsResolverAbi, provider),
        wnsErc721Contract: new ethers.Contract(vars.wnsErc721Addr, vars.wnsErc721Abi, provider),
        wnsMembershipContract: new ethers.Contract(vars.wnsMembershipAddr, vars.wnsMembershipAbi, provider),
        wethContract: new ethers.Contract(vars.wethAddr, vars.wethAbi, provider),
        wnsResolverV2Contract: new ethers.Contract(vars.wnsResolverV2Addr, vars.wnsResolverV2Abi, provider),
        wnsTxtRecordsContract: new ethers.Contract(vars.wnsTxtRecordsAddr, vars.wnsTxtRecordsAbi, provider),
        wnsPricesOracleContract: new ethers.Contract(vars.wnsPricesOracleAddr, vars.wnsPricesOracleAbi, provider),
        sphereSwapContract: new ethers.Contract(vars.sphereSwapAddr, vars.sphereSwapAbi, provider)
    };
}

export default CloudContracts;
