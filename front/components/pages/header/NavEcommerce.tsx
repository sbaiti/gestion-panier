import React, { FC, useMemo } from "react"
import Image from "next/image"
import LinkCmp from "../../atoms/Link"
import Navigation from "../../organisms/Navigation"
import logo from "public/panier.png"
import Link from 'next/link'

const NavEcommerce: FC = () => {

  const itemsNavigationData = useMemo(() => {

    const nav: JSX.Element[] = [
      <LinkCmp key="Accueil" text="Accueil" href="/accueil" />,
      <LinkCmp key="Panier" text="Panier" href="/panier" />
    ]

    const navHeader: JSX.Element[] = [
      <Link key="logo" href="/accueil" ><Image
        style={{ cursor: "pointer" }}
        src={logo} alt="logo" height="100" width="100" /></Link>,
      <Navigation key="navigation" className="item__itemInfo" itemsNavigation={nav} />
    ]

    return navHeader

  }, [])

  return (
    <div className="nav__css">
      <Navigation itemsNavigation={itemsNavigationData} className="navigation__css" />
    </div>
  )
}

export default NavEcommerce