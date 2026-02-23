import { useEffect, useState } from "react";
import { CollectionContext } from "../contexts/CollectionContext";
import { useAuth } from "../contexts/AuthContext";

export const CollectionProvider = ({ children }) => {
  const { token } = useAuth();
  const [collections, setCollections] = useState(null);

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

  const addCollection = async (userInput) => {
    if (!token) return null;
    const formDataObj = new FormData();
    formDataObj.append("name", userInput.name);
    formDataObj.append("description", userInput.description);

    const res = await fetch("http://localhost:8000/api/collections/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formDataObj,
    });

    if (!res.ok) throw new Error("Failed to add product");

    const data = await res.json();
    setCollections((prev) => [...prev, data.collection || data]);
  };

  const updateCollection = async (id, updates) => {
    if (!token) return null;
    const formDataObj = new FormData();
    formDataObj.append("name", updates.name);
    formDataObj.append("description", updates.description);

    const res = await fetch(
      `http://localhost:8000/api/collections/update/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      },
    );

    if (!res.ok) throw new Error("Failed to update product");

    const data = await res.json();

    setCollections((prev) =>
      prev.map((collection) =>
        collection.id === id ? data.collection || data : collection,
      ),
    );
  };

  const deleteCollection = async (id) => {
    if (!token) return;
    const res = await fetch(
      `http://localhost:8000/api/collections/delete/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    if (!res.ok) throw new Error("Failed to delete collection");
    setCollections((prev) => prev.filter((collection) => collection.id !== id));
    return;
  };

  return (
    <CollectionContext.Provider
      value={{ collections, addCollection, updateCollection, deleteCollection }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
