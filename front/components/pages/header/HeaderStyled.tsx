import styled from "styled-components"

const HeaderStyled = styled.div`
.ant-layout-header {
  background: ${({ theme }) => `${theme.productsBgColor}`};
  height: 40px;
}
.site__header__css {
  padding : 0px 40px ;
  box-shadow: -10px 2px 20px rgba(0, 0, 0, 0.10077) 
}

.ant-layout-header {
  line-height: 0px;
}
.informations__css {
  display : flex;
  width:100%;
  height : 100%;
  justify-content : space-around;
  align-items : center;
  color :${({ theme }) => `${theme.whiteColor}`};
  .ant-typography{
    color : ${({ theme }) => `${theme.whiteColor}`};
  }
}
.item__itemInfo {
  display : flex;
  height : 100%;
  align-items : center;
}
.navigation__css{
  display : flex;
  height : 100%;
  justify-content : space-around;
  align-items : center;
}
.nav__css{ 
  margin-top :20px;
}
`

export default HeaderStyled