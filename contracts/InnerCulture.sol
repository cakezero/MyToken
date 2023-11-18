// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract InnerCulture is ERC20 {
    uint constant _inital_supply = 1000 * (10 ** 18);
    constructor() ERC20('InnerCultureToken', 'ICT') {
        _mint(msg.sender, _inital_supply);
    }
}