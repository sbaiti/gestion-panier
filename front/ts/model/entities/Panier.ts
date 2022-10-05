
import { IPanier } from "../interfaces/Ipanier"
import Entity from "./Abstract"
import ProductEntity from "./Products"

class PanierEntity extends Entity<IPanier> {

  get nbProduct(): number {
    return Number(this._state.nbProduct)
  }

  get color(): string | [] {
    if (!this._state.color)
      return ""
    return this._state.color

  }

  get product(): ProductEntity {
    return new ProductEntity(this._state.product)

  }

  set nbProduct(nb: number) {
    this._state.nbProduct = nb
  }
}

export default PanierEntity