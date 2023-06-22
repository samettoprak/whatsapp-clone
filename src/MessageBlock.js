import react from "react";
import "./MessageBlock.css";

const MessageBlock = (props) => {
  const dateTime = new Date(props.timestamp);
  const hour = String(dateTime.getHours()).padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");
  return (
    <div
      className={
        !props.right ? "message_block_container" : "message_block_containerv2"
      }
    >
      {!props.moreThanOne && !props.right ? (
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
        ></img>
      ) : (
        <span></span>
      )}
      <div
        className={
          !props.moreThanOne ? "block_container" : "block_container v2"
        }
      >
        {!props.moreThanOne ? (
          <>
            {!props.right ? <i className="i1"></i> : <i className="i2"></i>}
            <h4>{props.sender}</h4>
          </>
        ) : (
          <span></span>
        )}
        <h5>{props.content}</h5>
        <h5 className="message_time">
          {hour}:{minutes}
        </h5>
      </div>
    </div>
  );
};

export default MessageBlock;
