import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import { FormBtn } from "../Form";

export function List({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function ListItem({
  id,
  title,
  author,
  description,
  image,
  link,
  onClick,
  buttonText
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h3>Author: {author}</h3>
            <p>Description: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Book Details!
            </a>
            <FormBtn
                onClick={onClick}
                text={buttonText}
                id={id}
            >
            </FormBtn>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
