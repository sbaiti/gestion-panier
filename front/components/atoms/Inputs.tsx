import React, { useState } from 'react';
import 'antd/dist/antd.css';
import PropTypes from "prop-types"
import styled from 'styled-components';
import { Input } from 'antd';

interface InputCmpProps {
  value?: string | number;
  placeholder?: string;
  type?: string;
  id: string;
  onChange: (id: string, value: number) => void;
}

const InputCmp: React.FC<InputCmpProps> = ({ value, type, placeholder, onChange, id, ...resteProps }) => {

  const [localValue, setLocalValue] = useState<string | number | undefined>(value)

  const handleChange = (event: any) => {
    const { value } = event.target
    onChange(id, value)
    setLocalValue(value)
  };

  return (
    <InputCmpStyled>
      <Input
        type={type || "text"}
        id={id}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder || ""}
        {...resteProps}
      />
    </InputCmpStyled>
  )
}

const InputCmpStyled = styled.div`
  padding-left: 10px;
`
InputCmp.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputCmp;