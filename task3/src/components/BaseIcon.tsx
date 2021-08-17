import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface childProps {
  foo: typeFooterLinks;
  ind: number;
}
const BaseIcon: React.FC<childProps> = ({ foo, ind }) => {
  const { link, icon, title } = foo;

  return (
    <a
      key={ind}
      href={link}
      className="mx-3"
      target="_blank"
      rel="noreferrer"
      aria-label={title}
    >
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 250 }}
        overlay={
          <Tooltip id={`tooltip-top`}>
            <>{title}</>
          </Tooltip>
        }
      >
        <FontAwesomeIcon icon={icon} color="grey" size="2x" />
      </OverlayTrigger>
    </a>
  );
};

export default BaseIcon;
