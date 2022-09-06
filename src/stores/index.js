import { useContext, createContext } from "react";
import Price from "./price";
import TodoStore from "./todo";

export class Store {
  constructor() {
    this.todoStore = new TodoStore(this);
    this.price = new Price(this);
  }
}

const store = new Store();

export default store;

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);
