// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

/// Provides basic authorization control
contract Ownable {
    address payable private origOwner;
    
    // Define an Event
    event TransferOwnership(address payable indexed oldOwner, address payable indexed newOwner);
    
    /// Assign the contract to an owner
    constructor () {
        origOwner = payable(msg.sender);
        emit TransferOwnership(payable(address(0)), origOwner);
    }
    
    /// Look up the address of the owner
    function _owner() public view returns (address payable) {
        return origOwner;
    }
    
    /// Define a function modifier 'onlyOwner'
    modifier onlyOwner() {
        require(isOwner());
        _;
    }

    /// Check if the calling address is the owner of the contract
    function isOwner() public view returns (bool) {
        return msg.sender == payable(origOwner);
    }
    
    /// Define a function to renounce ownership
    function renounceOwnership() public onlyOwner {
        emit TransferOwnership(origOwner, payable(address(0)));
        origOwner = payable(address(0));
    }
    
    /// Define a public function to transfer ownership
    function transferOwnership(address payable newOwner) public onlyOwner {
        _transferOwnership(newOwner);
    }
    
    /// Define an internal function to transfer ownership
    function _transferOwnership(address payable newOwner) internal {
        require(newOwner != payable(address(0)));
        emit TransferOwnership(origOwner, newOwner);
        origOwner = newOwner;
    }
}
