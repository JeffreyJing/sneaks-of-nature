import TOKEN_HOLDERS from '../assets/whitelist-tokens/holders.json';

export { TOKEN_HOLDERS };

export const TESTING_MODE = false;

export const DISCORD_URL = "https://discord.com/invite/GFbFZB78Cd";
export const TWITTER_URL = "https://twitter.com/sneaksofnature";
export const OPENSEA_URL = "https://opensea.io/collection/relics-pass"; // TODO
export const LOOKSRARE_URL = ""; // TODO
export const INSTAGRAM_URL = "https://www.instagram.com/metarelics/";
export const PRINTS_URL = "https://www.metarelics.co/";
export const RELICS_URL = ""; // https://metarelics.xyz
export const IKONICK_TWITTER_URL = "https://twitter.com/TeamIKONICK";
export const IKONICK_INSTAGRAM_URL = "https://www.instagram.com/ikonick/";

const MAINNET_BURN_ADDRESS = '0x3A6517C1f841D7e9621d5fbd0eB0b75eB030f5f2';
const MAINNET_RELIC_PUNKS_ADDRESS = '0xcB264E46F558876Fb73F23349073C7D51076D605';
const MAINNET_RELIC_PUNKS_AIRDROP_ADDRESS = '0x8c198b492cAda2Fd9697E8E9ac61f706f1E817EC';

const TESTNET_BURN_ADDRESS = '0x399F5906F7faeefe1E00A51176d0CEb85d176101';
const TESTNET_RELIC_PUNKS_ADDRESS = '0x6E61aB833Ce83E3Cb5C4A9800fe7DcDaf81e5072';
const TESTNET_RELIC_PUNKS_AIRDROP_ADDRESS = '0x1ef2cA495007bCAD873AE803a53A70bDFaa97Faa';

export const BURN_ADDRESS = TESTING_MODE ? TESTNET_BURN_ADDRESS : MAINNET_BURN_ADDRESS;
export const RELIC_PUNKS_ADDRESS = TESTING_MODE ? TESTNET_RELIC_PUNKS_ADDRESS : MAINNET_RELIC_PUNKS_ADDRESS;
export const BURN_RELIC_PUNKS_AIRDROP_ADDRESS = TESTING_MODE ? TESTNET_RELIC_PUNKS_AIRDROP_ADDRESS : MAINNET_RELIC_PUNKS_AIRDROP_ADDRESS;

// THESE ARE UNUSED VARIABLES, DO NOT TOUCH THEM
const MAINNET_CONTRACT_ADDRESS = '0x1ECFDCcf97EdD64Fb73890Ca4541f306456A21eC';
const TESTNET_CONTRACT_ADDRESS = '0x1ECFDCcf97EdD64Fb73890Ca4541f306456A21eC';
export const CONTRACT_ADDRESS = TESTING_MODE ? TESTNET_CONTRACT_ADDRESS : MAINNET_CONTRACT_ADDRESS;
export const WHITELIST_PRICE = TESTING_MODE ? 0 : 0.2;
export const WHITELIST_LIMIT = 1;
export const REGULAR_PRICE = TESTING_MODE ? 0 : 0.2;
export const REGULAR_LIMIT = 1;
export const MAX_MINT = 1000;

export const MINT_TIME = TESTING_MODE
    ? Date.now() + 5000
    : 1648234800000;
