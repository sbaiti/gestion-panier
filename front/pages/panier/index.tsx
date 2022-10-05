import { NextPage } from "next"
import React from "react"
import PanierCmp from "../../components/pages/panier/PanierCmp"
import { PageCommonstyled } from "../../styles/PageCommonstyled"


const Panier: NextPage = () => {
  return (
    <PageCommonstyled>
      <PanierCmp />
    </PageCommonstyled>
  )
}

export default Panier