import { map } from 'lodash';
import React, { FC, useMemo } from 'react';
import Text from "../atoms/Text"
import { textType } from '../../ts/types/type';

interface ListText {
  list: textType[]
}

const ListText: FC<ListText> = ({ list }) => {

  return (
    <>
      {
        map(list, (element: textType, index: number) => {
          const { className, text } = element
          return <Text key={index} className={className} text={text} />
        }
        )}
    </>
  );
};

export default ListText;