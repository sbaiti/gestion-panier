/*eslint-disable */
import { UniqueEntityID } from "../objects/UniqueEntityID"

abstract class Entity<T> {
  protected _id: UniqueEntityID
  protected _state: T

  constructor(state: T, id?: UniqueEntityID) {
    this._id = id !== undefined ? id : new UniqueEntityID()
    this._state = state
  }

  public equals(obj: Entity<any>): boolean {
    if (this === obj) {
      return true
    }

    if (!(obj instanceof Entity)) {
      return false
    }
    return this._id.equals(obj._id)
  }
}

export default Entity