import { action, observable, flow, makeObservable, autorun } from "mobx";

export default class Price {
  fusePrice = 0;

  constructor(rootStore) {
    makeObservable(this, {
      fusePrice: observable,
      fetchFusePrice: action,
    });
    this.rootStore = rootStore;
    console.log({ rootStore });
    autorun(() => this.fetchFusePrice());
  }

  fetchFusePrice = flow(function* () {
    try {
      const tokenAddress = "0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d";
      const tokenPrice = yield fetch(
        `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenAddress}&vs_currencies=usd`,
        {
          method: "GET",
        }
      ).then((response) => response.json());
      this.fusePrice = tokenPrice[tokenAddress.toLowerCase()].usd;
    } catch (error) {
      console.log("ERROR in fetchFusePrice", { error });
    }
  });
}
