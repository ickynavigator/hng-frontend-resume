import React from "react";
import SiteHelmet from "../components/SiteHelmet";

const NotFoundScreen: React.FC = () => {
  return (
    <>
      <SiteHelmet />
      <div className="text-center">
        <h1>404</h1>
        <h2 className="text-muted">Page Not Found</h2>
      </div>
    </>
  );
};

export default NotFoundScreen;
