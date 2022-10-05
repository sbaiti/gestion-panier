import React, { FC } from "react"
import styled from "styled-components"
import { theme } from "../../styles/defaultTheme"

const LoadingPanier: FC = () => {
  return (
    <LoadingPanierStyled theme={theme}>
      <div className="loading">
        Loading gestion panier ...
      </div>
    </LoadingPanierStyled>
  )
}

const LoadingPanierStyled = styled.div`
  min-height: 100vh;
  background: ;
  display: grid;
  place-items: center;
  background: ${({ theme }) => `${theme.siteBg}`};
`

export default LoadingPanier