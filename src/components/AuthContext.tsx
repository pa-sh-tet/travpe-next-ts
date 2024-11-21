"use client";
import { createContext, useContext, useState } from "react";
// import { UserData } from "../utils/types";

const AuthContext = createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  // currentUser: UserData | null;
  // setCurrentUser: React.Dispatch<React.SetStateAction<UserData | null>>;
}>({
  isLoggedIn: true,
  setIsLoggedIn: () => {},
  // currentUser: null,
  // setCurrentUser: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  // const currentUser = { name: "John Doe", tag: "johndoe" };
  // const handleLogin = () => setIsLoggedIn(true);
  // const handleLogout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        // currentUser
        // , handleLogin, handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
