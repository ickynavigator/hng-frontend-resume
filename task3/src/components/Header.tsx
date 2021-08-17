import { Navbar, Row } from "react-bootstrap";
import { navMenuLinks } from "../Constants";
import NavButton from "./NavButton";

const Header: React.FC = () => {
  return (
    <>
      <Navbar className="d-flex justify-content-center m-1 pt-3">
        <Row xs={2} md={5} className="text-center g-3">
          {navMenuLinks.map((foo, ind) => {
            return NavButton({ foo, ind });
          })}
        </Row>
      </Navbar>
    </>
  );
};

export default Header;
