import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "@firebase/auth";
import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState()
    const auth = getAuth()

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { displayName, photoURL, uid } = user
    
            if (!displayName || !photoURL) {
              throw new Error('Missing information from Google Account.')
            }
    
            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL
            })
          }
        })
    
        return () => {
          unsubscribe()
        }
      }, [])

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