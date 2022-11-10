type Arbitrage = {
  symbol: string;
  address: string;
  value: number;
};
export interface IArbitrage {
  arbitrages?: Arbitrage[];
}
