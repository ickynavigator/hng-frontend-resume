import { useState, useEffect } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { readMessage, reviewMessage } from "../components/NetFunctions";
import Loader from "../components/Loader";

interface MatchParams {
  id: string;
}
interface P extends RouteComponentProps<MatchParams> {}
const MessageScreen: React.FC<P> = ({ match }) => {
  const [id, setid] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Reviewed, setReviewed] = useState(false);
  const [Created, setCreated] = useState<Date>(new Date());
  const [loading, setloading] = useState(true);

  const reviewMsg = async () => {
    await reviewMessage(id, { Reviewed: !Reviewed }).then((res) => {
      setReviewed(res.data.data.Reviewed);
    });
  };

  useEffect(() => {
    (async () => {
      const { data } = await readMessage(match.params.id);
      const { id } = data.ref["@ref"];
      const returnedInfo = data.data;

      setid(id);
      setName(returnedInfo.Name);
      setEmail(returnedInfo.Email);
      setMessage(returnedInfo.Message);
      setReviewed(returnedInfo.Reviewed);
      setCreated(returnedInfo.Created);

      setloading(false);
    })();
  }, [match, Reviewed, setReviewed]);

  return (
    <>
      <Row>
        <Col sm={12} className="m-auto">
          <h1 className="text-center">Message</h1>
          {loading ? (
            <Loader />
          ) : (
            <ListGroup className="text-start">
              <ListGroup.Item>
                <h5>Message ID</h5>
                {id}
              </ListGroup.Item>

              <ListGroup.Item>
                <h5>Name</h5>
                {Name}
              </ListGroup.Item>

              <ListGroup.Item>
                <h5>Email</h5>
                <a href={`mailto:${Email}`}>{Email}</a>
              </ListGroup.Item>

              <ListGroup.Item>
                <h5>Message Sent</h5>
                {new Date(Created).toDateString()}
              </ListGroup.Item>

              <ListGroup.Item>
                <h5>
                  Reviewed{" "}
                  {Reviewed ? (
                    <FontAwesomeIcon icon={"check"} color="green" />
                  ) : (
                    <FontAwesomeIcon icon={"times"} color="red" />
                  )}
                </h5>
                <Button variant={"secondary"} onClick={reviewMsg}>
                  Review
                </Button>
              </ListGroup.Item>

              <ListGroup.Item style={{ wordWrap: "break-word" }}>
                <h5>Message:</h5>
                <p>{Message}</p>
              </ListGroup.Item>
            </ListGroup>
          )}
        </Col>

        <Col sm={6}></Col>
      </Row>
    </>
  );
};

export default MessageScreen;
