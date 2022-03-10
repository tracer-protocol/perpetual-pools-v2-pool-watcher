/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolKeeper, PoolKeeperInterface } from "../PoolKeeper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
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
        name: "_pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "keeper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "KeeperPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "keeper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expectedReward",
        type: "uint256",
      },
    ],
    name: "KeeperPaymentError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "firstPrice",
        type: "int256",
      },
    ],
    name: "PoolAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "PoolUpkeepError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "startPrice",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "endPrice",
        type: "int256",
      },
    ],
    name: "UpkeepSuccessful",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_TIP",
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
    inputs: [],
    name: "BLOCK_TIME",
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
    inputs: [],
    name: "MAX_DECIMALS",
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
    inputs: [],
    name: "MAX_TIP",
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
    inputs: [],
    name: "TIP_DELTA_PER_BLOCK",
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
        internalType: "address[]",
        name: "_pools",
        type: "address[]",
      },
    ],
    name: "checkUpkeepMultiplePools",
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
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "checkUpkeepSinglePool",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "executionPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IPoolFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gasPrice",
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
        name: "_pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasSpent",
        type: "uint256",
      },
    ],
    name: "keeperGas",
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
        name: "_pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasSpent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_savedPreviousUpdatedTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_poolInterval",
        type: "uint256",
      },
    ],
    name: "keeperReward",
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
        internalType: "uint256",
        name: "_savedPreviousUpdatedTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_poolInterval",
        type: "uint256",
      },
    ],
    name: "keeperTip",
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
        name: "_poolAddress",
        type: "address",
      },
    ],
    name: "newPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "address[]",
        name: "pools",
        type: "address[]",
      },
    ],
    name: "performUpkeepMultiplePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "performUpkeepSinglePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    name: "setFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setGasPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526402540be4006003553480156200001a57600080fd5b50604051620021d3380380620021d38339810160408190526200003d9162000119565b6200004833620000c9565b6001600160a01b038116620000a35760405162461bcd60e51b815260206004820152601b60248201527f466163746f72792063616e6e6f74206265203020616464726573730000000000604482015260640160405180910390fd5b600280546001600160a01b0319166001600160a01b03929092169190911790556200014b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156200012c57600080fd5b81516001600160a01b03811681146200014457600080fd5b9392505050565b612078806200015b6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063b3fbb7c4116100b8578063ce1dcdfc1161007c578063ce1dcdfc14610269578063f2fde38b1461027c578063f6bd4a951461028f578063f930191014610297578063fcab9e981461029f578063fe173b97146102b257600080fd5b8063b3fbb7c4146101fd578063b9c6536514610210578063bf1fe42014610223578063c45a015514610236578063cdd9e1371461024957600080fd5b80638da5cb5b116100ff5780638da5cb5b146101aa57806391a60782146101cf5780639f9a3d95146101e2578063a40d6b80146101ea578063aea8acb1146101e257600080fd5b80630417cf8e1461013c578063225739b1146101575780633c5c7fb31461017a5780635bb478081461018f578063715018a6146101a2575b600080fd5b610144601281565b6040519081526020015b60405180910390f35b61016a610165366004611b4e565b6102bb565b604051901515815260200161014e565b61018d610188366004611b4e565b6103bc565b005b61018d61019d366004611b4e565b6105ca565b61018d610616565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161014e565b61018d6101dd366004611b4e565b61064c565b610144600581565b6101446101f8366004611b88565b610938565b61014461020b366004611bbd565b610a85565b61014461021e366004611d7c565b610c6f565b61018d610231366004611d63565b610ccb565b6002546101b7906001600160a01b031681565b610144610257366004611b4e565b60016020526000908152604090205481565b61016a610277366004611c01565b610cfa565b61018d61028a366004611b4e565b610d5e565b610144606481565b610144600d81565b61018d6102ad366004611c01565b610df9565b61014460035481565b600254604051635ab78ee160e01b81526001600160a01b0383811660048301526000921690635ab78ee19060240160206040518083038186803b15801561030157600080fd5b505afa158015610315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103399190611c76565b61034557506000919050565b816001600160a01b0316637bbf10336040518163ffffffff1660e01b815260040160206040518083038186803b15801561037e57600080fd5b505afa158015610392573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b69190611c76565b92915050565b6002546001600160a01b031633146104105760405162461bcd60e51b815260206004820152601260248201527143616c6c6572206e6f7420666163746f727960701b60448201526064015b60405180910390fd5b6000816001600160a01b031663b9ed8abf6040518163ffffffff1660e01b815260040160206040518083038186803b15801561044b57600080fd5b505afa15801561045f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104839190611b6b565b90506000816001600160a01b03166398d5fdca6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104c057600080fd5b505afa1580156104d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f89190611c98565b90506000811361054a5760405162461bcd60e51b815260206004820152601b60248201527f4669727374207072696365206973206e6f6e2d706f73697469766500000000006044820152606401610407565b600061057061056b61055b84610e47565b668075782dace9d960c71b610ed5565b611152565b905081846001600160a01b03167fe950cb32f7a787627d713d7365623fef2d762ef8fcf813b865a04350852deb9b60405160405180910390a36001600160a01b039093166000908152600160205260409020929092555050565b6000546001600160a01b031633146105f45760405162461bcd60e51b815260040161040790611e00565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146106405760405162461bcd60e51b815260040161040790611e00565b61064a60006111f9565b565b60005a905061065a826102bb565b610662575050565b60008290506000816001600160a01b031663b9ed8abf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106a257600080fd5b505afa1580156106b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106da9190611b6b565b9050806001600160a01b031663a11752796040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561071757600080fd5b505af115801561072b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074f9190611c98565b50600080600080856001600160a01b03166304883c276040518163ffffffff1660e01b815260040160006040518083038186803b15801561078f57600080fd5b505afa1580156107a3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107cb9190810190611cb1565b6001600160a01b038c81166000908152600160205260409081902080549087905590516303d8ce9d60e61b81526004810182905260248101879052959950939750919550935090919088169063f633a74090604401600060405180830381600087803b15801561083a57600080fd5b505af192505050801561084b575060015b6108ca57610857611f87565b806308c379a014156108be575061086c611fa3565b8061087757506108c0565b896001600160a01b03167f8a47468bf96478429d382ed6385d9c77fba8b89540cd88199b1b51d5723b11fa826040516108b09190611ded565b60405180910390a25061092d565b505b3d6000803e3d6000fd5b60005a6108d7908a611e8e565b90506108e88a600354838787611249565b85828b6001600160a01b03167f0aa8d2838ad6d4e2a5d7ca0826dfdbc36d922adf8fe5c6d25aee2724b07de074886040516109239190611ded565b60405180910390a4505b505050505050505050565b600080846001600160a01b0316638226f3966040518163ffffffff1660e01b815260040160206040518083038186803b15801561097457600080fd5b505afa158015610988573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ac9190611b6b565b6001600160a01b03166398d5fdca6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109e457600080fd5b505afa1580156109f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1c9190611c98565b905060008113610a30576000915050610a7e565b6000610a44610a3f8587611e6f565b61136e565b90506000610a518361136e565b9050610a78610a73610a638484610ed5565b668075782dace9d960c71b6113d2565b611668565b93505050505b9392505050565b600080610a93878787610938565b90506000610aa4610a3f8686610c6f565b9050610ab981610ab4606461136e565b6113d2565b90506000610ae661056b610acc8561136e565b610ae1610a63610adb8861136e565b87610ed5565b6116eb565b90506000896001600160a01b031663217a4b706040518163ffffffff1660e01b815260040160206040518083038186803b158015610b2357600080fd5b505afa158015610b37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5b9190611b6b565b6001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610b9357600080fd5b505afa158015610ba7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcb9190611d9e565b60405163bf36f0e960e01b81526004810184905260ff9190911660248201819052915060009073__$dc3b4b0a367edd91a2d74c73e2da54c142$__9063bf36f0e99060440160206040518083038186803b158015610c2857600080fd5b505af4158015610c3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c609190611c98565b9b9a5050505050505050505050565b600080610c7c8385611e35565b610c869042611e8e565b90506000600d610c97836005611e6f565b610ca19190611e4d565b610cac906005611e35565b90506064811115610cc2576064925050506103b6565b91506103b69050565b6000546001600160a01b03163314610cf55760405162461bcd60e51b815260040161040790611e00565b600355565b600081815b81811015610d5357610d31858583818110610d1c57610d1c611f5b565b90506020020160208101906101659190611b4e565b15610d41576001925050506103b6565b80610d4b81611efe565b915050610cff565b506000949350505050565b6000546001600160a01b03163314610d885760405162461bcd60e51b815260040161040790611e00565b6001600160a01b038116610ded5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610407565b610df6816111f9565b50565b8060005b81811015610e4157610e2f848483818110610e1a57610e1a611f5b565b90506020020160208101906101dd9190611b4e565b80610e3981611efe565b915050610dfd565b50505050565b600081610e5657506000919050565b6000808313610e685782600003610e6a565b825b90506000610e7782611aab565b90506070811015610e90578060700382901b9150610ea3565b6070811115610ea3576070810382901c91505b6001600160701b03909116613fff820160701b17906000841215610ecb576001607f1b821791505b5060801b92915050565b6000617fff60f084811c8216919084901c811690821415610f855780617fff1415610f53576001600160801b03198581169085161415610f2057505050600160ff1b811682186103b6565b600160ff1b6001600160801b0319868618161415610f43575050508181176103b6565b5061ffff60ef1b91506103b69050565b600160801b600160ff1b038416610f74575061ffff60ef1b91506103b69050565b505050600160ff1b811682186103b6565b80617fff1415610fc157600160801b600160ff1b038516610fb0575061ffff60ef1b91506103b69050565b505050600160ff1b821681186103b6565b6001600160701b03608086901c1682610fdd5760019250610fe4565b600160701b175b6001600160701b03608086901c16826110005760019250611007565b600160701b175b908102908161103557600160ff1b8787181661102457600061102a565b600160ff1b5b9450505050506103b6565b928201926000600160e11b83101561106857600160e01b8310156110615761105c83611aab565b61106b565b60e061106b565b60e15b90506140708186011015611086576000945060009250611123565b6140e081860110156110c9576140708510156110ab57846140700383901c92506110c0565b6140708511156110c057614070850383901b92505b60009450611123565b61c0dd81860111156110e357617fff945060009250611123565b60708111156110fa576070810383901c925061110d565b607081101561110d578060700383901b92505b6001600160701b03831692506140df8186010394505b82607086901b888a186001607f1b60801b1660801c6001600160801b0316171760801b955050505050506103b6565b6000617fff60f083901c166140fe81111561116c57600080fd5b613fff81101561117f5750600092915050565b600160701b6001600160701b03608085901c161761406f8210156111a95761406f8290031c6111bb565b61406f8211156111bb5761406e1982011b5b6001607f1b608085901c106111e557600160ff1b8111156111db57600080fd5b6000039392505050565b6001600160ff1b03811115610a7e57600080fd5b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006112588686868686610a85565b604051636dc2b27160e01b8152336004820152602481018290529091506001600160a01b03871690636dc2b27190604401602060405180830381600087803b1580156112a357600080fd5b505af11580156112b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112db9190611c76565b156113255760405181815233906001600160a01b038816907ff03012dd4aab142682aa01439f94e975e2ec77ef558352323bc05f382f74b0829060200160405180910390a3611366565b60405181815233906001600160a01b038816907f08b35d4c86707ba44cdcc5efaa79b8a307e6c7f789f1eb86ca1ff1e9bde056979060200160405180910390a35b505050505050565b60008161137d57506000919050565b81600061138982611aab565b905060708110156113a2578060700382901b91506113b5565b60708111156113b5576070810382901c91505b613fff0160701b6001600160701b03919091161760801b92915050565b6000617fff60f084811c8216919084901c8116908214156114075780617fff1415610f74575061ffff60ef1b91506103b69050565b80617fff141561144b576dffffffffffffffffffffffffffff60801b84161561143a575061ffff60ef1b91506103b69050565b505050808218600160ff1b166103b6565b600160801b600160ff1b03841661149557600160801b600160ff1b03851661147d575061ffff60ef1b91506103b69050565b505050808218600160ff1b16617fff60f01b176103b6565b6001600160701b03608085901c16816114b157600191506114b8565b600160701b175b6001600160701b03608087901c16836114f75780156114f25760006114dc82611aab565b6001955060e20393840160711901939190911b90505b611501565b600160701b1760721b5b81818161151057611510611f45565b0490508061152c57600160ff1b8787181661102457600061102a565b6001606c1b81101561154057611540611f19565b6000600160731b82101561157f57600160721b82101561157457600160711b82101561156d576070611577565b6071611577565b60725b60ff16611588565b61158882611aab565b9050836140710181860111156115a657617fff945060009150611639565b83818601613ffc0110156115c1576000945060009150611639565b83818601613f8c01101561160e578385613ffc0111156115ec578385613ffc010382901b9150611605565b8385613ffc01101561160557613ffc8585030382901c91505b60009450611639565b6070811115611621576070810382901c91505b6001600160701b038216915083818601613f8d010394505b81607086901b888a186001607f1b60801b1660801c6001600160801b0316171760801b955050505050506103b6565b6000617fff60f083901c16613fff8110156116865750600092915050565b6001607f1b608084901c1061169a57600080fd5b6140fe8111156116a957600080fd5b600160701b6001600160701b03608085901c161761406f8210156116d35761406f8290031c610a7e565b61406f821115610a7e5761406e1982011b9392505050565b6000617fff60f084811c8216919084901c8116908214156117395780617fff141561172f576001600160801b03198581169085161415610f435784925050506103b6565b84925050506103b6565b80617fff141561174d5783925050506103b6565b6001607f1b608086901c90811015906001600160701b031683611773576001935061177a565b600160701b175b6001607f1b608087901c90811015906001600160701b0316846117a057600194506117a7565b600160701b175b826117d7576001600160801b03198816600160ff1b146117c757876117ca565b60005b96505050505050506103b6565b806117f7576001600160801b03198916600160ff1b146117c757886117ca565b848603841515831515141561190257607081131561181e57899750505050505050506103b6565b60008113156118305790811c9061185f565b606f1981121561184957889750505050505050506103b6565b600081121561185f578060000384901c93508596505b92810192600160711b841061187a576001968701969390931c925b86617fff14156118ac578461189457617fff60f01b61189e565b6001600160f01b03195b9750505050505050506103b6565b600160701b8410156118c157600096506118ce565b6001600160701b03841693505b83607088901b866118e05760006118e6565b6001607f1b5b6001600160801b0316171760801b9750505050505050506103b6565b600081131561191d57600184901b9350600187039650611934565b600081121561193457600182901b91506001860396505b60708113156119465760019150611993565b6001811315611963576001810360018303901c6001019150611993565b606f198112156119765760019350611993565b600019811215611993576001816000030360018503901c60010193505b8184106119a45781840393506119ad565b83820393508294505b836119c35750600096506103b695505050505050565b60006119ce85611aab565b905080607114156119f457600185901c6001600160701b03169450600188019750611a43565b6070811015611a3657607081900380891115611a23578086901b6001600160701b031695508089039850611a30565b600098600019019590951b945b50611a43565b6001600160701b03851694505b87617fff1415611a765785611a5d57617fff60f01b611a67565b6001600160f01b03195b985050505050505050506103b6565b84607089901b87611a88576000611a8e565b6001607f1b5b6001600160801b0316171760801b985050505050505050506103b6565b6000808211611ab957600080fd5b6000600160801b8310611ace57608092831c92015b680100000000000000008310611ae657604092831c92015b6401000000008310611afa57602092831c92015b620100008310611b0c57601092831c92015b6101008310611b1d57600892831c92015b60108310611b2d57600492831c92015b60048310611b3d57600292831c92015b600283106103b65760010192915050565b600060208284031215611b6057600080fd5b8135610a7e8161202d565b600060208284031215611b7d57600080fd5b8151610a7e8161202d565b600080600060608486031215611b9d57600080fd5b8335611ba88161202d565b95602085013595506040909401359392505050565b600080600080600060a08688031215611bd557600080fd5b8535611be08161202d565b97602087013597506040870135966060810135965060800135945092505050565b60008060208385031215611c1457600080fd5b823567ffffffffffffffff80821115611c2c57600080fd5b818501915085601f830112611c4057600080fd5b813581811115611c4f57600080fd5b8660208260051b8501011115611c6457600080fd5b60209290920196919550909350505050565b600060208284031215611c8857600080fd5b81518015158114610a7e57600080fd5b600060208284031215611caa57600080fd5b5051919050565b60008060008060808587031215611cc757600080fd5b84519350602085015167ffffffffffffffff80821115611ce657600080fd5b818701915087601f830112611cfa57600080fd5b815181811115611d0c57611d0c611f71565b6040519150611d25601f8201601f191660200183611ed1565b808252886020828501011115611d3a57600080fd5b611d4b816020840160208601611ea5565b50604087015160609097015195989097509350505050565b600060208284031215611d7557600080fd5b5035919050565b60008060408385031215611d8f57600080fd5b50508035926020909101359150565b600060208284031215611db057600080fd5b815160ff81168114610a7e57600080fd5b60008151808452611dd9816020860160208601611ea5565b601f01601f19169290920160200192915050565b602081526000610a7e6020830184611dc1565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115611e4857611e48611f2f565b500190565b600082611e6a57634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611e8957611e89611f2f565b500290565b600082821015611ea057611ea0611f2f565b500390565b60005b83811015611ec0578181015183820152602001611ea8565b83811115610e415750506000910152565b601f8201601f1916810167ffffffffffffffff81118282101715611ef757611ef7611f71565b6040525050565b6000600019821415611f1257611f12611f2f565b5060010190565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d1115611fa05760046000803e5060005160e01c5b90565b600060443d1015611fb15790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715611fe157505050505090565b8285019150815181811115611ff95750505050505090565b843d87010160208285010111156120135750505050505090565b61202260208286010187611ed1565b509095945050505050565b6001600160a01b0381168114610df657600080fdfea264697066735822122011618fa2f691d9223bf167bac749a13f5d4bad03c5273509f58f4206c7a0608a64736f6c63430008070033";

export class PoolKeeper__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: PoolKeeperLibraryAddresses,
    signer?: Signer
  ) {
    super(_abi, PoolKeeper__factory.linkBytecode(linkLibraryAddresses), signer);
  }

  static linkBytecode(
    linkLibraryAddresses: PoolKeeperLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$dc3b4b0a367edd91a2d74c73e2da54c142\\$__", "g"),
      linkLibraryAddresses[
        "contracts/implementation/PoolSwapLibrary.sol:PoolSwapLibrary"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoolKeeper> {
    return super.deploy(_factory, overrides || {}) as Promise<PoolKeeper>;
  }
  getDeployTransaction(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  attach(address: string): PoolKeeper {
    return super.attach(address) as PoolKeeper;
  }
  connect(signer: Signer): PoolKeeper__factory {
    return super.connect(signer) as PoolKeeper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolKeeperInterface {
    return new utils.Interface(_abi) as PoolKeeperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolKeeper {
    return new Contract(address, _abi, signerOrProvider) as PoolKeeper;
  }
}

export interface PoolKeeperLibraryAddresses {
  ["contracts/implementation/PoolSwapLibrary.sol:PoolSwapLibrary"]: string;
}
