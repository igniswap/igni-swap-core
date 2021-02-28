pragma solidity =0.5.16;

import '../IgniERC20.sol';

contract ERC20 is IgniERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
