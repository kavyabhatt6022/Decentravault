//Importing Hardhat
const hre = require("hardhat");

//Defining the main function is an asynchronous function that will be executed when the script is run.
async function main() {
  
  // the deployContract method from hre.ethers is used to deploy a smart contract named "Upload". The await keyword is used to wait for the deployment to complete.
  const upload = await hre.ethers.deployContract("Upload");
  //Waiting for deployment
  await upload.waitForDeployment();

  //Logging the deployment address: The address is retrieved from the target property of the upload object.
  console.log("Library deployed to:", upload.target);
}

main().catch((error) => {
  //console.error, the process exit code is set to 1, indicating that an error occurred.
  console.error(error);
  process.exitCode = 1;
});
//  0x5FbDB2315678afecb367f032d93F642f64180aa3