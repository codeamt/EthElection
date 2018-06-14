//var HDWalletProvider = require("truffle-hdwallet-provider");
//var mnemonic = process.env.MNEMONIC_PHRASE; //"YOUR 12 WORD MNEMONIC PASTE IT HERE";
//var infura_api_key = process.env.INFURA_KEY; //YOUR INFURA KEY GOES HERE"

// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    }
  }
}
