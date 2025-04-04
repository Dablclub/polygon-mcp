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

export const GetAddressSchema = z.object({});

export const DeployPropertyNFTSchema = z.object({});

export const DeployPropertyTokenSchema = z.object({
  propertyNFTAddress: z.string().describe("The address of the PropertyNFT"),
  propertyId: z.string().describe("The ID of the property"),
  name: z
    .string()
    .describe("The token name for the fractional ownership token"),
  symbol: z
    .string()
    .describe("The token symbol for the fractional ownership token"),
});

export const DeployPropertyYieldVaultSchema = z.object({
  assetAddress: z
    .string()
    .describe(
      "The address of the underlying ERC20 PropertyToken that this vault accepts"
    ),
  name: z
    .string()
    .describe(
      "The name of the vault token (e.g., 'Apartment Building Yield Vault')"
    ),
  symbol: z.string().describe("The symbol of the vault token (e.g., 'aREITS')"),
  propertyNFTAddress: z
    .string()
    .describe(
      "The address of the PropertyNFT contract containing the real-world asset information"
    ),
  propertyId: z
    .string()
    .describe("The ID of the specific property NFT this vault is linked to"),
});
