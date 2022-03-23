/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestToken, TestTokenInterface } from "../TestToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint8",
        name: "newDecimals",
        type: "uint8",
      },
    ],
    name: "setDecimals",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526005805460ff191660121790553480156200001e57600080fd5b5060405162000e7c38038062000e7c8339810160408190526200004191620001d8565b8151829082906200005a9060039060208501906200007b565b508051620000709060049060208401906200007b565b505050505062000295565b828054620000899062000242565b90600052602060002090601f016020900481019282620000ad5760008555620000f8565b82601f10620000c857805160ff1916838001178555620000f8565b82800160010185558215620000f8579182015b82811115620000f8578251825591602001919060010190620000db565b50620001069291506200010a565b5090565b5b808211156200010657600081556001016200010b565b600082601f8301126200013357600080fd5b81516001600160401b03808211156200015057620001506200027f565b604051601f8301601f19908116603f011681019082821181831017156200017b576200017b6200027f565b816040528381526020925086838588010111156200019857600080fd5b600091505b83821015620001bc57858201830151818301840152908201906200019d565b83821115620001ce5760008385830101525b9695505050505050565b60008060408385031215620001ec57600080fd5b82516001600160401b03808211156200020457600080fd5b620002128683870162000121565b935060208501519150808211156200022957600080fd5b50620002388582860162000121565b9150509250929050565b600181811c908216806200025757607f821691505b602082108114156200027957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610bd780620002a56000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c5780639dc29fac116100665780639dc29fac146101e7578063a457c2d7146101fa578063a9059cbb1461020d578063dd62ed3e1461022057600080fd5b806370a08231146101925780637a1395aa146101bb57806395d89b41146101df57600080fd5b806323b872dd116100c857806323b872dd14610142578063313ce56714610155578063395093511461016a57806340c10f191461017d57600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f7610259565b6040516101049190610acc565b60405180910390f35b61012061011b366004610a7f565b6102eb565b6040519015158152602001610104565b6002545b604051908152602001610104565b610120610150366004610a43565b610301565b60055460405160ff9091168152602001610104565b610120610178366004610a7f565b6103b0565b61019061018b366004610a7f565b6103ec565b005b6101346101a03660046109ee565b6001600160a01b031660009081526020819052604090205490565b6101906101c9366004610aa9565b6005805460ff191660ff92909216919091179055565b6100f76103fa565b6101906101f5366004610a7f565b610409565b610120610208366004610a7f565b610413565b61012061021b366004610a7f565b6104ac565b61013461022e366004610a10565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461026890610b50565b80601f016020809104026020016040519081016040528092919081815260200182805461029490610b50565b80156102e15780601f106102b6576101008083540402835291602001916102e1565b820191906000526020600020905b8154815290600101906020018083116102c457829003601f168201915b5050505050905090565b60006102f83384846104b9565b50600192915050565b600061030e8484846105de565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103985760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103a585338584036104b9565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102f89185906103e7908690610b21565b6104b9565b6103f682826107ad565b5050565b60606004805461026890610b50565b6103f6828261088c565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104955760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161038f565b6104a233858584036104b9565b5060019392505050565b60006102f83384846105de565b6001600160a01b03831661051b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161038f565b6001600160a01b03821661057c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161038f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106425760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161038f565b6001600160a01b0382166106a45760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161038f565b6001600160a01b0383166000908152602081905260409020548181101561071c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161038f565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610753908490610b21565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079f91815260200190565b60405180910390a350505050565b6001600160a01b0382166108035760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161038f565b80600260008282546108159190610b21565b90915550506001600160a01b03821660009081526020819052604081208054839290610842908490610b21565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166108ec5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161038f565b6001600160a01b038216600090815260208190526040902054818110156109605760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161038f565b6001600160a01b038316600090815260208190526040812083830390556002805484929061098f908490610b39565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105d1565b80356001600160a01b03811681146109e957600080fd5b919050565b600060208284031215610a0057600080fd5b610a09826109d2565b9392505050565b60008060408385031215610a2357600080fd5b610a2c836109d2565b9150610a3a602084016109d2565b90509250929050565b600080600060608486031215610a5857600080fd5b610a61846109d2565b9250610a6f602085016109d2565b9150604084013590509250925092565b60008060408385031215610a9257600080fd5b610a9b836109d2565b946020939093013593505050565b600060208284031215610abb57600080fd5b813560ff81168114610a0957600080fd5b600060208083528351808285015260005b81811015610af957858101830151858201604001528201610add565b81811115610b0b576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610b3457610b34610b8b565b500190565b600082821015610b4b57610b4b610b8b565b500390565b600181811c90821680610b6457607f821691505b60208210811415610b8557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220ae71e90af6400111a7c8b8dccc99f1583ecba7245c796d7de748310ce94a880764736f6c63430008070033";

export class TestToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestToken> {
    return super.deploy(name, symbol, overrides || {}) as Promise<TestToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new utils.Interface(_abi) as TestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}
