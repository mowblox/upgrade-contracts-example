import { ethers, upgrades } from "hardhat";

async function main() {
  const VendingMachineV1 = await ethers.deployContract("VendingMachineV1");
  
  const proxy = await upgrades.deployProxy(VendingMachineV1)

  const proxyAddress = await proxy.getAddress()

  await proxy.waitForDeployment();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
  
  console.log('Proxy contract address: ' + proxyAddress);
  console.log('Implementation contract address: ' + implementationAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
