import { useEffect, useState } from "react";
import { MessageContext } from "../contexts/MessageContext";
import { useAuth } from "../contexts/AuthContext";

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState(null);

  const { token, user } = useAuth();

  useEffect(() => {
    const fetchMessages = async () => {
      if (!token) return;
      try {
        const res = await fetch("http://localhost:8000/api/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch Messages");

        const data = await res.json();
        setMessages(data.messages);
      } catch (err) {
        console.error("Error fetching Messages:", err);
      }
    };

    fetchMessages();
  }, [token]);

  const markAsRead = async (id) => {
    if (!user) return;
    const res = await fetch(
      `http://localhost:8000/api/messages/markAsRead/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!res.ok) throw new Error("Failed to update product");

    const data = await res.json();

    setMessages((prev) =>
      prev.map((message) =>
        message.id === id ? data.message || data : message,
      ),
    );

    return data.message || data;
  };

  const deleteMessage = async (id) => {
    if (!user) return;
    const res = await fetch(`http://localhost:8000/api/messages/delete/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to delete message");
    setMessages((prev) => prev.filter((message) => message.id !== id));
    return;
  };

  return (
    <MessageContext.Provider value={{ messages, markAsRead, deleteMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
