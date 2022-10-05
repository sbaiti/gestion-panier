import { Alert } from 'antd';
import { isEmpty, map } from 'lodash';
import React, { FC } from 'react';
import ProductEntity from '../../../ts/model/entities/Products';
import { IProducts } from '../../../ts/model/interfaces/IProducts';
import Product from './Product';
import { ProductsStyled } from './ProductsStyled';
import TitleProducts from './TitleProducts';

interface ProductsProps {
  data: IProducts[],
}

const Products: FC<ProductsProps> = ({ data }) => {

  return (
    <ProductsStyled>
      <TitleProducts />
      {
        isEmpty(data) ?
          <Alert message="Pas de produits disponible pour le moment" type="error" /> :
          <div className="list__products__css">
            {map(data, (product, index) => <Product key={index} product={new ProductEntity(product as IProducts)} />)}
          </div>
      }
    </ProductsStyled>
  );
};

export default Products;