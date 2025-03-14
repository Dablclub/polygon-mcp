import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  callContractHandler,
  erc20BalanceHandler,
  erc20TransferHandler,
  getGasPriceHandler,
} from "./handlers.js";

const callContractTool: Tool = {
  name: "call_contract",
  description: "Call a contract function on Polygon PoS",
  inputSchema: {
    type: "object",
    properties: {
      contractAddress: {
        type: "string",
        description: "The address of the contract to call",
      },
      functionName: {
        type: "string",
        description: "The name of the function to call",
      },
      functionArgs: {
        type: "array",
        description: "The arguments to pass to the function",
        items: {
          type: "string",
        },
      },
      abi: {
        type: "string",
        description: "The ABI of the contract",
      },
    },
    required: ["contractAddress", "functionName", "abi"],
  },
};

const erc20BalanceTool: Tool = {
  name: "erc20_balance",
  description: "Get the balance of an ERC20 token on Polygon PoS",
  inputSchema: {
    type: "object",
    properties: {
      contractAddress: {
        type: "string",
        description: "The address of the contract to get the balance of",
      },
    },
    required: ["contractAddress"],
  },
};

const erc20TransferTool: Tool = {
  name: "erc20_transfer",
  description: "Transfer an ERC20 token on Polygon PoS",
  inputSchema: {
    type: "object",
    properties: {
      contractAddress: {
        type: "string",
        description: "The address of the contract to transfer the token from",
      },
      toAddress: {
        type: "string",
        description: "The address of the recipient",
      },
      amount: {
        type: "string",
        description: "The amount of tokens to transfer",
      },
    },
    required: ["contractAddress", "toAddress", "amount"],
  },
};

const getGasPriceTool: Tool = {
  name: "get_gas_price",
  description: "Get the current gas price on Polygon PoS",
  inputSchema: {
    type: "object",
    properties: {},
  },
};

export const polygonMcpTools: Tool[] = [
  callContractTool,
  erc20BalanceTool,
  erc20TransferTool,
  getGasPriceTool,
];

// biome-ignore lint/complexity/noBannedTypes: temp
export const toolToHandler: Record<string, Function> = {
  call_contract: callContractHandler,
  erc20_balance: erc20BalanceHandler,
  erc20_transfer: erc20TransferHandler,
  get_gas_price: getGasPriceHandler,
};
