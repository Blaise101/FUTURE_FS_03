import { createContext, useContext } from "react";

export const CollectionContext = createContext();

export const useCollection = () => {
  const context = useContext(CollectionContext);
  if (context === undefined) {
    throw new Error(
      "useCoollection must be used within an CoollectionProvider",
    );
  }
  return context;
};
