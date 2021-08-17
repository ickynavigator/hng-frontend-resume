import React from "react";
import { Row } from "react-bootstrap";

import BaseProjectCard from "../components/BaseProjectCard";
import SiteHelmet from "../components/SiteHelmet";
import { projList } from "../Constants";

const ProjectScreen: React.FC = () => {
  return (
    <>
      <SiteHelmet />
      <div>
        <Row xs={1} className="g-4">
          {projList.map((foo, ind) => {
            return !foo.hide && BaseProjectCard({ foo, ind });
          })}
        </Row>
      </div>
    </>
  );
};

export default ProjectScreen;
