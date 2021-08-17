import BaseIcon from "./BaseIcon";
import { footerLinks } from "../Constants";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="d-flex justify-content-center m-3">
        {footerLinks.map((foo, ind) => BaseIcon({ foo, ind }))}
      </footer>
    </>
  );
};

export default Footer;
