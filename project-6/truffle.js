const HDWalletProvider = require('@truffle/hdwallet-provider');
const infura = "https://rinkeby.infura.io/v3/9f4215964e2242f086b850303d2bfd6d";
const mnemonic = ".......ADD...M.....HERE....";
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
            websockets: true,
            from: "0x0a4Af0193E9A197CbDBfb2D70a1343387C0CA799"
        },
        rinkeby: {
            provider: function () {
                return new HDWalletProvider(mnemonic, infura);
            },
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000,
        }
    }
};