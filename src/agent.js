require("dotenv").config();
const getQuote = require("./uniswap");
const executeSwap = require("./keeperhub");
const getAgentIdentity = require("./ens");

const WETH = process.env.WETH_ADDRESS;
const USDC = process.env.USDC_ADDRESS;
const ENS_NAME = "hermes-ai-agent.eth";

async function runAgent(amount) {
    try {
        // Step 1 - Identify the agent
        console.log("--- Step 1: Resolving agent identity ---");
        const identity = await getAgentIdentity(ENS_NAME);
        console.log(`Agent: ${identity.ensName}`);
        console.log(`Address: ${identity.address}`);
        console.log(`Description: ${identity.description}`);

        // Step 2 - Get swap quote from Uniswap
        console.log("\n--- Step 2: Getting swap quote ---");
        const quote = await getQuote(WETH, USDC, amount);
        console.log("Quote received:", quote);

        // Step 3 - Execute via KeeperHub
        console.log("\n--- Step 3: Executing swap via KeeperHub ---");
        const result = await executeSwap(process.env.WALLET_ADDRESS, "0.001");
        console.log("Execution result:", result);

        console.log("\n--- Swap Complete ---");
        return { identity, quote, result };

    } catch (error) {
        console.error("Agent error:", error.message);
    }
}

// Run with 0.001 ETH in wei
runAgent("1000000000000000");