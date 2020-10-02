import React, { useContext } from "react";
import Jumbotron from "./Jumbotron";
import { Col, Row, Container } from "./Grid";
import { Input, FormBtn } from "./Form";
import { Card } from 'react-bootstrap';
import BookCard from "./SearchCard"
import AppContext from "../utils/AppContext";

function Search() {
  const context = useContext(AppContext);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron
          title={"Find and Organize your reading"}
          />
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
          {context.bookState.books.length > 0 ? 
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
