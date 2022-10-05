import styled from "styled-components";

export const ProductsStyled = styled.div`
  padding : 60px;
  width: 100%;
  text-align : center;
  .ant-typography{
    color : ${({ theme }) => `${theme.whiteColor}`};
  }
  .list__products__css{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .product__css {
      background: ${({ theme }) => `${theme.chargingBg}`};
      padding : 30px;
      margin-bottom : 30px;
      border-radius : 20px;
      width: 21%;
      text-align: center;
      :hover{
        cursor : pointer;
        box-shadow: rgb(42 18 206 / 90%) 0 0 22px 6px;
      }
    }
    img { 
      border-radius : 20px;
    }
    .product__title{
      font-size: 24px;
      font-weight: 700;
    }
    .product__description{
      font-size: 18px;
      font-weight: 500;
    }
  }
`