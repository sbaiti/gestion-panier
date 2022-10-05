import React, { FC } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Select from "../atoms/Select";
import Text from "../atoms/Text"

interface SelectMoleculeProps {
  list: string[];
  label: string;
  id: string;
  onChange: (id: string, value: number) => void;
  value: string | undefined | null;
}

const SelectMolecule: FC<SelectMoleculeProps> = ({ list, value, label, onChange, id, ...resteProps }) => {
  return (
    <SelectMoleculeStyled>
      <Text text={label} />
      <Select
        list={list}
        id={id}
        onChange={onChange}
        value={value}
        {...resteProps}
      />
    </SelectMoleculeStyled>
  )
}

SelectMolecule.propTypes = {
  list: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const SelectMoleculeStyled = styled.div`
  display : flex;
  align-items : center;

`

export default SelectMolecule