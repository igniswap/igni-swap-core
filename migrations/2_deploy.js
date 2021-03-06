var Factory = artifacts.require("IgniFactory.sol");
const CalHash = artifacts.require("CalHash.sol");
const MultiCall = artifacts.require("Multicall.sol");

module.exports = function(deployer) {
  // deployment steps
  const feeSetter = '0x6D64361eB756Afe448cDC5D00316fbE63d5C95dB'
  deployer.deploy(Factory, feeSetter);
  //deployer.deploy(CalHash);
  //deployer.deploy(MultiCall);
  
};
