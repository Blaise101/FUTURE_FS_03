import { ContactContext } from "../contexts/ContactContext";

export const ContactProvider = ({ children }) => {
  const addMessage = async (userInput) => {
    const formDataObj = new FormData();
    formDataObj.append("name", userInput.name);
    formDataObj.append("email", userInput.email);
    formDataObj.append("message", userInput.message);
    const res = await fetch("http://localhost:8000/api/messages/create", {
      method: "POST",
      body: formDataObj,
    });
    if (!res.ok) throw new Error("Failed to add product");
  };

  return (
    <ContactContext.Provider value={{ addMessage }}>
      {children}
    </ContactContext.Provider>
  );
};
