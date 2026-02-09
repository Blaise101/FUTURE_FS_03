import { useState } from "react";
import DeleteMessage from "./DeleteMessage";

export default function MessageList({ messages, onMarkAsRead }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMessage, setActiveMessage] = useState(null);
  const setDeleteMessage = (m) => {
    setActiveMessage(m);
    setIsOpen(true);
  };
  if (messages.length === 0) {
    return (
      <div className="p-20 text-center text-gray-400 italic bg-white border border-gray-100">
        No messages yet.
      </div>
    );
  }
  return (
    <>
      {isOpen && (
        <div className="modal">
          <DeleteMessage
            onCancel={() => setIsOpen(false)}
            message={activeMessage}
          />
        </div>
      )}
      <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm">
        <div className="divide-y ">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`p-6 my-2 hover:bg-gray-50 transition-colors ${!m.read ? "border-l-4 border-l-[#C5A59E]" : ""}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3
                    className={`text-lg ${!m.read ? "font-bold" : "font-semibold"}`}
                  >
                    {m.name}
                  </h3>
                  <p className="text-sm text-[#C5A59E]">{m.email}</p>
                </div>
                <span className="text-[10px] text-gray-400 uppercase font-bold">
                  {m.timestamp}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed bg-[#FAF9F6] p-4 rounded-sm border border-gray-50 italic">
                "{m.message}"
              </p>
              <div className="flex gap-4">
                {!m.read && (
                  <button
                    onClick={() => onMarkAsRead(m.id)}
                    className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-green-500 transition-colors"
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  onClick={() => setDeleteMessage(m)}
                  // onClick={() => {
                  //   if (confirm("Delete message?")) onDelete(m.id);
                  // }}
                  className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-red-500 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
