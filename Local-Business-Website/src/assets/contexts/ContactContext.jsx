import React, { useContext } from "react";

export const ContactContext = React.createContext();

export const useContact = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
};
