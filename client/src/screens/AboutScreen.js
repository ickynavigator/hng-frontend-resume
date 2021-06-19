import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TagArgs from "../components/TagArgs";
import { AboutDetails, cvLocation } from "../Constants";

const AboutScreen = () => {
  TagArgs();
  return (
    <div className="text-center">
      {AboutDetails.map((x) => {
        return <p>{x}</p>;
      })}
      {cvLocation[0] && (
        <a href={`/assets/${cvLocation[0]}`} download>
          <Button variant="secondary">
            Download my CV{" "}
            <FontAwesomeIcon icon="save" color="white" size="1x" />
          </Button>
        </a>
      )}
    </div>
  );
};

export default AboutScreen;
