import { ReactNode } from "react";
import { Alert } from "react-bootstrap";

interface childProps {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
  children: string | ReactNode;
  className?: string;
}
const Message: React.FC<childProps> = ({
  variant = "primary",
  children,
  className: cn,
}) => {
  return (
    <Alert variant={variant} className={`my-1 py-1 ${cn}`}>
      {children}
    </Alert>
  );
};

export default Message;
