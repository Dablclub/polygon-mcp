import {
  encodeFunctionData,
  erc20Abi,
  formatUnits,
  isAddress,
  parseUnits,
  type Abi,
  type AbiFunction,
  type Account,
  type PublicActions,
  type WalletClient,
} from "viem";
import type { z } from "zod";
import type {
  CallContractSchema,
  DeployPropertyNFTSchema,
  Erc20BalanceSchema,
  Erc20TransferSchema,
} from "./schemas.js";
import { constructPolygonScanUrl } from "../utils/index.js";
import { polygon } from "viem/chains";
import { PropertyNFT } from "../contracts/PropertyNFT.js";

export async function deployPropertyNFTHandler(
  wallet: WalletClient & PublicActions,
  args: z.infer<typeof DeployPropertyNFTSchema>
): Promise<string> {
  if (!wallet.account?.address) {
    throw new Error("No account address available");
  }
  const hash = await wallet.deployContract({
    abi: PropertyNFT.abi,
    account: wallet.account,
    chain: wallet.chain,
    bytecode: PropertyNFT.bytecode as `0x${string}`,
  });

  // Return transaction hash and PolygonScan URL
  return JSON.stringify({
    hash,
    url: constructPolygonScanUrl(wallet.chain ?? polygon, hash),
  });
}

export async function getAddressHandler(
  wallet: WalletClient & PublicActions
): Promise<string> {
  if (!wallet.account?.address) {
    throw new Error("No account address available");
  }
  return wallet.account.address;
}

export async function callContractHandler(
  wallet: WalletClient & PublicActions,
  args: z.infer<typeof CallContractSchema>
): Promise<string> {
  let abi: string | Abi = args.abi;
  try {
    abi = JSON.parse(abi) as Abi;
  } catch (error) {
    throw new Error(`Invalid ABI: ${error}`);
  }

  if (!isAddress(args.contractAddress, { strict: false })) {
    throw new Error(`Invalid contract address: ${args.contractAddress}`);
  }
  let functionAbi: AbiFunction | undefined;

  try {
    functionAbi = abi.find(
      (item) => "name" in item && item.name === args.functionName
    ) as AbiFunction;
  } catch (error) {
    throw new Error(`Invalid function name: ${args.functionName}`);
  }

  if (
    functionAbi.stateMutability === "view" ||
    functionAbi.stateMutability === "pure"
  ) {
    const tx = await wallet.readContract({
      address: args.contractAddress,
      abi,
      functionName: args.functionName,
      args: args.functionArgs,
    });

    return String(tx);
  }

  const tx = await wallet.simulateContract({
    account: wallet.account,
    abi,
    address: args.contractAddress,
    functionName: args.functionName,
    value: BigInt(args.value ?? 0),
    args: args.functionArgs,
  });

  const txHash = await wallet.writeContract(tx.request);

  return JSON.stringify({
    hash: txHash,
    url: constructPolygonScanUrl(wallet.chain ?? polygon, txHash),
  });
}

export async function erc20BalanceHandler(
  wallet: WalletClient & PublicActions,
  args: z.infer<typeof Erc20BalanceSchema>
): Promise<string> {
  const { contractAddress } = args;

  if (!isAddress(contractAddress, { strict: false })) {
    throw new Error(`Invalid contract address: ${contractAddress}`);
  }

  const balance = await wallet.readContract({
    address: contractAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [wallet.account?.address ?? "0x"],
  });

  const decimals = await wallet.readContract({
    address: contractAddress,
    abi: erc20Abi,
    functionName: "decimals",
  });

  return formatUnits(balance, decimals);
}

export async function erc20TransferHandler(
  wallet: WalletClient & PublicActions,
  args: z.infer<typeof Erc20TransferSchema>
): Promise<string> {
  const { contractAddress, toAddress, amount } = args;

  if (!isAddress(contractAddress, { strict: false })) {
    throw new Error(`Invalid contract address: ${contractAddress}`);
  }

  if (!isAddress(toAddress, { strict: false })) {
    throw new Error(`Invalid to address: ${toAddress}`);
  }

  // Get decimals for token
  const decimals = await wallet.readContract({
    address: contractAddress,
    abi: erc20Abi,
    functionName: "decimals",
  });

  // Format units
  const atomicUnits = parseUnits(amount, decimals);

  const tx = await wallet.simulateContract({
    address: contractAddress,
    abi: erc20Abi,
    functionName: "transfer",
    args: [toAddress, atomicUnits],
    account: wallet.account,
    chain: wallet.chain,
  });

  const txHash = await wallet.writeContract(tx.request);

  return JSON.stringify({
    hash: txHash,
    url: constructPolygonScanUrl(wallet.chain ?? polygon, txHash),
  });
}

export async function getGasPriceHandler(
  wallet: WalletClient & PublicActions
): Promise<string> {
  const gasPrice = await wallet.getGasPrice();
  return formatUnits(gasPrice, 9) + " Gwei";
}
