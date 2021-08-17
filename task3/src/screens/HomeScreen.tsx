import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Message from "../components/Message";
import SiteHelmet from "../components/SiteHelmet";
import { ownerJobStatus, ownerName, ownerPic, ownerTitle } from "../Constants";

const HomeScreen: React.FC = () => {
  const statusCheck = (status: typeJobStatus) => {
    let message: string;
    let messageAlert: "success" | "danger" | "warning";
    let messageIcon: IconProp;

    switch (status) {
      case "open":
        message = "Available for Hire";
        messageAlert = "success";
        messageIcon = ["fas", "check-circle"];
        break;
      case "close":
        message = "Not Available for Hire";
        messageAlert = "danger";
        messageIcon = ["fas", "times-circle"];
        break;
      case "inbetween":
        message = "Kind of Available at the moment";
        messageAlert = "warning";
        messageIcon = ["fas", "hourglass-start"];
        break;
    }

    return { message, messageAlert, messageIcon };
  };

  const jobStatus = statusCheck(ownerJobStatus);

  return (
    <>
      <SiteHelmet />
      <div className="text-center">
        <img
          src={`/assets/${ownerPic}`}
          className="rounded-circle m-2 w-25 h-25"
          alt={ownerName}
        />
        <h3>{ownerName}</h3>
        <hr className="w-25 inline mx-auto" />
        <h4 className="text-muted">{ownerTitle}</h4>

        <h5 className="text-muted">Job Status</h5>
        <h5 className="text-muted">Currently Interning at <a href="https://hng.tech">
          <img src="https://hng.tech/img/brand-logo.png" alt="" />
          </a></h5>
        <Message variant={jobStatus.messageAlert}>
          <FontAwesomeIcon
            icon={jobStatus.messageIcon}
            color="black"
            size="1x"
          />
          {` - ${jobStatus.message}`}
        </Message>
      </div>
    </>
  );
};

export default HomeScreen;
