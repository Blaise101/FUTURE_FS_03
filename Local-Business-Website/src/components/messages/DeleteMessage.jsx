import { IoSkullOutline } from "react-icons/io5";
import { useMessage } from "../../assets/contexts/MessageContext";
import { useState } from "react";

export default function DeleteMessage({ message, onCancel }) {
  const { deleteMessage } = useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    setIsLoading(true);
    await deleteMessage(message.id);
    setIsLoading(false);
    onCancel();
  };

  return (
    <div className="modal-1 w-full min-w-full min-h-screen">
      <div className="modal-content w-[30%] p-0 ">
        <div className="flex items-start justify-between rounded-t-2xl bg-gradient-to-r from-red-600 to-red-500 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
              <IoSkullOutline className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Delete Item</h2>
              <p className="text-sm text-red-100">
                Are you sure you want to delete this message?
              </p>
            </div>
          </div>
          <button
            className="text-white/80 hover:text-white"
            onClick={onCancel}
          >
            ✕
          </button>
        </div>
        <div className="px-6 py-6">
          <div className="flex items-center justify-end gap-4">
            <button
              className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              onClick={onCancel}
            >
              No, Go Back
            </button>
            <button
              className={`${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              } rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-700`}
              onClick={handleDelete}
            >
              {isLoading
                ? "Deleting..."
                : `Yes, Delete ${message.name}'s message`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
