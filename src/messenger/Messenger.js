import React, { useEffect, useState, useRef } from "react";

import { connect, disconnect, login, logout, subscribe } from "../socket";

import Input from "../components/Input";
import {
  StyledMessenger,
  StyledHeader,
  StyledCircle,
  StyledChatHistory,
  StyledMessage,
  StyledInput,
} from "./Messenger.style";

const Messenger = () => {
  const [userId, setUserId] = useState("No User Connected");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    connect();

    login((err, userId) => {
      setUserId(userId);
    });

    logout(() => {
      setUserId("No User Connected");
    });

    subscribe((err, { message }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length, fromMe: false, message },
      ]);
    });

    return () => {
      disconnect();
    };
  }, []);

  useEffect(() => {
    const lastMessage = document.getElementById(`${messages.length - 1}`);
    if (lastMessage) {
      lastMessage.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const onSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length, fromMe: true, message },
    ]);
  };

  return (
    <StyledMessenger>
      <StyledHeader>
        <StyledCircle connected={userId !== "No User Connected"} />
        {userId}
      </StyledHeader>
      <StyledChatHistory>
        {messages.map(({ id, fromMe, message }) => (
          <StyledMessage key={id} id={id} fromMe={fromMe}>
            {message}
          </StyledMessage>
        ))}
      </StyledChatHistory>
      <StyledInput>
        <Input onSendMessage={onSendMessage} />
      </StyledInput>
    </StyledMessenger>
  );
};

export default Messenger;
