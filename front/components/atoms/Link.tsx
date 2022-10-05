import Link from "next/link"
import PropTypes from "prop-types"
import { FC } from "react"
import styled from "styled-components"

interface LinkCmpProps {
  href: string;
  text: string | JSX.Element;
  onClick?: () => void;
}

const LinkCmp: FC<LinkCmpProps> = ({ href, text, onClick }) => {
  return (
    <LinkCmpStyled onClick={onClick && onClick} role="link">
      <Link href={href || "#"}>
        {text}
      </Link>
    </LinkCmpStyled>
  )
}

LinkCmp.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

const LinkCmpStyled = styled.span`
  font-size: 16px;
  line-height: 18px;
  padding-left : 20px;
  text-transform : capitalize;
  font-weight: bold;
  a {
    color:${({ theme }) => `${theme.linkColor}`};
    :hover{
      color:${({ theme }) => `${theme.familyCardOrder1}`};
      text-decoration:underline;
    }
  }
`

export default LinkCmp