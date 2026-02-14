import React, { useContext } from "react";

export const NoAuthContext = React.createContext();

export const useNoAuth = () => {
  const context = useContext(NoAuthContext);
  if (context === undefined) {
    throw new Error("useNoAuth must be used within a NoAuthProvider");
  }
  return context;
};
