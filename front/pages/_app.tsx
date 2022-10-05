import type { AppProps } from "next/app"
import { map } from "lodash"
import { Suspense, useEffect, useState } from "react"
import "../styles/scss/globals.scss"
import GlobalStyles from "../styles/GlobalStyles"
import LayoutApp from "../components/templates/layout/Layout"
import Loader from "../components/atoms/Loader"
import { ThemeProvider } from "styled-components"
import { ThemeColors } from "../ts/types/type"
import { theme } from "../styles/defaultTheme"
import { IProducts } from "../ts/model/interfaces/IProducts"
import PanierEntity from "../ts/model/entities/Panier"
import contextGlobal from "./contextGlobal"
import { localStorageFormatToPanierFormat } from "../utils/functions"

function MyApp({ Component, pageProps }: AppProps) {

  const [themeApp] = useState<ThemeColors>(theme)
  const [listProduct, setListProduct] = useState<[IProducts] | []>([])
  const [panier, setPanier] = useState<PanierEntity[] | []>([])

  useEffect(() => {

    const jssStyles: Element | null = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }

    let persistPanier = localStorage.getItem("panier")

    if (persistPanier)
      persistPanier = JSON.parse(persistPanier)

    setPanier(map(persistPanier, elem => localStorageFormatToPanierFormat(elem)))

  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <ThemeProvider theme={themeApp}>
        <contextGlobal.Provider value={{ listProduct, panier, setListProduct, setPanier }}>
          <LayoutApp title="E-commerce Panier App">
            <Component {...pageProps} />
          </LayoutApp>
        </contextGlobal.Provider>
      </ThemeProvider>
    </Suspense >
  )
}

export default MyApp

