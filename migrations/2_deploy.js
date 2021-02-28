var Factory = artifacts.require("IgniFactory.sol");
const CalHash = artifacts.require("CalHash.sol");
const MultiCall = artifacts.require("Multicall.sol");

module.exports = function(deployer) {
  // deployment steps
  const feeSetter = '0x5842dcDbd45eB6d8134E55ec23AB04013d16454c'
  deployer.deploy(Factory, feeSetter);
  deployer.deploy(CalHash);
  deployer.deploy(MultiCall);
  
};
