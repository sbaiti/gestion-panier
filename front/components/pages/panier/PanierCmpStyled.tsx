import styled from "styled-components"

export const PanierCmpStyled = styled.div`
  padding:5% 15%;
  .ant-typography{
    color : ${({ theme }) => `${theme.whiteColor}`};
  }
  .title__panier__css {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
  }
  .total__panier__css{
    text-align: right;
    font-size: 24px;
    margin-bottom : 15px;
  }
  .detail__panier__product__css{
    display: flex;
    flex-wrap: wrap;
    align-items:center;
  }
  .col__detail {
    width: 20%;
    margin : auto;
  }
`