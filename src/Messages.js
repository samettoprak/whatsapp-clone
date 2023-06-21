import React, { useEffect, useRef, useState } from "react";
import "./Messages.css";
import { BsFilter } from "react-icons/bs";
import Message from "./Message";
import messageData from "./MessageData";
import ContactPage from "./ContactPage";

function Messages() {
  const [liste, setListe] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [searchedContact, setSearchedContact] = useState("");
  const [tempList, setTempList] = useState([]);
  const [sendMessage, setSendMessage] = useState("");

  useEffect(() => {
    const updatedListe = messageData["groups"].map((group) => ({
      groupName: group.group_name,
      name: group["messages"][group["messages"].length - 1].sender,
      lastMessage: group["messages"][group["messages"].length - 1].content,
      lastSeen: "12",
    }));

    setListe(updatedListe);
    setTempList(liste);
    console.log("alo");
    console.log(tempList);
  }, [messageData.groups]);

  useEffect(() => {
    if (!searchedContact == "" || !searchedContact == null) {
      const searchedContacts = liste.filter((messages) =>
        messages.groupName.toLowerCase().includes(searchedContact)
      );
      setTempList(searchedContacts);
    } else {
      setTempList(liste);
    }
  }, [searchedContact, liste]);

  const handleMessageClick = (groupName) => {
    setSelectedGroup(groupName);
    console.log("Tıklanan grup adı:", groupName);
  };
  const sendMessageToContact = () => {};

  return (
    <div className="messages_container">
      <div className="contacts">
        <div className="search">
          <input
            className="search_input"
            placeholder="Aratın veya yeni sohbet başlatın"
            onChange={(e) => {
              setSearchedContact(e.target.value);
            }}
          ></input>
          <h2>
            <BsFilter />
          </h2>
        </div>
        <div className="all_contacts">
          {tempList &&
            tempList.map((message, index) => (
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
        <div className="content_scroll">
          {selectedGroup && (
            <>
              <ContactPage groupName={selectedGroup} />
            </>
          )}
        </div>
        <div className="send_message">
          <input
            placeholder="Bir mesaj yazın"
            onChange={(a) => {
              setSendMessage(a.target.value);
            }}
          ></input>
          <button onClick={sendMessageToContact}>Gönder</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
