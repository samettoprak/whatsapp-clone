import react from "react";
import "./MessageBlock.css";

const MessageBlock = (props) => {
  return (
    <div>
      <h4>{props.sender}</h4>
      <h5>{props.content}</h5>
      <h5>{props.timestamp}</h5>
    </div>
  );
};

export default MessageBlock;
