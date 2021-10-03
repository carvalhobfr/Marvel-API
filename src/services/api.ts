import axios from 'axios';
const getApiHash = require('marvel-api-hash-generator').getApiHash;
const timeStamp = 1;
const privateKey = process.env.REACT_APP_API_KEY_PRIVATE;
const publicKey = process.env.REACT_APP_API_KEY;
const hashValue = getApiHash(timeStamp, privateKey, publicKey);


const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
  params: {
    limit: 100,
    ts: timeStamp,
    // apikey: publicKey,
    // hash: hashValue
    apikey: '601eabb0f35109579283d00ecd8d8c98',
    hash: '86bce4701334238c4205d25c01bf4fd6'
  }
});

export default api;
