import { NotificationPlacement } from "antd/lib/notification";
import { notification } from 'antd';
import { findIndex, isEmpty, map } from "lodash"
import { statutsNotification } from "../ts/enum/enums";
import PanierEntity from "../ts/model/entities/Panier";
import { IPanier } from "../ts/model/interfaces/Ipanier";
export type ID = number | string

export const destructArrayObject = (list: any, attribute: string): any[] => {
  return map(list, elem => elem[attribute])
}

export const getRangElement = (list: any, id: ID): number => {

  if (isEmpty(list))
    return -1
  return findIndex(destructArrayObject(destructArrayObject(list, "product"), "id"), (element: any) => element === id)

}

export const openNotification = (placement: NotificationPlacement,
  description: string, statuts: statutsNotification): void => {

  const config = {
    message: "",
    description,
    placement,
    duration: 3,
  };

  switch (statuts) {

    case statutsNotification.info:
      notification.info(config);
      break;
    case statutsNotification.error:
      notification.error(config);
      break;
    case statutsNotification.success:
      notification.success(config);
      break;
    case statutsNotification.warning:
      notification.warn(config);
      break;
    default:
      notification.success(config);
  }

};

export const getSomePriceProduct = (list: PanierEntity[] | []): number => {

  let somme = 0;

  map(list, (elem: PanierEntity) => {
    const { nbProduct } = elem
    const { price } = elem!.product
    return somme = somme + Number(nbProduct) * Number(price)
  })

  return somme

}

export const localStorageFormatToPanierFormat = (elemLocalStorage: any): PanierEntity => {
  const { nbProduct, color } = elemLocalStorage._state as IPanier
  return new PanierEntity({
    nbProduct,
    color,
    product: {
      ...elemLocalStorage!._state.product
    }
  })
}

export const miseAjourLocalStorageAndContext = (newPanier: PanierEntity[] | [], callback: Function): void => {
  callback([...newPanier])
  localStorage.setItem("panier", JSON.stringify([...newPanier]))
}