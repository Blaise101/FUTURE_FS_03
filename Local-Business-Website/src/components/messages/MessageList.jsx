import { useState } from "react";
import DeleteMessage from "./DeleteMessage";
import { useMessage } from "../../assets/contexts/MessageContext";
import { IoMailOpenOutline } from "react-icons/io5";

export default function MessageList() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMessage, setActiveMessage] = useState(null);
  const { messages, markAsRead } = useMessage();
  const setDeleteMessage = (m) => {
    setActiveMessage(m);
    setIsOpen(true);
  };
  if (!messages) {
    return (
      <div className="col-span-full flex items-center justify-center py-20">
        <div className="text-center">
          <IoMailOpenOutline className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-400 text-sm font-light">
            No messages sent yet
          </p>
          <p className="text-gray-300 text-xs mt-2">
            Your Clients and partners are yet to reach out
          </p>
        </div>
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
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
        <div className="divide-y divide-gray-100">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`p-6 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent transition-all duration-200 ${!m.read ? "border-l-4 border-l-[#C5A59E] bg-gradient-to-r from-[#FAF9F6] to-white" : ""}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3
                    className={`text-lg ${!m.read ? "font-bold text-gray-800" : "font-semibold text-gray-700"}`}
                  >
                    {m.name}
                  </h3>
                  <p className="text-sm text-[#C5A59E] mt-1">{m.email}</p>
                </div>
                <span className="text-xs text-gray-400 uppercase font-semibold tracking-wide">
                  {m.timestamp}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed bg-[#FAF9F6] p-4 rounded-md border border-gray-100 italic">
                "{m.message}"
              </p>
              <div className="flex gap-3">
                {!m.read && (
                  <button
                    onClick={() => markAsRead(m.id)}
                    className="text-xs uppercase tracking-widest font-semibold text-gray-500 hover:text-green-600 hover:bg-green-50 px-3 py-1 rounded transition-all"
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  onClick={() => setDeleteMessage(m)}
                  className="text-xs uppercase tracking-widest font-semibold text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-1 rounded transition-all"
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
