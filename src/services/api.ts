import axios from 'axios';
const getApiHash = require('marvel-api-hash-generator').getApiHash;
const timeStamp = 1;
const privateKey = process.env.REACT_APP_API_KEY_PRIVATE;
const publicKey = process.env.REACT_APP_API_KEY;
const hashValue = getApiHash(timeStamp, privateKey, publicKey);


const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
  params: {
    limit: 12,
    ts: timeStamp,
    apikey: publicKey,
    hash: hashValue
  }
});

export default api;
