import React from "react";
import TagArgs from "../components/TagArgs";

const NotFoundScreen: React.FC = () => {
  TagArgs();
  return (
    <div className="text-center">
      <h1>404</h1>
      <h2 className="text-muted">Page Not Found</h2>
    </div>
  );
};

export default NotFoundScreen;
