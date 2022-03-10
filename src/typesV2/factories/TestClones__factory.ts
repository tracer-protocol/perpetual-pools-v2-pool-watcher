/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestClones, TestClonesInterface } from "../TestClones";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "clone",
    outputs: [
      {
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "cloneDeterministic",
    outputs: [
      {
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "predictDeterministicAddress",
    outputs: [
      {
        internalType: "address",
        name: "predicted",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610311806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638124b78e1461004657806393a7e71114610075578063b86b2ceb146100e1575b600080fd5b610059610054366004610253565b6100f4565b6040516001600160a01b03909116815260200160405180910390f35b61005961008336600461029f565b604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b8152606093841b60148201526f5af43d82803e903d91602b57fd5bf3ff60801b6028820152921b6038830152604c8201526037808220606c830152605591012090565b6100596100ef366004610275565b610196565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b0381166101915760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b60448201526064015b60405180910390fd5b919050565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528360601b60148201526e5af43d82803e903d91602b57fd5bf360881b6028820152826037826000f59150506001600160a01b0381166102365760405162461bcd60e51b815260206004820152601760248201527f455243313136373a2063726561746532206661696c65640000000000000000006044820152606401610188565b92915050565b80356001600160a01b038116811461019157600080fd5b60006020828403121561026557600080fd5b61026e8261023c565b9392505050565b6000806040838503121561028857600080fd5b6102918361023c565b946020939093013593505050565b6000806000606084860312156102b457600080fd5b6102bd8461023c565b9250602084013591506102d26040850161023c565b9050925092509256fea2646970667358221220d4c29dfff085c52821a6e7a2b6ab11e953cba6dd3ee04a713466a20ba49aa62e64736f6c63430008070033";

export class TestClones__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestClones> {
    return super.deploy(overrides || {}) as Promise<TestClones>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestClones {
    return super.attach(address) as TestClones;
  }
  connect(signer: Signer): TestClones__factory {
    return super.connect(signer) as TestClones__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestClonesInterface {
    return new utils.Interface(_abi) as TestClonesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestClones {
    return new Contract(address, _abi, signerOrProvider) as TestClones;
  }
}
