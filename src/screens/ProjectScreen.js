import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const baseProject = (proj) => {
  const { name, image, info, link, built } = proj;
  return (
    <Col>
      <Card>
        <Card.Header as="h3">{name}</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={9}>
              <Card.Img variant="top" src={`/assets/images/${image}`} />
            </Col>
            <Col sm={3}>
              <Card.Text>{info}</Card.Text>
              <Card.Text>Built Using {built}.</Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Button href={link} target="_blank" variant="outline-secondary">
            View project
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

const ProjectScreen = () => {
  const proj = [
    {
      name: "Raneda Hair and Makeup",
      image: "raneda.png",
      info: "An Ecommerce Website",
      built: "MongoDB, Express, React JS and Node",
      link: "https://raneda.herokuapp.com/",
    },
    {
      name: "Recipe Management",
      image: "327Project.png",
      info: "A website showcasing recipes and managing the Recipes.",
      built: "PHP",
      link: "https://itec327-termproject.herokuapp.com/",
    },
    {
      name: "Personal Website/Portfolio",
      image: "profile.png",
      info: "The Website you are currently on 😂.",
      built: "ReactJS and Netlify AWS Lambda functions",
      link: "#",
    },
  ];
  return (
    <div>
      <Row sm={1} className="g-4">
        {proj.map((x) => {
          return baseProject(x);
        })}
      </Row>
    </div>
  );
};

export default ProjectScreen;