# Hermes — AI-Powered DeFi Swap Agent

Hermes is an autonomous DeFi agent with a verified onchain identity. It resolves its own ENS name, fetches optimal swap quotes from Uniswap, and executes transactions reliably through KeeperHub.

## Architecture
User Input (amount + token pair)
↓
ENS Identity Resolution (hermes-ai-agent.eth)
↓
Uniswap API Quote (best route + price impact)
↓
KeeperHub Execution (guaranteed delivery + audit log)
↓
Confirmed Transaction

## Stack
- **Solidity + Foundry** — AgentRegistry contract deployed on Unichain Sepolia
- **ENS** — Agent identity via `hermes-ai-agent.eth` on Sepolia
- **Uniswap API** — Swap quotes on Unichain Sepolia (chainId 1301)
- **KeeperHub** — Reliable transaction execution with retry logic
- **Node.js** — Agent orchestration logic

## Deployed Contract
- **Network:** Unichain Sepolia (chainId 1301)
- **AgentRegistry:** `0xA2e5033c798189A67D041861774c98c77dc1D849`
- **Explorer:** https://sepolia.uniscan.xyz/address/0xA2e5033c798189A67D041861774c98c77dc1D849

## Agent Identity
- **ENS Name:** `hermes-ai-agent.eth`
- **Wallet:** `0xe6a1059ef159739b840f2e912a4bc754c3aEFb3B`

## Setup

1. Clone the repo
2. Install dependencies:
```bash
npm install
```
3. Copy `.env.example` to `.env` and fill in your values:
PRIVATE_KEY=
WALLET_ADDRESS=
UNISWAP_API_KEY=
KEEPERHUB_API_KEY=
WETH_ADDRESS=0x4200000000000000000000000000000000000006
USDC_ADDRESS=0x31d0220469e10c4E71834a79b1f276d740d3768F
UNICHAIN_SEPOLIA_RPC=https://sepolia.unichain.org
SEPOLIA_RPC=https://ethereum-sepolia-rpc.publicnode.com
CONTRACT_ADDRESS=0xA2e5033c798189A67D041861774c98c77dc1D849
4. Run the agent:
```bash
node src/agent.js
```

## What It Does
1. Resolves `hermes-ai-agent.eth` to verify agent identity onchain
2. Calls Uniswap API to get a swap quote for WETH → USDC on Unichain Sepolia
3. Submits the transaction to KeeperHub for guaranteed execution with retry logic and audit trail

## Prize Tracks
- Uniswap Foundation — Uniswap API integration
- KeeperHub — Execution infrastructure for AI agents