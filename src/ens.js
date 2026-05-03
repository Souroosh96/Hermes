require("dotenv").config();
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC);

async function getAgentIdentity(ensName) {
    try {
        const address = await provider.resolveName(ensName);
        const resolver = await provider.getResolver(ensName);
        const description = await resolver.getText("description");
        const url = await resolver.getText("url");
        
        const identity = {
            ensName: ensName,
            address: address,
            description: description,
            url: url
        };
        
        console.log("Agent Identity:", identity);
        return identity;
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = getAgentIdentity;