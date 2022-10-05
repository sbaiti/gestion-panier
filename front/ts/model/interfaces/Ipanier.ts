import { IProducts } from "./IProducts";

export interface IPanier {
  color: string | undefined,
  nbProduct: number,
  product : IProducts
}