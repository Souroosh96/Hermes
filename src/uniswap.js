require("dotenv").config();
const axios = require("axios");

const url = 'https://trade-api.gateway.uniswap.org/v1/quote';

async function getQuote(tokenIn, tokenOut,amount){
    try{
    const response = await axios.post(url, {
    tokenIn: tokenIn,
    tokenOut: tokenOut,
    tokenInChainId: 1301,
    tokenOutChainId: 1301,
    type: 'EXACT_INPUT',
    amount: amount,
    swapper: process.env.WALLET_ADDRESS,
    slippageTolerance: 0.5, // 0.5%
  }, {
  headers: {
    'x-api-key': process.env.UNISWAP_API_KEY,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }});
    console.log(response.data.quote);
    return response.data.quote;
}
catch (error) {
    console.error(error.message);
}
}
  
module.exports = getQuote;