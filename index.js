//console.log("Hello world!");
import { ethers } from "ethers";

const provider= new ethers.InfuraProvider();
console.log("Block no: ", await provider.getBlockNumber());


