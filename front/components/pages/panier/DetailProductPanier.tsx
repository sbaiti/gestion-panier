import { filter, map } from 'lodash';
import React, { FC, useContext, useMemo } from 'react';
import contextGlobal from '../../../pages/contextGlobal';
import { statutsNotification } from '../../../ts/enum/enums';
import PanierEntity from '../../../ts/model/entities/Panier';
import { miseAjourLocalStorageAndContext, openNotification } from '../../../utils/functions';
import ButtonCmp from '../../atoms/Button';
import Text from "../../atoms/Text"

interface DetailProductPanierProps {
  productPanier: PanierEntity
}

const DetailProductPanier: FC<DetailProductPanierProps> = ({ productPanier }) => {

  const { panier, setPanier } = useContext(contextGlobal);

  const productState = productPanier.product
  const { id } = productState

  const arrayDataShow: string[] = useMemo(() => {

    const { name, price } = productState
    const { nbProduct, color } = productPanier
    const totalPrice = Number(nbProduct) * Number(price)
    return [name, color as string, `Qté : ${nbProduct}`, `${totalPrice} €`]

  }, [productPanier])

  const handleClick = (): void => {

    let newPanier = [...panier]
    newPanier = filter(newPanier, elem => elem.product.id != id)
    miseAjourLocalStorageAndContext(newPanier, setPanier)
    openNotification("topRight", "Le produit est supprimer", statutsNotification.success)

  }

  return (
    <div className="detail__panier__product__css">
      {map(arrayDataShow,
        (elem: string, index: number) =>
          <Text key={index} className="sub__title__products__css col__detail" text={elem} />)
      }
      <ButtonCmp
        text="Supprimer le produit"
        type="primary"
        onClick={handleClick}
      />
    </div>
  );
};

export default DetailProductPanier;