import PropTypes from "prop-types"
import styled from "styled-components"
import { Typography } from "antd"
import { FC } from "react"
const { Text } = Typography

interface TextCmpProps {
  text: string;
  className?: string;
}

const TextCmp: FC<TextCmpProps> = ({ text, className }) => {
  return (
    <TextCmpStyled className={className || "default__text__style"}>
      <Text>{text}</Text>
    </TextCmpStyled>
  )
}

TextCmp.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

const TextCmpStyled = styled.div`

`

export default TextCmp