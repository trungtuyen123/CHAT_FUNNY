import React, { createContext, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext({
  register: (email: string, password: string) => {},
});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("123");
  return (
    <AuthContext.Provider
      value={{
        user,
        register: async ( email, passWord ) => {
          await auth
            .createUserWithEmailAndPassword(email, passWord)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log("user", user);

              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("errorMessage", errorMessage);

              // ..
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
