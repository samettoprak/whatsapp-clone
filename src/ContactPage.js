import React from "react";
import "./ContactPage.css";
import messageData from "./MessageData";
import MessageBlock from "./MessageBlock";

function ContactPage(props) {
  let deneme = [];
  deneme = messageData["groups"].find((e) => e.group_name === props.groupName);
  let messages = [];
  messages = deneme.messages;
  return (
    <div className="ContactPage_container">
      <img alt="" src="" />
      <MessageBlock
        sender={messages[0].sender}
        content={messages[0].content}
        timestamp={messages[0].timestamp}
      ></MessageBlock>
    </div>
  );
}

export default ContactPage;
