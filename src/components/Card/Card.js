import React from "react"
import { node, string, oneOfType, object } from "prop-types"

import Header from "../Header"
import {
  CardContainer,
  DefaultCard,
  CardBody,
  CardHeader,
  CardText,
} from "./styles"

const Card = ({ className, header, title, text, as, to, children }) => {
  return (
    <CardContainer className={className}>
      <DefaultCard as={as} to={to}>
        {header && <CardHeader>{header}</CardHeader>}
        <CardBody>
          {title && (
            <Header color="#000" fontWeight="light-bold">
              {title}
            </Header>
          )}
          {text && <CardText>{text}</CardText>}
          {children}
        </CardBody>
      </DefaultCard>
    </CardContainer>
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
