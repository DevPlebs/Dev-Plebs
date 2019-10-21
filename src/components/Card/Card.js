import React from "react"
import { node, string, oneOfType, object } from "prop-types"

import {
  CardContainer,
  DefaultCard,
  CardBody,
  CardHeader,
  CardDeck,
} from "./styles"

const Card = ({ className, header, title, text, deck, as, to, children }) => {
  return (
    <CardContainer className={className}>
      <DefaultCard className="DefaultCard" as={as} to={to}>
        {header && <CardHeader>{header}</CardHeader>}
        <CardBody>
          <h4>{title}</h4>
          <p>{text}</p>
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
