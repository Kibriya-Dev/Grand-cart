import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // ✅ SIGNUP FUNCTION
  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find(u => u.email === email);
    if (exists) {
      return { success: false, message: "User already exists" };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));

    return { success: true, message: "Signup successful" };
  };

  // ✅ LOGIN FUNCTION
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const found = users.find(
      u => u.email === email && u.password === password
    );

    if (!found) {
      return { success: false, message: "Invalid credentials" };
    }

    setUser(found);
    localStorage.setItem("user", JSON.stringify(found));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);