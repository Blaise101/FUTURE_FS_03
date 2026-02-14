import { useState } from "react";
import { useCollection } from "../../assets/contexts/CollectionContext";
import { IoFolderOpenOutline } from "react-icons/io5";

export default function Collections() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleAddNew = () => {
    setCurrentCol({ name: "", description: "" });
    setIsEditing(true);
  };
  const [currentCol, setCurrentCol] = useState(null);
  const { collections, deleteCollection, updateCollection, addCollection } =
    useCollection();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (currentCol.id) {
      await updateCollection(currentCol.id, currentCol);
    } else {
      await addCollection(currentCol);
    }
    setCurrentCol(null);
    setIsLoading(false);
    setIsEditing(false);
  };
  const setNewState = () => {
    setCurrentCol(null);
    setIsEditing(false);
    setIsLoading(false);
  };
  const handleEdit = (col) => {
    setCurrentCol(col);
    setIsEditing(true);
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold serif">Store Collections</h1>
        {!isEditing && (
          <button
            onClick={handleAddNew}
            className="bg-[#1A1A1A] text-white px-6 py-3 uppercase text-xs tracking-widest font-bold hover:bg-[#C5A59E]"
          >
            Add Collection
          </button>
        )}
      </div>

      {isEditing && currentCol && (
        <div className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm animate-fade-in">
          <h2 className="text-xl font-bold serif mb-6">
            {currentCol.id ? "Edit Collection" : "Create New Collection"}
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
                Collection Name
              </label>
              <input
                type="text"
                required
                value={currentCol.name || ""}
                onChange={(e) =>
                  setCurrentCol({ ...currentCol, name: e.target.value })
                }
                className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#C5A59E]"
                placeholder="e.g., Summer 2025"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
                Description
              </label>
              <textarea
                required
                value={currentCol.description || ""}
                onChange={(e) =>
                  setCurrentCol({ ...currentCol, description: e.target.value })
                }
                className="w-full border border-gray-200 p-3 text-sm h-24 focus:outline-none focus:border-[#C5A59E] resize-none"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#C5A59E] text-white px-8 py-3 uppercase text-xs tracking-widest font-bold hover:bg-[#B4948E] transition-colors"
              >
                {!isLoading ? (
                  <>{currentCol.id ? "Save Changes" : "Create Collection"}</>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-[#e5c2ba] border-t-white rounded-full animate-spin" />
                    <span>
                      {currentCol.id
                        ? "Saving Changes..."
                        : "Createing Collection..."}
                    </span>
                  </div>
                )}
              </button>
              <button
                type="button"
                onClick={setNewState}
                className="bg-gray-100 text-gray-600 px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.length > 0 ? (
          <>
            {collections.map((col, index) => (
              <div
                key={col.id}
                className="bg-white p-8 border border-gray-100 rounded-sm relative group shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold serif mb-4">{col.name}</h3>
                <p className="text-gray-500 text-sm mb-8 font-light leading-relaxed">
                  {col.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                    ID: {index + 1}
                  </span>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleEdit(col)}
                      className="text-blue-500 text-[10px] uppercase tracking-widest font-bold hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (
                          confirm(
                            "Are you sure you want to delete this collection?",
                          )
                        )
                          deleteCollection(col.id);
                      }}
                      className="text-red-500 text-[10px] uppercase tracking-widest font-bold hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="col-span-full flex items-center justify-center py-20">
            <div className="text-center">
              <IoFolderOpenOutline className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-400 text-sm font-light">
                No collections yet saved
              </p>
              <p className="text-gray-300 text-xs mt-2">
                Create your first collection to get started
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
