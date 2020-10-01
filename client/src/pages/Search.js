import React, { useContext } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { Card } from 'react-bootstrap';
import BookCard from "../components/SearchCard"
import DataAreaContext from "../utils/DataAreaContext";

function Search() {
  const context = useContext(DataAreaContext);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Search for and Save books of interest</h1>
          </Jumbotron>
          <form className="m-auto">
            <Input
              onChange={(e) => {context.handleInputChange(e)}}
              name="title"
              placeholder="Book name"
            />
            <FormBtn
              onClick={(e) => {context.handleFormSubmit(e)}}
            >
              Search Book
            </FormBtn>
          </form>
        </Col>
        <Col size="12">
          {context.developerState.books.length > 0 ? 
            ( <BookCard /> )
            : 
            <Card>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  No results found - Please enter a different search value
                </Card.Title>
              </Card.Body>
            </Card>
          }
        </Col>
      </Row>
    </Container>
  );
}


export default Search;
