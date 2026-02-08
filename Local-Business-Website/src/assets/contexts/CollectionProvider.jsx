import { useState } from "react";
import { CollectionContext } from "./CollectionContext";

export const CollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState([
    {
      id: "1",
      name: "Summer 2025",
      description: "Lightweight linen and cotton pieces.",
    },
    {
      id: "2",
      name: "Evening Wear",
      description: "Elegant silks and dark tones.",
    },
    { id: "3", name: "Accessories", description: "Jewelry and bags." },
  ]);

  const addCollection = (collection) => {
    setCollections([
      ...collections,
      { ...collection, id: Date.now().toString() },
    ]);
  };

  const updateCollection = (id, updates) => {
    setCollections([
      collections.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    ]);
  };

  const deleteCollection = (id) => {
    setCollections(collections.filter((c) => c.id !== id));
    // setCollections([collections.map((c) => c.id !== id)]);
  };

  return (
    <CollectionContext.Provider
      value={{ collections, addCollection, updateCollection, deleteCollection }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
