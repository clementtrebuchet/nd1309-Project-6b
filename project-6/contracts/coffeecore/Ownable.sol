// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./Context.sol";

/// Provides basic authorization control
contract Ownable is Context {
    address private origOwner;
    
    // Define an Event
    event TransferOwnership(address indexed oldOwner, address indexed newOwner);
    
    /// Assign the contract to an owner
    constructor () {
        address msgSender = _msgSender();
        origOwner = msgSender;
        emit TransferOwnership(payable(address(0)), origOwner);
    }
    
    /// Look up the address of the owner
    function _owner() public view returns (address) {
        return origOwner;
    }
    
    /// Define a function modifier 'onlyOwner'
    modifier onlyOwner() {
        require(isOwner(), "Ownable: caller is not the owner");
        _;
    }

    /// Check if the calling address is the owner of the contract
    function isOwner() public view returns (bool) {
        return _owner() == _msgSender();
    }
    
    /// Define a function to renounce ownership
    function renounceOwnership() public virtual onlyOwner {
        emit TransferOwnership(origOwner, address(0));
        origOwner = address(0);
    }
    
    /// Define a public function to transfer ownership
    function transferOwnership(address newOwner) public virtual onlyOwner {
        _transferOwnership(newOwner);
    }
    
    /// Define an internal function to transfer ownership
    function _transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit TransferOwnership(origOwner, newOwner);
        origOwner = newOwner;
    }
}
