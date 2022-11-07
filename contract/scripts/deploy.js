const { ethers } = require("hardhat");

async function main() { 
  const dynamicContract = await ethers.getContractFactory("DynamicNFT");

  const deployedContract = await dynamicContract.deploy('https://plantednft.revise.link/1');

  await deployedContract.deployed();
  console.log("DynamicNFT Contract deployed to:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  