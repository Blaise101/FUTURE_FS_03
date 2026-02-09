import React, { useState } from "react";
import { ContactContext } from "../contexts/ContactContext";

export const ContactProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      name: "Jane Doe",
      email: "jane@example.com",
      message: "I love the new summer collection!",
      timestamp: new Date().toLocaleString(),
      read: false,
    },
  ]);

  const addMessage = (message) => {
    setMessages((prev) => [
      ...prev,
      {
        ...message,
        id: Date.now().toString(),
        timestamp: new Date().toLocaleString(),
        read: false,
      },
    ]);
  };

  return (
    <ContactContext.Provider value={{ messages, addMessage }}>
      {children}
    </ContactContext.Provider>
  );
};
