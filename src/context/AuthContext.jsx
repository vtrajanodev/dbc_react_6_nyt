import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState()
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user

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

  const signOutFromSession = async () => {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, auth, signOutFromSession }}>
      {children}
    </AuthContext.Provider>
  );
}