const MockERC20 = artifacts.require('MockERC20.sol');
const ContractName = artifacts.require('ContractName.sol');

module.exports = async function(deployer) {
  
  // Deploy Mock Tokens
    const tokenA = await MockERC20.new('Token A', 'TKA', web3.utils.toWei('1000'));
    const tokenB = await MockERC20.new('Token B', 'TKB', web3.utils.toWei('1000'));

  // Deploy ContractName and Make Owner
    const contractName = await deployer.deploy(ContractName);
    await tokenA.transferOwnership(contractName.address);
    await tokenB.transferOwnership(contractName.address);
}
