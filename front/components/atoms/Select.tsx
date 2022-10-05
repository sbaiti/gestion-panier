import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types'
import { Select } from 'antd';
import { map } from 'lodash';
import styled from 'styled-components';

const { Option } = Select;

interface SelectCmpProps {
  list: string[];
  placeholder?: string;
  value?: string | undefined | null;
  type?: string;
  id: string;
  onChange: (id: string, value: number) => void;
}

const SelectCmp: React.FC<SelectCmpProps> = ({ list, placeholder, onChange, id, value, ...resteProps }) => {

  const handleChange = (event: any) => {
    onChange(id, event)
  };

  return (
    <SelectCmpStyled>
      <Select defaultValue={list[0]}
        style={{ width: 280 }}
        onChange={handleChange}
        placeholder={placeholder || "Please select"}
        value={value}
        {...resteProps}
      >
        {
          map(list, elem => {
            return <Option value={elem}>{elem}</Option>
          })
        }
      </Select>
    </SelectCmpStyled>
  )
}

const SelectCmpStyled = styled.div`
  padding-left: 10px;
`
SelectCmp.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  list: PropTypes.any.isRequired
}

export default SelectCmp;