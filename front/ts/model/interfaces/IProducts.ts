import { ID } from "../types/types"


export interface IProducts {
  colors: [string],
  _id: ID,
  name: string,
  price: number,
  imageUrl: string,
  description: string,
  altTxt: string,
}