import React, { FC } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Text from "../atoms/Text"
import Input from "../atoms/Inputs";

interface InputsMoleculeProps {
  label: string;
  type?: string;
  id: string;
  onChange: (id: string, value: number) => void;
  value: string | number;
  min?: number;
}

const InputsMolecule: FC<InputsMoleculeProps> = ({ label, type, value, onChange, id, ...resteProps }) => {
  return (
    <InputsMoleculeStyled>
      <Text text={label} />
      <Input
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        {...resteProps}
      />
    </InputsMoleculeStyled>
  )
}

InputsMolecule.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]).isRequired,
  type: PropTypes.string,
  min: PropTypes.number,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const InputsMoleculeStyled = styled.div`
  display : flex;
  align-items : center;
  margin-top :20px;
`

export default InputsMolecule