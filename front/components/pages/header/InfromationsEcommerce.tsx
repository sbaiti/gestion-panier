import React, { FC, useMemo } from "react"
import TextIcon from "../../molecules/TextIcon"
import { PhoneFilled, MailFilled, HomeFilled } from "@ant-design/icons"
import Navigation from "../../organisms/Navigation"

const InfromationsEcommerce: FC = () => {

  const itemsInfosData = useMemo(() => {

    const itemsInfo: JSX.Element[] = [
      <TextIcon key="tel" className="item__itemInfo" icon={<PhoneFilled />} text="01 01 01 01 01" />,
      <TextIcon key="email" className="item__itemInfo" icon={<MailFilled />} text="support@support.com" />,
      <TextIcon key="adresse" className="item__itemInfo" icon={<HomeFilled />} text="Paris france" />,
    ]

    return itemsInfo

  }, [])

  return (
    <div className="informations__css">
      <Navigation itemsNavigation={itemsInfosData} className="informations__css" />
    </div>
  )
}

export default InfromationsEcommerce