import { FC } from "react"
import map from "lodash/map"
import styled from "styled-components"
import PropTypes from "prop-types"

interface NavigationProps {
  itemsNavigation: JSX.Element[] | [],
  className: string
}

const Navigation: FC<NavigationProps> = ({ className, itemsNavigation }) => {
  return (
    <NavigationStyled className={className}>
      {map(itemsNavigation, (itemNav: JSX.Element) => itemNav)}
    </NavigationStyled>
  )
}

const NavigationStyled = styled.div`
.ant-popover-inner {

}
`
Navigation.propTypes = {
  className: PropTypes.string.isRequired,
  itemsNavigation: PropTypes.any.isRequired,
}

export default Navigation