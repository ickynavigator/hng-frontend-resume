import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import CharacterCounter from "react-character-counter";
import Message from "../components/Message";
import SiteHelmet from "../components/SiteHelmet";

const createMessage = async (data: typeMessage) => {
  const res = await fetch("/.netlify/functions/addMessage", {
    body: JSON.stringify(data),
    method: "POST",
  });
  return await res.json();
};

const ContactScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [validated, setValidated] = useState(false);

  const [formSuc, setFormSuc] = useState(false);
  const [formErr, setFormErr] = useState(false);

  interface eventInterface {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }
  const handleSubmit = (event: eventInterface) => {
    setFormSuc(false);
    setFormErr(false);

    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);
    if (form.checkValidity() === true) {
      const messageData: typeMessage = {
        Name: name,
        Email: email,
        Message: message,
        Reviewed: false,
        Created: new Date(),
      };
      createMessage(messageData)
        .then(() => {
          setFormSuc(true);
          setValidated(false);

          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => {
          if (process.env?.NODE_ENV === "development") console.log(err);
          setFormErr(true);
        });
    }
  };

  return (
    <>
      <SiteHelmet />
      <div>
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <h2>Contact Me</h2>
              {formSuc && (
                <Message variant="success">Form Sent Successfully</Message>
              )}
              {formErr && (
                <Message variant="danger">
                  There was an issue please try again
                </Message>
              )}
              <Form
                name="contact"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                method="POST"
              >
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please provide your Name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please provide your Email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <CharacterCounter
                    value={message}
                    maxLength={300}
                    overrideStyle
                  >
                    <Form.Control
                      required
                      name="message"
                      as="textarea"
                      rows={5}
                      placeholder="Enter Message"
                      maxLength={300}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></Form.Control>
                  </CharacterCounter>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Button type="submit" variant="outline-secondary">
                    Contact
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactScreen;
