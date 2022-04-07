import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import movieAndBook from "../assets/project-images/movieAndBook";
export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>
        TODO - put projects here
        {/* <img className="card-img-top" src={movieAndBook} alt="Card cap" /> */}
      </p>
      <Container>
        <Row md={4}>
          <Col>Project One</Col>
          <Col xs={6}>Project Two</Col>
          <Col>Project Three</Col>
        </Row>
      </Container>
    </div>
  );
}
