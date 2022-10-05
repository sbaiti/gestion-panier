
import { IProducts } from "../interfaces/IProducts"
import Entity from "./Abstract"

class ProductEntity extends Entity<IProducts> {

  get id(): string {
    return `${this._state._id}`
  }

  get colors(): [string] | [] {
    if (!this._state.colors)
      return []
    return this._state.colors

  }
  get name(): string {
    if (!this._state.name)
      return ""
    return this._state.name

  }
  get imageUrl(): string {
    if (!this._state.imageUrl)
      return ""
    return this._state.imageUrl

  }
  get description(): string {
    if (!this._state.description)
      return ""
    return this._state.description

  }
  get altTxt(): string {
    if (!this._state.altTxt)
      return ""
    return this._state.altTxt

  }
  get price(): number {
    if (!this._state.price)
      return 0
    return this._state.price

  }
}

export default ProductEntity