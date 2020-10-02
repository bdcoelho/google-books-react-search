import React, { useContext } from "react";
import Jumbotron from "./Jumbotron";
import { Col, Row, Container } from "./Grid";
import { Card } from "react-bootstrap";
import BookCard from "./SearchCard";
import AppContext from "../utils/AppContext";

function Search() {
  const context = useContext(AppContext);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron
            title={"Google Books Search"}
            content={"Find and Organize your reading"}
          />
          <form className="m-auto">
            <div className="form-group">
              <input
                className="form-control"
                name="title"
                placeholder="Search for a book"
                onChange={(e) => {
                  context.handleInputChange(e);
                }}
              />
            </div>

            <button
              onClick={(e) => {
                context.handleFormSubmit(e);
              }}
              style={{ float: "right", marginBottom: 10 }}
              className="btn btn-success"
            >
              Search Book
            </button>
          </form>
        </Col>
        <Col size="12">
          {context.bookState.books.length > 0 ? (
            <BookCard />
          ) : (
            <Card>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  No results
                </Card.Title>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
