import { Card, Col, Image, Row } from "react-bootstrap";

const dateMaker = (date: [number, number, number?]) => {
  const getOrdinalNum = (number: number) => {
    let selector;
    if (number <= 0) {
      selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }
    return number + ["th", "st", "nd", "rd", ""][selector];
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${date[2] ? `${getOrdinalNum(date[2])} ` : ``}${
    months[date[1] - 1]
  } ${date[0]}`;
};

const BaseCertificate: React.FC<typeCerts> = (cert) => {
  const { idx, name, authority, authorityImg, startDate, endDate, url } = cert;
  return (
    <Card key={idx}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Row>
          <Col sm={3} className="d-flex justify-content-center">
            <Image src={authorityImg} />
          </Col>
          <Col>
            <p>{authority}</p>
            <Row>
              <p>
                Issued on {dateMaker(startDate)} -{" "}
                {endDate
                  ? `Expires on ${dateMaker(endDate)}`
                  : `No Expiration Date`}
              </p>
            </Row>
            <p className="text-muted">Credential Id : {idx}</p>
            <a href={url} target="_blank" rel="noreferrer">
              <p className="text-muted">View Certificate</p>
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BaseCertificate;
