import React, { useEffect, useState } from "react";

import { connect, disconnect, subscribe } from "../socket";

import Input from "../components/Input";
import {
  StyledMessenger,
  StyledHeader,
  StyledChatHistory,
  StyledMessage,
  StyledInput,
} from "./Messenger.style";

const Messenger = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    connect();

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

  const onSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length, fromMe: true, message },
    ]);
  };

  return (
    <StyledMessenger>
      <StyledHeader>Ion Popescu</StyledHeader>
      <StyledChatHistory>
        {messages.map(({ id, fromMe, message }) => (
          <StyledMessage key={id} fromMe={fromMe}>
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
