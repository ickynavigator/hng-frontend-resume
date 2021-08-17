import { Row } from "react-bootstrap";

import { myCerts } from "../Constants";
import BaseCertificate from "../components/BaseCertificate";

const CertificateScreen: React.FC = () => {
  return (
    <>
      <Row xs={1} className="g-4">
        {myCerts.map((cert) => {
          return BaseCertificate(cert);
        })}
      </Row>
    </>
  );
};

export default CertificateScreen;
