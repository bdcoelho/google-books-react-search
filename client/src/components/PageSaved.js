import React, { useContext } from "react";
import Jumbotron from "./Jumbotron";
import { Col, Row, Container } from "./Grid";
import { Card } from 'react-bootstrap';
import SavedBookCard from "./SavedCard"
import AppContext from "../utils/AppContext";

function SavedBooks() {
  const context = useContext(AppContext);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron
          title={"Saved Titles"}
/>
        </Col>
        <Col size="12">
        {context.bookState.savedBooks.length > 0 ? 
          ( <SavedBookCard /> )
          :
          <Card>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                No saved books
              </Card.Title>
            </Card.Body>
          </Card>
        }
        </Col>
      </Row>
    </Container>
  );
}


export default SavedBooks;
