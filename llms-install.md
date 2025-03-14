# Polygon MCP Server Installation Guide for LLMs

This guide provides step-by-step instructions for LLM agents like Cline to install and configure the Polygon MCP Server.

## Prerequisites

- Node.js v16 or higher
- npm or yarn package manager
- A seed phrase for Ethereum wallet access

## Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/Dablclub/polygon-mcp.git
cd polygon-mcp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with a seed phrase:
```
SEED_PHRASE="your twelve word seed phrase here"
```

4. Build the project:
```bash
npm run build
```

5. Start the server:
```bash
npm start
```

## MCP Configuration

Add the following configuration to the appropriate MCP settings file:

For VSCode Claude extension:
```json
{
  "mcpServers": {
    "polygon": {
      "command": "node",
      "args": ["PATH_TO_REPO/build/index.js"],
      "env": {
        "SEED_PHRASE": "your twelve word seed phrase here"
      },
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Replace `PATH_TO_REPO` with the absolute path to the cloned repository.

## Generating a Seed Phrase

If you need to generate a new seed phrase, you can use the included script:

```bash
node generate-seed.js
```

## Available Tools

The Polygon MCP Server provides the following tools:

1. `call_contract`: Call a contract function on Polygon PoS
   - Parameters:
     - `contractAddress`: The address of the contract to call
     - `functionName`: The name of the function to call
     - `functionArgs`: The arguments to pass to the function
     - `abi`: The ABI of the contract

2. `erc20_balance`: Get the balance of an ERC20 token on Polygon PoS
   - Parameters:
     - `contractAddress`: The address of the contract to get the balance of

3. `erc20_transfer`: Transfer an ERC20 token on Polygon PoS
   - Parameters:
     - `contractAddress`: The address of the contract to transfer the token from
     - `toAddress`: The address of the recipient
     - `amount`: The amount of tokens to transfer

4. `get_gas_price`: Get the current gas price on Polygon PoS
   - No parameters required

## Troubleshooting

- If you encounter errors related to missing dependencies, try running `npm install` again.
- If the server fails to start, check that your seed phrase is correctly formatted in the `.env` file.
- For connection issues to the Polygon network, verify your internet connection and try again.

## Security Notes

- Keep your seed phrase secure. Anyone with access to this phrase can access your funds.
- The `.env` file is excluded from git by default to prevent accidental exposure of your seed phrase.
- Consider using a dedicated wallet for development purposes rather than one containing significant funds.
