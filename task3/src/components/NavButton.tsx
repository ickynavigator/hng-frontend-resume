import { Button, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

interface childProps {
  foo: typeNavMenuLinks;
  ind: number;
}
const NavButton: React.FC<childProps> = ({ foo, ind }) => {
  const location = useLocation();
  const { link, title } = foo;
  return (
    <Col key={ind}>
      <Link to={link}>
        <Button
          active={location.pathname === link ? true : false}
          variant="outline-secondary"
          className="rounded-pill mx-1 mx-md-3 w-100"
        >
          {title}
        </Button>
      </Link>
    </Col>
  );
};

export default NavButton;
