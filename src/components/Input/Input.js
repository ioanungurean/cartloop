import React, { useState } from "react";

import { send } from "../../socket";

import { StyledInput } from "./Input.style";

const Input = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSetMessage = (ev) => {
    const { value } = ev.target;
    const regex = /^[0-9a-zA-Z\-=., ]+$/;

    if (value.match(regex) || value === "") {
      setMessage(value);
    }
  };

  const handleSendMessage = (ev) => {
    if (ev.code === "Enter" && message) {
      send(message);
      setMessage("");
      onSendMessage(message);
    }
  };

  return (
    <StyledInput
      value={message}
      onChange={handleSetMessage}
      onKeyDown={handleSendMessage}
      placeholder="Type a message"
    />
  );
};

export default Input;
