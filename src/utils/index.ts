import type { Chain } from "viem";
import { polygon, polygonMumbai } from "viem/chains";

export function constructPolygonScanUrl(
  chain: Chain,
  transactionHash: `0x${string}`,
) {
  if (chain.id === polygon.id) {
    return `https://polygonscan.com/tx/${transactionHash}`;
  }

  if (chain.id === polygonMumbai.id) {
    return `https://mumbai.polygonscan.com/tx/${transactionHash}`;
  }

  // Default to mainnet
  return `https://polygonscan.com/tx/${transactionHash}`;
}
