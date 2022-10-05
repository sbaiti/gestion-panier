import { createContext } from "react";
import { contextEcommerce } from "../ts/types/type";

const contextGlobal = createContext<contextEcommerce>({
  listProduct: [],
  panier: [],
  setListProduct: () => null,
  setPanier: () => null
})

export default contextGlobal;