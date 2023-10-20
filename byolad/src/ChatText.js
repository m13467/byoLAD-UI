import byo_LAD from "./circle_byo_LAD.png";
import "./ChatText.css";
import React from "react";
import { IconUserLine } from "@instructure/ui-icons";

class UserIcon extends React.Component {
  render() {
    return <IconUserLine color="primary-inverse" title="Send" />;
  }
}

function ChatText(isUser, message) {
  if (isUser) {
    return (
      <div className="chat-text">
        <UserIcon />
        <p>{message}</p>
      </div>
    );
  } else {
    return (
      <div className="chat-text">
        <img className="image" src={byo_LAD} alt="byoLAD"/>
        <p>{message}</p>
      </div>
    );
  }
}

export default ChatText;
