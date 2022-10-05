import React, { FC } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

interface IconProps {
  icon: JSX.Element;
  className?: string;
}

const Icon: FC<IconProps> = ({ icon, className }) => {
  return (
    <IconStyled className={className || "default__icon__style"} data-testid="icon">
      {icon}
    </IconStyled>
  )
}

Icon.propTypes = {
  icon: PropTypes.element.isRequired,
  className: PropTypes.string,
}

const IconStyled = styled.div`
`

export default Icon