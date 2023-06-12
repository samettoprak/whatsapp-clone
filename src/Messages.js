import React from "react";
import "./Messages.css";
import { BsFilter } from "react-icons/bs";

function Messages() {
  return (
    <div className="message_container">
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
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Messages;
