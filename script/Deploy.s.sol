// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import "../contracts/AgentRegistry.sol";

contract DeployAgentRegistry is Script {
    function run() public {
        uint256 privateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(privateKey);
        new AgentRegistry();
        vm.stopBroadcast();
    }
}
