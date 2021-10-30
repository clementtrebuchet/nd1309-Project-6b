// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'ConsumerRole' to manage this role - add, remove, check
contract ConsumerRole {
	using Roles for Roles.Role;
	// Define 2 events, one for Adding, and other for Removing
	event ConsumerAdded(address payable  indexed account);
	event ConsumerRemoved(address payable  indexed account);
	
	// Define a struct 'consumers' by inheriting from 'Roles' library, struct Role
	Roles.Role private consumers;
	
	// In the constructor make the address payable  that deploys this contract the 1st consumer
	constructor() {
		_addConsumer(payable(msg.sender));
	}
	
	// Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyConsumer() {
	  require(isConsumer(payable(msg.sender)));
	  _;
  }

  // Define a function 'isConsumer' to check this role
	function isConsumer(address payable account) public view returns (bool) {
		return consumers.has(account);
	}

  // Define a function 'addConsumer' that adds this role
	function addConsumer(address payable account) public onlyConsumer {
		_addConsumer(account);
	}

  // Define a function 'renounceConsumer' to renounce this role
  function renounceConsumer() public {
	  _removeConsumer(payable(msg.sender));
  }

  // Define an internal function '_addConsumer' to add this role, called by 'addConsumer'
	function _addConsumer(address payable account) internal {
		consumers.add(account);
		emit ConsumerAdded(account);
	}

  // Define an internal function '_removeConsumer' to remove this role, called by 'removeConsumer'
	function _removeConsumer(address payable account) internal {
		consumers.remove(account);
		emit ConsumerRemoved(account);
	}
}