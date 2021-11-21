import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState()
    const auth = getAuth()

    const signInWithGoogle = async () => {

        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
    
        if (result.user) {
          const { displayName, photoURL, uid } = result.user
    
          if (!displayName || !photoURL) {
            throw new Error('Missing information from Google Account.')
          }
    
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }

    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
}