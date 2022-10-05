import { useRouter } from "next/router"
import styled from "styled-components"
import { FC, useContext, useEffect, useMemo, useState } from "react"
import ProductEntity from "../../../ts/model/entities/Products"
import { Divider } from "antd"
import SelectMolecule from "../../molecules/SelectMolecule"
import InputsMolecule from "../../molecules/InputsMolecule"
import ButtonCmp from "../../atoms/Button"
import { formDetailProduct, textType } from "../../../ts/types/type"
import { getRangElement, miseAjourLocalStorageAndContext, openNotification } from "../../../utils/functions"
import PanierEntity from "../../../ts/model/entities/Panier"
import { statutsNotification } from "../../../ts/enum/enums"
import contextGlobal from "../../../pages/contextGlobal"
import Product from "./Product"
import ListText from "../../molecules/ListText"

interface DetailProductProps {
  product: ProductEntity
}

const DetailProduct: FC<DetailProductProps> = ({ product }) => {

  const router = useRouter()

  const { setPanier, panier } = useContext(contextGlobal);

  const [formProduct, setFormProduct] = useState<formDetailProduct>({
    color: product!.colors[0],
    nbProduct: 1
  })

  const [position, setPosition] = useState<number>(-1)

  const { color, nbProduct } = formProduct

  useEffect(() => {
    const pos = getRangElement(panier, product.id)
    if (pos !== -1) {
      setPosition(pos)
    }
  }, [])

  const dataProductShow: textType[] = useMemo(() => {

    const { description } = product
    return [
      { className: "sub__title__products__css", text: "Description" },
      { className: "detail__products__css", text: description }
    ]
  }
    ,
    [product])

  const handleChange = (id: string, value: number) => {
    setFormProduct({ ...formProduct, [id]: value })
  }

  const handleClick = () => {

    let newPanier = [...panier]

    if (position !== - 1) {
      newPanier[position].nbProduct = newPanier[position].nbProduct + Number(nbProduct)
    }
    else {
      const { id, name, price, description, colors, imageUrl, altTxt } = product
      const newElement: PanierEntity = new PanierEntity({
        color,
        nbProduct,
        product: {
          _id: id,
          name,
          price,
          imageUrl,
          description,
          altTxt,
          colors: colors as [string],
        }
      })

      newPanier.push(newElement)

    }
    miseAjourLocalStorageAndContext(newPanier, setPanier)
    openNotification("topRight", "Produit ajouter avec succée", statutsNotification.success)
    router.push({
      pathname: '/panier'
    })
  }

  return (
    <DetailProductStyled>
      <Product product={product} width="100%" height="500px" />
      <Divider style={{ background: "white" }} />
      <ListText list={dataProductShow} />
      <Divider style={{ background: "white" }} />
      <SelectMolecule
        key="color"
        label="Choisir une couleur :"
        list={product.colors}
        id="color"
        onChange={(id: string, value: number) => handleChange(id, value)}
        value={color}
      />
      <InputsMolecule
        label="Nombre d'article(s) (1-100) :"
        type="number"
        id="nbProduct"
        onChange={(id: string, value: number) => handleChange(id, value)}
        value={nbProduct}
        min={1}
      />
      <Divider style={{ background: "white" }} />
      <ButtonCmp
        block
        text="Ajouter au panier"
        type="primary"
        onClick={handleClick}
      />
    </DetailProductStyled>
  )
}

const DetailProductStyled = styled.div`
    padding : 30px;
    width : 80%;
    margin :auto;
    .ant-typography{
      color : ${({ theme }) => `${theme.whiteColor}`};
  }
  
  img {
    border-radius :20px;
  }
    `
export default DetailProduct