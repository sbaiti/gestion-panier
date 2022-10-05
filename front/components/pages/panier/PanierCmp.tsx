import { FC, useContext } from "react"
import { Alert, Divider } from "antd"
import { PanierCmpStyled } from "./PanierCmpStyled"
import Text from "../../atoms/Text"
import DetailProductPanier from "./DetailProductPanier"
import { map } from "lodash"
import { getSomePriceProduct, miseAjourLocalStorageAndContext, openNotification } from "../../../utils/functions"
import ButtonCmp from "../../atoms/Button"
import { statutsNotification } from "../../../ts/enum/enums"
import contextGlobal from "../../../pages/contextGlobal"

const PanierCmp: FC = () => {

  const { panier, setPanier } = useContext(contextGlobal);

  const handleClick = (): void => {

    miseAjourLocalStorageAndContext([], setPanier)
    openNotification("topRight", "Le panier est vide", statutsNotification.success)

  }

  return (
    <PanierCmpStyled>
      <Text className="title__panier__css" text="Votre Panier" />
      <Divider style={{ background: "white" }} />
      {
        panier && panier.length > 0 ?
          <>
            {map(panier, (product, index) => {
              return (<>
                <DetailProductPanier key={index} productPanier={product} />
                <Divider style={{ background: "white" }} />
              </>
              )
            })}
            <Text className="total__panier__css" text={`Total ( articles ) : ${getSomePriceProduct(panier)} €`} />
            <ButtonCmp
              block
              text="Vider le panier"
              type="primary"
              onClick={handleClick}
            />
          </>
          :
          <Alert message="Votre panier est vide" type="error" />
      }
    </PanierCmpStyled>
  )
}

export default PanierCmp