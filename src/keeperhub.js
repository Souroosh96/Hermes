require("dotenv").config();
const axios = require("axios");

const url = 'https://app.keeperhub.com/api/execute/transfer';

async function executeSwap(recipientAddress ,amount ){
try{
    const response = await axios.post(url, {
    "network": "sepolia",
    "recipientAddress": recipientAddress,
    "amount": '0.001',
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
    console.error(error.response?.data);
}
}

module.exports = executeSwap;