import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("luna_thread_token"));

  useEffect(() => {
    const checkTokenExpiry = () => {
      const tokenTimestamp = localStorage.getItem(
        "luna_thread_token_timestamp",
      );
      if (tokenTimestamp) {
        const elapsed = Date.now() - parseInt(tokenTimestamp);
        const twoHours = 2 * 60 * 60 * 1000;
        if (elapsed > twoHours) {
          localStorage.removeItem("luna_thread_token");
          localStorage.removeItem("luna_thread_token_timestamp");
          setToken(null);
          setUser(null);
        }
      }
    };

    const inactivityTimer = setTimeout(checkTokenExpiry, 2 * 60 * 60 * 1000);

    return () => clearTimeout(inactivityTimer);
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) return false;

      localStorage.setItem("luna_thread_token", data.token);
      localStorage.setItem(
        "luna_thread_token_timestamp",
        Date.now().toString(),
      );

      setToken(data.token);
      setUser(data.user);

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    } finally {
      console.log(token);
    }
  };

  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.removeItem("luna_thread_token");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) return;

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};
