require("@nomiclabs/hardhat-waffle");

const proxy_url = 'https://devnet.neonevm.org';
const network_id = 245022926;

// Private keys for test accounts
// NOTE: Replace these placeholders with your own and make sure the accounts have non-zero NEON balances
const privateKeys = [
  "PRIVATE_KEY_1",
];

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: 'neonlabs',
  networks: {
    neonlabs: {
      url: proxy_url,
      accounts: privateKeys,
      network_id: network_id,
      chainId: network_id,
      allowUnlimitedContractSize: false,
      timeout: 1000000,
      isFork: true
    }
  }
};