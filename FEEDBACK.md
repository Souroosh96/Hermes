# Uniswap API Developer Feedback

## What Worked Well
- The `/v1/quote` endpoint was straightforward once the request body structure was clear
- Response data is comprehensive — route, price impact, gas estimates, aggregated outputs all in one call
- Unichain Sepolia (chainId 1301) worked without any special configuration
- WETH and USDC addresses on Unichain Sepolia were easy to find

## What Was Confusing
- The difference between the Uniswap API and calling smart contracts directly is not clearly explained for beginners — took time to understand what the API abstracts away
- No clear beginner-friendly quickstart showing a minimal working POST request with all required fields
- The `swapper` field is required but not prominently documented — led to failed requests initially
- Amount must be in wei (smallest unit) but this is not immediately obvious from the docs

## Bugs / Issues
- No issues with the API itself once the request format was correct

## Missing Endpoints / Features
- A `/v1/routes` endpoint that returns all possible routes for a token pair separately would be useful for building routing optimization on top of the API
- A testnet-specific documentation section would help hackathon builders significantly

## Overall
The API works reliably and returns rich data. The main friction is the initial learning curve around request format and the lack of a minimal working example in the docs.