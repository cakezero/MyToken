const hre = require("hardhat");
const { ethers } = require("hardhat")

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying Contract with the account -', deployer.address);

  const weiAmount = (await deployer.provider.getBalance(deployer.address)).toString();

  console.log('Account Balance:', await ethers.formatEther(weiAmount));

  const Token = await ethers.getContractFactory('InnerCulture');

  const token = await Token.deploy();

  console.log('Contract Address:', token.target);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
