import Head from "next/head"
import React, { FC, ReactNode, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Layout } from "antd"
import { LayoutAppStyled } from "./LayoutAppStyled"
import { ThemeProvider } from "styled-components"
import { theme } from "../../../styles/defaultTheme"
import HeaderCmp from "../../pages/header/HeaderCmp"
import FooterCmp from "../../pages/footer/FooterCmp"
import LoadingPanier from "../../atoms/LoadingPanier"
import { ThemeColors } from "../../../ts/types/type"

const { Content } = Layout

interface LayoutAppProps {
  title?: string;
  children?: ReactNode
}

const LayoutApp: FC<LayoutAppProps> = ({ title, children }: LayoutAppProps) => {

  const [themeApp] = useState<ThemeColors>(theme)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    //effet loader
    setTimeout(() => setLoading(false), 3000)
  }, [])

  if (loading)
    return <LoadingPanier />

  return (
    <ThemeProvider theme={themeApp}>
      <LayoutAppStyled>
        <Head>
          <title> {title || "Panier"}</title>
        </Head>
        <Layout>
          <HeaderCmp />
          <Content>
            {children}
          </Content>
          <FooterCmp />
        </Layout>
      </LayoutAppStyled>
    </ThemeProvider>
  )
}

LayoutApp.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default LayoutApp