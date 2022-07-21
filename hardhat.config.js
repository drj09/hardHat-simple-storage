require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter"); // this can help us to identify how to optimise gas further
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
      chainId: 4,
    },
  },
  solidity: "0.8.9",
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    noColors: true,
    coinmarktecap: COINMARKETCAP_API_KEY, // external api to currency conversion
  },
};
