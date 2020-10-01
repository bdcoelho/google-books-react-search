import React, { useContext } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Card } from 'react-bootstrap';
import SavedBookCard from "../components/SavedCard"
import DataAreaContext from "../utils/DataAreaContext";

function SavedBooks() {
  const context = useContext(DataAreaContext);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>View your saved books</h1>
          </Jumbotron>
        </Col>
        <Col size="12">
        {context.developerState.savedBooks.length > 0 ? 
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
