// import React, { createContext, useState,useContext} from 'react'

// export const AuthContext=createContext();
// export default function AuthProvider({children}){

//     const initialAuthUser=localStorage.getItem("Users");
//     const [authUser,setAuthUser]=useState(
//         initialAuthUser? JSON.parse(initialAuthUser): undefined,

//     );
//     return (
//         <AuthContext.Provider value={[authUser,setAuthUser
//         ]}>
//             {children}
//         </AuthContext.Provider>
//     )

// }

// export const useAuth=()=> useContext(AuthContext);
import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  // useEffect(() => {
  //   if (authUser) {
  //       try {
  //           localStorage.setItem("Users", JSON.stringify(authUser));
  //         } catch (error) {
  //           console.error("Error saving auth user to localStorage", error);
  //         }
  //   } else {
  //     localStorage.removeItem("Users");
  //   }
  // }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
