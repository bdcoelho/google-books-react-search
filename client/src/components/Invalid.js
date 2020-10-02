import React from "react";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron
            title={"The page you are looking for does not exist"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
