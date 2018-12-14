"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
	REOSC: "REOSC",
	Custom: "CUSTOM"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
	name: "CUS",
	blockExplorerTX: "",
	blockExplorerAddr: "",
	type: nodes.nodeTypes.Custom,
	eip155: false,
	chainId: "",
	tokenList: [],
	abiList: [],
	service: "Custom",
	lib: null
};
nodes.nodeList = {
	reosc_remote: {
		name: "REOSC",
		blockExplorerTX: "https://explorer.reosc.io/tx/[[txHash]]",
		blockExplorerAddr: "https://explorer.reosc.io/addr/[[address]]",
		type: nodes.nodeTypes.REOSC,
		eip155: true,
		chainId: 2894,
		tokenList: require("./tokens/reoscTokens.json"),
		abiList: require("./abiDefinitions/reoscAbi.json"),
		estimateGas: true,
		service: "remote.reosc.io",
		lib: new nodes.customNode("https://remote.reosc.io", "3000")
	}
};

nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
