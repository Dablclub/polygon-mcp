import { z } from "zod";

export const CallContractSchema = z.object({
  contractAddress: z.string().describe("The address of the contract to call"),
  functionName: z.string().describe("The name of the function to call"),
  functionArgs: z
    .array(z.string())
    .describe("The arguments to pass to the function"),
  abi: z.string().describe("The ABI of the contract"),
  value: z
    .string()
    .optional()
    .describe("The value of MATIC to send with the transaction"),
});

export const Erc20BalanceSchema = z.object({
  contractAddress: z
    .string()
    .describe("The address of the contract to get the balance of"),
});

export const Erc20TransferSchema = z.object({
  contractAddress: z
    .string()
    .describe("The address of the contract to transfer the token from"),
  toAddress: z.string().describe("The address of the recipient"),
  amount: z.string().describe("The amount of tokens to transfer"),
});

export const GetGasPriceSchema = z.object({});
