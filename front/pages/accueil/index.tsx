import { NextPage } from "next"
import React from "react"
import Products from "../../components/pages/products/Products"
import { PageCommonstyled } from "../../styles/PageCommonstyled"
import { IProducts } from "../../ts/model/interfaces/IProducts"

interface AcceuilProps {
  data: [IProducts]
}

const Acceuil: NextPage<AcceuilProps> = ({ data }) => {
  return (
    <PageCommonstyled>
      <Products data={data} />
    </PageCommonstyled>
  )
}

export default Acceuil

export async function getServerSideProps() {

  //ssr fetch data
  const res = await fetch("http://localhost:5000/api/products")
  const data: [IProducts] = await res.json()
  return { props: { data } }

}