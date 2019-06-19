const eth = require('ethers');

const x=require('../build/contracts/Bank.json.js')

require('dotenv').config();

const pri=process.env.privateKey
let provider = eth.getDefaultProvider("rinkeby");
let wallet = new eth.Wallet(pri,provider)
let bytecode=x.code
let abi=x.abiDefinition

let factory = new eth.ContractFactory(abi, bytecode, wallet);
async function deploythecontract()
{
    let contract = await factory.deploy()
    await contract.deployed()
    console.log(contract)
}

deploythecontract()

