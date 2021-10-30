const HDWalletProvider = require('@truffle/hdwallet-provider');
const infura = "https://rinkeby.infura.io/v3/9f4215964e2242f086b850303d2bfd6d";
const mnemonic = ".......ADD...M.....HERE....";
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
            from: "0xc70d8398eE3860E17dBb5Afd4435B83660C0Af98", // the contract should be deployed with the address of the Farmer
            gas: 4500000,
            gasPrice: 10000000000,
        },
        rinkeby: {
            provider: function () {
                return new HDWalletProvider(mnemonic, infura);
            },
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000,
        }
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {          // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 8000
                },
            },
            evmVersion: "london"
            // }
        }
    }
};