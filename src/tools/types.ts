// Polygon PoS specific types

export type TokenNetwork = {
  name: string;
  display_name: string;
  contract_address: string;
  chain_id: string;
  icon_url: string;
};

export type TokenInfo = {
  id: string;
  name: string;
  symbol: string;
  networks: TokenNetwork[];
  icon_url: string;
};
