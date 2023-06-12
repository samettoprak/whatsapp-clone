import React from "react";
import "./Messages.css";
import { BsFilter } from "react-icons/bs";
import Message from "./Message";

function Messages() {
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
        <div>
          <Message
            name="samet"
            lastMessage="Görüşürüz"
            link="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            lastSeen="Cumartesi"
          ></Message>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Messages;
