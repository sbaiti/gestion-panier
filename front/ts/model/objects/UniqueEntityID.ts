import { v4 as uuidv4 } from "uuid"


export class UniqueEntityID {
  private _uuid: string
  constructor() {
    this._uuid = uuidv4()
  }

  get uuid() {
    return this._uuid
  }

  static isUUID(uuid: string): boolean {
    const uuidRegex = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}$/
    return uuidRegex.test(uuid)
  }

  public equals(obj: UniqueEntityID): boolean {
    if(this === obj) {
      return true
    }

    if(!(obj instanceof UniqueEntityID)) {
      return false
    }

    return this._uuid === obj._uuid
  }
}