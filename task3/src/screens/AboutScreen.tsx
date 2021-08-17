import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteHelmet from "../components/SiteHelmet";
import { aboutDetails, cv } from "../Constants";

const AboutScreen: React.FC = () => {
  return (
    <>
      <SiteHelmet />
      <div className="text-center">
        {aboutDetails.map((x, ind) => {
          return <p key={ind}>{x}</p>;
        })}
        {cv && (
          <>
            <a href={`/assets/${cv.Location}`} download>
              <Button variant="secondary">
                Download my CV{" "}
                <FontAwesomeIcon icon="save" color="white" size="1x" />
              </Button>
            </a>

            <p className="text-muted mt-2">
              Last Modified on {cv.Modified.toDateString()}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default AboutScreen;
