import React, { useEffect, useRef, useState } from "react";
import "./ContactPage.css";
import messageData from "./MessageData";
import MessageBlock from "./MessageBlock";
import { BsFillSendFill } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { SlPaperClip } from "react-icons/sl";

function ContactPage(props) {
  const [send_message, setSend_message] = useState("");
  const [contactMessages, setContactMessages] = useState([]);
  const autoScroll = useRef(null);
  let deneme = [];
  deneme = messageData["groups"].find((e) => e.group_name === props.groupName);
  let messages = [];
  messages = deneme.messages;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!send_message == "") {
        console.log(send_message);
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        const hour = now.getHours().toString().padStart(2, "0");
        const minute = now.getMinutes();
        const tempString = `${year}-${month}-${day} ${hour}:${minute}:00`;

        messages.push({
          sender: "Samet",
          content: send_message,
          timestamp: tempString,
        });
        setContactMessages((oldArray) => [
          ...oldArray,
          {
            sender: "Samet",
            content: send_message,
            timestamp: tempString,
          },
        ]);
        document.getElementById("inputRef").value = "";
      }
    }
  };

  useEffect(() => {
    setContactMessages(messages);
    if (autoScroll.current) {
      autoScroll.current.scrollTop = autoScroll.current.scrollHeight;
    }
    console.log("sametx");
  }, [messages, contactMessages]);

  return (
    <div className="ContactPage_container">
      <div ref={autoScroll} className="ContactPage_container2">
        {contactMessages &&
          contactMessages.map((object, index) => {
            var right = false;
            var tempSender;
            var tempBool = false;
            if (object.sender == "Samet") {
              right = true;
            }
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
                key={index}
                right={right}
                moreThanOne={tempBool}
                sender={object.sender}
                content={object.content}
                timestamp={object.timestamp}
              ></MessageBlock>
            );
          })}
      </div>
      <div className="send_message">
        <h2>
          <GrEmoji />
        </h2>
        <h2>
          <SlPaperClip />
        </h2>
        <input
          id="inputRef"
          placeholder="Bir şey yazın"
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setSend_message(e.target.value);
          }}
        ></input>
        <h2>
          <BsFillSendFill />
        </h2>
      </div>
    </div>
  );
}

export default ContactPage;
