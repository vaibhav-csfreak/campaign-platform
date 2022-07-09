import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !=='undefined'){
        
    web3 = new Web3(window.web3.currentProvider);
    console.log("Web3 is defined");
   
}
else{
   const provider=new Web3.providers.HttpProvider(
    //   'http://127.0.0.1:7545',
    'https://rinkeby.infura.io/v3/efac3104b14741c8a58856af59c7c7bb'
);

   
    web3 = new Web3(provider);
    const accounts=web3.eth.getAccounts();
    console.log(accounts);
 
    console.log("Injected web3 not detected. Using http provider.");
   
}
// console.log(web3);
export default web3;
















// import Web3 from "web3";

// const getWeb3 = () =>
//   new Promise((resolve, reject) => {
//     // Wait for loading completion to avoid race conditions with web3 injection timing.
//     window.addEventListener("load", async () => {
//       // Modern dapp browsers...
//       if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         try {
//           // Request account access if needed
//           await window.ethereum.enable();
//           // Acccounts now exposed
//           resolve(web3);
//         } catch (error) {
//           reject(error);
//         }
//       }
//       // Legacy dapp browsers...
//       else if (window.web3) {
//         // Use Mist/MetaMask's provider.
//         const web3 = window.web3;
//         console.log("Injected web3 detected.");
//         resolve(web3);
//       }
//       // Fallback to localhost; use dev console port by default...
//       else {
//         const provider = new Web3.providers.HttpProvider(
//           "http://127.0.0.1:7545"
//         );
//         const web3 = new Web3(provider);
//         console.log("No web3 instance injected, using Local web3.");
//         resolve(web3);
//       }
//     });
//   });

// export default new Web3(getWeb3);