import React from "react"
import { node, string, oneOfType, object } from "prop-types"

import { DefaultCard, CardBody, CardHeader } from "./styles"

const Card = ({ className, header, title, text, as, to, children }) => {
  return (
    <DefaultCard as={as} to={to} className={className}>
      {header && <CardHeader>{header}</CardHeader>}
      <CardBody>
        <h4>{title}</h4>
        <p>{text}</p>
        {children}
      </CardBody>
    </DefaultCard>
  )
}

Card.propTypes = {
  className: string,
  header: string,
  title: string,
  text: string,
  as: oneOfType([string, object]),
  to: string,
  children: node,
}

Card.defaultProps = {
  header: "",
  className: "",
  as: "",
  to: "",
  title: "",
  text: "",
}

export default Card
