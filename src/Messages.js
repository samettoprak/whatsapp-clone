import React, { useEffect, useState } from "react";
import "./Messages.css";
import { BsFilter } from "react-icons/bs";
import Message from "./Message";
import messageData from "./MessageData";

function Messages() {
  const [liste, setListe] = useState([]);

  useEffect(() => {
    const updatedListe = messageData["groups"].map((group) => ({
      name: group["messages"][group["messages"].length - 1].sender,
      lastMessage: group["messages"][group["messages"].length - 1].content,
      lastSeen: "12",
    }));

    setListe(updatedListe);
  }, [messageData]);

  return (
    <div className="messages_container">
      <div className="contacts">
        <div className="search">
          <input
            className="search_input"
            placeholder="Aratın veya yeni sohbet başlatın"
          ></input>
          <h2>
            <BsFilter />
          </h2>
        </div>
        <div className="all_contacts">
          <Message
            name="Osman"
            lastMessage="Görüşürüz diyorum"
            link="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            lastSeen="Cumartesi"
          ></Message>
          {liste &&
            liste.map((message, index) => (
              <Message
                key={index}
                name={message.name}
                lastMessage={message.lastMessage}
                lastSeen={message.lastSeen}
              />
            ))}
          <div>Kişisel mesajlarınız uçtan uca şifrelidir</div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Messages;
