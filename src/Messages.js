import React, { useEffect, useState } from "react";
import "./Messages.css";
import { BsFilter } from "react-icons/bs";
import Message from "./Message";
import messageData from "./MessageData";
import ContactPage from "./ContactPage";

function Messages() {
  const [liste, setListe] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(() => {
    const updatedListe = messageData["groups"].map((group) => ({
      groupName: group.group_name,
      name: group["messages"][group["messages"].length - 1].sender,
      lastMessage: group["messages"][group["messages"].length - 1].content,
      lastSeen: "12",
    }));

    setListe(updatedListe);
  }, [messageData]);

  const handleMessageClick = (groupName) => {
    setSelectedGroup(groupName);
    console.log("Tıklanan grup adı:", groupName);
  };
  function asd() {
    console.log("samet");
  }

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
          {liste &&
            liste.map((message, index) => (
              <Message
                key={index}
                name={message.name}
                lastMessage={message.lastMessage}
                lastSeen={message.lastSeen}
                groupName={message.groupName}
                onClick={() => handleMessageClick(message.groupName)}
              />
            ))}
          <div>Kişisel mesajlarınız uçtan uca şifrelidir</div>
        </div>
      </div>
      <div className="content">
        {selectedGroup && <ContactPage groupName={selectedGroup} />}
      </div>
    </div>
  );
}

export default Messages;
