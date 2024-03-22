const hre = require("hardhat")
const { ethers } = require("hardhat")
const { providers, Wallet } = require('ethers')
const { arbLog, requireEnvVariables } = require("arb-shared-dependencies")
require('dotenv').config()

requireEnvVariables(['DVENET_PRIVAYEKEY', 'L2RPC'])


const main = async () => {

await arbLog("cypher school getting set up")

// const l2wallect = (await hre.ethers.getSigners())[0]

const l2Provider = new providers.JsonRpcProvider(process.env.L2RPC)
const walletPrivateKey = process.env.DVENET_PRIVAYEKEY
const l2Wallet = new Wallet(walletPrivateKey, l2Provider)
console.log("Your wallet address:", l2Wallet.address)

const L2Cypher = (
    await ethers.getContractFactory("EducationalPlatform", l2Wallet)
)

console.log("Deploying Cypher School platform");

const l2Cypher = await L2Cypher.deploy()

await l2Cypher.deployed()
console.log(`Cypher School contract deploying to ${l2Cypher.address}`);

// Cypher School contract deploying to 0xd94BD0f0df416785d60C8E64ec0E138Bab5a7B2C

// yarn hardhat run scripts/exec.js --network l2
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error)
    process.exit(1)
})