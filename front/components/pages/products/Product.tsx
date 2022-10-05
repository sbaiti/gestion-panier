import { map } from 'lodash';
import Link from 'next/link';
import React, { FC, useMemo } from 'react';
import ProductEntity from '../../../ts/model/entities/Products';
import { textType } from '../../../ts/types/type';
import ImageCmp from '../../atoms/ImageCmp';
import Text from '../../atoms/Text';
import ListText from '../../molecules/ListText';

interface ProductProps {
  product: ProductEntity,
  width?: string,
  height?: string
}

const Product: FC<ProductProps> = ({ product, width, height }) => {

  const { id, name, description, price, imageUrl, altTxt } = product

  const dataProductShow: textType[] = useMemo(() => {
    return [
      { className: "sub__title__products__css", text: name },
      { className: "", text: description },
      { className: "sub__title__products__css", text: `Prix : ${price} €` }
    ]
  }, [product])

  return (
    <Link key={id} href={`/product/${id}`}>
      <div className={"product__css"}>
        <ImageCmp
          width={width || "160px"}
          height={height || "160px"}
          alt={altTxt}
          src={imageUrl} />
        <ListText list={dataProductShow} />
      </div>
    </Link>
  );
};

export default Product;