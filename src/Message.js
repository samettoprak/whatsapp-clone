import "./Message.css";

import React from "react";

function Message(props) {
  return (
    <div className="message_container" onClick={props.onClick}>
      <img alt="" src={props.link}></img>
      <div className="nameAndMessage">
        <h3>{props.groupName}</h3>
        <h4>{props.lastMessage}</h4>
      </div>
      <h5>{props.lastSeen}</h5>
    </div>
  );
}

export default Message;
