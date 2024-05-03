require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    // Ganache local network configuration
    ganache: {
      url: "http://localhost:7545", // Default Ganache RPC server URL
    },
  },
};
