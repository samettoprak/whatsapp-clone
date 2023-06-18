import "./Message.css";

import React from "react";

function Message(props) {
  const openConv = () => {
    console.log("smet");
  };

  return (
    <div onClick={openConv} className="message_container">
      <img alt="" src={props.link}></img>
      <div className="nameAndMessage">
        <h3>{props.name}</h3>
        <h4>{props.lastMessage}</h4>
      </div>
      <h5>{props.lastSeen}</h5>
    </div>
  );
}

export default Message;
