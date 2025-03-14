import bip39 from 'bip39';

// Generate a random mnemonic (128-bit entropy = 12 words)
const mnemonic = bip39.generateMnemonic();
console.log("Your seed phrase:");
console.log(mnemonic);
console.log("\nIMPORTANT: Store this seed phrase securely. Anyone with access to this phrase can access your funds.");
