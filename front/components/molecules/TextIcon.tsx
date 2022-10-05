import React, { FC } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

interface PropsProps {
  icon: JSX.Element;
  className?: string;
  text: string;
}

const TextIcon: FC<PropsProps> = ({ icon, className, text }) => {
  return (
    <TextIcontyled className={className}>
      <Icon icon={icon} />
      <Text text={text} />
    </TextIcontyled>
  )
}

TextIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

const TextIcontyled = styled.div`

`

export default TextIcon