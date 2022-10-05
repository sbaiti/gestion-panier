import PanierEntity from "../model/entities/Panier"
import { IProducts } from "../model/interfaces/IProducts"

export type ThemeColors = {
  linkColor: string,
  whiteColor: string
  siteBg: string
  chargingBg: string,
  productsBgColor: string
}

export type styleType = {
  fontSize?: string,
  height?: string,
  width?: string,
  lineHeight?: string
}

export type contextEcommerce = {
  listProduct: [IProducts] | [],
  panier: PanierEntity[] | [],
  setListProduct: Function,
  setPanier: Function,
}

export type formDetailProduct = {
  color: string | undefined,
  nbProduct: number,

}

export type textType = {
  text: string,
  className: string
}

export type btnType = "text" | "link" | "ghost" | "default" | "primary" | "dashed" | undefined
