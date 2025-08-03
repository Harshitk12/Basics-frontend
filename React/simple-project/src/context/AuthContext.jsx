// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check login status when app starts
  useEffect(() => {
    fetch("http://localhost:5000/api/auth/check", {
      method: "GET",
      credentials: "include", // required to include cookies
    })
      .then((res) => res.json())
      .then((data) => setIsAuthenticated(data.isAuthenticated))
      .catch(() => setIsAuthenticated(false));
  }, []);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => setIsAuthenticated(false));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
