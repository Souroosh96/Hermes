// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../contracts/AgentRegistry.sol";

contract testbench is Test {
    AgentRegistry public agentregistry;

    function setUp() public {
        agentregistry = new AgentRegistry();
    }

    function testRegisterAgent() public {
        agentregistry.registerAgent("Louis", address(0xBEEF), address(0xBEEC));
        AgentRegistry.Agent memory result = agentregistry.getAgent(
            address(0xBEEF)
        );
        assertEq(result.ensName, "Louis");
    }

    function testRegisterAgentNotOwner() public {
        vm.expectRevert(
            abi.encodeWithSelector(
                Ownable.OwnableUnauthorizedAccount.selector,
                address(0x0001)
            )
        );
        vm.prank(address(0x0001));
        agentregistry.registerAgent("Louis", address(0xBEEF), address(0xBEEC));
    }

    function testGetAgentWallet() public {
        agentregistry.registerAgent("Louis", address(0xBEEF), address(0xBEEC));
        AgentRegistry.Agent memory result = agentregistry.getAgent(
            address(0xBEEF)
        );
        assertEq(result.agentWallet, address(0xBEEF));
    }
}
