
import { Spin } from "antd"
import { FC } from "react"
import styled from "styled-components"

const Loader: FC = () => {
  return (
    <LoaderStyled>
      <Spin tip="Loading..." size="large" />
    </LoaderStyled>
  )
}

const LoaderStyled = styled.div`
  text-align:center;
  padding-top:10px;
  .ant-spin-dot-item {
   background-color: ${({ theme }) => theme.sideBarColorGradient1}
  }
  .ant-spin-text{
    font-size:15px;
    color: ${({ theme }) => theme.sideBarColorGradient1}
  }
`

export default Loader