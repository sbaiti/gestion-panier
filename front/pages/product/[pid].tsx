import { Alert } from 'antd'
import { isEmpty } from 'lodash'
import { NextPage } from 'next'
import DetailProduct from '../../components/pages/products/DetailProduct'
import { PageCommonstyled } from '../../styles/PageCommonstyled'
import ProductEntity from '../../ts/model/entities/Products'
import { IProducts } from '../../ts/model/interfaces/IProducts'

interface ProductPageProps {
  data: IProducts
}

const ProductPage: NextPage<ProductPageProps> = ({ data }) => {

  if (isEmpty(data))
    return <Alert message="Pas de detail disponible" type="error" /> 

  return (
    <PageCommonstyled>
      <DetailProduct product={new ProductEntity(data)} />
    </PageCommonstyled>
  )

}

export default ProductPage

export async function getServerSideProps(context: any) {

  const { pid } = context.query
  const res = await fetch("http://localhost:5000/api/products/" + pid)
  const data: IProducts = await res.json()
  return { props: { data } }

}