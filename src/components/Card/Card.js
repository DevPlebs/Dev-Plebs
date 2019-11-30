import React from "react"
import { node, string, oneOfType, object } from "prop-types"

import {
  CardContainer,
  DefaultCard,
  CardBody,
  CardHeader,
  CardTitle,
  CardDeck,
} from "./styles"

const Card = ({ className, header, title, text, deck, as, to, children }) => {
  return (
    <CardContainer className={className}>
      <DefaultCard className="DefaultCard" as={as} to={to}>
        {header && <CardHeader>{header}</CardHeader>}
        <CardBody>
          {title && <CardTitle>{title}</CardTitle>}
          {text && <p>{text}</p>}
          {children}
        </CardBody>
      </DefaultCard>
      {deck && <CardDeck>{deck}</CardDeck>}
    </CardContainer>
  )
}

Card.propTypes = {
  className: string,
  header: string,
  title: string,
  text: string,
  deck: string,
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
  deck: "",
}

export default Card
