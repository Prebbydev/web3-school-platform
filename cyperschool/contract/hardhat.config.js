require('@nomiclabs/hardhat-ethers');

module.exports = {
    solidity: {
        version: "0.8.20",
    },

    networks: {

        hardhat: {
            gas: 'auto', // Default is 30000000
        },
        l1: {
            gas: 2100000,
            gasLimit: 0,
            url: process.env['L1RPC'] || '',
            accounts: process.env['DVENET_PRIVAYEKEY']
                ? [process.env['DVENET_PRIVAYEKEY']]
                : [],
        },
        l2: {
            url: process.env['L2RPC'] || '',
            accounts: process.env['DVENET_PRIVAYEKEY']
                ? [process.env['DVENET_PRIVAYEKEY']]
                : [],
        },
    },
}