import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import styles from './Login.module.css'

export const Login = () => {

    const signInWithGoogle = async () => {

        const auth = getAuth()
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider)

        console.log(result.user)
    }


    return (
        <>
            <h3>Faça login com sua conta do google</h3>
            <button onClick={signInWithGoogle}>Clicando aqui</button>
        </>
    );
}