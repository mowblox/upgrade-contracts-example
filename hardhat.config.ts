import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle"
import "@nomicfoundation/hardhat-verify";
import '@openzeppelin/hardhat-upgrades';
import {config as dotenvConfig} from "dotenv"

dotenvConfig()


const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY!]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_KEY!
    }
  }
};

export default config;
