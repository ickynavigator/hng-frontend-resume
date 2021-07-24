import React from "react";
import mt from "../myTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Row,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Message from "../components/Message";

interface childProps {
  foo: mt.typeProjList;
  ind: number;
}
const BaseProjectCard: React.FC<childProps> = ({ foo, ind }) => {
  const { name, image, info, link, built, src, active } = foo;

  return (
    <Col key={ind}>
      <Card>
        <Card.Header as="h3">{name}</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={9}>
              <Card.Img
                variant="top"
                src={`/assets/images/projects/${image}`}
                alt={name}
              />
            </Col>
            <Col sm={3}>
              <Card.Text>{info}</Card.Text>
              <Card.Text>Built Using {built}.</Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="pl-3">
          <Row>
            {/* if both are false nothing is available yet */}
            {!active[0] && !active[1] && (
              <Col>
                <Message variant="danger" className="text-center">
                  Project Links are not available yet
                </Message>
              </Col>
            )}

            {/* when project is available */}
            {active[0] && (
              <Col>
                <a href={link} target="_blank" rel="noreferrer">
                  <Button variant="secondary">View project</Button>
                </a>
              </Col>
            )}

            {/* when source code is available */}
            {active[1] && (
              <Col className="text-end m-auto">
                <a href={src} target="_blank" rel="noreferrer">
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                      <Tooltip id="tooltip-top">View Source Code</Tooltip>
                    }
                  >
                    <Button variant="secondary">
                      <FontAwesomeIcon icon="code" color="white" size="1x" />
                    </Button>
                  </OverlayTrigger>
                </a>
              </Col>
            )}
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default BaseProjectCard;
