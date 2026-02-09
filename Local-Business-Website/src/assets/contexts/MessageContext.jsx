import { createContext, useContext } from "react";

export const MessageContext = createContext();

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessage must be used within MessageProvider");
  }
  return context;
};
