import React, { useEffect, useRef, useState } from "react";
import "./ContactPage.css";
import messageData from "./MessageData";
import MessageBlock from "./MessageBlock";

function ContactPage(props) {
  const [contactMessages, setContactMessages] = useState([]);
  const deneme1 = useRef(null);
  let deneme = [];
  deneme = messageData["groups"].find((e) => e.group_name === props.groupName);
  let messages = [];
  messages = deneme.messages;

  useEffect(() => {
    setContactMessages(messages);
    if (deneme1.current) {
      deneme1.current.scrollTop = deneme1.current.scrollHeight;
    }
    console.log("samet");
  }, [messages, contactMessages]);

  return (
    <div ref={deneme1} className="ContactPage_container">
      {contactMessages &&
        contactMessages.map((object, index) => {
          var tempSender;
          var tempBool = false;
          if (index == 0) {
            tempSender = object.sender;
            tempBool = false;
          }
          if (
            index > 0 &&
            contactMessages[index - 1].sender == contactMessages[index].sender
          ) {
            tempBool = true;
          }
          return (
            <MessageBlock
              moreThanOne={tempBool}
              sender={object.sender}
              content={object.content}
              timestamp={object.timestamp}
            ></MessageBlock>
          );
        })}
    </div>
  );
}

export default ContactPage;
