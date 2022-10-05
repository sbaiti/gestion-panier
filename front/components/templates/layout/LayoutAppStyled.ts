import styled from "styled-components"

//#TODO: remove commented class
export const LayoutAppStyled = styled.div`

.layout{
  min-height:100vh;
}

.ant-layout {
  background: ${({ theme }) => `${theme.siteBg}`};
}

.ant-layout-content {
  margin-top : 20px ;
}

`