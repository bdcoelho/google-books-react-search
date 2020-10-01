import React, { useContext } from "react";
import { Col, Row } from "../Grid";
import { Card, Button } from 'react-bootstrap';
import DataAreaContext from "../../utils/DataAreaContext";

function CardComponent() {
  const context = useContext(DataAreaContext);

  return (
    <Card style={{ borderRadius: "10px", backgroundColor: "#e9ecef" }}>
      <Card.Body>
        {context.developerState.books.map(book => {
          return (  
            <li style={{ borderRadius: "10px", marginBottom: "5px" }} className="list-group-item" key={book.id}>
              <Row className="SearchResult row" id={book.id}>
                <Col size="2" className="bookImage">
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                </Col>
                <Col size="1" className="emptyCol"/>
                <Col size="9" className="bookInfo">
                    <Row>
                        <h3 className="bookTitle">{book.volumeInfo.title}</h3>
                    </Row>
                    <Row>
                        <h4 className="bookAuthor">{book.volumeInfo.authors}</h4>
                    </Row>
                    <Row>
                        <p className="bookDescription">{book.volumeInfo.description}</p>
                    </Row>
                </Col>
              </Row>
              <br></br>
              <Row className="buttonDiv ">
                <Button className="saveBook btn btn-primary" id={book.id} onClick={(e) => {context.handleSavedButton(e)}}>
                  Save Book
                </Button>
                <a href={book.volumeInfo.previewLink} target="_blank">
                  <Button className="viewBook btn btn-success">
                    View Book
                  </Button>
                </a>
              </Row>
            </li>
          )
        })}
      </Card.Body>
    </Card>
  )
}

export default CardComponent;