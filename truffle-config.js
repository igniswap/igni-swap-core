const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = '';
const bscMainnet = 'https://bsc-dataseed1.binance.org';
const bscTestnet = 'https://data-seed-prebsc-1-s3.binance.org:8545/';

     
module.exports = {
  networks: {
      testnet: {
        provider: () => new HDWalletProvider(privateKey, bscTestnet),
        network_id: 97,
        //confirmations: 3,
        timeoutBlocks: 200,
        networkCheckTimeout: 100000,
        skipDryRun: true
      },
      bsc: {
        provider: () => new HDWalletProvider(privateKey, bscMainnet),
        network_id: 56,
        confirmations: 3,
        timeoutBlocks: 200,
        skipDryRun: true
      },
  },
  compilers: {
      solc: {
          version: '0.5.16',
          settings: {
              optimizer: {
                  enabled: true,
                  runs: 999999,
              }
          }
      },
  },
  plugins: [
      'solidity-coverage',
      'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: ''
  },
  
  mocha: { // https://github.com/cgewecke/eth-gas-reporter
      reporter: 'eth-gas-reporter',
      reporterOptions : {
          currency: 'USD',
          gasPrice: 20,
          onlyCalledMethods: true,
          showTimeSpent: true,
          excludeContracts: ['Migrations']
      }
  }
};