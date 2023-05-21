//console.log("Hello world!");
import { ethers } from "ethers";

const provider= new ethers.InfuraProvider("matic");
console.log("Block no: ", await provider.getBlockNumber());


const wallet= "0x6b0A19082676620a022d0FB2fE8D0DF80c5b05B9";
const walletbalance= await  provider.getBalance(wallet);
console.log(ethers.formatEther(walletbalance), "MATIC");
