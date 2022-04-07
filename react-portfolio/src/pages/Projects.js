import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import movieAndBook from "../assets/project-images/movieAndBook";
export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <br></br>
      <Container>
        <Row md={2}>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="../assets/project-images/movieAndBook.png"
              />
              <Card.Body>
                <Card.Title>Movie and Book Generator</Card.Title>
                <Card.Text>
                  Choose a genre and get recomendations for something to read or
                  watch and where to find it.
                </Card.Text>
                <a
                  href="https://mattglwilliams.github.io/the-movie-book-generator/"
                  target="blank"
                >
                  <Button variant="primary">Check it out</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                  Find out the current weather for a city and the 5 day forcast.
                </Card.Text>
                <a href="https://mattmc86.github.io/weatherApp/" target="blank">
                  <Button variant="primary">Check it out</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <br></br>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Team Task Manager</Card.Title>
                <Card.Text>Full stack app to manage projects</Card.Text>

                <a
                  href="https://teamtask-manager.herokuapp.com/"
                  target="blank"
                >
                  <Button variant="primary">Check it out</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <br></br>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Team Builder</Card.Title>
                <Card.Text>
                  Create team members and profiles using inquirer which
                  generates an HTML page.
                </Card.Text>
                <a
                  href="https://github.com/mattmc86/Team-Profile-Generator"
                  target="blank"
                >
                  <Button variant="primary">Check it out the repo</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <br></br>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Tech Blog</Card.Title>
                <Card.Text>
                  A full stack app allowing users to login and write blogs and
                  comment on other users blogs.
                </Card.Text>
                <a href="https://tech-blog-matt.herokuapp.com/" target="blank">
                  <Button variant="primary">Check it out</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <br></br>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Note Taker</Card.Title>
                <Card.Text>
                  An app allowing users to add and save notes.
                </Card.Text>
                <a href="https://github.com/mattmc86/Note-Taker" target="blank">
                  <Button variant="primary">Check out the repo</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br></br>
      </Container>
    </div>
  );
}
