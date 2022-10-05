import { map } from 'lodash';
import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { textType } from '../../../ts/types/type';
import Text from "../../atoms/Text"
import ListText from '../../molecules/ListText';

const TitleProducts: FC = () => {

  const titleArrayShow: textType[] = useMemo(() => [
    { text: "Nos produits", className: "title__products__css" },
    { text: "Une gamme d'articles exclusifs", className: "sub__title__products__css" },
  ], [])

  return (
    <TitleArrayShowStyled>
      <ListText list={titleArrayShow} />
    </TitleArrayShowStyled>
  );
};

const TitleArrayShowStyled = styled.div`
  margin-bottom :40px;
`


export default TitleProducts;