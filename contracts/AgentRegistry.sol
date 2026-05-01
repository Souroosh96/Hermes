// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AgentRegistry is Ownable {
    struct Agent {
        string ensName;
        address agentWallet;
        address owner;
    }

    mapping(address => Agent) public agents;

    event AgentRegistered(
        string ensName,
        address indexed agentWallet,
        address owner
    );

    constructor() Ownable(msg.sender) {
        //empty
    }

    function registerAgent(
        string memory _ensName,
        address _agentWallet,
        address _owner
    ) public onlyOwner {
        agents[_agentWallet] = Agent({
            ensName: _ensName,
            agentWallet: _agentWallet,
            owner: _owner
        });
        emit AgentRegistered(_ensName, _agentWallet, _owner);
    }

    function getAgent(
        address _agentWallet
    ) public view returns (Agent memory agent) {
        return agents[_agentWallet];
    }
}
