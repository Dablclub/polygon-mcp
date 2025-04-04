export const PropertyNFT = {
  _format: "hh-sol-artifact-1",
  contractName: "PropertyNFT",
  sourceName: "contracts/PropertyNFT.sol",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "ERC721IncorrectOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ERC721InsufficientApproval",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC721InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "ERC721InvalidOperator",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "ERC721InvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC721InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC721InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ERC721NonexistentToken",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "location",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "squareMeters",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "appraisedValue",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "rentalYield",
          type: "uint256",
        },
      ],
      name: "createProperty",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getPropertyDetails",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "squareMeters",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "appraisedValue",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "rentalYield",
              type: "uint256",
            },
          ],
          internalType: "struct PropertyNFT.PropertyDetails",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "properties",
      outputs: [
        {
          internalType: "string",
          name: "location",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "squareMeters",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "appraisedValue",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "rentalYield",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x60806040523480156200001157600080fd5b506040518060400160405280601081526020016f1499585b0815dbdc9b1908105cdcd95d60821b8152506040518060400160405280600381526020016252574160e81b815250816000908162000068919062000125565b50600162000077828262000125565b505050620001f1565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000ab57607f821691505b602082108103620000cc57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200012057600081815260208120601f850160051c81016020861015620000fb5750805b601f850160051c820191505b818110156200011c5782815560010162000107565b5050505b505050565b81516001600160401b0381111562000141576200014162000080565b620001598162000152845462000096565b84620000d2565b602080601f831160018114620001915760008415620001785750858301515b600019600386901b1c1916600185901b1785556200011c565b600085815260208120601f198616915b82811015620001c257888601518255948401946001909101908401620001a1565b5085821015620001e15787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61140480620002016000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636352211e11610097578063b88d4fde11610066578063b88d4fde1461022a578063c87b56dd1461023d578063e985e9c514610250578063f7b108081461026357600080fd5b80636352211e146101db57806370a08231146101ee57806395d89b411461020f578063a22cb4651461021757600080fd5b8063126dbe43116100d3578063126dbe431461018257806323b872dd146101a257806342842e0e146101b55780634651f596146101c857600080fd5b806301ffc9a71461010557806306fdde031461012d578063081812fc14610142578063095ea7b31461016d575b600080fd5b610118610113366004610e54565b610286565b60405190151581526020015b60405180910390f35b6101356102d8565b6040516101249190610ec1565b610155610150366004610ed4565b61036a565b6040516001600160a01b039091168152602001610124565b61018061017b366004610f09565b610393565b005b610195610190366004610ed4565b6103a2565b6040516101249190610f33565b6101806101b0366004610f79565b61049c565b6101806101c3366004610f79565b61052c565b6101806101d6366004611041565b61054c565b6101556101e9366004610ed4565b6105bd565b6102016101fc3660046110c8565b6105c8565b604051908152602001610124565b610135610610565b6101806102253660046110e3565b61061f565b61018061023836600461111f565b61062a565b61013561024b366004610ed4565b610641565b61011861025e36600461119b565b6106b6565b610276610271366004610ed4565b6106e4565b60405161012494939291906111ce565b60006001600160e01b031982166380ac58cd60e01b14806102b757506001600160e01b03198216635b5e139f60e01b145b806102d257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102e7906111fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610313906111fd565b80156103605780601f1061033557610100808354040283529160200191610360565b820191906000526020600020905b81548152906001019060200180831161034357829003601f168201915b5050505050905090565b600061037582610794565b506000828152600460205260409020546001600160a01b03166102d2565b61039e8282336107cd565b5050565b6103cd6040518060800160405280606081526020016000815260200160008152602001600081525090565b600082815260066020526040908190208151608081019092528054829082906103f5906111fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610421906111fd565b801561046e5780601f106104435761010080835404028352916020019161046e565b820191906000526020600020905b81548152906001019060200180831161045157829003601f168201915b5050505050815260200160018201548152602001600282015481526020016003820154815250509050919050565b6001600160a01b0382166104cb57604051633250574960e11b8152600060048201526024015b60405180910390fd5b60006104d88383336107da565b9050836001600160a01b0316816001600160a01b031614610526576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016104c2565b50505050565b6105478383836040518060200160405280600081525061062a565b505050565b61055686866108d3565b604080516080810182528581526020808201869052818301859052606082018490526000888152600690915291909120815181906105949082611285565b506020820151600182015560408201516002820155606090910151600390910155505050505050565b60006102d282610794565b60006001600160a01b0382166105f4576040516322718ad960e21b8152600060048201526024016104c2565b506001600160a01b031660009081526003602052604090205490565b6060600180546102e7906111fd565b61039e338383610938565b61063584848461049c565b610526848484846109d7565b606061064c82610794565b50600061066460408051602081019091526000815290565b9050600081511161068457604051806020016040528060008152506106af565b8061068e84610b00565b60405160200161069f929190611345565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6006602052600090815260409020805481906106ff906111fd565b80601f016020809104026020016040519081016040528092919081815260200182805461072b906111fd565b80156107785780601f1061074d57610100808354040283529160200191610778565b820191906000526020600020905b81548152906001019060200180831161075b57829003601f168201915b5050505050908060010154908060020154908060030154905084565b6000818152600260205260408120546001600160a01b0316806102d257604051637e27328960e01b8152600481018490526024016104c2565b6105478383836001610b93565b6000828152600260205260408120546001600160a01b039081169083161561080757610807818486610c99565b6001600160a01b0381161561084557610824600085600080610b93565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b03851615610874576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6001600160a01b0382166108fd57604051633250574960e11b8152600060048201526024016104c2565b600061090b838360006107da565b90506001600160a01b03811615610547576040516339e3563760e11b8152600060048201526024016104c2565b6001600160a01b03821661096a57604051630b61174360e31b81526001600160a01b03831660048201526024016104c2565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561052657604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610a19903390889087908790600401611374565b6020604051808303816000875af1925050508015610a54575060408051601f3d908101601f19168201909252610a51918101906113b1565b60015b610abd573d808015610a82576040519150601f19603f3d011682016040523d82523d6000602084013e610a87565b606091505b508051600003610ab557604051633250574960e11b81526001600160a01b03851660048201526024016104c2565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610af957604051633250574960e11b81526001600160a01b03851660048201526024016104c2565b5050505050565b60606000610b0d83610cfd565b600101905060008167ffffffffffffffff811115610b2d57610b2d610fb5565b6040519080825280601f01601f191660200182016040528015610b57576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610b6157509392505050565b8080610ba757506001600160a01b03821615155b15610c69576000610bb784610794565b90506001600160a01b03831615801590610be35750826001600160a01b0316816001600160a01b031614155b8015610bf65750610bf481846106b6565b155b15610c1f5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016104c2565b8115610c675783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610ca4838383610dd5565b610547576001600160a01b038316610cd257604051637e27328960e01b8152600481018290526024016104c2565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016104c2565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610d3c5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610d68576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610d8657662386f26fc10000830492506010015b6305f5e1008310610d9e576305f5e100830492506008015b6127108310610db257612710830492506004015b60648310610dc4576064830492506002015b600a83106102d25760010192915050565b60006001600160a01b03831615801590610e335750826001600160a01b0316846001600160a01b03161480610e0f5750610e0f84846106b6565b80610e3357506000828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160e01b031981168114610e5157600080fd5b50565b600060208284031215610e6657600080fd5b81356106af81610e3b565b60005b83811015610e8c578181015183820152602001610e74565b50506000910152565b60008151808452610ead816020860160208601610e71565b601f01601f19169290920160200192915050565b6020815260006106af6020830184610e95565b600060208284031215610ee657600080fd5b5035919050565b80356001600160a01b0381168114610f0457600080fd5b919050565b60008060408385031215610f1c57600080fd5b610f2583610eed565b946020939093013593505050565b602081526000825160806020840152610f4f60a0840182610e95565b90506020840151604084015260408401516060840152606084015160808401528091505092915050565b600080600060608486031215610f8e57600080fd5b610f9784610eed565b9250610fa560208501610eed565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610fe657610fe6610fb5565b604051601f8501601f19908116603f0116810190828211818310171561100e5761100e610fb5565b8160405280935085815286868601111561102757600080fd5b858560208301376000602087830101525050509392505050565b60008060008060008060c0878903121561105a57600080fd5b61106387610eed565b955060208701359450604087013567ffffffffffffffff81111561108657600080fd5b8701601f8101891361109757600080fd5b6110a689823560208401610fcb565b945050606087013592506080870135915060a087013590509295509295509295565b6000602082840312156110da57600080fd5b6106af82610eed565b600080604083850312156110f657600080fd5b6110ff83610eed565b91506020830135801515811461111457600080fd5b809150509250929050565b6000806000806080858703121561113557600080fd5b61113e85610eed565b935061114c60208601610eed565b925060408501359150606085013567ffffffffffffffff81111561116f57600080fd5b8501601f8101871361118057600080fd5b61118f87823560208401610fcb565b91505092959194509250565b600080604083850312156111ae57600080fd5b6111b783610eed565b91506111c560208401610eed565b90509250929050565b6080815260006111e16080830187610e95565b6020830195909552506040810192909252606090910152919050565b600181811c9082168061121157607f821691505b60208210810361123157634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561054757600081815260208120601f850160051c8101602086101561125e5750805b601f850160051c820191505b8181101561127d5782815560010161126a565b505050505050565b815167ffffffffffffffff81111561129f5761129f610fb5565b6112b3816112ad84546111fd565b84611237565b602080601f8311600181146112e857600084156112d05750858301515b600019600386901b1c1916600185901b17855561127d565b600085815260208120601f198616915b82811015611317578886015182559484019460019091019084016112f8565b50858210156113355787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008351611357818460208801610e71565b83519083019061136b818360208801610e71565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906113a790830184610e95565b9695505050505050565b6000602082840312156113c357600080fd5b81516106af81610e3b56fea2646970667358221220bb56c21e1c8b3f42cbe26548cba8bc2ddb6a1fce2657c746a023acf2a82066df64736f6c63430008140033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106101005760003560e01c80636352211e11610097578063b88d4fde11610066578063b88d4fde1461022a578063c87b56dd1461023d578063e985e9c514610250578063f7b108081461026357600080fd5b80636352211e146101db57806370a08231146101ee57806395d89b411461020f578063a22cb4651461021757600080fd5b8063126dbe43116100d3578063126dbe431461018257806323b872dd146101a257806342842e0e146101b55780634651f596146101c857600080fd5b806301ffc9a71461010557806306fdde031461012d578063081812fc14610142578063095ea7b31461016d575b600080fd5b610118610113366004610e54565b610286565b60405190151581526020015b60405180910390f35b6101356102d8565b6040516101249190610ec1565b610155610150366004610ed4565b61036a565b6040516001600160a01b039091168152602001610124565b61018061017b366004610f09565b610393565b005b610195610190366004610ed4565b6103a2565b6040516101249190610f33565b6101806101b0366004610f79565b61049c565b6101806101c3366004610f79565b61052c565b6101806101d6366004611041565b61054c565b6101556101e9366004610ed4565b6105bd565b6102016101fc3660046110c8565b6105c8565b604051908152602001610124565b610135610610565b6101806102253660046110e3565b61061f565b61018061023836600461111f565b61062a565b61013561024b366004610ed4565b610641565b61011861025e36600461119b565b6106b6565b610276610271366004610ed4565b6106e4565b60405161012494939291906111ce565b60006001600160e01b031982166380ac58cd60e01b14806102b757506001600160e01b03198216635b5e139f60e01b145b806102d257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102e7906111fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610313906111fd565b80156103605780601f1061033557610100808354040283529160200191610360565b820191906000526020600020905b81548152906001019060200180831161034357829003601f168201915b5050505050905090565b600061037582610794565b506000828152600460205260409020546001600160a01b03166102d2565b61039e8282336107cd565b5050565b6103cd6040518060800160405280606081526020016000815260200160008152602001600081525090565b600082815260066020526040908190208151608081019092528054829082906103f5906111fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610421906111fd565b801561046e5780601f106104435761010080835404028352916020019161046e565b820191906000526020600020905b81548152906001019060200180831161045157829003601f168201915b5050505050815260200160018201548152602001600282015481526020016003820154815250509050919050565b6001600160a01b0382166104cb57604051633250574960e11b8152600060048201526024015b60405180910390fd5b60006104d88383336107da565b9050836001600160a01b0316816001600160a01b031614610526576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016104c2565b50505050565b6105478383836040518060200160405280600081525061062a565b505050565b61055686866108d3565b604080516080810182528581526020808201869052818301859052606082018490526000888152600690915291909120815181906105949082611285565b506020820151600182015560408201516002820155606090910151600390910155505050505050565b60006102d282610794565b60006001600160a01b0382166105f4576040516322718ad960e21b8152600060048201526024016104c2565b506001600160a01b031660009081526003602052604090205490565b6060600180546102e7906111fd565b61039e338383610938565b61063584848461049c565b610526848484846109d7565b606061064c82610794565b50600061066460408051602081019091526000815290565b9050600081511161068457604051806020016040528060008152506106af565b8061068e84610b00565b60405160200161069f929190611345565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6006602052600090815260409020805481906106ff906111fd565b80601f016020809104026020016040519081016040528092919081815260200182805461072b906111fd565b80156107785780601f1061074d57610100808354040283529160200191610778565b820191906000526020600020905b81548152906001019060200180831161075b57829003601f168201915b5050505050908060010154908060020154908060030154905084565b6000818152600260205260408120546001600160a01b0316806102d257604051637e27328960e01b8152600481018490526024016104c2565b6105478383836001610b93565b6000828152600260205260408120546001600160a01b039081169083161561080757610807818486610c99565b6001600160a01b0381161561084557610824600085600080610b93565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b03851615610874576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6001600160a01b0382166108fd57604051633250574960e11b8152600060048201526024016104c2565b600061090b838360006107da565b90506001600160a01b03811615610547576040516339e3563760e11b8152600060048201526024016104c2565b6001600160a01b03821661096a57604051630b61174360e31b81526001600160a01b03831660048201526024016104c2565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561052657604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610a19903390889087908790600401611374565b6020604051808303816000875af1925050508015610a54575060408051601f3d908101601f19168201909252610a51918101906113b1565b60015b610abd573d808015610a82576040519150601f19603f3d011682016040523d82523d6000602084013e610a87565b606091505b508051600003610ab557604051633250574960e11b81526001600160a01b03851660048201526024016104c2565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610af957604051633250574960e11b81526001600160a01b03851660048201526024016104c2565b5050505050565b60606000610b0d83610cfd565b600101905060008167ffffffffffffffff811115610b2d57610b2d610fb5565b6040519080825280601f01601f191660200182016040528015610b57576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610b6157509392505050565b8080610ba757506001600160a01b03821615155b15610c69576000610bb784610794565b90506001600160a01b03831615801590610be35750826001600160a01b0316816001600160a01b031614155b8015610bf65750610bf481846106b6565b155b15610c1f5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016104c2565b8115610c675783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610ca4838383610dd5565b610547576001600160a01b038316610cd257604051637e27328960e01b8152600481018290526024016104c2565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016104c2565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610d3c5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610d68576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610d8657662386f26fc10000830492506010015b6305f5e1008310610d9e576305f5e100830492506008015b6127108310610db257612710830492506004015b60648310610dc4576064830492506002015b600a83106102d25760010192915050565b60006001600160a01b03831615801590610e335750826001600160a01b0316846001600160a01b03161480610e0f5750610e0f84846106b6565b80610e3357506000828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160e01b031981168114610e5157600080fd5b50565b600060208284031215610e6657600080fd5b81356106af81610e3b565b60005b83811015610e8c578181015183820152602001610e74565b50506000910152565b60008151808452610ead816020860160208601610e71565b601f01601f19169290920160200192915050565b6020815260006106af6020830184610e95565b600060208284031215610ee657600080fd5b5035919050565b80356001600160a01b0381168114610f0457600080fd5b919050565b60008060408385031215610f1c57600080fd5b610f2583610eed565b946020939093013593505050565b602081526000825160806020840152610f4f60a0840182610e95565b90506020840151604084015260408401516060840152606084015160808401528091505092915050565b600080600060608486031215610f8e57600080fd5b610f9784610eed565b9250610fa560208501610eed565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610fe657610fe6610fb5565b604051601f8501601f19908116603f0116810190828211818310171561100e5761100e610fb5565b8160405280935085815286868601111561102757600080fd5b858560208301376000602087830101525050509392505050565b60008060008060008060c0878903121561105a57600080fd5b61106387610eed565b955060208701359450604087013567ffffffffffffffff81111561108657600080fd5b8701601f8101891361109757600080fd5b6110a689823560208401610fcb565b945050606087013592506080870135915060a087013590509295509295509295565b6000602082840312156110da57600080fd5b6106af82610eed565b600080604083850312156110f657600080fd5b6110ff83610eed565b91506020830135801515811461111457600080fd5b809150509250929050565b6000806000806080858703121561113557600080fd5b61113e85610eed565b935061114c60208601610eed565b925060408501359150606085013567ffffffffffffffff81111561116f57600080fd5b8501601f8101871361118057600080fd5b61118f87823560208401610fcb565b91505092959194509250565b600080604083850312156111ae57600080fd5b6111b783610eed565b91506111c560208401610eed565b90509250929050565b6080815260006111e16080830187610e95565b6020830195909552506040810192909252606090910152919050565b600181811c9082168061121157607f821691505b60208210810361123157634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561054757600081815260208120601f850160051c8101602086101561125e5750805b601f850160051c820191505b8181101561127d5782815560010161126a565b505050505050565b815167ffffffffffffffff81111561129f5761129f610fb5565b6112b3816112ad84546111fd565b84611237565b602080601f8311600181146112e857600084156112d05750858301515b600019600386901b1c1916600185901b17855561127d565b600085815260208120601f198616915b82811015611317578886015182559484019460019091019084016112f8565b50858210156113355787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008351611357818460208801610e71565b83519083019061136b818360208801610e71565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906113a790830184610e95565b9695505050505050565b6000602082840312156113c357600080fd5b81516106af81610e3b56fea2646970667358221220bb56c21e1c8b3f42cbe26548cba8bc2ddb6a1fce2657c746a023acf2a82066df64736f6c63430008140033",
  linkReferences: {},
  deployedLinkReferences: {},
};
