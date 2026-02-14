import { useEffect, useState } from "react";
import { CollectionContext } from "../contexts/CollectionContext";
import { useAuth } from "../contexts/AuthContext";

export const CollectionProvider = ({ children }) => {
  const { token } = useAuth();
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollection = async () => {
      if (!token) return;
      try {
        const res = await fetch("http://localhost:8000/api/collections", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch collections");
        }

        const data = await res.json();
        setCollections(data.collections);
      } catch (err) {
        console.error("Error fetching collections:", err);
      }
    };

    fetchCollection();
  }, [token]);

  const addCollection = async (collection) => {
    if (!token) return null;

    const res = await fetch("http://localhost:8000/api/collections/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: collection,
    });

    if (!res.ok) throw new Error("Failed to add product");

    const data = await res.json();
    setCollections((prev) => [...prev, data.collection || data]);
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
