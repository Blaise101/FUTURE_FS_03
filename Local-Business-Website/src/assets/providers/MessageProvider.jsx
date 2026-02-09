// import { useState } from "react";
// import { MessageContext } from "../contexts/MessageContext";

// export const MessageProvider = ({ childern }) => {
//   const [messages, setMessages] = useState([

//   ]);

//   const addMessage = (message) => {
//     setMessages([
//       {
//         ...message,
//         id: Date.now().toString(),
//         timestamp: new Date().toLocaleString(),
//         read: false,
//       },
//       ...messages,
//     ]);
//   };

//   return (
//     <MessageContext.Provider value={{ messages, addMessage, markMessageRead }}>
//       {childern}
//     </MessageContext.Provider>
//   );
// };

import { useState } from "react";
import { MessageContext } from "../contexts/MessageContext";

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      name: "Jane Doe",
      email: "jane@example.com",
      message: "I love the new summer collection!",
      timestamp: new Date().toLocaleString(),
      read: false,
    },
    {
      id: "2",
      name: "John Smith",
      email: "john@example.com",
      message: "Do you offer international shipping?",
      timestamp: new Date().toLocaleString(),
      read: false,
    },
    {
      id: "3",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      message: "Great quality products, highly recommend!",
      timestamp: new Date().toLocaleString(),
      read: false,
    },
  ]);

  const markMessageRead = (id) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, read: true } : message,
      ),
    );
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((messaage) => messaage.id !== id));
  };

  return (
    <MessageContext.Provider
      value={{ messages, setMessages, markMessageRead, deleteMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
};
