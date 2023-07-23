// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract HelloWorld {
  string public text = "Hello World!";

  function callHelloWorld() public view returns (string memory) {
    return text;
  }
}