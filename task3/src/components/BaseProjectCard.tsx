import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Row,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Message from "./Message";

interface childProps {
  foo: typeProjList;
  ind: number;
}
const BaseProjectCard: React.FC<childProps> = ({ foo, ind }) => {
  const { name, image, info, link, built, src, active, status, projIssuer } =
    foo;

  const statusCheck = (status: typeProjList["status"]) => {
    let messageAlert: "success" | "danger" | "warning";
    let messageIcon: IconProp;

    switch (status) {
      case "Completed":
        messageAlert = "success";
        messageIcon = ["fas", "check-circle"];
        break;
      case "Abandoned":
        messageAlert = "danger";
        messageIcon = ["fas", "times-circle"];
        break;
      case "Ongoing":
        messageAlert = "warning";
        messageIcon = ["fas", "hourglass-half"];
        break;
    }

    return { messageAlert, messageIcon };
  };

  const projStatus = statusCheck(status);

  return (
    <Col key={ind}>
      <Card>
        <Card.Header as="h3" className="text-center">
          {typeof projIssuer === "object" ? (
            <a
              href={projIssuer[1]}
              target="_blank"
              rel="noreferrer"
              className="text-reset"
            >
              {`${projIssuer[0]} - ${name}`}
            </a>
          ) : (
            `${name}`
          )}
        </Card.Header>
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
          <Message variant={projStatus.messageAlert} className="text-center">
            {`${status}  `}
            <FontAwesomeIcon
              icon={projStatus.messageIcon}
              color="black"
              size="1x"
            />
          </Message>
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
