require("dotenv").config();
const axios = require("axios");

const url = 'https://api.keeperhub.com/api/execute/transfer';

async function executeSwap(recipientAddress ,amount ){
try{
    const response = await axios.post(url, {
    "network": "unichain-sepolia",
    "recipientAddress": recipientAddress,
    "amount": amount,
    "tokenAddress": process.env.USDC_ADDRESS,
    "gasLimitMultiplier": "1.2"
  }, {
  headers: {
    Authorization: `Bearer ${process.env.KEEPERHUB_API_KEY}`
  }});
    console.log(response);
    return response.data;
}
catch (error) {
    console.error(error.message);
}
}

module.exports = executeSwap;