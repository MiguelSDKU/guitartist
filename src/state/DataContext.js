import { createContext } from "react";

/**
 * Context is the blueprint/interface
 * no implementation
 */

const DataContext = createContext({
  cart: [],
  user: {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearCart: () => {},
});

export default DataContext;
