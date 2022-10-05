import { NextPage } from "next"
import { Layout } from "antd"
import { FooterCmpStyled } from "./FooterCmpStyled"

const { Footer } = Layout

const FooterCmp: NextPage = () => {
  return (
    <FooterCmpStyled>
      <Footer>
        © Droit d'auteur | Tous les droits sont réservés
      </Footer>
    </FooterCmpStyled>
  )
}

export default FooterCmp